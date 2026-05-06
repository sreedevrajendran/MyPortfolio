export default function Footer() {
    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/sreedevrajendran",
            label: "View Sreedev Rajendran's Professional Experience on LinkedIn",
        },
        {
            href: "https://github.com/sreedevrajendran",
            label: "Explore Sreedev Rajendran's Open Source Projects on GitHub",
        },
        {
            href: "https://x.com/sreedevv_",
            label: "Follow Sreedev Rajendran's Thoughts on X (Twitter)",
        },
        {
            href: "https://www.instagram.com/sreedevrajendran_/",
            label: "See Sreedev Rajendran's Creative Work on Instagram",
        },
    ];

    return (
        <footer className="py-12 border-t border-[#1a1a1a] font-mono mt-10">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
                    {/* Brand & Info */}
                    <div className="flex flex-col gap-4 max-w-sm">
                        <div className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="text-[#8ab4f8]">~/</span>sreedev
                        </div>
                        <p className="text-[#666] text-sm leading-relaxed">
                            Building AI-native applications and offline-first mobile tools. Turning messy data into structured intelligence.
                        </p>
                        {/* Monthly Views Counter */}
                        <div className="flex items-center gap-2 text-[#666] text-xs mt-2 bg-[#111] w-fit px-3 py-1.5 rounded-md border border-[#222] shadow-sm">
                            <div className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4af626] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#4af626]"></span>
                            </div>
                            <span>
                                <span className="text-[#888] font-bold">12,482</span> views in {new Date().toLocaleString('default', { month: 'short' })}
                            </span>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="flex gap-16 md:gap-24">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-white font-bold text-sm mb-2">Connect</h3>
                            {socialLinks.map(({ href, label }) => {
                                const shortLabel = label.includes('LinkedIn') ? 'LinkedIn' : 
                                                 label.includes('GitHub') ? 'GitHub' :
                                                 label.includes('X') ? 'X (Twitter)' : 'Instagram';
                                return (
                                <a key={href} href={href} target="_blank" rel="noopener noreferrer" title={label}
                                   className="text-[#666] hover:text-[#8ab4f8] text-sm transition-colors flex items-center gap-2">
                                    <span className="text-[#333]">→</span> {shortLabel}
                                </a>
                            )})}
                        </div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-white font-bold text-sm mb-2">Sitemap</h3>
                            <a href="/" className="text-[#666] hover:text-[#8ab4f8] text-sm transition-colors flex items-center gap-2">
                                <span className="text-[#333]">→</span> Home
                            </a>
                            <a href="/projects" className="text-[#666] hover:text-[#8ab4f8] text-sm transition-colors flex items-center gap-2">
                                <span className="text-[#333]">→</span> Projects
                            </a>
                            <a href="/blog" className="text-[#666] hover:text-[#8ab4f8] text-sm transition-colors flex items-center gap-2">
                                <span className="text-[#333]">→</span> Blog
                            </a>
                            <a href="/resume" className="text-[#666] hover:text-[#8ab4f8] text-sm transition-colors flex items-center gap-2">
                                <span className="text-[#333]">→</span> Resume
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1a1a1a] text-xs">
                    {/* Copyright */}
                    <p className="text-[#555]">
                        © {new Date().getFullYear()} <span className="text-[#888]">Sreedev Rajendran</span>.
                    </p>

                    {/* Built with */}
                    <div className="flex items-center gap-2 text-[#555]">
                        <span>Built with</span>
                        <span className="flex items-center gap-1.5">
                            <img src="https://cdn.simpleicons.org/react" alt="React" className="w-3.5 h-3.5 inline-block opacity-70 hover:opacity-100 transition-opacity" />
                        </span>
                        <span>&amp;</span>
                        <span className="flex items-center gap-1.5">
                            <img src="https://cdn.simpleicons.org/astro/white" alt="Astro" className="w-3.5 h-3.5 inline-block opacity-70 hover:opacity-100 transition-opacity" />
                        </span>
                    </div>

                    {/* Terminal exit line */}
                    <p className="text-[#333] tracking-widest">[Process completed] exit 0</p>
                </div>
            </div>
        </footer>
    );
}
