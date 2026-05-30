import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Particles from './Particles';
import { SparkleFlash, KissMarks, DoodleHeart, DoodleStar } from './SharedUI';

// REPLACE PASSWORD HERE
const CORRECT_PIN = '2809';

export default function LockScreen({ onUnlock }) {
  const [pin, setPin] = useState('');
  const [shake, setShake] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const handleKey = (digit) => {
    if (pin.length >= 4) return;
    setPin(pin + digit);
  };

  const handleBackspace = () => setPin(pin.slice(0, -1));

  const handleEnter = () => {
    if (pin === CORRECT_PIN) {
      setUnlocked(true);
      setTimeout(() => onUnlock(), 1200);
    } else {
      setWrong(true);
      setShake(true);
      setTimeout(() => { setShake(false); setWrong(false); setPin(''); }, 800);
    }
  };

  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, '×', 0, '✓'];

  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ scale: 1.3, opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{ background: 'transparent' }}
    >
      <Particles count={10} />
      {unlocked && <SparkleFlash />}
      <KissMarks count={3} opacity={0.06} />

      {/* Decorative doodles */}
      <DoodleHeart size={20} style={{ position: 'absolute', top: '6%', left: '10%', transform: 'rotate(-15deg)', fill: 'var(--gold)' }} />
      <DoodleStar size={16} style={{ position: 'absolute', top: '10%', right: '12%', transform: 'rotate(10deg)' }} />

      <div className="split-layout">
        {/* Left Side: Polaroid photo frame */}
        <motion.div
          initial={{ scale: 0, rotate: -6 }}
          animate={{ scale: 1, rotate: -4 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
          className="polaroid"
          style={{
            width: '100%',
            maxWidth: 380,
            padding: '14px 14px 44px',
            background: 'var(--warm-white)',
            boxShadow: '0 15px 50px rgba(0,0,0,0.4)',
            border: '1px solid #e5ded7',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <div className="tape-strip" style={{ top: -10, left: '50%', transform: 'translateX(-50%) rotate(2deg)', background: 'rgba(255,255,255,0.45)', width: 50, height: 16 }} />
          <img
            src="./assets/couple-photo.jpg"
            alt="Us"
            style={{ width: '100%', height: 280, objectFit: 'cover', borderRadius: 2, background: 'var(--soft-cream)', display: 'block' }}
          />
          <p className="font-cursive-lux" style={{ textAlign: 'center', marginTop: 10, color: 'var(--dark-red)', fontSize: '1.3rem', fontWeight: 600 }}>
            Forever & Always
          </p>
        </motion.div>

        {/* Right Side: Passcode Input */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          {/* Title */}
          <motion.h1
            className="font-serif-lux"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 3.8rem)',
              color: 'var(--cream)',
              marginBottom: '0.8rem',
              fontWeight: 300,
              lineHeight: 1.2
            }}
          >
            Enter Secret PIN
          </motion.h1>

          <motion.p
            className="font-cursive-lux"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              color: 'var(--gold)',
              fontSize: '1.4rem',
              marginBottom: '1.5rem',
            }}
          >
            to unlock your birthday surprise!
          </motion.p>

          {/* PIN Dots */}
          <motion.div
            animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', gap: 14, marginBottom: '2rem' }}
          >
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={pin.length > i ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.2 }}
                style={{
                  width: 15, height: 15, borderRadius: '50%',
                  border: `2px solid ${wrong ? '#C44B5C' : 'var(--gold)'}`,
                  background: pin.length > i ? (wrong ? '#C44B5C' : 'var(--gold)') : 'transparent',
                  transition: 'all 0.2s',
                }}
              />
            ))}
          </motion.div>

          {/* Keypad */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, maxWidth: 220 }}>
            {keys.map((key) => (
              <motion.button
                key={key}
                className="keypad-btn"
                whileTap={{ scale: 0.85 }}
                onClick={() => {
                  if (key === '×') handleBackspace();
                  else if (key === '✓') handleEnter();
                  else handleKey(String(key));
                }}
                style={
                  key === '✓'
                    ? { background: 'var(--soft-cream)', color: 'var(--sage)', borderColor: 'var(--sage)' }
                    : key === '×'
                    ? { background: 'var(--soft-cream)', color: 'var(--rose)', borderColor: 'var(--rose)' }
                    : { background: 'var(--warm-white)', color: 'var(--cherry-red)', borderColor: 'var(--soft-cream)' }
                }
              >
                {key}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
