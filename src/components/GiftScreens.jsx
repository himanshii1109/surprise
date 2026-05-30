import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from './Particles';
import { BackButton, ScrapbookDecorations, CutoutLetters, NextButton, KissMarks, DoodleHeart, DoodleStar } from './SharedUI';

/* ===== GIFT 1 — LOVE LETTER (Envelope + Letter) ===== */
export function Gift1Envelope({ onOpen, onBack }) {
  const [flapOpen, setFlapOpen] = useState(false);

  const handleClick = () => {
    if (!flapOpen) {
      setFlapOpen(true);
      setTimeout(() => onOpen(), 1200);
    }
  };

  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'rgba(31,4,8,0.85)' }}
    >
      <Particles count={6} theme="stars" />
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
        onClick={handleClick}
        className="envelope"
        style={{ zIndex: 2, cursor: 'pointer', background: 'linear-gradient(135deg, var(--cream), #E8DDD0)', border: '2px solid var(--gold)' }}
      >
        <div className={`envelope-flap ${flapOpen ? 'open' : ''}`} style={{ background: 'linear-gradient(135deg, #E0D4C4, #D8CCC0)' }} />
        <DoodleHeart size={30} color="var(--dark-red)" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.6, zIndex: 3 }} />
        {flapOpen && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: -20, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-cursive-lux"
            style={{
              position: 'absolute', top: '25%', left: '10%', right: '10%',
              background: 'var(--warm-white)', borderRadius: 6, padding: '10px',
              fontSize: '1.15rem', color: 'var(--brown)',
              textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              border: '1px solid #e8e0d4',
            }}
          >
            Opening love letter...
          </motion.div>
        )}
      </motion.div>
      <p className="font-cursive-lux" style={{ color: 'var(--cream)', marginTop: '1.5rem', fontSize: '1.4rem', zIndex: 2 }}>
        Tap the envelope to open
      </p>
      <BackButton onClick={onBack} />
    </motion.div>
  );
}

export function Gift1Letter({ onBack }) {
  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{ background: 'transparent', overflowY: 'auto', justifyContent: 'center', padding: '2rem 1rem' }}
    >
      <Particles count={8} />
      <KissMarks count={3} opacity={0.05} />

      <div className="split-layout" style={{ maxWidth: '850px', alignSelf: 'center', height: 'auto', zIndex: 2 }}>
        
        {/* Left Side: Postage Stamp Portrait */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 0.1 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {/* Clean Polaroid style instead of dark red box */}
          <div className="polaroid" style={{ width: '100%', maxWidth: '260px', padding: '12px 12px 32px', background: '#FFF', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', border: '1px solid #EBE4D8', transform: 'rotate(-4deg)' }}>
            <div className="tape-strip" style={{ top: -12, left: '50%', transform: 'translateX(-50%) rotate(3deg)', background: 'rgba(255,255,255,0.45)', width: 65, height: 18 }} />
            <img
              src="./assets/couple-photo.jpg"
              alt="Sweet Memories"
              style={{ width: '100%', height: 260, objectFit: 'cover', borderRadius: '2px', display: 'block' }}
            />
          </div>
        </motion.div>

        {/* Right Side: The Sweet Letter Typography */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'center', padding: '1rem', maxWidth: '440px' }}
        >
          <h1 className="font-cursive-lux animate-pulse-glow" style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', color: 'var(--cream)', fontWeight: 'bold', marginBottom: '0.1rem', lineHeight: 1.1 }}>
            The sweet
          </h1>
          <h2 className="font-serif-lux" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--warm-white)', fontWeight: 300, marginTop: '-5px', textTransform: 'uppercase', letterSpacing: '2px' }}>
            Letter
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '8px 0 12px' }}>
            <span className="font-serif-lux" style={{ color: 'var(--gold)', fontSize: '1.1rem', fontWeight: 'bold' }}>From:</span>
            <span className="font-cursive-lux" style={{ color: 'var(--warm-white)', fontSize: '1.4rem', borderBottom: '2px solid #C0392B', paddingBottom: '2px' }}>Your Bubudi</span>
          </div>
          <div className="font-caveat" style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.35rem)', color: 'var(--warm-white)', opacity: 0.95, lineHeight: 1.3, fontWeight: 400 }}>
            <p style={{ marginBottom: '0.75rem' }}>
              Happy Birthday, my love. You make my days brighter, my heart calmer, and my life happier just by being in it.
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              Thank you for being my safe place and my favorite person. I hope this year brings you everything you've wished for.
            </p>
            <p>
              I'll always choose you. I love you endlessly.
            </p>
          </div>
        </motion.div>

      </div>

      <BackButton onClick={onBack} />
    </motion.div>
  );
}

