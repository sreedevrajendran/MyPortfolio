"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const STICKY_RADIUS = 100;
const TRAIL_COUNT = 6;

export default function MouseTrail() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Base mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Array of springs for the trail effect
  // Each element in the trail will follow the next one with a bit of delay/smoothness
  const springs = Array.from({ length: TRAIL_COUNT }).map((_, i) => ({
    x: useSpring(mouseX, {
      stiffness: 150 - i * 20,
      damping: 20 + i * 2,
      restDelta: 0.001,
    }),
    y: useSpring(mouseY, {
      stiffness: 150 - i * 20,
      damping: 20 + i * 2,
      restDelta: 0.001,
    }),
  }));

  useEffect(() => {
    // Check if mobile (don't show trail on touch screens)
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {springs.map((spring, i) => (
        <motion.div
          key={i}
          style={{
            x: spring.x,
            y: spring.y,
            translateX: "-50%",
            translateY: "-50%",
          }}
          className="absolute"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="rounded-full bg-pink-500/40 blur-sm ring-1 ring-pink-500/20"
            style={{
              width: 20 - i * 2.5 + "px",
              height: 20 - i * 2.5 + "px",
              opacity: 1 - i * 0.15,
              mixBlendMode: "screen",
            }}
          />
        </motion.div>
      ))}
      
      {/* Primary Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-3 h-3 bg-white rounded-full z-10 mix-blend-difference"
      />
    </div>
  );
}
