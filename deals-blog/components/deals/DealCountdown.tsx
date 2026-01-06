"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface DealCountdownProps {
  expiryDate: string;
}

const formatTime = (value: number) => String(value).padStart(2, "0");

export const DealCountdown = ({ expiryDate }: DealCountdownProps) => {
  const reduceMotion = useReducedMotion();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const diff = new Date(expiryDate).getTime() - Date.now();
      const clamped = Math.max(diff, 0);
      const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
      const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((clamped / (1000 * 60)) % 60);
      const seconds = Math.floor((clamped / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(interval);
  }, [expiryDate]);

  const blocks = [
    { label: "Tage", value: timeLeft.days },
    { label: "Stunden", value: timeLeft.hours },
    { label: "Minuten", value: timeLeft.minutes },
    { label: "Sekunden", value: timeLeft.seconds }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {blocks.map((block) => (
        <motion.div
          key={block.label}
          initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
        >
          <p className="text-2xl font-semibold text-white">
            {formatTime(block.value)}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">
            {block.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};
