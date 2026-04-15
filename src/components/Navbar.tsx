"use client";

import { useState, useEffect } from "react";
import { Home, User, Cpu, FolderOpen, Mail, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home",     href: "#home",     icon: Home },
  { name: "About",    href: "#about",    icon: User },
  { name: "Skills",   href: "#skills",   icon: Cpu },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Contact",  href: "#contact",  icon: Mail },
];

export default function Navbar() {
  const [mounted, setMounted]     = useState(false);
  const [active, setActive]       = useState("home");
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Track scroll position for active section + shadow
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const offsets = navLinks.map(({ href }) => {
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        return { id, top: el ? el.getBoundingClientRect().top : Infinity };
      });

      const current = offsets
        .filter((o) => o.top <= 120)
        .sort((a, b) => b.top - a.top)[0];

      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    <nav className={`sticky top-0 z-50 w-full font-mono transition-all duration-300 ${scrolled ? "bg-[#050505]/95 backdrop-blur-md shadow-[0_4px_40px_rgba(0,0,0,0.6)]" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 border-b border-[#1a1a1a]">

        {/* Brand / Prompt */}
        <div className="flex items-center gap-1 text-sm md:text-base shrink-0">
          <span className="text-[#27c93f] font-bold">sreedev</span>
          <span className="text-[#555]">@</span>
          <span className="text-white font-bold">portfolio</span>
          <span className="text-[#555]">:</span>
          <span className="text-[#8ab4f8]">~</span>
          <span className="text-[#555]">$</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ name, href, icon: Icon }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={name}
                href={href}
                onClick={(e) => handleScroll(e, href)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group
                  ${isActive
                    ? "text-[#4af626] bg-[#4af626]/10"
                    : "text-[#666] hover:text-white hover:bg-white/5"
                  }`}
              >
                <Icon size={14} className={`transition-colors ${isActive ? "text-[#4af626]" : "text-[#555] group-hover:text-white"}`} />
                {name}
                {/* Active underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#4af626] rounded-full shadow-[0_0_6px_#4af626]" />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#666] hover:text-white transition-colors"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#222] px-4 pb-4 flex flex-col gap-1">
          {navLinks.map(({ name, href, icon: Icon }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={name}
                href={href}
                onClick={(e) => handleScroll(e, href)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                  ${isActive ? "text-[#4af626] bg-[#4af626]/10" : "text-[#666] hover:text-white hover:bg-white/5"}`}
              >
                <Icon size={16} />
                {name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
