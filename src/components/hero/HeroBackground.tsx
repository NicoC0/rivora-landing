const PARTICLES = [
  { top: "12%", left: "8%", size: 3, delay: "0s", duration: "7s" },
  { top: "28%", left: "85%", size: 2, delay: "-1s", duration: "9s" },
  { top: "55%", left: "15%", size: 2, delay: "-2s", duration: "8s" },
  { top: "70%", left: "78%", size: 4, delay: "-3s", duration: "10s" },
  { top: "18%", left: "55%", size: 2, delay: "-1.5s", duration: "6s" },
  { top: "82%", left: "42%", size: 2, delay: "-2.5s", duration: "11s" },
  { top: "45%", left: "92%", size: 3, delay: "-0.5s", duration: "8s" },
  { top: "38%", left: "28%", size: 2, delay: "-4s", duration: "9s" },
];

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-grid absolute inset-0" />

      <div className="absolute left-1/2 top-1/3 h-px w-full -translate-x-1/2 glow-line hero-scanline" />

      <div className="hero-orb hero-orb--1 absolute left-[5%] top-[20%] h-72 w-72 rounded-full bg-accent-blue/25 blur-[100px]" />
      <div className="hero-orb hero-orb--2 absolute right-[8%] top-[15%] h-56 w-56 rounded-full bg-indigo-500/15 blur-[80px]" />
      <div className="hero-orb hero-orb--3 absolute bottom-[10%] left-[40%] h-48 w-48 rounded-full bg-sky-400/10 blur-[70px]" />

      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="hero-particle absolute rounded-full bg-accent-blue/60"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      <div className="hero-corner-accent absolute left-6 top-28 hidden h-16 w-16 border-l border-t border-accent-blue/30 md:block" />
      <div className="hero-corner-accent absolute bottom-12 right-6 hidden h-16 w-16 border-b border-r border-accent-blue/30 md:block" />
    </div>
  );
}
