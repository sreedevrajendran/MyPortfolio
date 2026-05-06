"use client";

const featuredProjects = [
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
  Live: "text-[#4af626] bg-[#4af626]/10 border-[#4af626]/30",
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProjects.map((p, i) => (
          <div
            key={i}
            className="group flex flex-col bg-[#0a0a0a] border border-[#222] rounded-xl hover:border-[#4af626]/40 hover:shadow-[0_0_30px_rgba(74,246,38,0.05)] transition-all duration-300 overflow-hidden"
          >
            {/* Top strip */}
            <div className="h-[2px] w-full bg-gradient-to-r from-[#4af626]/0 via-[#4af626]/40 to-[#4af626]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{p.emoji}</span>
                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${statusStyle[p.status] ?? "text-[#555] bg-[#1a1a1a] border-[#333]"}`}>
                  {p.status === "Live" ? "● " : ""}{p.status}
                </span>
              </div>

              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#4af626] transition-colors">
                {p.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed mb-4 flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map(t => (
                  <span key={t} className="text-[#ffbd2e] text-[10px] bg-[#ffbd2e]/10 border border-[#ffbd2e]/20 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="/projects"
                className="text-xs text-[#4af626] font-bold hover:underline"
              >
                View details →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
