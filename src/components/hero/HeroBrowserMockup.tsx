"use client";

import { motion, useReducedMotion } from "framer-motion";

const barHeights = [40, 65, 45, 80, 55, 70, 48, 90, 60, 75];

export function HeroBrowserMockup() {
  const reduceMotion = useReducedMotion();

  const float = reduceMotion
    ? {}
    : {
        y: [0, -14, 0],
        transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
      };

  return (
    <motion.div
      className="relative z-10 w-full max-w-md lg:max-w-lg"
      initial={reduceMotion ? false : { opacity: 0, y: 48, rotateY: -12, scale: 0.94 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotateY: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
    >
      <motion.div animate={float} className="relative">
        <div
          className="pointer-events-none absolute -inset-8 rounded-full bg-accent-blue/15 blur-3xl"
          aria-hidden
        />

        {/* Phone mockup */}
        <motion.div
          className="absolute -right-2 -top-6 z-20 w-[88px] overflow-hidden rounded-xl border border-card-border bg-card shadow-2xl shadow-accent-blue/10 md:-right-6 md:w-[100px]"
          initial={reduceMotion ? false : { opacity: 0, x: 20, y: 10 }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-center justify-center border-b border-card-border bg-background px-2 py-1.5">
            <div className="h-1 w-8 rounded-full bg-card-border" />
          </div>
          <div className="space-y-1.5 p-2">
            <div className="h-2 w-full rounded-sm bg-accent-blue/40" />
            <div className="h-8 rounded-sm bg-accent-blue/15" />
            <div className="flex gap-1">
              <div className="h-4 flex-1 rounded-sm bg-card-border" />
              <div className="h-4 flex-1 rounded-sm bg-accent-orange/30" />
            </div>
          </div>
        </motion.div>

        {/* Browser frame */}
        <div className="overflow-hidden rounded-lg border border-card-border bg-card shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-card-border bg-background px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="ml-2 flex-1 rounded-md border border-card-border bg-card px-3 py-1 text-[10px] text-muted">
              rivora.dev/dashboard
            </div>
          </div>

          <div className="flex h-[220px] md:h-[260px]">
            {/* Sidebar */}
            <div className="flex w-12 flex-col gap-3 border-r border-card-border bg-background p-2 md:w-14">
              {[true, false, false, false, false].map((active, i) => (
                <div
                  key={i}
                  className={`h-6 rounded-sm ${active ? "bg-accent-blue/30" : "bg-card-border/60"}`}
                />
              ))}
            </div>

            {/* Main */}
            <div className="flex-1 p-3 md:p-4">
              <div className="mb-3 flex gap-2">
                {["24", "86", "12"].map((val, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded border border-card-border bg-background p-2"
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className="text-[9px] uppercase tracking-wider text-muted">
                      {["Users", "Revenue", "Uptime"][i]}
                    </div>
                    <div className="mt-0.5 text-sm font-bold text-foreground">
                      {val}
                      {i === 2 ? "%" : i === 1 ? "k" : "k"}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="rounded border border-card-border bg-background p-2">
                <div className="mb-2 text-[9px] uppercase tracking-wider text-muted">
                  Analytics
                </div>
                <div className="flex h-16 items-end gap-1">
                  {barHeights.map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-sm bg-gradient-to-t from-accent-blue to-sky-300/80"
                      initial={reduceMotion ? { height: `${h}%` } : { height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{
                        delay: 0.8 + i * 0.05,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
