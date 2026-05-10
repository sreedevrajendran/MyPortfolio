"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, Cpu, User, ExternalLink, Calendar, MapPin } from "lucide-react";

// ─── Skills (moved from home) ────────────────────────────────────────────────
const skills = [
  { name: "Python",       icon: "https://cdn.simpleicons.org/python",            category: "Language" },
  { name: "Java",         icon: "https://cdn.simpleicons.org/openjdk/white",     category: "Language" },
  { name: "JavaScript",   icon: "https://cdn.simpleicons.org/javascript",        category: "Language" },
  { name: "TypeScript",   icon: "https://cdn.simpleicons.org/typescript",        category: "Language" },
  { name: "React",        icon: "https://cdn.simpleicons.org/react",             category: "Web" },
  { name: "Next.js",      icon: "https://cdn.simpleicons.org/nextdotjs/white",   category: "Web" },
  { name: "Astro",        icon: "https://cdn.simpleicons.org/astro/white",       category: "Web" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss",       category: "Web" },
  { name: "Streamlit",    icon: "https://cdn.simpleicons.org/streamlit",         category: "Tool" },
  { name: "Git",          icon: "https://cdn.simpleicons.org/git",               category: "Tool" },
  { name: "GitHub",       icon: "https://cdn.simpleicons.org/github/white",      category: "Tool" },
  { name: "Android",      icon: "https://cdn.simpleicons.org/android",           category: "Mobile" },
  { name: "React Native", icon: "https://cdn.simpleicons.org/react",             category: "Mobile" },
  { name: "Expo",         icon: "https://cdn.simpleicons.org/expo/white",        category: "Mobile" },
];

// ─── Education ───────────────────────────────────────────────────────────────
const education = [
  {
    level: "B.Tech Computer Science & AI",
    institution: "Providence College of Engineering, Chengannur",
    year: "2024 – 2028",
    detail: "Specialisation in Artificial Intelligence | 2nd Year",
    status: "ongoing",
  },
  {
    level: "Plus Two (Class XII) — State Syllabus",
    institution: "Sree Bhuvaneshwari Higher Secondary School, Mannar",
    year: "2022 – 2024",
    detail: "Science stream · 76%",
    status: "completed",
  },
  {
    level: "SSLC (Class X) — State Syllabus",
    institution: "Sree Bhuvaneshwari Higher Secondary School, Mannar",
    year: "2021 – 2022",
    detail: "Scored 98%",
    status: "completed",
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────
const achievements = [
  {
    title: "Certificate of Project Completion — AccelerateX Internship in AI",
    org: "AccelerateX & Novolo.AI",
    year: "Jun 2025",
    badge: "🏅",
    description:
      "Successfully completed the AI Project as part of the 3-week internship held from 2nd June 2025 to 20th June 2025, conducted by AccelerateX & Novolo under the Career Accelerator Initiative. Certificate ID: AX-NOVP123.",
  },
  {
    title: "Introduction to Python — IBM Certificate",
    org: "IBM Career Education Program (IBMCE)",
    year: "Mar 24, 2025",
    badge: "🎓",
    description:
      "Successfully completed and received a passing grade in Introduction to Python (CEPYT1IN) on ibmcep.cognitiveclass.ai, powered by IBM Developer Skills Network.",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/9fdb3db06f66445a8944d1af47ec27e4",
  },
  {
    title: "KIREEDAM 2025 — Football Winner",
    org: "Providence College of Engineering, Chengannur",
    year: "Jan 27, 2025",
    badge: "🏆",
    description:
      "Awarded Certificate of Appreciation as a WINNER representing Ruby House in Football, conducted during KIREEDAM 2025 — Annual Arts & Sports Festival at Providence College of Engineering.",
  },
];

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-9 h-9 rounded-lg bg-[#4af626]/10 border border-[#4af626]/30 flex items-center justify-center shrink-0">
        <Icon size={18} className="text-[#4af626]" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-white">
        <span className="text-[#8ab4f8]">~/</span>{title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-[#333] to-transparent" />
    </div>
  );
}

// ─── Terminal Wrapper ─────────────────────────────────────────────────────────
function TerminalCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-[#0a0a0a] rounded-xl border border-[#333] shadow-lg overflow-hidden group">
      <div className="flex items-center bg-[#1a1a1a] border-b border-[#333] px-4 py-3 shrink-0">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="w-full text-center text-[#777] text-[10px] font-sans tracking-widest">{title}</div>
      </div>
      {children}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ResumeProfile() {
  return (
    <div className="flex flex-col space-y-20 font-mono">

      {/* ── Profile ── */}
      <section id="resume-profile">
        <SectionHeader icon={User} title="Profile" />
        <TerminalCard title="bash: cat profile.txt">
          <div className="p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center md:items-start tracking-wide">
            {/* Photo */}
            <div className="shrink-0">
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-xl border border-[#333] p-2 bg-[#111] overflow-hidden shadow-2xl group-hover:border-[#4af626] transition-colors duration-500">
                <img
                  src="/sreedev.jpg"
                  alt="Sreedev Rajendran"
                  className="w-full h-full object-cover rounded-lg filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 space-y-5">
              <div>
                <div className="text-[#4af626] font-bold text-xl mb-1">&gt; _{"{ PROFILE }"}</div>
                <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight">Sreedev Rajendran</h1>
                <p className="text-[#8ab4f8] text-base mt-1">Developer · Visual Creator · Founder</p>
              </div>

              <div className="flex flex-wrap gap-3 text-sm">
                <span className="flex items-center gap-1.5 text-[#888]">
                  <MapPin size={13} className="text-[#4af626]" />
                  Kerala, India
                </span>
                <span className="flex items-center gap-1.5 text-[#888]">
                  <GraduationCap size={13} className="text-[#4af626]" />
                  Providence College of Engineering
                </span>
                <a
                  href="https://topviewframes.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#8ab4f8] hover:text-[#4af626] transition-colors"
                >
                  <ExternalLink size={13} />
                  topviewframes
                </a>
              </div>

              <div className="space-y-3 text-[#bfbfbf] leading-relaxed text-sm md:text-base">
                <p>
                  I am a second-year <span className="text-white font-semibold">B.Tech Computer Science & AI student</span> at Providence College of Engineering with a passion for building functional, intelligent, and aesthetically pleasing digital solutions.
                </p>
                <p>
                  My expertise spans <span className="text-white">Python, Web Development, and Mobile App Development</span>, where I focus on creating seamless user experiences—from AI-powered platforms to offline-first mobile applications.
                </p>
                <p>
                  Beyond the code, I am the Founder of{" "}
                  <a
                    href="https://topviewframes.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8ab4f8] font-bold hover:text-[#4af626] hover:underline transition-colors"
                  >
                    @topviewframes
                  </a>
                  , a venture where I merge my technical background with my eye for visual storytelling. I constantly seek ways to integrate AI-driven concepts into real-world applications and thrive at the intersection of logic and creativity.
                </p>
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-3 pt-2">
                {([
                  { label: "GitHub",    href: "https://github.com/sreedevrajendran",         icon: "https://cdn.simpleicons.org/github/white" },
                  { label: "Instagram", href: "https://www.instagram.com/sreedevrajendran_/", icon: "https://cdn.simpleicons.org/instagram" },
                  { label: "X",         href: "https://x.com/sreedevv_",                      icon: "https://cdn.simpleicons.org/x/white" },
                  { label: "YouTube",   href: "https://www.youtube.com/@sreedevrajendran-n50",icon: "https://cdn.simpleicons.org/youtube/red" },
                ] as { label: string; href: string; icon: string }[]).map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111] border border-[#222] text-xs text-[#888] hover:border-[#4af626] hover:text-[#4af626] transition-all"
                  >
                    <img src={icon} alt={label} className="w-3.5 h-3.5 object-contain" />
                    {label}
                  </a>
                ))}
                {/* LinkedIn — inline SVG to avoid CDN issues */}
                <a
                  href="https://www.linkedin.com/in/sreedevrajendran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111] border border-[#222] text-xs text-[#888] hover:border-[#4af626] hover:text-[#4af626] transition-all"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </TerminalCard>
      </section>

      {/* ── Education ── */}
      <section id="resume-education">
        <SectionHeader icon={GraduationCap} title="Education" />
        <TerminalCard title="bash: cat education.log">
          <div className="p-8 md:p-10 flex flex-col gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-6 border-l-2 border-[#222] hover:border-[#4af626] transition-colors duration-300"
              >
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#111] border-2 border-[#333] group-hover:border-[#4af626] transition-colors" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <h3 className="text-white font-bold text-base md:text-lg">{edu.level}</h3>
                  <span className="flex items-center gap-1.5 text-[#555] text-xs shrink-0">
                    <Calendar size={11} />
                    {edu.year}
                  </span>
                </div>
                <p className="text-[#8ab4f8] text-sm mb-1">{edu.institution}</p>
                <p className="text-[#666] text-xs">{edu.detail}</p>
                {edu.status === "ongoing" && (
                  <span className="inline-block mt-2 px-2 py-0.5 rounded bg-[#4af626]/10 border border-[#4af626]/30 text-[#4af626] text-[10px] font-bold tracking-wider">ONGOING</span>
                )}
              </motion.div>
            ))}
          </div>
        </TerminalCard>
      </section>

      {/* ── Achievements ── */}
      <section id="resume-achievements">
        <SectionHeader icon={Trophy} title="Achievements" />
        <div className="flex flex-col gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex flex-col bg-[#0a0a0a] rounded-xl border border-[#333] shadow-lg overflow-hidden hover:border-[#4af626]/60 hover:shadow-[0_0_30px_rgba(74,246,38,0.06)] transition-all duration-300"
            >
              {/* Mac title bar */}
              <div className="flex items-center bg-[#1a1a1a] border-b border-[#333] px-4 py-3 shrink-0">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 text-center text-[#666] text-[10px] font-sans tracking-widest">
                  bash: cat achievement_{i + 1}.txt
                </div>
                <span className="shrink-0 flex items-center gap-1 text-[#555] text-[10px] font-sans">
                  <Calendar size={10} />
                  {a.year}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-5 items-start">
                {/* Badge */}
                {a.badge && (
                  <span className="text-4xl leading-none shrink-0 mt-1">{a.badge}</span>
                )}

                {/* Content */}
                <div className="flex-1 flex flex-col gap-3">
                  <div>
                    <div className="text-[#4af626] font-bold text-sm mb-1">&gt; _</div>
                    <h3 className="text-white font-bold text-base md:text-lg leading-snug group-hover:text-[#4af626] transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-[#8ab4f8] text-xs mt-1">{a.org}</p>
                  </div>

                  <p className="text-[#888] text-sm leading-relaxed">{a.description}</p>

                  {a.link && (
                    <div className="pt-3 border-t border-[#1a1a1a]">
                      <a
                        href={a.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[#4af626] text-xs font-bold hover:underline"
                      >
                        <ExternalLink size={11} />
                        View Certificate
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="resume-skills">
        <SectionHeader icon={Cpu} title="Skills" />
        <TerminalCard title="htop : system_skills">
          <div className="p-8 md:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-5">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="group/skill p-4 rounded-xl bg-[#111] border border-[#222] flex flex-col items-center gap-3 hover:border-[#4af626] transition-all hover:-translate-y-1 shadow-lg"
                >
                  <div className="relative w-10 h-10 flex items-center justify-center opacity-70 group-hover/skill:opacity-100 group-hover/skill:scale-110 transition-all duration-300">
                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter grayscale group-hover/skill:grayscale-0 transition-all duration-300" />
                  </div>
                  <span className="font-mono text-[11px] text-[#888] group-hover/skill:text-[#4af626] transition-colors text-center leading-tight">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </TerminalCard>
      </section>

    </div>
  );
}
