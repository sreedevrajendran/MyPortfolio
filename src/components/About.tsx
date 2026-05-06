
export default function About() {
  return (
    <section id="about" className="py-8 flex flex-col font-mono text-sm md:text-base">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-4">
          <span className="text-[#8ab4f8]">~/</span>About
          <div className="flex-1 h-px bg-gradient-to-r from-[#333] to-transparent ml-4"></div>
      </h2>

      <div className="flex flex-col bg-[#0a0a0a] rounded-xl border border-[#333] shadow-lg overflow-hidden max-w-5xl mx-auto w-full group">
        {/* Mac Title Bar */}
        <div className="flex items-center bg-[#1a1a1a] border-b border-[#333] px-4 py-3 shrink-0">
            <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="w-full text-center text-[#777] text-[10px] font-sans tracking-widest pl-[-40px]">
                bash: whoami
            </div>
        </div>

        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center md:items-start tracking-wide">
          {/* Profile Image */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl border border-[#333] p-1.5 bg-[#111] overflow-hidden shadow-2xl relative group-hover:border-[#4af626] transition-colors duration-500">
              <img
                src="/sreedev.jpg"
                alt="Sreedev Rajendran"
                className="w-full h-full object-cover rounded-lg filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>

          <div className="flex-1 space-y-4 text-[#bfbfbf] leading-relaxed">
            <div className="text-[#4af626] font-bold text-lg md:text-xl tracking-tight">&gt; _{"{ WHOAMI }"}</div>

            {/* Key info list */}
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-[#4af626] shrink-0 mt-0.5">▸</span>
                <span><span className="text-white font-semibold">B.Tech CS & AI student</span> at Providence College of Engineering</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4af626] shrink-0 mt-0.5">▸</span>
                <span>Founder at{" "}
                  <a
                    href="https://topviewframes.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8ab4f8] font-bold hover:text-[#4af626] hover:underline transition-colors"
                  >
                    @topviewframes
                  </a>
                  {" "}— visual storytelling meets tech
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4af626] shrink-0 mt-0.5">▸</span>
                <span>AI Trainee Engineer · building AI-native apps with <span className="text-white">React, Next.js, Python & Gemini</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4af626] shrink-0 mt-0.5">▸</span>
                <span>Passionate about the intersection of <span className="text-white">logic and creativity</span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