/* ===== GIFT 2 — PHOTO MEMORIES (Vintage Digital Camera Back) ===== */
export function Gift2Screen({ onBack }) {
  const [current, setCurrent] = useState(0);

  const [shuffledPhotos] = useState(() => {
    const pool = [
      './assets/couple-flowers.jpeg',
      ...Array.from({ length: 26 }, (_, i) => `./assets/photo${i + 1}.jpeg`)
    ];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool;
  });

  const photos = shuffledPhotos.slice(0, 6).map((src, i) => ({
    src,
    caption: `Memory #${i + 1}`
  }));

  const sidePhotos = shuffledPhotos.slice(6, 8);

  const next = () => setCurrent((c) => (c + 1) % photos.length);
  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);

  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'transparent', overflowY: 'auto', justifyContent: 'center', padding: '2rem 1rem' }}
    >
      <Particles count={10} />
      <KissMarks count={3} opacity={0.05} />

      {/* Torn paper "I love you" repeat in Top-Left */}
      <div style={{
        position: 'absolute', top: 15, left: -10,
        background: '#FFF', padding: '6px 20px',
        transform: 'rotate(-8deg)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        border: '1px dashed #CCC', opacity: 0.8, zIndex: 3, maxWidth: '140px'
      }}>
        <p className="font-cursive-lux" style={{ fontSize: '0.75rem', color: '#8b1a1a', lineHeight: 1.4, whiteSpace: 'pre-line' }}>
          I love you I love you I love you I love you
        </p>
      </div>

      {/* Orchid and Cursive in Top-Right */}
      <div style={{
        position: 'absolute', top: 15, right: 15,
        textAlign: 'right', zIndex: 3, maxWidth: '220px'
      }}>
        <p className="font-cursive-lux" style={{ fontSize: '0.85rem', color: 'var(--gold)', lineHeight: 1.3 }}>
          I love you so much, love you the best. You are my love
        </p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1" style={{ float: 'right', marginTop: '4px', opacity: 0.6 }}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      </div>

      {/* Split camera and polaroids layout */}
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '3rem', width: '100%', maxWidth: '850px', flexWrap: 'wrap', marginTop: '3.5rem', marginBottom: '2rem', zIndex: 2 }}>
        
        {/* Left Side: Digital Camera & Captions */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', maxWidth: '440px', width: '100%' }}>
          <div className="camera-back">
            {/* Bezel details */}
            <div style={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)', width: 60, height: 3, background: '#FFF', opacity: 0.5, borderRadius: 1 }} />
            
            {/* LCD Screen Display */}
            <div className="camera-lcd">
              <img
                src={photos[current].src}
                alt="Us"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Screen Bezel Info overlay */}
              <div style={{ position: 'absolute', bottom: 4, left: 6, right: 6, display: 'flex', justifyContent: 'space-between', zIndex: 2 }}>
                <span style={{ fontSize: '0.55rem', color: '#FFF', textShadow: '1px 1px 2px #000', opacity: 0.8 }}>PLAY 00{current+1}</span>
                <span style={{ fontSize: '0.55rem', color: 'var(--gold)', textShadow: '1px 1px 2px #000', fontWeight: 'bold' }}>100%</span>
              </div>
            </div>

            {/* Camera Bezel Controls on Right */}
            <div className="camera-controls">
              <div style={{ display: 'flex', gap: 4 }}>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#F1948A' }} /> {/* LED */}
                <div className="camera-button" />
              </div>
              <div className="camera-lens-profile" />
              <div className="camera-dpad" />
              <div className="camera-button" style={{ width: 14, height: 6, borderRadius: '2px' }} />
            </div>
          </div>

          {/* Dangling heart tags below camera */}
          <div style={{ display: 'flex', gap: '16px', marginTop: '0.2rem' }}>
            <div style={{ background: '#FF9BB4', padding: '5px 12px', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 10px rgba(0,0,0,0.15)', transform: 'rotate(-4deg)' }}>
              <span className="font-cursive-lux" style={{ fontSize: '0.72rem', color: '#1F0408', fontWeight: 'bold' }}>WILL YOU BE MINE?</span>
            </div>
            <div style={{ background: '#FFF', padding: '4px 12px', borderRadius: '4px', border: '1px solid #DDD', boxShadow: '0 4px 10px rgba(0,0,0,0.15)', transform: 'rotate(6deg)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span className="font-cursive-lux" style={{ fontSize: '0.75rem', color: 'var(--dark-red)' }}>💖</span>
              <span className="font-serif-lux" style={{ fontSize: '0.68rem', color: 'var(--dark-brown)', fontWeight: 'bold' }}>My Cherub</span>
            </div>
          </div>

          {/* Caption with vintage camera icon */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '0.5rem', background: 'rgba(0,0,0,0.25)', padding: '12px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(5px)', width: '100%', boxSizing: 'border-box' }}>
            {/* Detailed small vintage camera graphic */}
            <div style={{
              flexShrink: 0, width: '42px', height: '26px', background: '#E0D8CC', borderRadius: '3px', position: 'relative', border: '1px solid #999', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', border: '1.5px solid #555', background: '#333' }} />
              <div style={{ position: 'absolute', top: '-3px', left: '8px', width: '8px', height: '3px', background: '#BDB76B', borderRadius: '1px' }} />
              <div style={{ position: 'absolute', top: '2px', right: '4px', width: '2.5px', height: '2.5px', borderRadius: '50%', background: 'red' }} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div className="font-cursive-lux animate-pulse-glow" style={{ fontSize: '1.45rem', color: 'var(--cream)', fontWeight: 'bold', lineHeight: 1 }}>
                With u Forever
              </div>
              <p className="font-serif-lux" style={{ fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.5px', opacity: 0.9, textTransform: 'uppercase', marginTop: '3px', lineHeight: 1.2 }}>
                Making you mine was the best decision I have ever made
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Polaroid Photo Overlays */}
        <div style={{ position: 'relative', width: '250px', height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* Back Polaroid */}
          <div style={{
            position: 'absolute', top: 10, left: 0,
            transform: 'rotate(-10deg)', width: '140px', padding: '8px 8px 24px 8px',
            boxShadow: '0 8px 22px rgba(0,0,0,0.3)', background: '#FEFDFB',
            zIndex: 1, borderRadius: '2px'
          }}>
            <img src={sidePhotos[0]} alt="" style={{ width: '100%', height: 110, objectFit: 'cover', display: 'block', borderRadius: '1px' }} />
            <div className="font-cursive-lux" style={{ fontSize: '0.75rem', color: '#5C383D', textAlign: 'center', marginTop: '6px', fontWeight: 'bold' }}>
              Forever ✨
            </div>
          </div>

          {/* Front Polaroid */}
          <div style={{
            position: 'absolute', top: 40, right: 0,
            transform: 'rotate(6deg)', width: '150px', padding: '9px 9px 28px 9px',
            boxShadow: '0 12px 28px rgba(0,0,0,0.35)', background: '#FEFDFB',
            zIndex: 3, borderRadius: '2px'
          }}>
            <img src={sidePhotos[1]} alt="" style={{ width: '100%', height: 120, objectFit: 'cover', display: 'block', borderRadius: '1px' }} />
            <div className="font-cursive-lux" style={{ fontSize: '0.8rem', color: '#5C383D', textAlign: 'center', marginTop: '6px', fontWeight: 'bold' }}>
              You & Me 💖
            </div>
          </div>

          {/* Badges overlapping the Polaroids */}
          <div style={{ position: 'absolute', bottom: 10, left: '15px', zIndex: 4, display: 'flex', gap: '8px' }}>
            <div style={{ background: 'var(--rose)', padding: '4px 10px', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.1)', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', transform: 'rotate(-5deg)' }}>
              <span className="font-cursive-lux" style={{ fontSize: '0.7rem', color: '#FFF', fontWeight: 'bold' }}>Will you be mine?</span>
            </div>
            <div style={{ background: '#FFF', padding: '4px 10px', borderRadius: '20px', border: '1px solid #DDD', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', transform: 'rotate(5deg)', display: 'flex', alignItems: 'center', gap: '3px' }}>
              <span style={{ fontSize: '0.7rem' }}>💖</span>
              <span className="font-serif-lux" style={{ fontSize: '0.65rem', color: 'var(--dark-brown)', fontWeight: 'bold' }}>Cupid</span>
            </div>
          </div>
        </div>

      </div>

      {/* Navigation Controls */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', zIndex: 3, width: '100%', marginTop: '1rem' }}>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          onClick={prev}
          className="font-serif-lux"
          style={{
            padding: '6px 20px', borderRadius: '50px',
            border: '1px solid rgba(255,255,255,0.3)', background: 'transparent',
            fontSize: '0.9rem', fontWeight: 600,
            color: 'var(--warm-white)', cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          ← Prev
        </motion.button>
        <span className="font-baloo" style={{ color: 'var(--cream)', alignSelf: 'center', opacity: 0.7, fontSize: '0.9rem' }}>
          {current + 1} / {photos.length}
        </span>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          onClick={next}
          className="font-serif-lux"
          style={{
            padding: '6px 20px', borderRadius: '50px',
            border: '1px solid var(--gold)', background: 'var(--gold)',
            fontSize: '0.9rem', fontWeight: 600,
            color: 'var(--cherry-red)', cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          Next →
        </motion.button>
      </div>

      <BackButton onClick={onBack} />
    </motion.div>
  );
}

/* ===== GIFT 3 — WRAPPED HEART BOUQUET ===== */
export function Gift3Screen({ onBack }) {
  const reasons = [
    { text: 'your hugs', top: '15%', left: '32%', color: '#E06A8B', rotate: -6 },
    { text: 'your eyes', top: '22%', left: '56%', color: '#C0392B', rotate: 8 },
    { text: 'how you care for me <3', top: '35%', left: '35%', color: '#D98880', rotate: -4 },
    { text: 'your smile', top: '42%', left: '60%', color: '#FF7F9F', rotate: 12 },
    { text: 'your gestures', top: '55%', left: '32%', color: '#C0392B', rotate: -10 },
    { text: 'You', top: '48%', left: '16%', color: '#E06A8B', rotate: -15 },
  ];

  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'transparent', overflowY: 'auto' }}
    >
      <Particles count={8} theme="stars" />
      <KissMarks count={4} opacity={0.06} />

      <div className="split-layout" style={{ maxWidth: '850px', alignSelf: 'center', height: 'auto', paddingTop: '3rem', paddingBottom: '3rem' }}>
        
        {/* Left Column: Cursive and serif header */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'center', padding: '1rem' }}
        >
          <h1 className="font-cursive-lux animate-pulse-glow" style={{ fontSize: 'clamp(3rem, 7vw, 4.5rem)', color: 'var(--cream)', fontWeight: 'normal', lineHeight: 1.1 }}>
            Everything
          </h1>
          <h2 className="font-serif-lux" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', color: 'var(--warm-white)', fontWeight: 300, marginTop: '-5px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            I Love About
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '5px' }}>
            <h1 className="font-cursive-lux" style={{ fontSize: 'clamp(4.5rem, 10vw, 6.5rem)', color: 'var(--cream)', fontWeight: 'normal', lineHeight: 1 }}>
              You
            </h1>
            <div style={{ background: '#FF9BB4', padding: '6px 16px', borderRadius: '4px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 10px rgba(0,0,0,0.15)', display: 'inline-block' }}>
              <span className="font-serif-lux" style={{ fontSize: '0.9rem', color: '#1F0408', fontWeight: 'bold', letterSpacing: '1px' }}>MY LOVE</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Wrapped Bouquet of Hearts */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
        >
          <div className="bouquet-wrapped">
            
            {/* The paper wraps under the flowers */}
            <div className="bouquet-paper-left" />
            <div className="bouquet-paper-right" />
            <div className="bouquet-wrapped-paper" />

            {/* Heart flowers blooming on stems */}
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 150, delay: i * 0.1 + 0.5 }}
                className="bouquet-heart-stem"
                style={{
                  top: r.top,
                  left: r.left,
                  transform: `rotate(${r.rotate}deg)`,
                  zIndex: 4
                }}
              >
                {/* Stem line */}
                <div style={{ width: '2px', height: '50px', background: '#8FAE7E', opacity: 0.8, marginBottom: '-8px' }} />
                
                {/* Heart flower */}
                <div
                  className="bouquet-heart"
                  style={{
                    width: r.text.length > 8 ? '85px' : '55px',
                    height: r.text.length > 8 ? '75px' : '50px',
                    clipPath: 'polygon(50% 0%, 61% 5%, 72% 2%, 82% 8%, 90% 18%, 95% 30%, 97% 45%, 93% 60%, 85% 72%, 75% 82%, 62% 90%, 50% 100%, 38% 90%, 25% 82%, 15% 72%, 7% 60%, 3% 45%, 5% 30%, 10% 18%, 18% 8%, 28% 2%, 39% 5%)',
                    background: r.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px'
                  }}
                >
                  <span className="font-baloo" style={{ fontSize: r.text.length > 10 ? '0.62rem' : '0.75rem', fontWeight: 'bold', color: '#FFF', textShadow: '1px 1px 2px rgba(0,0,0,0.15)', lineHeight: 1.1 }}>
                    {r.text}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Cute string Bow tied on the paper wrapper */}
            <div className="bouquet-bow" style={{ position: 'absolute', bottom: '12%', left: '50%', transform: 'translateX(-50%)', zIndex: 5 }}>
              <svg width="45" height="32" viewBox="0 0 24 16" fill="none" stroke="#A67B5B" strokeWidth="2">
                <path d="M12 8c-2.5-3.5-6-3.5-6 0s3.5 3.5 6 0" />
                <path d="M12 8c2.5-3.5 6-3.5 6 0s-3.5 3.5-6 0" />
                <path d="M12 8v8M12 8l-4 6M12 8l4 6" />
              </svg>
              {/* Pink hanging tag */}
              <div style={{
                position: 'absolute', top: 12, left: '60%',
                background: '#FF9BB4', padding: '1px 4px',
                borderRadius: '2px', border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transform: 'rotate(15deg)',
                whiteSpace: 'nowrap'
              }}>
                <span className="font-cursive-lux" style={{ fontSize: '0.5rem', color: '#FFF', fontWeight: 'bold' }}>my love</span>
              </div>
            </div>
          </div>
        </motion.div>

        </div>

        <BackButton onClick={onBack} />
    </motion.div>
  );
}

/* ===== SPOTIFY MUSIC PLAYER CARD (Scrapbook Style) ===== */
export function SpotifyPlayerCard() {
  const allPhotos = [
    './assets/couple-photo.jpg',
    './assets/couple-flowers.jpeg',
    ...Array.from({ length: 26 }, (_, i) => `./assets/photo${i + 1}.jpeg`)
  ];
  
  const audioRef = useRef(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const START_TIME = 32;
  const END_TIME = 96;
  const [progress, setProgress] = useState(START_TIME);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        if (audioRef.current.currentTime < START_TIME || audioRef.current.currentTime >= END_TIME) {
          audioRef.current.currentTime = START_TIME;
        }
        audioRef.current.play().catch(e => console.log('Playback prevented', e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    let slideInterval;
    if (isPlaying) {
      slideInterval = setInterval(() => {
        setPhotoIndex(prev => (prev + 1) % allPhotos.length);
      }, 3500);
    }
    return () => clearInterval(slideInterval);
  }, [isPlaying, allPhotos.length]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      if (current >= END_TIME) {
        setIsPlaying(false);
        audioRef.current.pause();
        audioRef.current.currentTime = START_TIME;
        setProgress(START_TIME);
      } else {
        setProgress(Math.floor(current));
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = START_TIME;
    }
  };

  const formatTime = (secs) => {
    const validSecs = isNaN(secs) || secs < 0 ? 0 : secs;
    const mins = Math.floor(validSecs / 60);
    const remainder = Math.floor(validSecs % 60);
    return `${mins}:${remainder < 10 ? '0' : ''}${remainder}`;
  };

  const displayProgress = Math.max(0, progress - START_TIME);
  const displayDuration = END_TIME - START_TIME;
  const remainingSecs = Math.max(0, displayDuration - displayProgress);

  const cyclePhoto = () => {
    setPhotoIndex(prev => (prev + 1) % allPhotos.length);
  };

  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0, rotate: -2 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
      style={{
        width: '100%',
        maxWidth: '320px',
        height: 'auto',
        minHeight: '530px',
        borderRadius: '20px',
        background: 'linear-gradient(to bottom, #5B1417, #360709)',
        border: '2px solid var(--gold)',
        boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        color: '#FEFEFE',
        boxSizing: 'border-box',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <audio 
        ref={audioRef} 
        src="./assets/song.mp3/Thinking Of You - AP Dhillon.mp3" 
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        autoPlay
      />
      {/* Background paper dot patterns & kiss marks */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.08, pointerEvents: 'none', background: 'radial-gradient(circle, #FFF 10%, transparent 11%)', backgroundSize: '12px 12px' }} />
      <div style={{ position: 'absolute', bottom: '15%', left: '8%', opacity: 0.12, pointerEvents: 'none' }}>
        <span style={{ fontSize: '2.5rem' }}>💋</span>
      </div>
      <div style={{ position: 'absolute', top: '15%', right: '8%', opacity: 0.1, pointerEvents: 'none' }}>
        <span style={{ fontSize: '3.5rem' }}>💋</span>
      </div>

      {/* Spotify Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: 2, marginBottom: '12px' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#1DB954" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.982-.336.075-.668-.135-.744-.47-.076-.336.135-.668.47-.743 3.856-.88 7.15-.51 9.822 1.13.295.178.387.563.207.858zm1.225-2.72c-.228.37-.713.49-1.083.262-2.72-1.67-6.866-2.154-10.074-1.18-.413.125-.847-.107-.972-.52-.125-.413.107-.847.52-.972 3.666-1.112 8.225-.57 11.347 1.35.37.227.49.712.262 1.082zm.106-2.833C14.392 8.78 8.57 8.587 5.176 9.617c-.522.158-1.076-.143-1.234-.665-.158-.522.143-1.076.665-1.234 3.89-1.18 10.33-.96 14.4 1.46.47.28.625.892.345 1.362-.28.47-.892.625-1.362.345z"/>
        </svg>
        <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>Thinking Of You</span>
          <span style={{ fontSize: '0.62rem', opacity: 0.7 }}>AP Dhillon</span>
        </div>
      </div>

      {/* Lyric snippet */}
      <div style={{ zIndex: 2, textAlign: 'left', marginBottom: '14px', padding: '0 4px' }}>
        <h3 style={{
          fontSize: '1.18rem',
          fontWeight: '800',
          lineHeight: '1.35',
          margin: 0,
          color: '#FEF9F2',
          letterSpacing: '-0.3px',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          Thinking of you...
        </h3>
      </div>

      {/* The Couple Image Wrapper */}
      <div 
        onClick={cyclePhoto}
        style={{
          position: 'relative',
          width: '100%',
          height: '210px',
          borderRadius: '12px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
          zIndex: 3,
          marginBottom: '20px',
          cursor: 'pointer'
        }}
      >
        <img
          src={allPhotos[photoIndex]}
          alt="Us"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
        />

        {/* Sticker: Red Bow */}
        <img
          src="./assets/red-bow.png"
          alt=""
          style={{
            position: 'absolute',
            top: '-16px',
            left: '-16px',
            width: '42px',
            zIndex: 6,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))'
          }}
        />

        {/* Sticker: Band-Aid */}
        <div style={{
          position: 'absolute',
          top: '6px',
          left: '26%',
          width: '75px',
          height: '20px',
          background: '#E2C7A8',
          borderRadius: '10px',
          border: '1px solid #C4A47E',
          boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'rotate(-3deg)',
          zIndex: 5
        }}>
          <div style={{ width: '20px', height: '16px', background: '#D6B795', borderLeft: '1px dashed #B89774', borderRight: '1px dashed #B89774', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.6rem', color: '#C0392B' }}>❤️</span>
          </div>
        </div>

        {/* Sticker: Umbrella Silhouette */}
        <div style={{ position: 'absolute', top: '-10px', right: '-15px', zIndex: 5, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}>
          <svg width="55" height="80" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 20 C25 20, 15 42, 15 42 C15 42, 30 38, 50 38 C70 38, 85 42, 85 42 C85 42, 75 20, 50 20 Z" fill="#1C1C1C" />
            <path d="M50 15 L50 20" stroke="#1C1C1C" strokeWidth="2.5" />
            <path d="M50 38 L50 95" stroke="#1C1C1C" strokeWidth="2.5" />
            <path d="M42 95 C42 80, 48 65, 48 55 C48 55, 45 52, 45 48 C45 42, 50 40, 52 40 C54 40, 58 42, 58 48 C58 52, 55 55, 55 55 C55 65, 62 80, 62 95 Z" fill="#1C1C1C" />
          </svg>
        </div>

        {/* Sticker: Envelope Love Letter */}
        <div style={{ position: 'absolute', bottom: '-8px', right: '4px', zIndex: 5, filter: 'drop-shadow(0 3px 5px rgba(0,0,0,0.25))' }}>
          <svg width="40" height="30" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="8" width="41" height="25" rx="3" fill="#FAF5EF" stroke="#C3B49E" strokeWidth="1.5" />
            <path d="M2 8 L22.5 21 L43 8" stroke="#C3B49E" strokeWidth="1.5" />
            <path d="M22.5 11 C20.5 7, 16.5 7, 16.5 10.5 C16.5 14, 22.5 19, 22.5 19 C22.5 19, 28.5 14, 28.5 10.5 C28.5 7, 24.5 7, 22.5 11 Z" fill="#D35400" />
          </svg>
        </div>

        {/* Sticker: Kiss mark */}
        <div style={{ position: 'absolute', bottom: '8px', right: '42px', zIndex: 5, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>
          <svg width="28" height="20" viewBox="0 0 35 25" fill="#E74C3C" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 10 C10 6, 25 6, 30 10 C32 12, 28 14, 25 14 C20 14, 15 12, 10 14 C7 14, 3 12, 5 10 Z" />
            <path d="M6 14 C10 18, 25 18, 29 14 C27 16, 23 18, 17 18 C11 18, 7 16, 6 14 Z" />
          </svg>
        </div>

        {/* Mini Tip overlay */}
        <div style={{ position: 'absolute', bottom: 6, left: 10, background: 'rgba(0,0,0,0.6)', padding: '2px 8px', borderRadius: '10px', fontSize: '0.55rem', color: '#FFF', opacity: 0.8 }}>
          Tap to swap photo 📸
        </div>
      </div>

      {/* Playback Controls & Progress Bar */}
      <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', width: '100%', marginTop: 'auto' }}>
        {/* Progress Bar slider */}
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative', height: '12px' }}>
          <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px' }} />
          <div style={{
            position: 'absolute',
            left: 0,
            width: `${displayDuration > 0 ? (displayProgress / displayDuration) * 100 : 0}%`,
            height: '4px',
            background: '#FEFEFE',
            borderRadius: '2px'
          }} />
          <div style={{
            position: 'absolute',
            left: `calc(${displayDuration > 0 ? (displayProgress / displayDuration) * 100 : 0}% - 5px)`,
            width: '10px',
            height: '10px',
            background: '#FEFEFE',
            borderRadius: '50%',
            boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }} />
        </div>

        {/* Timestamps */}
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', fontSize: '0.62rem', opacity: 0.7, marginTop: '2px', padding: '0 2px' }}>
          <span>{formatTime(displayProgress)}</span>
          <span>-{formatTime(remainingSecs)}</span>
        </div>

        {/* Controls Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', margin: '14px 0 6px' }}>
          <button style={{ background: 'none', border: 'none', color: '#FEFEFE', cursor: 'pointer', opacity: 0.8 }} onClick={() => {
            if (audioRef.current) audioRef.current.currentTime = Math.max(START_TIME, audioRef.current.currentTime - 10);
          }}>
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/></svg>
          </button>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              background: '#FEFEFE',
              border: 'none',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              color: '#360709',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
            }}
          >
            {isPlaying ? (
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
            ) : (
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" style={{ marginLeft: '3px' }}><path d="M8 5v14l11-7z"/></svg>
            )}
          </button>

          <button style={{ background: 'none', border: 'none', color: '#FEFEFE', cursor: 'pointer', opacity: 0.8 }} onClick={() => {
            if (audioRef.current) audioRef.current.currentTime = Math.min(END_TIME, audioRef.current.currentTime + 10);
          }}>
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6z"/></svg>
          </button>
        </div>
      </div>

      {/* Decorative Candle on Bottom-Left */}
      <div style={{ position: 'absolute', bottom: '-4px', left: '-2px', zIndex: 4, pointerEvents: 'none' }}>
        <svg width="40" height="75" viewBox="0 0 40 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 65 L30 65 L25 70 L15 70 Z" fill="#1C1C1C" />
          <rect x="17" y="55" width="6" height="10" fill="#1C1C1C" />
          <path d="M12 55 L28 55 L25 58 L15 58 Z" fill="#1C1C1C" />
          <rect x="13" y="25" width="14" height="30" rx="1" fill="#922B21" />
          <path d="M13 25 Q20 27 27 25 L27 27 Q20 29 13 27 Z" fill="#C0392B" opacity="0.8" />
          <line x1="20" y1="25" x2="20" y2="18" stroke="#111" strokeWidth="1.5" />
          <motion.path
            animate={{
              scaleY: [1, 1.15, 0.95, 1.05, 1],
              scaleX: [1, 0.9, 1.1, 0.95, 1],
              y: [0, -1, 1, 0, 0]
            }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            d="M20 18 C17 14, 16 9, 20 2 C24 9, 23 14, 20 18 Z"
            fill="#F39C12"
            style={{ transformOrigin: "bottom center" }}
          />
          <motion.path
            animate={{
              scaleY: [1, 1.1, 0.9, 1],
              y: [0, -0.5, 0.5, 0]
            }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            d="M20 18 C18.5 15, 18 12, 20 7 C22 12, 21.5 15, 20 18 Z"
            fill="#F1C40F"
            style={{ transformOrigin: "bottom center" }}
          />
        </svg>
      </div>

      {/* Decorative Tulips on Bottom-Right */}
      <div style={{ position: 'absolute', bottom: '-8px', right: '-16px', zIndex: 4, pointerEvents: 'none' }}>
        <svg width="90" height="85" viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 75 C30 50, 45 40, 50 30" stroke="#4D6A40" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M35 75 C45 55, 50 45, 55 25" stroke="#4D6A40" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M50 75 C52 50, 58 40, 60 22" stroke="#4D6A40" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M65 75 C60 55, 65 45, 70 28" stroke="#4D6A40" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M80 75 C70 55, 72 45, 78 32" stroke="#4D6A40" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M25 70 Q45 55 40 40 Q30 50 25 70 Z" fill="#5E7E4E" opacity="0.9" />
          <path d="M75 70 Q60 55 65 38 Q75 50 75 70 Z" fill="#5E7E4E" opacity="0.9" />
          
          <path d="M45 30 C40 20, 42 12, 50 12 C58 12, 60 20, 55 30 Z" fill="#C0392B" />
          <path d="M47 30 C43 23, 47 18, 50 12 C53 18, 57 23, 53 30 Z" fill="#922B21" />
          
          <path d="M50 25 C45 15, 48 8, 55 8 C62 8, 65 15, 60 25 Z" fill="#C0392B" />
          <path d="M52 25 C48 18, 52 13, 55 8 C58 13, 62 18, 58 25 Z" fill="#A93226" />
          
          <path d="M35 35 C30 25, 32 18, 40 18 C48 18, 50 25, 45 35 Z" fill="#B03A2E" />
          <path d="M37 35 C33 28, 37 23, 40 18 C43 23, 47 28, 43 35 Z" fill="#7B241C" />

          <path d="M60 22 C55 12, 58 5, 65 5 C72 5, 75 12, 70 22 Z" fill="#C0392B" />
          <path d="M62 22 C58 15, 62 10, 65 5 C68 10, 72 15, 68 22 Z" fill="#922B21" />

          <path d="M68 28 C63 18, 65 10, 73 10 C81 10, 83 18, 78 28 Z" fill="#B03A2E" />
          <path d="M70 28 C66 21, 70 16, 73 10 C76 16, 80 21, 76 28 Z" fill="#7B241C" />
        </svg>
      </div>
    </motion.div>
  );
}

/* ===== GIFT 4 — SPECIAL CARD (Split Layout / Arched frame replaced with SpotifyPlayerCard) ===== */
export function Gift4Screen({ onNext, onBack }) {
  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'transparent' }}
    >
      <Particles count={12} />
      <KissMarks count={5} opacity={0.08} />

      <div className="split-layout">
        {/* Left Side: Spotify Music Player Card */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
          <SpotifyPlayerCard />
        </div>

        {/* Right Side: Editorial details */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <h1 className="font-serif-lux" style={{ fontSize: 'clamp(2.2rem, 6vw, 3.2rem)', color: 'var(--cream)', marginBottom: '0.4rem', fontWeight: 300, lineHeight: 1.2 }}>
            My Everything,
          </h1>
          <p className="font-cursive-lux" style={{ color: 'var(--gold)', fontSize: '1.45rem', marginBottom: '1.5rem' }}>
            forever & always
          </p>

          <p className="font-caveat" style={{ fontSize: 'clamp(1.6rem, 5vw, 2rem)', color: 'var(--warm-white)', opacity: 0.95, lineHeight: 1.5, marginBottom: '2.5rem', fontWeight: 400 }}>
            "You are my favorite person in the whole wide world, my laughter, and my heart. Let's make every moment of our lives together incredibly beautiful."
          </p>

          <NextButton onClick={onNext} label="Finish →" />
        </motion.div>
      </div>

      <BackButton onClick={onBack} />
    </motion.div>
  );
}
