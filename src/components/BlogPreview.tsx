"use client";

const blogs = [
  {
    title: "💸 Building Floww: The AI-Native Financial Engine",
    slug: "building-floww-ai-native-financial-engine",
    date: "May 6, 2026",
    readTime: "5 min read",
    excerpt: "How I built a financial engine that turns crumpled receipts and bank statements into structured intelligence — using Gemini 2.5, Next.js, and a vibe-coding approach.",
    tags: ["AI", "Gemini", "Finance", "Vibe Coding"],
    cmd: "cat building_floww.md",
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-12 flex flex-col font-mono">
      {/* Section header */}
      <div className="flex items-center justify-between mb-10 px-2">
        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-4">
          <span className="text-[#8ab4f8]">~/</span>Blog
          <div className="flex-1 h-px bg-gradient-to-r from-[#333] to-transparent ml-4 hidden md:block" />
        </h2>
        <a
          href="/blog"
          className="text-sm text-[#4af626] border border-[#4af626]/30 px-4 py-2 rounded-lg hover:bg-[#4af626]/10 transition-all duration-200 font-bold shrink-0"
        >
          All Posts →
        </a>
      </div>

      {/* 1-by-1 terminal window cards */}
      <div className="flex flex-col gap-6">
        {blogs.map((b, i) => (
          <a key={i} href={`/blog/${b.slug}`} className="group block">
            <div className="flex flex-col bg-[#0a0a0a] rounded-xl border border-[#333] shadow-lg overflow-hidden hover:border-[#4af626]/60 hover:shadow-[0_0_30px_rgba(74,246,38,0.07)] transition-all duration-300">

              {/* Mac title bar */}
              <div className="flex items-center bg-[#1a1a1a] border-b border-[#333] px-4 py-3 shrink-0">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 text-center text-[#666] text-[10px] font-sans tracking-widest">
                  bash: {b.cmd}
                </div>
                <span className="text-[10px] text-[#555] font-sans shrink-0">{b.readTime}</span>
              </div>

              {/* Card body */}
              <div className="p-6 md:p-8 flex flex-col gap-4">
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[#555] text-xs">{b.date}</span>
                  <span className="text-[#333]">·</span>
                  <div className="flex gap-1.5 flex-wrap">
                    {b.tags.map(t => (
                      <span key={t} className="text-[10px] bg-[#1a1a1a] text-[#8ab4f8] px-2 py-0.5 rounded border border-[#333] font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Prompt + title */}
                <div>
                  <div className="text-[#4af626] font-bold text-sm mb-1">&gt; _</div>
                  <h3 className="text-white font-bold text-xl md:text-2xl group-hover:text-[#4af626] transition-colors leading-snug">
                    {b.title}
                  </h3>
                </div>

                {/* Excerpt */}
                <p className="text-[#666] text-sm leading-relaxed">{b.excerpt}</p>

                {/* Read more */}
                <div className="flex items-center gap-2 text-[#4af626] text-sm font-bold pt-2 border-t border-[#1a1a1a]">
                  <span>Read Article</span>
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
