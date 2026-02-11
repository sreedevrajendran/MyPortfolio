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
        title: "Weather Forecast",
        description: "A modern weather forecast application with real-time weather data and intuitive UI.",
        tags: ["JavaScript", "Web App", "API"],
        demo: "https://wheatherforecast.netlify.app/",
        repo: "https://github.com/sreedevrajendran/wheatherforecast",
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
        highlight: true,
        isDownload: true,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-black/50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        Featured <span className="text-pink-500">Projects</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`group relative bg-gray-900 border border-white/10 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-colors ${project.highlight ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-gray-900 to-pink-900/20" : ""
                                    }`}
                            >
                                <div className="p-8 h-full flex flex-col items-start">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="px-3 py-1 text-xs font-medium text-pink-400 bg-pink-500/10 rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className={`font-bold text-white mb-2 ${project.highlight ? "text-3xl" : "text-xl"}`}>
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto">
                                        {project.demo && (
                                            <Link
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-500 hover:to-blue-500 text-white rounded-full font-medium transition-all"
                                                download={project.isDownload}
                                            >
                                                {project.isDownload ? <Download size={16} /> : <ExternalLink size={16} />}
                                                {project.isDownload ? "Download APK" : "Live Demo"}
                                            </Link>
                                        )}
                                        {project.repo && (
                                            <Link
                                                href={project.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors"
                                            >
                                                <Github size={16} />
                                                GitHub
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
