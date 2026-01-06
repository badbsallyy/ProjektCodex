"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface BlogHeroImageProps {
  imageUrl: string;
  title: string;
}

export const BlogHeroImage = ({ imageUrl, title }: BlogHeroImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const reduceMotion = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -80]);

  return (
    <div ref={ref} className="relative h-80 w-full overflow-hidden rounded-3xl">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
    </div>
  );
};
