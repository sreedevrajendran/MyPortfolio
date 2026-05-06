"use client";

const featuredProjects = [
  {
    title: "Kerala Emergency Response App",
    cmd: "run kerala_emergency",
    emoji: "🚨",
    status: "Live",
    description: "Offline-first emergency response app for Kerala. 138+ geo-seeded stations, real-time disaster alerts, and seamless local SQLite sync.",
    tags: ["React Native", "Expo", "Supabase", "SQLite"],
    repo: "https://github.com/sreedevrajendran",
  },
  {
    title: "Floww — AI Expense Tracker",
    cmd: "run floww",
    emoji: "💸",
    status: "Live",
    description: "AI-powered finance engine. Snap receipts, sync Gmail, chat with your money. Built with Gemini 2.5.",
    tags: ["AI", "React", "Firebase", "Gemini"],
    demo: "https://flowwexpensetracker.netlify.app/login?callbackUrl=%2F",
  },
  {
    title: "WeatherNative",
    cmd: "run weather_native",
    emoji: "🌤️",
    status: "Released",
    description: "Real-time native Android weather app built with React Native. Location-aware with dynamic UI.",
    tags: ["React Native", "Android", "APK"],
    demo: "/AquWeather.apk",
    repo: "https://github.com/sreedevrajendran/WeatherNativeProject",
  },
  {
    title: "Bunk Calculator",
    cmd: "run bunk_calc",
    emoji: "📅",
    status: "Live",
    description: "Calculate exactly how many classes you can skip while staying above the attendance threshold.",
    tags: ["Python", "Streamlit"],
    demo: "https://bunk-calculator-6d6pcmtagyrlqt2ygeehsl.streamlit.app/",
    repo: "https://github.com/sreedevrajendran/bunk-calculator",
  },
];

const statusStyle: Record<string, string> = {
  Live:     "text-[#4af626] bg-[#4af626]/10 border-[#4af626]/30",
  Released: "text-[#8ab4f8] bg-[#8ab4f8]/10 border-[#8ab4f8]/30",
};

export default function ProjectsPreview() {
  return (
    <section id="projects" className="py-12 flex flex-col font-mono">
      {/* Section header */}
      <div className="flex items-center justify-between mb-10 px-2">
        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-4">
          <span className="text-[#8ab4f8]">~/</span>Projects
          <div className="flex-1 h-px bg-gradient-to-r from-[#333] to-transparent ml-4 hidden md:block" />
        </h2>
        <a
          href="/projects"
          className="text-sm text-[#4af626] border border-[#4af626]/30 px-4 py-2 rounded-lg hover:bg-[#4af626]/10 transition-all duration-200 font-bold shrink-0"
        >
          View All →
        </a>
      </div>

      {/* Project cards — terminal window style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {featuredProjects.map((p, i) => (
          <div
            key={i}
            className="group flex flex-col bg-[#0a0a0a] rounded-xl border border-[#333] shadow-lg overflow-hidden hover:border-[#4af626]/60 hover:shadow-[0_0_30px_rgba(74,246,38,0.07)] transition-all duration-300 hover:-translate-y-1"
          >
            {/* Mac title bar */}
            <div className="flex items-center bg-[#1a1a1a] border-b border-[#333] px-4 py-3 shrink-0">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex-1 text-center text-[#666] text-[10px] font-sans tracking-widest">
                bash: {p.cmd}
              </div>
            </div>

            {/* Card body */}
            <div className="p-6 flex flex-col flex-1">
              {/* Emoji + status */}
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl leading-none">{p.emoji}</span>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${statusStyle[p.status] ?? "text-[#555] bg-[#1a1a1a] border-[#333]"}`}>
                  {p.status === "Live" ? "● " : ""}{p.status}
                </span>
              </div>

              {/* Prompt + title */}
              <div className="text-[#4af626] font-bold text-sm mb-1">&gt; _</div>
              <h3 className="text-white font-bold text-base md:text-lg mb-3 group-hover:text-[#4af626] transition-colors leading-snug">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-[#888] text-sm leading-relaxed flex-1 mb-4">{p.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map(t => (
                  <span key={t} className="text-[#ffbd2e] text-[10px] bg-[#ffbd2e]/10 border border-[#ffbd2e]/20 px-2 py-0.5 rounded font-mono">
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer links */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#1a1a1a] mt-auto">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#4af626] font-bold hover:underline"
                  >
                    → Live Demo
                  </a>
                )}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#8ab4f8] font-bold hover:underline"
                  >
                    ↗ Source
                  </a>
                )}
                <a
                  href="/projects"
                  className="text-xs text-[#555] hover:text-[#888] font-bold ml-auto"
                >
                  Details →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
