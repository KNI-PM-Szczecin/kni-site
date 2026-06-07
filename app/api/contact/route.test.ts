import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

vi.mock("nodemailer", () => ({
  default: {
    createTransport: vi.fn(() => ({ sendMail: vi.fn().mockResolvedValue({}) })),
  },
}));

import { POST } from "./route";

const VALID_BODY = {
  firstName: "Jan",
  lastName: "Kowalski",
  yearOfStudy: "2",
  major: "Informatyka",
  email: "jan.kowalski@example.com",
  albumNumber: "12345",
  recaptchaToken: "valid-token",
};

function makeRequest(body: Record<string, unknown>) {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

function mockFetch(recaptchaSuccess: boolean) {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockImplementation((url: string) => {
      if (String(url).includes("recaptcha")) {
        return Promise.resolve({
          json: () => Promise.resolve({ success: recaptchaSuccess }),
        });
      }
      return Promise.resolve({ ok: true });
    })
  );
}

describe("POST /api/contact – field validation (rejects before reCAPTCHA)", () => {
  beforeEach(() => {
    process.env.RECAPTCHA_SECRET_KEY = "test-secret";
    mockFetch(true);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  describe("firstName", () => {
    it("rejects empty firstName", async () => {
      const res = await POST(makeRequest({ ...VALID_BODY, firstName: "" }));
      expect(res.status).toBe(400);
      expect((await res.json()).error).toContain("imię");
    });

    it("rejects firstName with digits", async () => {
      const res = await POST(makeRequest({ ...VALID_BODY, firstName: "Jan1" }));
      expect(res.status).toBe(400);
      expect((await res.json()).error).toContain("imię");
    });

    it("rejects firstName over 35 characters", async () => {
      const res = await POST(
        makeRequest({ ...VALID_BODY, firstName: "A".repeat(36) })
      );
      expect(res.status).toBe(400);
    });

    it("accepts firstName with letters and hyphens", async () => {
      const res = await POST(
        makeRequest({ ...VALID_BODY, firstName: "Anna-Maria" })
      );
      expect(res.status).toBe(200);
    });
  });

  describe("lastName", () => {
    it("rejects empty lastName", async () => {
      const res = await POST(makeRequest({ ...VALID_BODY, lastName: "" }));
      expect(res.status).toBe(400);
      expect((await res.json()).error).toContain("nazwisko");
    });

    it("rejects lastName with digits", async () => {
      const res = await POST(
        makeRequest({ ...VALID_BODY, lastName: "Kowalski2" })
      );
      expect(res.status).toBe(400);
      expect((await res.json()).error).toContain("nazwisko");
    });
  });

  describe("email", () => {
    it("rejects missing @", async () => {
      const res = await POST(
        makeRequest({ ...VALID_BODY, email: "jankowalski.com" })
      );
      expect(res.status).toBe(400);
      expect((await res.json()).error).toContain("e-mail");
    });

    it("rejects missing domain", async () => {
      const res = await POST(
        makeRequest({ ...VALID_BODY, email: "jan@" })
      );
      expect(res.status).toBe(400);
    });

    it("rejects email with spaces", async () => {
      const res = await POST(
        makeRequest({ ...VALID_BODY, email: "jan kowalski@example.com" })
      );
      expect(res.status).toBe(400);
    });

    it("rejects the invalid email from the attack log", async () => {
      const res = await POST(
        makeRequest({ ...VALID_BODY, email: "takisp@.tml.waw.pl" })
      );
      expect(res.status).toBe(400);
    });

    it("accepts valid university email", async () => {
      const res = await POST(
        makeRequest({ ...VALID_BODY, email: "s12345@student.am.szczecin.pl" })
      );
      expect(res.status).toBe(200);
    });
  });

  describe("yearOfStudy", () => {
    it.each(["1", "2", "3", "4", "5"])("accepts year %s", async (year) => {
      const res = await POST(
        makeRequest({ ...VALID_BODY, yearOfStudy: year })
      );
      expect(res.status).toBe(200);
    });

    it("rejects year 0", async () => {
      const res = await POST(
        makeRequest({ ...VALID_BODY, yearOfStudy: "0" })
      );
      expect(res.status).toBe(400);
      expect((await res.json()).error).toContain("rok");
    });

    it("rejects year 6", async () => {
      const res = await POST(
        makeRequest({ ...VALID_BODY, yearOfStudy: "6" })
      );
      expect(res.status).toBe(400);
    });

    it("rejects arbitrary string", async () => {
      const res = await POST(
        makeRequest({ ...VALID_BODY, yearOfStudy: "huh" })
      );
      expect(res.status).toBe(400);
    });

    it("rejects numeric injection attempt", async () => {
      const res = await POST(
        makeRequest({ ...VALID_BODY, yearOfStudy: "10" })
      );
      expect(res.status).toBe(400);
    });
  });

  describe("major", () => {
    it("accepts all valid majors", async () => {
      const validMajors = [
        "Automatyka i robotyka",
        "Informatyka",
        "Teleinformatyka",
        "Zarządzanie",
      ];
      for (const major of validMajors) {
        const res = await POST(makeRequest({ ...VALID_BODY, major }));
        expect(res.status).toBe(200);
      }
    });

    it("rejects arbitrary major not on the list", async () => {
      const res = await POST(
        makeRequest({ ...VALID_BODY, major: "bezrobotnyaleobrotny" })
      );
      expect(res.status).toBe(400);
      expect((await res.json()).error).toContain("kierunek");
    });

    it("rejects empty major", async () => {
      const res = await POST(makeRequest({ ...VALID_BODY, major: "" }));
      expect(res.status).toBe(400);
    });
  });

  describe("albumNumber", () => {
    it("rejects letters", async () => {
      const res = await POST(
        makeRequest({ ...VALID_BODY, albumNumber: "abcde" })
      );
      expect(res.status).toBe(400);
      expect((await res.json()).error).toContain("album");
    });

    it("rejects 6+ digits", async () => {
      const res = await POST(
        makeRequest({ ...VALID_BODY, albumNumber: "123456" })
      );
      expect(res.status).toBe(400);
    });

    it("rejects empty albumNumber", async () => {
      const res = await POST(
        makeRequest({ ...VALID_BODY, albumNumber: "" })
      );
      expect(res.status).toBe(400);
    });

    it.each(["1", "12", "123", "1234", "12345"])(
      "accepts %s digits",
      async (num) => {
        const res = await POST(
          makeRequest({ ...VALID_BODY, albumNumber: num })
        );
        expect(res.status).toBe(200);
      }
    );
  });
});

describe("POST /api/contact – reCAPTCHA verification", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns 500 when RECAPTCHA_SECRET_KEY is missing", async () => {
    delete process.env.RECAPTCHA_SECRET_KEY;
    mockFetch(true);
    const res = await POST(makeRequest(VALID_BODY));
    expect(res.status).toBe(500);
  });

  it("returns 400 when reCAPTCHA fails", async () => {
    process.env.RECAPTCHA_SECRET_KEY = "test-secret";
    mockFetch(false);
    const res = await POST(makeRequest(VALID_BODY));
    expect(res.status).toBe(400);
    expect((await res.json()).error).toContain("reCAPTCHA");
  });
});

describe("POST /api/contact – happy path", () => {
  beforeEach(() => {
    process.env.RECAPTCHA_SECRET_KEY = "test-secret";
    mockFetch(true);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns 200 for a fully valid submission", async () => {
    const res = await POST(makeRequest(VALID_BODY));
    expect(res.status).toBe(200);
    expect((await res.json()).success).toBe(true);
  });

  it("sanitizes formula-injection attempt in firstName", async () => {
    const res = await POST(
      makeRequest({ ...VALID_BODY, firstName: "=HYPERLINK('evil')" })
    );
    // firstName starts with = but nameRegex /^[^\d]{1,35}$/ still passes (no digits),
    // and sanitizeSpreadsheetInput prepends ' — so submission should succeed
    expect(res.status).toBe(200);
  });
});
