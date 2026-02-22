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
            <div className="absolute inset-0 w-full h-full bg-[url('/grid.svg')] bg-center opacity-30 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-6 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm font-medium backdrop-blur-sm"
                >
                    Code. Create. Capture.
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`${outfit.className} text-4xl md:text-7xl font-bold tracking-tighter mb-6 text-white`}
                >
                    Sreedev Rajendran
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium"
                >
                    Computer Science & AI Engineer | Developer | Visual Creator
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#projects"
                        className="group inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all hover:scale-105"
                    >
                        <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all">View My Work</span>
                        <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </Link>

                    <Link
                        href="#contact"
                        className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border border-white/20 hover:bg-white/10 transition-all hover:scale-105 text-white hover-gradient-text"
                    >
                        Let&apos;s Connect
                    </Link>
                </motion.div>
            </div>

            {/* Subtle Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[120px] -z-10" />
        </section>
    );
}
