"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type RivoraLogoMarkProps = {
  size?: number;
  animated?: boolean;
  className?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function RivoraLogoMark({
  size = 40,
  animated = false,
  className = "",
}: RivoraLogoMarkProps) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = animated && !reduceMotion;
  // PNG has generous padding — render larger so the mark reads clearly
  const renderSize = Math.round(size * 1.35);

  const img = (
    <Image
      src="/logo.png"
      alt=""
      width={renderSize}
      height={renderSize}
      className={`object-contain ${className}`}
      style={{ width: renderSize, height: renderSize }}
    />
  );

  if (!shouldAnimate) return img;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.55, ease }}
    >
      {img}
    </motion.div>
  );
}

type RivoraLogoProps = {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  animated?: boolean;
  className?: string;
};

const sizes = { sm: 44, md: 52, lg: 64 };

export function RivoraLogo({
  size = "md",
  showWordmark = true,
  animated = false,
  className = "",
}: RivoraLogoProps) {
  const markSize = sizes[size];

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <RivoraLogoMark size={markSize} animated={animated} />
      {showWordmark && (
        <span className="font-[family-name:var(--font-poppins)] text-xl font-semibold tracking-tight text-foreground md:text-[1.35rem]">
          Rivora
        </span>
      )}
    </span>
  );
}

/** Tricolor accent bar from the brand sheet */
export function BrandDivider({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-[3px] w-10 overflow-hidden rounded-full ${className}`}
      aria-hidden
    >
      <span className="flex-1 bg-[#7BA7D9]" />
      <span className="flex-1 bg-[#F2F6FA]" />
      <span className="flex-1 bg-[#C94B4B]" />
    </span>
  );
}
