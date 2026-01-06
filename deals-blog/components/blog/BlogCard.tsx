"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CardHoverEffect } from "@/components/ui";
import { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

const DOT_SEPARATOR = "·";

export const BlogCard = ({ post }: BlogCardProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { rotateX: 6, rotateY: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <CardHoverEffect className="flex h-full flex-col gap-4">
        <Link href={`/blog/${post.slug}`} className="flex h-full flex-col gap-4">
          <div className="relative h-48 w-full overflow-hidden rounded-xl">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
                {formatDate(post.date)} {DOT_SEPARATOR} {post.readTime}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">{post.title}</h3>
              <p className="mt-2 text-sm text-white/70">
                {post.excerpt}
              </p>
            </div>
          </div>
        </Link>
      </CardHoverEffect>
    </motion.div>
  );
};
