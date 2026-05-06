"use client";

const featuredProjects = [
  {
    title: "Kerala Emergency Response App",
    emoji: "🚨",
    status: "Live",
    description: "Offline-first emergency response app for Kerala. 138+ geo-seeded stations, real-time disaster alerts, and local SQLite sync.",
    tags: ["React Native", "Expo", "Supabase", "SQLite"],
    repo: "https://github.com/sreedevrajendran",
  },
  {
    title: "TopViewFrames",
    emoji: "🎥",
    status: "Live",
    description: "Visual storytelling platform merging aerial videography with modern web tech. Founded and built solo end-to-end.",
    tags: ["React", "Netlify", "Visual Design"],
    demo: "https://topviewframes.netlify.app",
  },
  {
    title: "Floww — AI Expense Tracker",
    emoji: "💸",
    status: "Live",
    description: "AI-powered finance engine. Snap receipts, sync Gmail, chat with your money. Built with Gemini 2.5.",
    tags: ["AI", "React", "Firebase", "Gemini"],
    demo: "https://flowwexpensetracker.netlify.app/login?callbackUrl=%2F",
  },
  {
    title: "WeatherNative",
    emoji: "🌤️",
    status: "Released",
    description: "Real-time native Android weather app built with React Native. Location-aware with dynamic UI.",
    tags: ["React Native", "Android", "APK"],
    demo: "/AquWeather.apk",
  },
  {
    title: "Bunk Calculator",
    emoji: "📅",
    status: "Live",
    description: "Calculate exactly how many classes you can skip while staying above the attendance threshold.",
    tags: ["Python", "Streamlit"],
    demo: "https://bunk-calculator-6d6pcmtagyrlqt2ygeehsl.streamlit.app/",
  },
];

const statusStyle: Record<string, string> = {
  Live:     "text-[#4af626] bg-[#4af626]/10 border-[#4af626]/30",
  Released: "text-[#8ab4f8] bg-[#8ab4f8]/10 border-[#8ab4f8]/30",
};

export default function ProjectsPreview() {
  return (
    <section id="projects" className="py-12 flex flex-col font-mono">
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

      {/* 5 cards: 3 on first row, 2 on second — each is its own card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((p, i) => (
          <div
            key={i}
            className="group flex flex-col bg-[#0a0a0a] border border-[#222] rounded-xl hover:border-[#4af626]/40 hover:shadow-[0_0_30px_rgba(74,246,38,0.06)] transition-all duration-300 overflow-hidden hover:-translate-y-1"
          >
            {/* Green top accent on hover */}
            <div className="h-[2px] w-full bg-gradient-to-r from-[#4af626]/0 via-[#4af626]/50 to-[#4af626]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="p-6 flex flex-col flex-1">
              {/* Emoji + Status */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl leading-none">{p.emoji}</span>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${statusStyle[p.status] ?? "text-[#555] bg-[#1a1a1a] border-[#333]"}`}>
                  {p.status === "Live" ? "● " : ""}{p.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-base md:text-lg mb-2 group-hover:text-[#4af626] transition-colors leading-tight">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-[#666] text-sm leading-relaxed mb-4 flex-1">{p.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map(t => (
                  <span key={t} className="text-[#ffbd2e] text-[10px] bg-[#ffbd2e]/10 border border-[#ffbd2e]/20 px-2 py-0.5 rounded font-mono">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action links */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#1a1a1a] mt-auto">
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
                  className="text-xs text-[#555] hover:text-[#888] font-bold ml-auto hover:underline"
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
