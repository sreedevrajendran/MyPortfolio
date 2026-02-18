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
                    className="flex flex-col md:flex-row items-center gap-16 md:gap-24"
                >
                    {/* Left Column: Clean Profile Image */}
                    <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500">
                                <img
                                    src="/profile.png"
                                    alt="Sreedev Rajendran"
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Professional Content */}
                    <div className="w-full md:w-7/12 space-y-8 text-left">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                            About <span className="text-gray-500">Me</span>
                        </h2>

                        <div className="space-y-6 text-gray-300 font-medium leading-relaxed">
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
