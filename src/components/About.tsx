import ScrollReveal from "./ScrollReveal";

export default function About() {
  const socials = [
    { label: "GitHub",    href: "https://github.com/sreedevrajendran",         icon: "https://cdn.simpleicons.org/github/white" },
    { label: "LinkedIn",  href: "https://www.linkedin.com/in/sreedevrajendran", icon: "https://cdn.simpleicons.org/linkedin/0A66C2" },
    { label: "Instagram", href: "https://www.instagram.com/sreedevrajendran_/", icon: "https://cdn.simpleicons.org/instagram" },
    { label: "X",         href: "https://x.com/sreedevv_",                      icon: "https://cdn.simpleicons.org/x/white" },
    { label: "YouTube",   href: "https://www.youtube.com/@sreedevrajendran-n50",icon: "https://cdn.simpleicons.org/youtube/red" },
  ];

  return (
    <section id="about" className="py-8 flex flex-col font-mono text-sm md:text-base">
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-4">
            <span className="text-[#8ab4f8]">~/</span>About
            <div className="flex-1 h-px bg-gradient-to-r from-[#333] to-transparent ml-4"></div>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
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
                <span><span className="text-white font-semibold">B.Tech CS &amp; AI student</span> at Providence College of Engineering</span>
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
                <span>AI Trainee Engineer · building AI-native apps with <span className="text-white">React, Next.js, Python &amp; Gemini</span></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4af626] shrink-0 mt-0.5">▸</span>
                <span>Passionate about the intersection of <span className="text-white">logic and creativity</span></span>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex flex-wrap gap-2 pt-1">
              {([
                { label: "GitHub",    href: "https://github.com/sreedevrajendran",         icon: "https://cdn.simpleicons.org/github/white" },
                { label: "Instagram", href: "https://www.instagram.com/sreedevrajendran_/", icon: "https://cdn.simpleicons.org/instagram" },
                { label: "X",         href: "https://x.com/sreedevv_",                      icon: "https://cdn.simpleicons.org/x/white" },
                { label: "YouTube",   href: "https://www.youtube.com/@sreedevrajendran-n50",icon: "https://cdn.simpleicons.org/youtube/red" },
              ] as { label: string; href: string; icon: string }[]).map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111] border border-[#222] text-xs text-[#888] hover:border-[#4af626] hover:text-[#4af626] transition-all duration-200"
                >
                  <img src={icon} alt={label} className="w-3.5 h-3.5 object-contain" />
                  {label}
                </a>
              ))}
              {/* LinkedIn — inline SVG to avoid CDN issues */}
              <a
                href="https://www.linkedin.com/in/sreedevrajendran"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111] border border-[#222] text-xs text-[#888] hover:border-[#4af626] hover:text-[#4af626] transition-all duration-200"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
