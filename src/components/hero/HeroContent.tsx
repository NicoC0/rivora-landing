"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RivoraLogoMark, BrandDivider } from "@/components/RivoraLogo";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type HeroContentProps = {
  tagline: string;
  title: string;
  subtitle: string;
  cta: string;
  secondary: string;
  pills: string;
  builtBy: string;
};

export function HeroContent({
  tagline,
  title,
  subtitle,
  cta,
  secondary,
  pills,
  builtBy,
}: HeroContentProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="hero-content relative z-10"
      variants={reduceMotion ? undefined : stagger}
      initial={reduceMotion ? false : "hidden"}
      animate="show"
    >
      <motion.div className="mb-6 flex flex-col gap-3" variants={item}>
        <p className="section-label">{tagline}</p>
        <BrandDivider />
      </motion.div>

      <motion.div variants={item} className="mb-2 md:mb-4">
        <RivoraLogoMark size={100} animated={!reduceMotion} className="md:hidden" />
        <RivoraLogoMark size={140} animated={!reduceMotion} className="hidden md:block" />
      </motion.div>

      <motion.h1
        variants={item}
        className="relative max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl lg:leading-[1.12]"
      >
        <span className="gradient-text">{title}</span>
        <span
          className="pointer-events-none absolute -inset-x-6 -inset-y-3 -z-10 rounded-lg bg-accent-blue/5 blur-2xl"
          aria-hidden
        />
      </motion.h1>

      <motion.p
        variants={item}
        className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
      >
        {subtitle}
      </motion.p>

      <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
        <a href="#contact" className="btn-primary group">
          {cta}
          <motion.span
            className="inline-flex"
            whileHover={reduceMotion ? undefined : { x: 4 }}
          >
            →
          </motion.span>
        </a>
        <a href="#portfolio" className="btn-outline">
          {secondary}
        </a>
      </motion.div>

      <motion.div
        variants={item}
        className="mt-14 flex flex-col gap-4 border-t border-card-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p className="text-sm font-semibold text-foreground">Rivora</p>
          <p className="text-sm text-muted">{builtBy}</p>
        </div>
        <p className="text-sm text-muted">{pills}</p>
      </motion.div>
    </motion.div>
  );
}
