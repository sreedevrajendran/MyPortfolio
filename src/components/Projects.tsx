"use client";

import { Download } from "lucide-react";

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
        title: "Floww \u2014 AI Expense Tracker",
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
        <section id="projects" className="py-12 flex flex-col font-mono text-sm md:text-base">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white flex items-center gap-4 px-2">
                <span className="text-[#8ab4f8]">~/</span>Projects
                <div className="flex-1 h-px bg-gradient-to-r from-[#333] to-transparent ml-4"></div>
            </h2>
            
            <div className="flex flex-col bg-[#0a0a0a] rounded-xl border border-[#333] shadow-2xl overflow-hidden w-full group">
                {/* Master Mac Title Bar */}
                <div className="flex items-center bg-[#1a1a1a] border-b border-[#333] px-4 py-3 shrink-0">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="w-full text-center text-[#777] text-xs font-sans tracking-widest pl-[-40px]">
                        bash: ls -la ./projects
                    </div>
                </div>

                {/* Inner Content containing projects grid */}
                <div className="p-6 md:p-10 w-full overflow-hidden shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div key={index} className={`flex flex-col bg-[#111] rounded-lg border border-[#222] hover:border-[#4af626]/50 shadow-lg overflow-hidden transition-all duration-300 p-6 relative group/card ${project.highlight ? "md:col-span-2 lg:col-span-2" : ""}`}>
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#222] to-[#222] group-hover/card:from-[#4af626]/50 group-hover/card:to-[#ffbd2e]/50 transition-all duration-500"></div>
                                
                                <div className="font-bold text-white mb-4 text-xl md:text-2xl leading-tight mt-2 flex items-start gap-3">
                                    <span className="text-[#4af626] font-normal">&gt;</span>
                                    {project.title}
                                </div>
                                <p className="text-[#999] mb-8 text-sm md:text-base leading-relaxed flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-[#ffbd2e] text-[10px] md:text-xs bg-[#ffbd2e]/10 border border-[#ffbd2e]/20 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#333]/50 mt-auto">
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" className="flex items-center justify-center bg-[#222] text-white border border-transparent hover:border-[#4af626] hover:bg-[#4af626]/10 hover:text-[#4af626] py-2 px-4 transition-all text-xs md:text-sm font-bold flex-1" download={project.isDownload}>
                                            ./{project.isDownload ? "download_apk" : "run_demo"}
                                        </a>
                                    )}
                                    {project.repo && (
                                        <a href={project.repo} target="_blank" className="flex items-center justify-center bg-transparent border border-[#444] text-[#8ab4f8] hover:border-[#8ab4f8] hover:bg-[#8ab4f8]/10 py-2 px-4 transition-all text-xs md:text-sm font-bold flex-1">
                                            ./view_code
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
