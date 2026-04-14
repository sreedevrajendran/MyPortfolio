"use client";

import { motion, useAnimate, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const loadingSteps = [
  { label: "Resolving identity...", duration: 600 },
  { label: "Mounting portfolio...", duration: 700 },
  { label: "Injecting creativity...", duration: 800 },
  { label: "Ready.", duration: 400 },
];

export default function Hero() {
  const [phase, setPhase] = useState<"typing" | "loading" | "done">("typing");
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  // After ./init.sh types out, start loading phase
  useEffect(() => {
    const t = setTimeout(() => setPhase("loading"), 1200);
    return () => clearTimeout(t);
  }, []);

  // Step through loading steps sequentially
  useEffect(() => {
    if (phase !== "loading") return;

    let step = 0;
    let totalElapsed = 0;
    const totalDuration = loadingSteps.reduce((a, s) => a + s.duration, 0);

    const runStep = () => {
      if (step >= loadingSteps.length) {
        setTimeout(() => setPhase("done"), 300);
        return;
      }
      setCurrentStep(step);
      const stepDuration = loadingSteps[step].duration;

      // Animate progress bar for this step's share
      const startProgress = (totalElapsed / totalDuration) * 100;
      totalElapsed += stepDuration;
      const endProgress = (totalElapsed / totalDuration) * 100;

      const startTime = performance.now();
      const tick = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / stepDuration, 1);
        setProgress(startProgress + (endProgress - startProgress) * t);
        if (t < 1) requestAnimationFrame(tick);
        else {
          step++;
          setTimeout(runStep, 80);
        }
      };
      requestAnimationFrame(tick);
    };

    runStep();
  }, [phase]);

  return (
    <section id="home" className="min-h-[85vh] flex flex-col justify-center py-12 relative w-full">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-3xl h-64 bg-[#4af626]/5 rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="w-full flex flex-col z-10 font-mono text-base md:text-lg">

        {/* Prompt line — always visible */}
        <div className="mb-10 text-xl font-medium tracking-wide">
          <span className="text-[#27c93f]">sreedev</span>@<span className="text-white">portfolio</span>:<span className="text-[#8ab4f8]">~</span>$&nbsp;
          <motion.span
            initial={{ clipPath: "polygon(0 0, 0 100%, 0 100%, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" }}
            transition={{ duration: 1, ease: "linear" }}
            className="inline-block text-[#ffbd2e]"
          >
            ./init.sh
          </motion.span>
        </div>

        {/* Loading phase */}
        <AnimatePresence>
          {phase === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-5"
            >
              {/* Steps list */}
              <div className="flex flex-col gap-2">
                {loadingSteps.map((step, i) => {
                  const done = i < currentStep;
                  const active = i === currentStep;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: i <= currentStep ? 1 : 0.25, x: 0 }}
                      transition={{ duration: 0.3, delay: 0 }}
                      className="flex items-center gap-3 text-sm md:text-base"
                    >
                      {/* Status icon */}
                      <span className="w-5 text-center">
                        {done ? (
                          <span className="text-[#27c93f]">✓</span>
                        ) : active ? (
                          <motion.span
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-2 h-2 rounded-full bg-[#ffbd2e]"
                          />
                        ) : (
                          <span className="text-[#333]">○</span>
                        )}
                      </span>
                      <span className={done ? "text-[#555]" : active ? "text-white" : "text-[#333]"}>
                        {step.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress bar */}
              <div className="mt-4 relative">
                <div className="h-[2px] w-full bg-[#1a1a1a] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#4af626] to-[#8ab4f8] rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-[#444]">
                  <span>initializing</span>
                  <span>{Math.round(progress)}%</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Done phase — name reveal */}
        <AnimatePresence>
          {phase === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                className="mt-4 py-8 relative"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#4af626] via-[#8ab4f8] to-transparent rounded-full shadow-[0_0_10px_#4af626]" />
                <div className="pl-8">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tighter">
                    Sreedev Rajendran
                  </h1>
                  <p className="text-[#ffbd2e] text-xl md:text-2xl font-bold tracking-wide">Computer Science & AI Engineer</p>
                  <p className="text-[#888] text-lg mt-2">Developer | Visual Creator</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-12 text-[#8ab4f8] flex items-center gap-3 text-lg font-bold"
              >
                <span className="text-white">$</span> Scroll down to explore workspace{" "}
                <span className="animate-blink inline-block w-4 h-6 bg-[#4af626] align-middle -translate-y-0.5" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
