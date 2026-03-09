"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Rocket, Cpu } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center gap-16 md:gap-24 bg-[#1c1c1f] p-8 md:p-16 rounded-[40px] border border-white/10 shadow-lg"
                >
                    {/* Left Column: Clean Profile Image */}
                    <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-[#8ab4f8]/20 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition duration-500" />
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#1c1c1f] shadow-2xl transition-transform duration-500 group-hover:scale-105 bg-[#28292d]">
                                <img
                                    src="/profile.png"
                                    alt="Sreedev Rajendran"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Professional Content */}
                    <div className="w-full md:w-7/12 space-y-8 text-left">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-2">
                            About Me
                        </h2>

                        <div className="space-y-6 text-gray-400 font-medium leading-relaxed text-lg">
                            <p>
                                I am a second-year <span className="text-white">B.Tech Computer Science and AI student</span> at <span className="text-white">Providence College of Engineering</span> with a passion for building functional, intelligent, and aesthetically pleasing digital solutions. My expertise spans across Python, Web Development, and Mobile App Development, where I focus on creating seamless user experiences—from weather forecast platforms to mobile applications.
                            </p>
                            <p>
                                Beyond the code, I am the Founder of <span className="text-white">topviewframes</span>, a venture where I merge my technical background with my eye for <span className="text-white">visual storytelling</span>. I’m constantly looking for ways to integrate AI-driven concepts into real-world applications and thrive at the intersection of logic and creativity.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
