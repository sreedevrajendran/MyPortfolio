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
        title: "Oasis — AI Expense Tracker",
        description: "An AI-powered financial companion that thinks, learns, and protects. Features include AI Receipt Scanner (snap a photo to extract amount, merchant & category), Gmail Auto-Sync to log transactions automatically, a personalized AI Finance Coach with a health score, Smart Budgets with real-time tracking, and a Privacy Mode to blur all amounts instantly.",
        tags: ["AI", "React", "Firebase", "Netlify", "Gmail API"],
        demo: "https://oasisexpensetracker.netlify.app",
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
        <section id="projects" className="py-24 bg-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white tracking-tight">
                        Featured <span className="text-gray-400">Projects</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative bg-zinc-900/30 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 hover:bg-gradient-to-br hover:from-purple-900/20 hover:via-zinc-900 hover:to-black transition-all duration-300 ${project.highlight ? "md:col-span-2 lg:col-span-2" : ""
                                    }`}
                            >
                                <div className="p-8 h-full flex flex-col items-start">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 border border-white/5 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className={`font-bold text-white mb-3 ${project.highlight ? "text-3xl" : "text-xl"}`}>
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-300 mb-8 flex-grow leading-relaxed font-medium">
                                        {project.description}
                                    </p>

                                    <div className="flex gap-4 pt-4 mt-auto">
                                        {project.demo && (
                                            <Link
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-full font-medium transition-all text-sm hover:scale-105 hover:bg-white/10 hover-gradient-text group/btn"
                                                download={project.isDownload}
                                            >
                                                {project.isDownload ? <Download size={16} className="group-hover/btn:scale-110 transition-transform" /> : <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />}
                                                <span>{project.isDownload ? "Download APK" : "Live Demo"}</span>
                                            </Link>
                                        )}
                                        {project.repo && (
                                            <Link
                                                href={project.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white rounded-full font-medium transition-all text-sm hover:scale-105 hover:bg-white/10 hover-gradient-text group/btn"
                                            >
                                                <Github size={16} className="group-hover/btn:scale-110 transition-transform" />
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
