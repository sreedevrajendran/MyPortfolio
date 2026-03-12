"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const GRID_SIZE = 15; // Number of columns and rows
const REPULSION_RADIUS = 150;
const REPULSION_STRENGTH = 40;

interface MagneticPointProps {
  baseX: number;
  baseY: number;
  mouseX: any;
  mouseY: any;
}

const MagneticPoint = ({ baseX, baseY, mouseX, mouseY }: MagneticPointProps) => {
  const x = useSpring(baseX, { stiffness: 150, damping: 15 });
  const y = useSpring(baseY, { stiffness: 150, damping: 15 });
  const rotation = useSpring(0, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const updatePosition = () => {
      const latestX = mouseX.get();
      const latestY = mouseY.get();
      const dx = latestX - baseX;
      const dy = latestY - baseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < REPULSION_RADIUS) {
        const force = (1 - distance / REPULSION_RADIUS) * REPULSION_STRENGTH;
        const angle = Math.atan2(dy, dx);
        x.set(baseX - Math.cos(angle) * force);
        y.set(baseY - Math.sin(angle) * force);
        // Rotate line to point away from cursor
        rotation.set((angle * 180) / Math.PI + 90);
      } else {
        x.set(baseX);
        y.set(baseY);
        rotation.set(0);
      }
    };

    const unsubscribeX = mouseX.on("change", updatePosition);
    const unsubscribeY = mouseY.on("change", updatePosition);

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [baseX, baseY, mouseX, mouseY, x, y, rotation]);

  return (
    <motion.div
      style={{
        x,
        y,
        rotate: rotation,
        translateX: "-50%",
        translateY: "-50%",
      }}
      className="absolute w-0.5 h-3 bg-white/40 rounded-full"
    />
  );
};

export default function MouseTrail() {
  const [isMobile, setIsMobile] = useState(false);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    const generatePoints = () => {
      const newPoints = [];
      const spacingX = window.innerWidth / (GRID_SIZE + 1);
      const spacingY = window.innerHeight / (GRID_SIZE + 1);

      for (let i = 1; i <= GRID_SIZE; i++) {
        for (let j = 1; j <= GRID_SIZE; j++) {
          newPoints.push({ x: i * spacingX, y: j * spacingY });
        }
      }
      setPoints(newPoints);
    };

    const handleResize = () => {
      checkMobile();
      generatePoints();
    };

    // Initial setup
    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {points.map((point, i) => (
        <MagneticPoint
          key={i}
          baseX={point.x}
          baseY={point.y}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}
    </div>
  );
}
