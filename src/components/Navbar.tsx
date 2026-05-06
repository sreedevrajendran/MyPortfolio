"use client";

import { useState, useEffect } from "react";
import { Home, User, Cpu, FolderOpen, Mail, Menu, X, FileText } from "lucide-react";

const navLinks = [
  { name: "Home",     href: "/#home",     id: "home",       icon: Home },
  { name: "About",    href: "/#about",    id: "about",      icon: User },
  { name: "Skills",   href: "/#skills",   id: "skills",     icon: Cpu },
  { name: "Projects", href: "/projects",  id: "projects",   icon: FolderOpen },
  { name: "Blog",     href: "/blog",      id: "blog",       icon: FileText },
  { name: "Contact",  href: "/#contact",  id: "contact",    icon: Mail },
];

export default function Navbar() {
  const [mounted, setMounted]     = useState(false);
  const [active, setActive]       = useState("home");
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    setMounted(true);
    if (window.location.pathname.startsWith("/blog")) {
      setActive("blog");
    } else if (window.location.pathname.startsWith("/projects")) {
      setActive("projects");
    } else {
      const hash = window.location.hash.replace("#", "");
      if (hash) setActive(hash);
    }
  }, []);

  // Track scroll position for active section + shadow
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const offsets = navLinks.map(({ id }) => {
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
    if (href.startsWith("/#") || href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("/#", "").replace("#", "");
      
      // If we are on the homepage, scroll smoothly
      if (window.location.pathname === "/") {
        const el = document.getElementById(id);
        if (el) {
          window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
        }
      } else {
        // If we are on another page (like blog), navigate to homepage with hash
        window.location.href = `/${href.replace("/", "")}`;
      }
      setMenuOpen(false);
    }
    // If it's a normal link like /blog, let default navigation happen
  };

  if (!mounted) return null;

  return (
    <nav className={`fixed top-0 z-50 w-full font-mono transition-all duration-300 ${scrolled ? "bg-[#050505]/95 backdrop-blur-md shadow-[0_4px_40px_rgba(0,0,0,0.6)]" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 border-b border-[#1a1a1a]">

        {/* Brand / Prompt */}
        <a href="/" className="flex items-center gap-1 text-sm md:text-base shrink-0 hover:opacity-80 transition-opacity">
          <span className="text-[#27c93f] font-bold">sreedev</span>
          <span className="text-[#555]">@</span>
          <span className="text-white font-bold">portfolio</span>
          <span className="text-[#555]">:</span>
          <span className="text-[#8ab4f8]">~</span>
          <span className="text-[#555]">$</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ name, href, id, icon: Icon }) => {
            const isActive = active === id;
            return (
              <a
                key={name}
                href={href}
                onClick={(e) => handleScroll(e, href)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group
                  ${isActive
                    ? "text-[#4af626] bg-[#4af626]/10"
                    : "text-[#666] hover:text-[#4af626] hover:bg-[#4af626]/10 hover:drop-shadow-[0_0_8px_rgba(74,246,38,0.5)]"
                  }`}
              >
                <Icon size={14} className={`transition-colors ${isActive ? "text-[#4af626]" : "text-[#555] group-hover:text-[#4af626]"}`} />
                {name}

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
          {navLinks.map(({ name, href, id, icon: Icon }) => {
            const isActive = active === id;
            return (
              <a
                key={name}
                href={href}
                onClick={(e) => handleScroll(e, href)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group
                  ${isActive ? "text-[#4af626] bg-[#4af626]/10" : "text-[#666] hover:text-[#4af626] hover:bg-[#4af626]/10 hover:drop-shadow-[0_0_8px_rgba(74,246,38,0.5)]"}`}
              >
                <Icon size={16} className={`transition-colors ${isActive ? "text-[#4af626]" : "text-[#555] group-hover:text-[#4af626]"}`} />
                {name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
