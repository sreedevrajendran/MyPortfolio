"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Staggered container variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1,
    },
  },
};

// Each item slides up from below
const itemVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Typewriter hook
function useTypewriter(text: string, speed = 60, startDelay = 400) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    setDisplayed("");
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(delay);
  }, [text, speed, startDelay]);
  return displayed;
}

const ROLES = [
  "Full-Stack Developer",
  "AI Engineer",
  "Visual Creator",
  "Founder @topviewframes",
];

function useRoleCycle(roles: string[], interval = 2800) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % roles.length), interval);
    return () => clearInterval(t);
  }, [roles.length, interval]);
  return index;
}

export default function Hero() {
  const prompt = useTypewriter("./init.sh", 70, 200);
  const roleIndex = useRoleCycle(ROLES);
  const [roleVisible, setRoleVisible] = useState(true);

  // Fade out / fade in on role change
  useEffect(() => {
    setRoleVisible(false);
    const t = setTimeout(() => setRoleVisible(true), 200);
    return () => clearTimeout(t);
  }, [roleIndex]);

  return (
    <section
      id="home"
      className="min-h-[100vh] flex flex-col justify-center relative w-full overflow-hidden"
    >
      {/* ── Background: radial glow orbs ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
      >
        {/* Primary green glow */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60vw",
            maxWidth: "700px",
            height: "340px",
            background: "radial-gradient(ellipse, rgba(74,246,38,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Blue accent glow */}
        <div
          style={{
            position: "absolute",
            top: "60%",
            right: "10%",
            width: "300px",
            height: "200px",
            background: "radial-gradient(ellipse, rgba(138,180,248,0.06) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(74,246,38,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(74,246,38,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <motion.div
        className="relative z-10 w-full flex flex-col font-mono"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Prompt line */}
        <motion.div
          variants={itemVariants}
          className="mb-8 text-base md:text-lg font-medium tracking-wide flex items-center gap-1"
        >
          <span style={{ color: "#27c93f" }}>sreedev</span>
          <span style={{ color: "#888" }}>@</span>
          <span style={{ color: "#fff" }}>portfolio</span>
          <span style={{ color: "#8ab4f8" }}>:~$&nbsp;</span>
          <span style={{ color: "#ffbd2e" }}>{prompt}</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.9, ease: "steps(1)" }}
            style={{
              display: "inline-block",
              width: "9px",
              height: "1.1em",
              background: "#4af626",
              verticalAlign: "middle",
              marginLeft: "2px",
            }}
          />
        </motion.div>

        {/* ── Name block ── */}
        <motion.div variants={itemVariants} className="relative pl-0 mb-2">
          {/* Left accent line */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "3px",
              borderRadius: "4px",
              background:
                "linear-gradient(180deg, #4af626 0%, #8ab4f8 60%, transparent 100%)",
              boxShadow: "0 0 14px #4af626",
            }}
          />
          <div style={{ paddingLeft: "28px" }}>
            <h1
              style={{
                fontSize: "clamp(2.6rem, 8vw, 5.5rem)",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                margin: 0,
                textShadow: "0 2px 40px rgba(74,246,38,0.08)",
              }}
            >
              Sreedev
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #4af626 0%, #8ab4f8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Rajendran
              </span>
            </h1>
          </div>
        </motion.div>

        {/* ── Cycling role tag ── */}
        <motion.div variants={itemVariants} style={{ paddingLeft: "28px", marginBottom: "20px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "6px 16px",
              border: "1px solid rgba(74,246,38,0.25)",
              borderRadius: "4px",
              background: "rgba(74,246,38,0.04)",
            }}
          >
            <span style={{ color: "#27c93f", fontSize: "0.8rem" }}>▶</span>
            <span
              style={{
                color: "#ffbd2e",
                fontSize: "clamp(0.9rem, 2.5vw, 1.15rem)",
                fontWeight: 700,
                letterSpacing: "0.04em",
                opacity: roleVisible ? 1 : 0,
                transform: roleVisible ? "translateY(0)" : "translateY(6px)",
                transition: "opacity 0.25s ease, transform 0.25s ease",
                minWidth: "220px",
              }}
            >
              {ROLES[roleIndex]}
            </span>
          </div>
        </motion.div>

        {/* ── Subtitle line ── */}
        <motion.div variants={itemVariants} style={{ paddingLeft: "28px", marginBottom: "36px" }}>
          <p
            style={{
              color: "#888",
              fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
              margin: 0,
              lineHeight: 1.7,
              maxWidth: "540px",
            }}
          >
            CS & AI student building AI-native apps with{" "}
            <span style={{ color: "#fff" }}>Next.js</span>,{" "}
            <span style={{ color: "#fff" }}>Python</span> &{" "}
            <span style={{ color: "#fff" }}>Gemini</span>.
            <br />
            Founder of{" "}
            <a
              href="https://topviewframes.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#8ab4f8",
                textDecoration: "none",
                borderBottom: "1px solid rgba(138,180,248,0.4)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#4af626")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8ab4f8")}
            >
              @topviewframes
            </a>{" "}
            — where logic meets creativity.
          </p>
        </motion.div>

        {/* ── CTA Buttons ── */}
        <motion.div
          variants={itemVariants}
          style={{
            paddingLeft: "28px",
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            marginBottom: "52px",
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 22px",
              background: "#4af626",
              color: "#000",
              fontFamily: "inherit",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#39cc1c";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(74,246,38,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#4af626";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <span>ls ./projects</span>
            <span>→</span>
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 22px",
              background: "transparent",
              color: "#4af626",
              fontFamily: "inherit",
              fontSize: "0.85rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textDecoration: "none",
              border: "1px solid rgba(74,246,38,0.4)",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#4af626";
              (e.currentTarget as HTMLElement).style.background = "rgba(74,246,38,0.06)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,246,38,0.4)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <span>ping me</span>
            <span style={{ color: "#8ab4f8" }}>_</span>
          </a>
        </motion.div>

        {/* ── Status bar ── */}
        <motion.div
          variants={itemVariants}
          style={{
            paddingLeft: "28px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {[
            { dot: "#27c93f", text: "Available for work" },
            { dot: "#8ab4f8", text: "Kerala, India" },
            { dot: "#ffbd2e", text: "B.Tech CS & AI" },
          ].map(({ dot, text }) => (
            <span
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                fontSize: "0.78rem",
                color: "#666",
                letterSpacing: "0.04em",
              }}
            >
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: dot,
                  display: "inline-block",
                  boxShadow: `0 0 6px ${dot}`,
                }}
              />
              {text}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "36px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          zIndex: 10,
          cursor: "pointer",
        }}
        onClick={() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            color: "#444",
            fontFamily: "inherit",
            textTransform: "uppercase",
          }}
        >
          scroll
        </span>
        {/* Animated track + dot */}
        <div
          style={{
            position: "relative",
            width: "1px",
            height: "48px",
            background: "rgba(74,246,38,0.12)",
            overflow: "visible",
          }}
        >
          <motion.div
            animate={{ y: [0, 36, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "#4af626",
              boxShadow: "0 0 8px #4af626",
            }}
          />
        </div>
        {/* Double chevron */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut", delay: 0.2 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}
        >
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none">
            <path d="M1 1L6 6L11 1" stroke="#4af626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" style={{ opacity: 0.4 }}>
            <path d="M1 1L6 6L11 1" stroke="#4af626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
