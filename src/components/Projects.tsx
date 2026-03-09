"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Download } from "lucide-react";
import Link from "next/link";
// Define Project interface to fix TS inference issues with optional properties
interface Project {
    title: string;
    description: string;
    tags: string[];
    repo?: string;
    demo?: string;
    highlight: boolean;
    isDownload?: boolean;
}

const projects: Project[] = [
    {
        title: "Floww — AI Expense Tracker",
        description: "Floww is a smart personal finance app that uses AI to make money management effortless. Snap a receipt and let the AI extract merchant, amount & category instantly. Sync your Gmail to auto-log transactions, get a personal Finance Health Score, set smart budgets with live tracking, and toggle Privacy Mode to hide all balances with one tap.",
        tags: ["AI", "React", "Firebase", "Netlify", "Gmail API"],
        demo: "https://flowwexpensetracker.netlify.app/login?callbackUrl=%2F",
        highlight: true,
    },
    {
        title: "Simple Banking System",
        description: "A secure and efficient Java-based banking application for managing customer accounts, transactions, and balance inquiries.",
        tags: ["Java", "OOP", "Console App"],
        repo: "https://github.com/sreedevrajendran/SimpleBankingSystem-JAVA",
        highlight: false,
    },
    {
        title: "SentimentAnalysis",
        description: "Analyze and classify dataset sentiment using basic Machine Learning and Natural Language Processing techniques.",
        tags: ["Python", "ML", "NLP"],
        repo: "https://github.com/sreedevrajendran/SentimentAnalysis",
        highlight: false,
    },
    {
        title: "bunk-calculator",
        description: "A mini project to calculate class attendance and bunk eligibility using Python and Streamlit.",
        tags: ["Python", "Streamlit"],
        demo: "https://bunk-calculator-6d6pcmtagyrlqt2ygeehsl.streamlit.app/",
        repo: "https://github.com/sreedevrajendran/bunk-calculator",
        highlight: false,
    },
    {
        title: "WeatherNativeProject",
        description: "A native Android application for real-time weather tracking. Download the APK directly.",
        tags: ["Android", "React Native", "APK"],
        demo: "/AquWeather.apk",
        repo: "https://github.com/sreedevrajendran/WeatherNativeProject",
        highlight: false,
        isDownload: true,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative bg-transparent">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white tracking-tight">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative bg-[#1c1c1f] border border-white/5 rounded-[32px] overflow-hidden hover:border-white/10 hover:bg-[#212124] transition-all duration-300 shadow-lg ${project.highlight ? "md:col-span-2 lg:col-span-2" : ""
                                    }`}
                            >
                                <div className="p-8 md:p-10 h-full flex flex-col items-start">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-4 py-1.5 text-xs font-semibold text-[#8ab4f8] bg-[#8ab4f8]/10 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className={`font-bold text-white mb-4 tracking-tight ${project.highlight ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mb-8 flex-grow leading-relaxed font-medium text-lg">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 pt-4 mt-auto">
                                        {project.demo && (
                                            <Link
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-black text-white rounded-full font-bold transition-all text-sm hover:from-violet-500 hover:to-zinc-900 hover:scale-105 group/btn border border-violet-500/20"
                                                download={project.isDownload}
                                            >
                                                {project.isDownload ? <Download size={18} className="group-hover/btn:scale-110 transition-transform" /> : <ExternalLink size={18} className="group-hover/btn:scale-110 transition-transform" />}
                                                <span>{project.isDownload ? "Download APK" : "Live Demo"}</span>
                                            </Link>
                                        )}
                                        {project.repo && (
                                            <Link
                                                href={project.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full font-medium transition-all text-sm hover:bg-white/10 hover:scale-105 group/btn"
                                            >
                                                <Github size={18} className="group-hover/btn:scale-110 transition-transform" />
                                                <span>Code</span>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
