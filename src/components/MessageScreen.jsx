import React from 'react';
import { motion } from 'framer-motion';
import Particles from './Particles';
import { NextButton, BackButton, KissMarks, DoodleHeart, DoodleStar } from './SharedUI';

export default function MessageScreen({ onNext, onBack }) {
  const words = "Someone I love was born 22 years ago".split(' ');

  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      style={{ background: 'transparent' }}
    >
      <Particles count={8} theme="stars" />
      <KissMarks count={3} opacity={0.06} />

      {/* Decorations */}
      <DoodleHeart size={22} style={{ position: 'absolute', top: '10%', left: '8%', transform: 'rotate(-10deg)', fill: 'var(--gold)' }} />
      <DoodleStar size={18} style={{ position: 'absolute', top: '8%', right: '10%' }} />

      <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 2rem' }}>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <h1 className="font-serif-lux" style={{ fontSize: 'clamp(3.2rem, 10vw, 5.5rem)', color: 'var(--cream)', marginBottom: '0.8rem', fontWeight: 300, lineHeight: 1.2 }}>
            Well hello there,
          </h1>
          <p className="font-cursive-lux" style={{ color: 'var(--warm-white)', fontSize: '2.4rem', marginBottom: '2.5rem' }}>
            happy birthday my love!
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '3rem', justifyContent: 'center' }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.15 } },
              }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', justifyContent: 'center' }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  className="font-serif-lux"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  style={{ fontSize: 'clamp(1.6rem, 5vw, 2.2rem)', color: 'var(--warm-white)', fontWeight: 300 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
          >
            <NextButton onClick={onNext} />
          </motion.div>
        </motion.div>
      </div>
      {onBack && <BackButton onClick={onBack} />}
    </motion.div>
  );
}
