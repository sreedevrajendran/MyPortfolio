"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Globe, Database, Terminal, Layers } from "lucide-react";

const skills = [
    { name: "Python", icon: Terminal, category: "Language" },
    { name: "JavaScript / TypeScript", icon: Code, category: "Language" },
    { name: "React & Next.js", icon: Globe, category: "Web" },
    { name: "Tailwind CSS", icon: Layers, category: "Web" },
    { name: "AI / ML", icon: Cpu, category: "Tech" },
    { name: "Java", icon: Database, category: "Language" }, // Using Database as placeholder
    { name: "Streamlit", icon: Layers, category: "Tool" },
    { name: "Git & GitHub", icon: Code, category: "Tool" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Technical <span className="text-pink-500">Skills</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, borderColor: "rgba(236, 72, 153, 0.5)" }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-4 hover:bg-white/10 transition-colors cursor-default"
                            >
                                <div className={`p-3 rounded-full ${index % 2 === 0 ? "bg-pink-500/10 text-pink-400" : "bg-blue-500/10 text-blue-400"}`}>
                                    <skill.icon size={32} />
                                </div>
                                <span className="font-medium text-lg text-gray-200">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
