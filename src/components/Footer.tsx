export default function Footer() {
    return (
        <footer className="py-10 font-mono border-t border-[#1a1a1a]">
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
                        <img src="https://cdn.simpleicons.org/nextdotjs/white" alt="Next.js" className="w-4 h-4 inline-block" />
                        <span className="text-white">Next.js</span>
                    </span>
                </div>

                {/* Terminal exit line */}
                <p className="text-[#333] text-xs tracking-widest">[Process completed] exit 0</p>
            </div>
        </footer>
    );
}
