"use client";

const blogs = [
  {
    title: "💸 Building Floww: The AI-Native Financial Engine",
    slug: "building-floww-ai-native-financial-engine",
    date: "May 6, 2026",
    readTime: "5 min read",
    excerpt: "How I built a financial engine that turns crumpled receipts and bank statements into structured intelligence — using Gemini 2.5, Next.js, and a vibe-coding approach.",
    tags: ["AI", "Gemini", "Finance", "Vibe Coding"],
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="py-12 flex flex-col font-mono">
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

      <div className="flex flex-col gap-6">
        {blogs.map((b, i) => (
          <a key={i} href={`/blog/${b.slug}`} className="group block">
            <article className="bg-[#0a0a0a] border border-[#222] rounded-xl p-6 md:p-8 hover:border-[#4af626]/40 hover:shadow-[0_0_30px_rgba(74,246,38,0.05)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4af626]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex flex-wrap items-center gap-3 mb-4 relative z-10">
                <span className="text-xs text-[#444]">{b.date}</span>
                <span className="text-[#333]">·</span>
                <span className="text-xs text-[#444]">{b.readTime}</span>
                <span className="text-[#333]">·</span>
                <div className="flex gap-2">
                  {b.tags.map(t => (
                    <span key={t} className="text-[10px] bg-[#1a1a1a] text-[#8ab4f8] px-2 py-0.5 rounded border border-[#333]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#4af626] transition-colors relative z-10">
                {b.title}
              </h3>
              <p className="text-[#666] text-sm leading-relaxed mb-5 relative z-10">{b.excerpt}</p>

              <div className="flex items-center gap-2 text-[#4af626] text-sm font-bold relative z-10">
                <span>Read Article</span>
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}
