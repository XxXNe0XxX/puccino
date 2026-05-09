export function Star({ size = 16, color, fill = "currentColor", style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{ display: "inline-block", color, ...style }}
    >
      <path
        d="M12 2 L14.5 8.5 L21.5 9.2 L16 13.8 L17.8 20.7 L12 16.9 L6.2 20.7 L8 13.8 L2.5 9.2 L9.5 8.5 Z"
        fill={fill}
      />
    </svg>
  );
}

export function Rays({ size = 200, count = 24, color = "currentColor" }) {
  const lines = [];
  for (let i = 0; i < count; i += 1) {
    const angle = (i / count) * 360;
    const long = i % 2 === 0;
    lines.push(
      <line
        key={i}
        x1="100"
        y1={long ? "20" : "32"}
        x2="100"
        y2={long ? "8" : "16"}
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        transform={`rotate(${angle} 100 100)`}
      />,
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" aria-hidden="true">
      {lines}
    </svg>
  );
}

export function Diamond({ size = 80, label }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <rect
        x="14"
        y="14"
        width="72"
        height="72"
        transform="rotate(45 50 50)"
        fill="currentColor"
      />
      {label && (
        <text
          x="50"
          y="56"
          textAnchor="middle"
          fontFamily="Alfa Slab One, serif"
          fontSize="22"
          fill="var(--warm-white)"
        >
          {label}
        </text>
      )}
    </svg>
  );
}

export function Placeholder({
  label,
  ratio = "16/10",
  tone,
  mark,
  style,
  className = "",
}) {
  return (
    <div
      className={`ph ${className}`}
      data-tone={tone}
      style={{ aspectRatio: ratio, ...style }}
    >
      {mark && (
        <div className="ph-mark">
          <Star size={20} />
        </div>
      )}
      <span className="ph-label">{label}</span>
    </div>
  );
}

export function Divider({ children }) {
  return (
    <div className="divider">
      {children ? <span>{children}</span> : <Star size={14} />}
    </div>
  );
}

export function Wordmark({ size = 28, onClick }) {
  return (
    <button
      className="nav-logo"
      onClick={onClick}
      aria-label="Puccino's home"
      style={{ fontSize: size }}
    >
      PUCCINO<span className="apos">'</span>S
    </button>
  );
}
