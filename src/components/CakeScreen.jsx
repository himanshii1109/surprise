import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from './Particles';
import { ConfettiBurst, NextButton, ScrapbookDecorations, KissMarks } from './SharedUI';

export default function CakeScreen({ onNext }) {
  const [blown, setBlown] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleBlow = () => {
    setBlown(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      style={{ background: 'transparent' }}
    >
      <Particles count={8} theme="stars" />
      {showConfetti && <ConfettiBurst count={45} />}
      <KissMarks count={2} opacity={0.05} />

      {/* Elegant floating instruction instead of bear */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 0.8 }}
        className="font-cursive-lux"
        style={{
          position: 'absolute', top: '15%',
          fontSize: '1.4rem',
          color: 'var(--gold)',
          zIndex: 2,
        }}
      >
        {blown ? 'Yayyy!' : 'make a wish...'}
      </motion.div>

      {/* Title */}
      <div style={{ textAlign: 'center', zIndex: 2, marginBottom: '2.5rem' }}>
        <motion.h1
          className="font-serif-lux animate-bounce-slow"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontSize: 'clamp(2.5rem, 10vw, 4rem)',
            color: 'var(--cream)',
            fontWeight: 400,
            marginBottom: '0.2rem',
          }}
        >
          Blow the Candles
        </motion.h1>
      </div>

      {/* Birthday Cake */}
      <div style={{ position: 'relative', zIndex: 2, transform: 'scale(1.3)' }}>
        <ScrapbookDecorations />
        {/* Tier 3 (top) */}
        <div style={{ width: 80, height: 40, background: 'linear-gradient(180deg, var(--blush), var(--dusty-pink))', borderRadius: '6px 6px 0 0', margin: '0 auto', position: 'relative', border: '1px solid rgba(0,0,0,0.06)' }}>
          {[20, 40, 60].map((left, ci) => (
            <div key={ci} style={{ position: 'absolute', top: -28, left: left - 4 }}>
              <div style={{ width: 5, height: 20, background: 'linear-gradient(180deg, var(--gold), var(--soft-gold))', borderRadius: '2px 2px 0 0' }} />
              <AnimatePresence>
                {!blown && (
                  <motion.div
                    className="flame"
                    exit={{ opacity: 0, scale: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      position: 'absolute', top: -12, left: -3,
                      width: 11, height: 14,
                      background: 'radial-gradient(ellipse, #C8A951, #C44B5C, transparent)',
                      borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                      filter: 'blur(0.5px)',
                    }}
                  />
                )}
              </AnimatePresence>
              {blown && <div className="smoke-puff" style={{ top: -18, left: -3 }} />}
            </div>
          ))}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 6, background: 'rgba(255,255,255,0.3)' }} />
        </div>
        {/* Tier 2 */}
        <div style={{ width: 120, height: 45, background: 'linear-gradient(180deg, var(--soft-cream), #E8DDD0)', margin: '0 auto', border: '1px solid rgba(0,0,0,0.06)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 8, left: 0, right: 0, height: 5, background: 'rgba(139,26,26,0.08)' }} />
          <div style={{ position: 'absolute', bottom: 8, left: 0, right: 0, height: 5, background: 'rgba(139,26,26,0.08)' }} />
        </div>
        {/* Tier 1 */}
        <div style={{ width: 160, height: 50, background: 'linear-gradient(180deg, var(--warm-white), var(--soft-cream))', margin: '0 auto', borderRadius: '0 0 8px 8px', border: '1px solid rgba(0,0,0,0.06)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 12, left: 0, right: 0, height: 6, background: 'rgba(200,169,81,0.12)' }} />
          {[20, 50, 80, 110, 140].map((l, di) => (
            <div key={di} style={{ position: 'absolute', top: -5, left: l, width: 8, height: 10 + Math.random() * 6, background: 'var(--blush)', borderRadius: '0 0 4px 4px', opacity: 0.5 }} />
          ))}
        </div>
        <div style={{ width: 185, height: 12, background: 'linear-gradient(180deg, #E8DDD0, #D8CCC0)', borderRadius: '0 0 50% 50%', margin: '0 auto', boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }} />
      </div>

      {/* Button */}
      <div style={{ zIndex: 2, marginTop: '2.5rem' }}>
        <AnimatePresence mode="wait">
          {!blown ? (
            <motion.button
              key="blow"
              whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(92,6,21,0.15)', borderColor: 'var(--gold)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBlow}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="font-serif-lux"
              style={{
                padding: '10px 38px', borderRadius: '50px',
                border: '1px solid var(--accent-crimson)', background: 'var(--warm-white)',
                fontSize: '1.2rem', fontWeight: 600,
                color: 'var(--dark-red)', cursor: 'pointer',
                boxShadow: '0 2px 12px rgba(139,26,26,0.08)',
                letterSpacing: '1px',
                transition: 'all 0.2s',
              }}
            >
              Blow!
            </motion.button>
          ) : (
            <NextButton key="next" onClick={onNext} />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
