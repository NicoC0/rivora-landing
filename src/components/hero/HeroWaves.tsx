export function HeroWaves() {
  return (
    <div className="hero-waves pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg
        className="hero-waves__svg absolute left-1/2 top-[38%] h-[55%] w-[140%] max-w-none -translate-x-1/2 md:top-[32%]"
        viewBox="0 0 1200 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <linearGradient id="wave-grad-a" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" stopOpacity="0" />
            <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#93c5fd" stopOpacity="1" />
            <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="wave-grad-b" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0" />
            <stop offset="40%" stopColor="#60a5fa" stopOpacity="0.5" />
            <stop offset="60%" stopColor="#bfdbfe" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </linearGradient>
          <filter id="wave-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          className="hero-wave-path hero-wave-path--1"
          d="M-50 220 C 150 80, 350 320, 550 180 S 950 60, 1250 200"
          stroke="url(#wave-grad-a)"
          strokeWidth="3"
          filter="url(#wave-glow)"
        />
        <path
          className="hero-wave-path hero-wave-path--2"
          d="M-80 260 C 200 140, 400 300, 600 200 S 1000 100, 1280 240"
          stroke="url(#wave-grad-b)"
          strokeWidth="2"
          filter="url(#wave-glow)"
          opacity="0.7"
        />
        <path
          className="hero-wave-path hero-wave-path--3"
          d="M-30 180 C 180 60, 380 240, 580 140 S 980 40, 1220 160"
          stroke="url(#wave-grad-a)"
          strokeWidth="1.5"
          opacity="0.45"
        />
      </svg>

      <div className="hero-wave-band hero-wave-band--1" />
      <div className="hero-wave-band hero-wave-band--2" />
    </div>
  );
}
