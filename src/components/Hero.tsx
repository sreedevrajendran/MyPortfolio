"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { Outfit } from "next/font/google"; // Add this import

const outfit = Outfit({ subsets: ["latin"] }); // Initialize the font

export default function Hero() {
    return (
        <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-10 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container px-6 relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 mb-8 px-5 py-2 bg-[#1c1c1f] border border-white/10 rounded-full text-sm font-medium backdrop-blur-md shadow-lg"
                >
                    <span className="w-2 h-2 rounded-full bg-[#8ab4f8] animate-pulse" />
                    <span className="text-[#8ab4f8]">Code.</span>
                    <span className="text-[#f28b82]">Create.</span>
                    <span className="text-[#fdd663]">Capture.</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`${outfit.className} text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-tight`}
                >
                    Sreedev Rajendran
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-medium"
                >
                    Computer Science & AI Engineer | Developer | Visual Creator
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto"
                >
                    <Link
                        href="#projects"
                        className="group flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-black text-white w-full md:w-auto px-8 py-4 rounded-full font-bold hover:from-violet-500 hover:to-zinc-900 transition-all hover:scale-105"
                    >
                        <span>View My Work</span>
                        <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </Link>

                    <Link
                        href="#contact"
                        className="group flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 rounded-full font-semibold border border-white/20 bg-white/5 hover:bg-white/10 transition-all hover:scale-105 text-white"
                    >
                        Let&apos;s Connect
                    </Link>
                </motion.div>
            </div>

            {/* Subtle Glows */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#8ab4f8]/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#f28b82]/10 rounded-full blur-[120px] -z-10" />
        </section>
    );
}
