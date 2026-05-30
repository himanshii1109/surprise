import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from './Particles';
import { BackButton, ScrapbookDecorations, KissMarks, DoodleHeart, DoodleStar } from './SharedUI';

/* ===== QUESTION 1 ===== */
export function Question1Screen({ onYes, onNo, onBack }) {
  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      style={{ background: 'transparent' }}
    >
      <Particles count={10} />
      <KissMarks count={2} opacity={0.05} />

      <div className="split-layout" style={{ maxWidth: '1000px', gap: '4rem' }}>
        {/* Left Side: BIG Polaroid photo of the couple */}
        <motion.div
          initial={{ scale: 0.8, rotate: -8, opacity: 0 }}
          animate={{ scale: 1, rotate: -4, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
          className="polaroid"
          style={{
            width: '100%',
            maxWidth: 420,
            padding: '16px 16px 52px',
            background: 'var(--warm-white)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
            border: '1px solid #e5ded7',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          <div className="tape-strip" style={{ top: -10, left: '50%', transform: 'translateX(-50%) rotate(3deg)', background: 'rgba(255,255,255,0.45)', width: 70, height: 20 }} />
          <img
            src="/assets/couple-flowers.jpeg"
            alt="Us"
            style={{ width: '100%', height: 320, objectFit: 'cover', borderRadius: 2, display: 'block' }}
          />
          <p className="font-cursive-lux" style={{ textAlign: 'center', marginTop: 12, color: 'var(--dark-red)', fontSize: '1.4rem', fontWeight: 600 }}>
            Forever & Always 🌸
          </p>
        </motion.div>

        {/* Right Side: Editorial details */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <h1 className="font-serif-lux" style={{ fontSize: 'clamp(2.8rem, 7vw, 4.2rem)', color: 'var(--cream)', marginBottom: '0.8rem', fontWeight: 300, lineHeight: 1.1 }}>
            Hi baby,
          </h1>
          <p className="font-cursive-lux" style={{ color: 'var(--gold)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
            the best thing that ever happened to me
          </p>
          <p className="font-serif-lux" style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)', color: 'var(--warm-white)', opacity: 0.9, lineHeight: 1.6, marginBottom: '2.5rem', fontWeight: 300 }}>
            I’ve been secretly working on something special for you. A tiny world made of us, our memories, and lots of love. Wanna unlock it?
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(212,175,55,0.3)', borderColor: 'var(--warm-white)' }}
              whileTap={{ scale: 0.95 }}
              onClick={onYes}
              className="font-serif-lux"
              style={{
                padding: '12px 38px', borderRadius: '50px',
                border: '1px solid var(--gold)',
                background: 'var(--gold)',
                fontSize: '1.15rem', fontWeight: 600,
                color: 'var(--cherry-red)', cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(212,175,55,0.1)',
                transition: 'all 0.2s',
              }}
            >
              Obviously yes 😌
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              onClick={onNo}
              className="font-serif-lux"
              style={{
                padding: '12px 38px', borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.3)',
                background: 'transparent',
                fontSize: '1.15rem', fontWeight: 600,
                color: 'var(--warm-white)', cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              No (not allowed)
            </motion.button>
          </div>
        </motion.div>
      </div>
      {onBack && <BackButton onClick={onBack} />}
    </motion.div>
  );
}

/* ===== QUESTION 1 NO — Premium Access Denied Overlay ===== */
export function Question1NoScreen({ onGoBack }) {
  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'transparent' }}
    >
      <Particles count={15} />
      <KissMarks count={4} opacity={0.08} />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring' }}
        className="scrapbook-card"
        style={{
          maxWidth: 420,
          width: '90%',
          textAlign: 'center',
          zIndex: 2,
          background: 'var(--warm-white)',
          border: '2px solid var(--gold)',
          padding: '2.5rem 1.8rem',
          boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
        }}
      >
        <ScrapbookDecorations />

        <h2
          className="font-serif-lux animate-pulse-glow"
          style={{ fontSize: '2.6rem', color: 'var(--dark-red)', marginBottom: '0.8rem', fontWeight: 400, letterSpacing: '1px' }}
        >
          Access Denied
        </h2>

        <p className="font-cursive-lux" style={{ fontSize: '1.6rem', color: 'var(--gold)', marginBottom: '1.5rem' }}>
          You don't really mean no, do you?
        </p>

        <p className="font-serif-lux" style={{ fontSize: '1.15rem', color: 'var(--brown)', opacity: 0.8, marginBottom: '2rem', lineHeight: 1.6, fontWeight: 300 }}>
          Nice try, my love! But "No" is not a valid answer on your birthday. Let's go back and pick the right option!
        </p>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(92,6,21,0.2)' }}
          whileTap={{ scale: 0.95 }}
          onClick={onGoBack}
          className="font-serif-lux"
          style={{
            padding: '12px 38px', borderRadius: '50px',
            border: '1px solid var(--gold)',
            background: 'var(--accent-crimson)',
            fontSize: '1.2rem', fontWeight: 600,
            color: 'var(--cream)', cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            transition: 'all 0.2s',
          }}
        >
          ← Try Again
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

/* ===== QUESTION 2 — No photo, centered, sliding animation ===== */
export function Question2Screen({ onYes, onBack }) {
  const [tease, setTease] = useState(false);

  const words = ['Are', 'you', 'sure?'];

  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: -100 }}
      style={{ background: 'transparent' }}
    >
      <Particles count={8} />
      <KissMarks count={2} opacity={0.05} />

      {/* Floating decorative elements */}
      <DoodleHeart size={28} style={{ position: 'absolute', top: '12%', left: '8%', transform: 'rotate(-10deg)', fill: 'var(--gold)', opacity: 0.2 }} />
      <DoodleStar size={22} style={{ position: 'absolute', bottom: '15%', right: '10%', opacity: 0.15 }} />
      <DoodleHeart size={18} style={{ position: 'absolute', bottom: '20%', left: '12%', transform: 'rotate(15deg)', fill: 'var(--rose)', opacity: 0.15 }} />

      <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 2rem' }}>

        {/* Animated sliding words */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '1rem' }}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              className="font-serif-lux"
              initial={{ x: i % 2 === 0 ? -120 : 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, type: 'spring', stiffness: 100, damping: 14 }}
              style={{ fontSize: 'clamp(3.5rem, 10vw, 6rem)', color: 'var(--cream)', fontWeight: 300, lineHeight: 1 }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.p
          className="font-cursive-lux"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 100 }}
          style={{ color: 'var(--gold)', fontSize: 'clamp(1.8rem, 5vw, 2.4rem)', marginBottom: '1rem' }}
        >
          Pakka dikhadu?
        </motion.p>

        <div style={{ height: 40 }}>
          <AnimatePresence>
            {tease && (
              <motion.p
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0, x: 80 }}
                className="font-cursive-lux"
                style={{ color: 'var(--rose)', fontSize: 'clamp(1.3rem, 4vw, 1.7rem)', fontWeight: 600 }}
              >
                Arre socho mat, haan bol do! 💕
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, type: 'spring' }}
          style={{ display: 'flex', gap: 20, marginTop: '1rem' }}
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(212,175,55,0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onYes}
            className="font-serif-lux"
            style={{
              padding: '14px 44px', borderRadius: '50px',
              border: '1px solid var(--gold)',
              background: 'var(--gold)',
              fontSize: '1.4rem', fontWeight: 600,
              color: 'var(--cherry-red)', cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Haan Haan!
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTease(true)}
            className="font-serif-lux"
            style={{
              padding: '14px 44px', borderRadius: '50px',
              border: '1px solid rgba(255,255,255,0.3)',
              background: 'transparent',
              fontSize: '1.4rem', fontWeight: 600,
              color: 'var(--warm-white)', cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            Hmm...
          </motion.button>
        </motion.div>
      </div>
      {onBack && <BackButton onClick={onBack} />}
    </motion.div>
  );
}
