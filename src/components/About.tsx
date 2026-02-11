"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    {/* Profile Image Styles */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <motion.div
                            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500/20 group shadow-2xl shadow-emerald-500/20"
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            whileHover={{ scale: 1.05, rotate: 5 }}
                        >
                            <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10" />
                            <img
                                src="/profile.png"
                                alt="Sreedev Rajendran"
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-20" />
                        </motion.div>
                    </div>

                    <div className="w-full md:w-2/3 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            About <span className="text-emerald-500">Me</span>
                        </h2>
                        <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Hi, I&apos;m <span className="text-white font-semibold">Sreedev Rajendran</span>! 👋
                            </p>
                            <p>
                                CS & AI Engineer | Developer | Visual Creator
                            </p>
                            <p>
                                Currently I&apos;m a B.Tech Undergraduate @ Providence College Of Engineering.
                            </p>
                            <blockquote className="border-l-4 border-emerald-500 pl-4 py-2 bg-white/5 rounded-r-lg">
                                <p className="italic">
                                    &quot;Not likes just Coding likes -<span className="text-emerald-400 font-bold">VibeCoding</span>.
                                    Creating Useful for Someones, Capturing Something Useful to Someones and this is i called as -<span className="text-emerald-400 font-bold">Passion</span>.&quot;
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
