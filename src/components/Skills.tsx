"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Globe, Database, Terminal, Layers } from "lucide-react";

const skills = [
    { name: "Python", icon: "https://cdn.simpleicons.org/python", category: "Language" },
    { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/white", category: "Language" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript", category: "Language" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript", category: "Language" },
    { name: "React", icon: "https://cdn.simpleicons.org/react", category: "Web" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white", category: "Web" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss", category: "Web" },
    { name: "Streamlit", icon: "https://cdn.simpleicons.org/streamlit", category: "Tool" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git", category: "Tool" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white", category: "Tool" },
    { name: "Android", icon: "https://cdn.simpleicons.org/android", category: "Mobile" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white tracking-tight">
                        Technical <span className="text-gray-400">Skills</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group p-6 rounded-xl bg-zinc-900/50 border border-white/5 flex flex-col items-center gap-4 hover:bg-white/5 transition-all hover:border-white/10"
                            >
                                <div className="relative w-12 h-12 flex items-center justify-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300">
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <span className="font-medium text-sm text-gray-400 group-hover:text-white transition-colors group-hover-gradient-text">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
