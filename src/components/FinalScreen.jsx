import React from 'react';
import { motion } from 'framer-motion';
import Particles from './Particles';
import { KissMarks, DoodleHeart, DoodleStar } from './SharedUI';

export default function FinalScreen() {
  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{ background: 'transparent' }}
    >
      <Particles count={18} />
      <KissMarks count={6} opacity={0.1} />

      {/* Floating hearts */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`fh-${i}`}
          initial={{ y: '110vh', x: `${Math.random() * 100}vw` }}
          animate={{ y: '-10vh' }}
          transition={{ duration: 8 + Math.random() * 8, repeat: Infinity, delay: i * 0.5, ease: 'linear' }}
          style={{ position: 'absolute', opacity: 0.06 + Math.random() * 0.08 }}
        >
          <DoodleHeart size={12 + Math.random() * 20} color={['#5C0615', '#A83F51', '#D4AF37', '#FFF'][i % 4]} style={{ opacity: 1 }} />
        </motion.div>
      ))}

      {/* Twinkling stars */}
      {Array.from({ length: 8 }, (_, i) => (
        <DoodleStar key={`s-${i}`} size={10 + Math.random() * 10} color="var(--gold)"
          style={{
            position: 'absolute', left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%`,
            opacity: 0.1 + Math.random() * 0.15,
            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out ${Math.random() * 4}s infinite`,
          }}
        />
      ))}

      {/* Elegant central card for Bubu & Dudu replacement */}
      <motion.div
        initial={{ scale: 0, rotate: -4 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, type: 'spring', stiffness: 120 }}
        className="polaroid"
        style={{
          width: '90%',
          maxWidth: 320,
          background: 'var(--warm-white)',
          padding: '12px 12px 35px',
          border: '2px solid var(--gold)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
          position: 'relative',
          marginBottom: '2.5rem',
        }}
      >
        <div className="tape-strip" style={{ top: -12, left: '50%', transform: 'translateX(-50%) rotate(2deg)', background: 'rgba(255,255,255,0.45)', width: 65, height: 18 }} />
        <img
          src="/assets/couple-flowers.jpeg"
          alt="Us Forever"
          style={{ width: '100%', height: 210, objectFit: 'cover', borderRadius: 2 }}
        />
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="font-cursive-lux animate-pulse-glow"
          style={{
            textAlign: 'center', marginTop: 12, color: 'var(--dark-red)', fontSize: '1.6rem', fontWeight: 600
          }}
        >
          Forever & Always
        </motion.div>
      </motion.div>

      {/* Main text */}
      <div style={{ zIndex: 2, textAlign: 'center', padding: '0 1.5rem' }}>
        <motion.h1
          className="font-serif-lux animate-rainbow-glow"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ fontSize: 'clamp(2.2rem, 9vw, 3.8rem)', color: 'var(--cream)', lineHeight: 1.2, fontWeight: 300, letterSpacing: '1px' }}
        >
          I LOVE YOU SO MUCH
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.8, scale: 1 }}
          transition={{ delay: 1.2, type: 'spring' }}
          style={{ marginTop: '0.8rem' }}
        >
          <DoodleHeart size={32} color="var(--gold)" style={{ opacity: 0.7, display: 'inline-block' }} />
        </motion.div>

        <motion.p
          className="font-cursive-lux"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          style={{ color: 'var(--gold)', fontSize: 'clamp(1.4rem, 5vw, 1.8rem)', marginTop: '0.8rem', lineHeight: 1.6, maxWidth: 450 }}
        >
          Today and always, you're my favorite person in the world
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0] }}
          transition={{ delay: 2.2, duration: 3, repeat: Infinity }}
          style={{ marginTop: '1.2rem' }}
        >
          <DoodleStar size={18} color="var(--gold)" style={{ display: 'inline-block', opacity: 1, margin: '0 5px' }} />
          <DoodleStar size={12} color="var(--gold)" style={{ display: 'inline-block', opacity: 1, margin: '0 5px' }} />
          <DoodleStar size={18} color="var(--gold)" style={{ display: 'inline-block', opacity: 1, margin: '0 5px' }} />
        </motion.div>
      </div>
    </motion.div>
  );
}
