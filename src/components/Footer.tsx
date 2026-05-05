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
        <footer className="py-10 font-mono border-t border-[#1a1a1a]">
            {/* SEO Reciprocal Text Links */}
            <nav aria-label="Social profiles" className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-4 mb-8">
                {socialLinks.map(({ href, label }) => (
                    <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#555] hover:text-[#8ab4f8] transition-colors underline underline-offset-4 decoration-[#333] hover:decoration-[#8ab4f8]"
                    >
                        {label}
                    </a>
                ))}
            </nav>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm px-2">
                {/* Copyright */}
                <p className="text-[#555]">
                    © {new Date().getFullYear()} <span className="text-[#888]">Sreedev Rajendran</span>. All rights reserved.
                </p>

                {/* Built with */}
                <div className="flex items-center gap-2 text-[#555]">
                    <span>Built with</span>
                    <span className="flex items-center gap-1.5">
                        <img src="https://cdn.simpleicons.org/react" alt="React" className="w-4 h-4 inline-block" />
                        <span className="text-[#8ab4f8]">React</span>
                    </span>
                    <span>&amp;</span>
                    <span className="flex items-center gap-1.5">
                        <img src="https://cdn.simpleicons.org/astro/white" alt="Astro" className="w-4 h-4 inline-block" />
                        <span className="text-white">Astro</span>
                    </span>
                </div>

                {/* Terminal exit line */}
                <p className="text-[#333] text-xs tracking-widest">[Process completed] exit 0</p>
            </div>
        </footer>
    );
}
