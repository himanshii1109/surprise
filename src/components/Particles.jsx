import React, { useMemo } from 'react';

/* Subtle floating SVG hearts and stars — no emojis */
export default function Particles({ count = 15, theme = 'hearts' }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      type: theme === 'hearts' ? (i % 3 === 0 ? 'star' : 'heart') : (i % 2 === 0 ? 'star' : 'dot'),
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 15,
      size: 8 + Math.random() * 14,
      color: '#4A0D17', // Cherry red only
    }));
  }, [count, theme]);

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.type === 'heart' ? (
            <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill={p.color}>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : p.type === 'star' ? (
            <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill={p.color}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ) : (
            <svg width={p.size * 0.5} height={p.size * 0.5} viewBox="0 0 10 10">
              <circle cx="5" cy="5" r="4" fill={p.color} />
            </svg>
          )}
        </span>
      ))}
    </div>
  );
}
