"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Connect", href: "#contact" },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Handle background opacity based on scroll position
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }

        // Handle visibility based on scroll direction
        if (latest > lastScrollY && latest > 150) {
            // Scrolling down and past the top section
            setIsVisible(false);
        } else {
            // Scrolling up or at the very top
            setIsVisible(true);
        }

        setLastScrollY(latest);
    });

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
            <motion.nav
                className={cn(
                    "w-full max-w-5xl rounded-full transition-all duration-300",
                    isScrolled
                        ? "bg-[#1c1c1f]/80 backdrop-blur-xl border border-white/10 py-3 px-6 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                        : "bg-transparent py-4 px-6 border border-transparent"
                )}
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : -150 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className="flex items-center justify-between w-full">
                    <Link href="#" className="flex items-center group">
                        <span className="text-base font-bold tracking-tight text-white transition-colors group-hover:text-gray-300">
                            Sreedev Rajendran
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors bg-white/5 border border-white/10"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 bg-[#1c1c1f] rounded-3xl border border-white/10 overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-5 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.nav>
        </div>
    );
}
