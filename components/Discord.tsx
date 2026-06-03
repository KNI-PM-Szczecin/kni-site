const DISCORD_GUILD_ID = "1357420845970100335";
const DISCORD_INVITE = "https://discord.gg/YwvmZadhMm";

export default function Discord() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: text */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              {/* Discord logo SVG */}
              <svg width="28" height="28" viewBox="0 0 127.14 96.36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                  fill="#5865F2"
                />
              </svg>
              <p className="text-sm font-semibold text-[#5865F2]">Discord</p>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5 leading-tight">
              Dołącz do naszej społeczności.
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
              Nasz serwer Discord to miejsce, gdzie omawiamy projekty, dzielimy się wiedzą i organizujemy spotkania. Wpadnij i porozmawiaj z członkami koła.
            </p>

            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#5865F2] text-white text-sm font-semibold hover:bg-[#4752c4] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 127.14 96.36" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
              </svg>
              Dołącz do serwera
            </a>
          </div>

          {/* Right: Discord widget */}
          <div className="flex justify-center lg:justify-end">
            <iframe
              src={`https://discord.com/widget?id=${DISCORD_GUILD_ID}&theme=dark`}
              width="350"
              height="500"
              title="Serwer Discord KNI"
              allowTransparency
              frameBorder={0}
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              className="rounded-2xl w-full max-w-[350px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
