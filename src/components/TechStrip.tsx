"use client";

import { motion, useReducedMotion } from "framer-motion";

const TECHS = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Nginx",
  "Tailwind",
  "Prisma",
  "VPS",
];

type TechStripProps = {
  label: string;
};

export function TechStrip({ label }: TechStripProps) {
  const reduceMotion = useReducedMotion();
  const items = [...TECHS, ...TECHS];

  return (
    <div
      className="relative border-y border-card-border bg-card/40 py-5"
      aria-label={label}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      {reduceMotion ? (
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 px-6">
          {TECHS.map((tech) => (
            <span
              key={tech}
              className="text-sm font-medium text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      ) : (
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max gap-12 px-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="shrink-0 text-sm font-medium text-muted/80"
            >
              {tech}
            </span>
          ))}
          </motion.div>
        </div>
      )}
    </div>
  );
}
