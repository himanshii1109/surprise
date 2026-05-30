import React from 'react';
import { motion } from 'framer-motion';

/* ===== KISS MARKS — scattered decorative elements ===== */
export function KissMarks({ count = 4, opacity = 0.12 }) {
  const positions = [
    { top: '8%', right: '10%', rotate: -15, scale: 0.8 },
    { bottom: '12%', left: '8%', rotate: 20, scale: 0.7 },
    { top: '25%', left: '5%', rotate: -30, scale: 0.6 },
    { bottom: '20%', right: '6%', rotate: 10, scale: 0.9 },
    { top: '50%', right: '3%', rotate: -5, scale: 0.5 },
    { top: '15%', left: '15%', rotate: 25, scale: 0.65 },
  ];
  return (
    <>
      {positions.slice(0, count).map((pos, i) => (
        <img
          key={i}
          src="./assets/kiss-mark.png"
          alt=""
          style={{
            position: 'absolute',
            ...pos,
            width: 50 * (pos.scale || 1),
            height: 'auto',
            opacity,
            transform: `rotate(${pos.rotate}deg)`,
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      ))}
    </>
  );
}

/* ===== DOODLE HEART (SVG) ===== */
export function DoodleHeart({ size = 20, color = '#8B1A1A', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ opacity: 0.3, ...style }}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

/* ===== DOODLE STAR (SVG) ===== */
export function DoodleStar({ size = 18, color = '#C8A951', style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ opacity: 0.3, ...style }}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/* ===== NEWSPAPER CUT-OUT LETTERS ===== */
const cutoutStyles = ['style-a', 'style-b', 'style-c', 'style-d', 'style-e', 'style-f'];

export function CutoutLetters({ text, size = '2rem' }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3px', lineHeight: 1.4 }}>
      {text.split('').map((char, i) => {
        if (char === ' ') return <span key={i} style={{ width: '14px' }} />;
        const style = cutoutStyles[i % cutoutStyles.length];
        const rotation = (Math.random() - 0.5) * 6;
        return (
          <motion.span
            key={i}
            className={`cutout-letter ${style}`}
            initial={{ scale: 0, y: 20, rotate: rotation * 3 }}
            animate={{ scale: 1, y: 0, rotate: rotation }}
            transition={{ delay: i * 0.04, type: 'spring', stiffness: 300, damping: 15 }}
            style={{ fontSize: size }}
          >
            {char}
          </motion.span>
        );
      })}
    </div>
  );
}

/* ===== CONFETTI BURST ===== */
const CONFETTI_COLORS = ['#8B1A1A', '#C8A951', '#C44B5C', '#5C3D2E', '#D4A0A0', '#E8C4B8', '#8FAE7E', '#2C3E50'];

export function ConfettiBurst({ count = 40 }) {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50 }}>
      {Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * 360;
        const distance = 200 + Math.random() * 300;
        const x = Math.cos((angle * Math.PI) / 180) * distance;
        const y = Math.sin((angle * Math.PI) / 180) * distance - 200;
        return (
          <motion.div
            key={i}
            initial={{ x: '50vw', y: '50vh', scale: 1, opacity: 1 }}
            animate={{ x: `calc(50vw + ${x}px)`, y: `calc(50vh + ${y}px)`, scale: 0, opacity: 0, rotate: Math.random() * 720 }}
            transition={{ duration: 1.5 + Math.random(), ease: 'easeOut' }}
            style={{
              position: 'absolute',
              width: 6 + Math.random() * 6,
              height: 6 + Math.random() * 6,
              background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
              borderRadius: Math.random() > 0.5 ? '50%' : '1px',
            }}
          />
        );
      })}
    </div>
  );
}

/* ===== SPARKLE FLASH ===== */
export function SparkleFlash() {
  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed', inset: 0,
        background: 'radial-gradient(circle, rgba(200,169,81,0.25), transparent 70%)',
        zIndex: 49, pointerEvents: 'none',
      }}
    />
  );
}

