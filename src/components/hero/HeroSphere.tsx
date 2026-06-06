export function HeroSphere() {
  const rings = [0, 60, 120];

  return (
    <div className="hero-sphere pointer-events-none relative mx-auto h-56 w-56 md:h-72 md:w-72" aria-hidden>
      <div className="hero-sphere__glow absolute inset-0 rounded-full bg-accent-blue/20 blur-3xl" />

      <svg
        className="hero-sphere__svg relative h-full w-full"
        viewBox="0 0 200 200"
        fill="none"
      >
        <circle
          cx="100"
          cy="100"
          r="88"
          stroke="rgba(59,130,246,0.15)"
          strokeWidth="0.5"
        />
        {rings.map((rotate) => (
          <g key={rotate} transform={`rotate(${rotate} 100 100)`}>
            <ellipse
              cx="100"
              cy="100"
              rx="90"
              ry="36"
              stroke="rgba(96,165,250,0.5)"
              strokeWidth="1"
              className="hero-sphere__ring"
            />
          </g>
        ))}
        <circle cx="100" cy="100" r="4" fill="#60a5fa" className="hero-sphere__core" />
        {[0, 72, 144, 216, 288].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <circle
              key={angle}
              cx={100 + Math.cos(rad) * 88}
              cy={100 + Math.sin(rad) * 88}
              r="2"
              fill="#3b82f6"
              className="hero-sphere__node"
              style={{ animationDelay: `${angle * 0.01}s` }}
            />
          );
        })}
      </svg>
    </div>
  );
}
