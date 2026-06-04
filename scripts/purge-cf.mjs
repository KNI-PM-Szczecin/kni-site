const ZONE_ID = process.env.CLOUDFLARE_ZONE_ID;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
async function purgeCache() {
  if (!ZONE_ID || !API_TOKEN) {
    console.error("Missing CLOUDFLARE Token");
    process.exit(1);
  }
  console.log("Purging Cloudflare cache...");
  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/zones/${ZONE_ID}/purge_cache`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ purge_everything: true }),
      }
    );
    const data = await response.json();
    if (data.success) {
      console.log("Cache purged successfully!");
    } else {
      console.error("Failed to purge cache:", JSON.stringify(data.errors, null, 2));
      process.exit(1);
    }
  } catch (error) {
    console.error("Network error while purging cache:", error);
    process.exit(1);
  }
}
purgeCache();