/* ===== SCRAPBOOK DECORATIONS ===== */
export function ScrapbookDecorations() {
  return (
    <>
      <div className="tape-strip" style={{ top: -8, left: 20 }} />
      <div className="tape-strip" style={{ top: -8, right: 20, transform: 'rotate(5deg)' }} />
      <DoodleHeart size={14} style={{ position: 'absolute', top: 10, right: 10 }} />
      <DoodleStar size={12} style={{ position: 'absolute', bottom: 10, left: 10 }} />
      <DoodleStar size={10} style={{ position: 'absolute', bottom: 12, right: 14, opacity: 0.2 }} />
    </>
  );
}

/* ===== NEXT BUTTON — Editorial Style ===== */
export function NextButton({ onClick, label = 'Next →' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      style={{ display: 'flex', marginTop: '1.5rem', justifyContent: 'center' }}
    >
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 6px 20px rgba(92,6,21,0.3)', borderColor: 'var(--cream)' }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="font-serif-lux"
        style={{
          padding: '10px 32px',
          borderRadius: '50px',
          border: '1px solid var(--gold)',
          background: 'var(--accent-crimson)',
          fontSize: '1.15rem',
          fontWeight: 600,
          letterSpacing: '1px',
          color: 'var(--cream)',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(92,6,21,0.2)',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
      >
        {label}
      </motion.button>
    </motion.div>
  );
}

/* ===== SCATTERED PHOTO POLAROIDS ===== */
const ALL_PHOTOS = Array.from({ length: 26 }, (_, i) => `./assets/photo${i + 1}.jpeg`);

const SCATTER_POSITIONS = [
  { top: '2%',  left: '-1%',   rotate: -9,  w: 120 },
  { top: '1%',  right: '0%',   rotate:  7,  w: 115 },
  { bottom: '3%', left: '0%',  rotate: 11,  w: 118 },
  { bottom: '2%', right: '0%', rotate: -12, w: 122 },
  { top: '38%', left: '-2%',   rotate: 14,  w: 108 },
  { top: '42%', right: '-1%',  rotate: -8,  w: 112 },
  { bottom: '28%', left: '1%', rotate:  6,  w: 105 },
  { bottom: '25%', right: '1%',rotate: -10, w: 110 },
];

export function ScatteredPhotos({ count = 3, seed = 0 }) {
  const picks = Array.from({ length: count }, (_, i) => {
    const photoIdx  = (seed * 3 + i * 7 + 1) % ALL_PHOTOS.length;
    const posIdx    = (seed + i * 3) % SCATTER_POSITIONS.length;
    return { src: ALL_PHOTOS[photoIdx], pos: SCATTER_POSITIONS[posIdx] };
  });

  return (
    <>
      {picks.map(({ src, pos }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.7, rotate: pos.rotate - 5 }}
          animate={{ opacity: 1, scale: 1,   rotate: pos.rotate }}
          transition={{ delay: 0.3 + i * 0.15, type: 'spring', stiffness: 120, damping: 14 }}
          style={{
            position: 'absolute',
            ...pos,
            width: pos.w,
            background: 'var(--warm-white)',
            padding: '7px 7px 26px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
            border: '1px solid #e5ded7',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        >
          {/* tape strip */}
          <div style={{
            position: 'absolute', top: -10, left: '50%',
            transform: 'translateX(-50%) rotate(-2deg)',
            width: 44, height: 16,
            background: 'rgba(255,255,220,0.55)',
            backdropFilter: 'blur(1px)',
          }} />
          <img
            src={src}
            alt=""
            style={{ width: '100%', height: pos.w * 0.85, objectFit: 'cover', display: 'block' }}
          />
        </motion.div>
      ))}
    </>
  );
}

/* ===== BACK BUTTON ===== */
export function BackButton({ onClick }) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="font-serif-lux"
      style={{
        position: 'fixed', bottom: 28, right: 28,
        padding: '9px 24px',
        borderRadius: '50px',
        border: '1px solid var(--gold)',
        background: 'var(--warm-white)',
        fontSize: '1rem',
        fontWeight: 600,
        color: 'var(--cherry-red)',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        zIndex: 100,
      }}
    >
      ← Back
    </motion.button>
  );
}
