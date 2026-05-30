import React from 'react';
import { motion } from 'framer-motion';
import Particles from './Particles';
import { CutoutLetters, ConfettiBurst, NextButton, BackButton, KissMarks, DoodleHeart, DoodleStar } from './SharedUI';

export default function WishScreen({ onNext, onBack }) {
  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'transparent' }}
    >
      <Particles count={15} />
      <ConfettiBurst count={30} />
      <KissMarks count={5} opacity={0.1} />

      {/* Floating SVG hearts */}
      {Array.from({ length: 10 }, (_, i) => (
        <motion.div
          key={`h-${i}`}
          initial={{ y: '110vh', x: `${Math.random() * 100}vw` }}
          animate={{ y: '-10vh' }}
          transition={{ duration: 7 + Math.random() * 8, repeat: Infinity, delay: i * 0.6, ease: 'linear' }}
          style={{ position: 'absolute', opacity: 0.08 + Math.random() * 0.08 }}
        >
          <DoodleHeart size={14 + Math.random() * 18} color={['#5C0615', '#A83F51', '#D4AF37'][i % 3]} style={{ opacity: 1 }} />
        </motion.div>
      ))}

      {/* Red bow */}
      <img src="./assets/red-bow.png" alt="" style={{ position: 'absolute', top: '5%', right: '10%', width: 45, opacity: 0.15, transform: 'rotate(10deg)', pointerEvents: 'none' }} />

      <div style={{ zIndex: 2, textAlign: 'center', padding: '0 1rem' }}>
        <motion.h1
          className="font-serif-lux"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: 'clamp(3rem, 9vw, 5.5rem)', color: 'var(--cream)', fontWeight: 300, lineHeight: 1.1 }}
        >
          Happy Birthday
        </motion.h1>
        
        <motion.h2
          className="font-cursive-lux animate-pulse-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ fontSize: 'clamp(3.5rem, 10vw, 6.2rem)', color: 'var(--gold)', fontWeight: 400, marginTop: '5px', marginBottom: '15px' }}
        >
          Bubudi
        </motion.h2>

        <motion.p
          className="font-serif-lux"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          style={{
            fontSize: 'clamp(1rem, 3.2vw, 1.6rem)',
            color: 'var(--cream)',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            fontWeight: 300,
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6
          }}
        >
          22 years of being charming, smart, and super cute ✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ delay: 1.8, type: 'spring' }}
          style={{ marginTop: '1.5rem' }}
        >
          <DoodleHeart size={24} color="var(--dark-red)" style={{ opacity: 0.6, display: 'inline-block' }} />
        </motion.div>

        <NextButton onClick={onNext} />
        {onBack && <BackButton onClick={onBack} />}
      </div>
    </motion.div>
  );
}
