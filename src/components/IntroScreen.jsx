import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Particles from './Particles';
import { DoodleHeart, DoodleStar } from './SharedUI';

export default function IntroScreen({ onNext }) {

  // Auto-advance after 4 seconds, or user can tap
  useEffect(() => {
    const t = setTimeout(() => onNext(), 5000);
    return () => clearTimeout(t);
  }, [onNext]);

  const words = ['Wanna', 'see', 'something', 'crazy!'];

  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6 }}
      style={{ background: 'transparent', cursor: 'pointer' }}
      onClick={onNext}
    >
      <Particles count={18} theme="stars" />

      {/* Decorative floating doodles */}
      <DoodleHeart size={28} style={{ position: 'absolute', top: '12%', left: '8%', transform: 'rotate(-15deg)', fill: 'var(--gold)', opacity: 0.25 }} />
      <DoodleHeart size={18} style={{ position: 'absolute', bottom: '18%', right: '10%', transform: 'rotate(10deg)', fill: 'var(--rose)', opacity: 0.2 }} />
      <DoodleStar size={20} style={{ position: 'absolute', top: '20%', right: '12%', opacity: 0.2 }} />
      <DoodleStar size={14} style={{ position: 'absolute', bottom: '25%', left: '12%', opacity: 0.18 }} />
      <DoodleHeart size={14} style={{ position: 'absolute', top: '55%', left: '6%', transform: 'rotate(-5deg)', fill: 'var(--blush)', opacity: 0.2 }} />

      {/* Main content */}
      <div style={{
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 2rem',
        gap: '1.5rem',
      }}>

        {/* Animated words */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem 1.4rem', justifyContent: 'center' }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="font-serif-lux"
              initial={{ opacity: 0, y: 80, rotate: i % 2 === 0 ? -6 : 6 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                delay: i * 0.18,
                type: 'spring',
                stiffness: 90,
                damping: 12,
              }}
              style={{
                fontSize: word === 'crazy!' ? 'clamp(4.5rem, 14vw, 8rem)' : 'clamp(3rem, 10vw, 6rem)',
                color: word === 'crazy!' ? 'var(--gold)' : 'var(--cream)',
                fontWeight: 300,
                lineHeight: 1.05,
                display: 'inline-block',
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          className="font-cursive-lux"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          style={{
            color: 'var(--warm-white)',
            fontSize: 'clamp(1.4rem, 4vw, 2rem)',
            opacity: 0.85,
            marginTop: '0.5rem',
          }}
        >
          — a birthday surprise, just for you 🎁
        </motion.p>

        {/* Tap to continue hint */}
        <motion.p
          className="font-serif-lux"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ delay: 2.2, duration: 2, repeat: Infinity }}
          style={{
            color: 'var(--gold)',
            fontSize: '1rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginTop: '1rem',
          }}
        >
          tap anywhere to begin
        </motion.p>

      </div>
    </motion.div>
  );
}
