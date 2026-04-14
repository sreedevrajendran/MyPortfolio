"use client";

import { motion } from "framer-motion";

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
        <section id="skills" className="py-8 flex flex-col font-mono text-sm md:text-base">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white flex items-center gap-4">
                <span className="text-[#8ab4f8]">~/</span>Skills
                <div className="flex-1 h-px bg-gradient-to-r from-[#333] to-transparent ml-4"></div>
            </h2>
            
            <div className="flex flex-col bg-[#0a0a0a] rounded-xl border border-[#333] shadow-lg overflow-hidden group">
                <div className="flex items-center bg-[#1a1a1a] border-b border-[#333] px-4 py-3 shrink-0">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="w-full text-center text-[#777] text-[10px] font-sans tracking-widest pl-[-40px]">
                        htop : system_skills
                    </div>
                </div>

                <div className="p-8 md:p-12">
                     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="group/skill p-6 rounded-xl bg-[#111] border border-[#222] flex flex-col items-center gap-4 hover:border-[#4af626] transition-all hover:-translate-y-1 shadow-lg"
                            >
                                <div className="relative w-12 h-12 flex items-center justify-center opacity-70 group-hover/skill:opacity-100 group-hover/skill:scale-110 transition-all duration-300">
                                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter grayscale group-hover/skill:grayscale-0 transition-all duration-300" />
                                </div>
                                <span className="font-mono text-sm text-[#888] group-hover/skill:text-[#4af626] transition-colors">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
