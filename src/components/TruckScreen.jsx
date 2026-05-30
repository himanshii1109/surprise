import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from './Particles';
import { ConfettiBurst, DoodleHeart, DoodleStar } from './SharedUI';

const gifts = [
  { id: 'gift1_envelope', label: 'Love Letter', icon: 'letter' },
  { id: 'gift2', label: 'Our Memories', icon: 'photo' },
  { id: 'gift3', label: 'Sweet Bouquet', icon: 'flower' },
  { id: 'gift4', label: 'Our Song', icon: 'music' },
];

function GiftIcon({ type, size = 28, color = 'var(--dark-red)' }) {
  switch (type) {
    case 'letter':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 4l10 9 10-9" />
        </svg>
      );
    case 'photo':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" fill={color} />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      );
    case 'flower':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
          <circle cx="12" cy="8" r="3.5" />
          <path d="M12 11.5v8.5M8 9.5c-2.5-1-2.5-4 0-5s5.5 0 5.5 2M16 9.5c2.5-1 2.5-4 0-5s-5.5 0-5.5 2M8.5 12c-2 2.5-4 1-4.5-1.5s2.5-4 4.5-1.5M15.5 12c2 2.5 4 1 4.5-1.5s-2.5-4-4.5-1.5" />
        </svg>
      );
    case 'music':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
          <path d="M9 17V5l12-2v12" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
    case 'heart':
      return <DoodleHeart size={size} color={color} style={{ opacity: 0.9 }} />;
    default:
      return null;
  }
}

export default function TruckScreen({ onGiftClick, onNext }) {
  const [arrived, setArrived] = useState(false);
  const [giftsOut, setGiftsOut] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [wheelsSpinning, setWheelsSpinning] = useState(true);
  const [recoil, setRecoil] = useState({ x: 0 });

  useEffect(() => {
    const t1 = setTimeout(() => { setArrived(true); setWheelsSpinning(false); }, 2500);
    const t2 = setTimeout(() => { setGiftsOut(true); setShowConfetti(true); }, 3200);
    const t3 = setTimeout(() => setShowConfetti(false), 5500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  useEffect(() => {
    if (giftsOut) {
      const runRecoils = async () => {
        // Gift 1
        await new Promise(r => setTimeout(r, 100));
        setRecoil({ x: [0, 15, 0] });
        // Gift 2
        await new Promise(r => setTimeout(r, 250));
        setRecoil({ x: [0, 15, 0] });
        // Gift 3
        await new Promise(r => setTimeout(r, 250));
        setRecoil({ x: [0, -15, 0] });
        // Gift 4
        await new Promise(r => setTimeout(r, 250));
        setRecoil({ x: [0, -15, 0] });
      };
      runRecoils();
    }
  }, [giftsOut]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const g1StartX = isMobile ? 0 : 220;
  const g1StartY = isMobile ? -160 : 120;
  const g1ArcY = isMobile ? [-160, -220, 0] : [120, -100, 0];

  const g2StartX = isMobile ? 0 : 220;
  const g2StartY = isMobile ? -260 : -20;
  const g2ArcY = isMobile ? [-260, -320, 0] : [-20, -120, 0];

  const g3StartX = isMobile ? 0 : -220;
  const g3StartY = isMobile ? -360 : 120;
  const g3ArcY = isMobile ? [-360, -420, 0] : [120, -100, 0];

  const g4StartX = isMobile ? 0 : -220;
  const g4StartY = isMobile ? -460 : -20;
  const g4ArcY = isMobile ? [-460, -520, 0] : [-20, -120, 0];

  return (
    <motion.div
      className="screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ background: 'transparent', justifyContent: 'center', overflowY: 'auto' }}
    >
      <Particles count={8} theme="stars" />
      {showConfetti && <ConfettiBurst count={35} />}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '2rem', padding: '2rem 1rem' }}>
        
        {/* Header Text */}
        <AnimatePresence>
          {giftsOut && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              style={{ textAlign: 'center', zIndex: 5 }}
            >
              <h2 className="font-serif-lux" style={{ fontSize: 'clamp(2.2rem, 7vw, 3.8rem)', color: 'var(--cream)', fontWeight: 300, letterSpacing: '1px', lineHeight: 1.1 }}>
                Special delivery
              </h2>
              <p className="font-cursive-lux" style={{ color: 'var(--gold)', fontSize: 'clamp(1.6rem, 5vw, 2.4rem)', marginTop: '4px' }}>
                FOR YOU
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Responsive Grid/Flex Layout for camper van and gifts */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: isMobile ? '3rem' : '8.5rem', width: '100%', maxWidth: '1150px', flexWrap: 'wrap', position: 'relative' }}>
          
          {/* Left Gifts (Desktop: Left Column, Mobile: flex column) */}
          <AnimatePresence>
            {giftsOut && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', zIndex: 4, order: window.innerWidth < 768 ? 2 : 1 }}
              >
                {/* Gift 1: Love Letter */}
                <div style={{ position: 'relative' }}>
                  <motion.div
                    initial={{ opacity: 0, x: g1StartX, y: g1StartY, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, x: 0, y: g1ArcY, scale: 1, rotate: 0 }}
                    transition={{
                      x: { duration: 0.8, ease: "easeOut", delay: 0.1 },
                      y: { duration: 0.8, ease: ["easeOut", "easeIn"], times: [0, 0.45, 1], delay: 0.1 },
                      scale: { duration: 0.4, delay: 0.1 },
                      rotate: { duration: 0.8, type: "spring", delay: 0.1 },
                    }}
                    whileHover={{ scale: 1.12, translateY: -6 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onGiftClick(gifts[0].id)}
                    className="premium-gift-box"
                    style={{ background: 'linear-gradient(135deg, #D4425C, #9E1B32)' }}
                  >
                    <div className="premium-gift-lid" style={{ background: 'linear-gradient(135deg, #E65A75, #B8253D)' }} />
                    <div className="premium-gift-ribbon-v" />
                    <div className="premium-gift-ribbon-h" />
                    <div style={{ zIndex: 4 }}>
                      <GiftIcon type={gifts[0].icon} size={25} color="var(--cream)" />
                    </div>
                    <span className="premium-gift-label">{gifts[0].label}</span>
                  </motion.div>
                </div>

                {/* Gift 2: Our Memories */}
                <div style={{ position: 'relative' }}>
                  <motion.div
                    initial={{ opacity: 0, x: g2StartX, y: g2StartY, scale: 0, rotate: 180 }}
                    animate={{ opacity: 1, x: 0, y: g2ArcY, scale: 1, rotate: 0 }}
                    transition={{
                      x: { duration: 0.8, ease: "easeOut", delay: 0.35 },
                      y: { duration: 0.8, ease: ["easeOut", "easeIn"], times: [0, 0.45, 1], delay: 0.35 },
                      scale: { duration: 0.4, delay: 0.35 },
                      rotate: { duration: 0.8, type: "spring", delay: 0.35 },
                    }}
                    whileHover={{ scale: 1.12, translateY: -6 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onGiftClick(gifts[1].id)}
                    className="premium-gift-box"
                    style={{ background: 'linear-gradient(135deg, #A27BBA, #6E4587)' }}
                  >
                    <div className="premium-gift-lid" style={{ background: 'linear-gradient(135deg, #B58ED1, #80579C)' }} />
                    <div className="premium-gift-ribbon-v" style={{ background: 'linear-gradient(to bottom, #FFF, #D5D8DC)' }} />
                    <div className="premium-gift-ribbon-h" style={{ background: 'linear-gradient(to right, #FFF, #D5D8DC)' }} />
                    <div style={{ zIndex: 4 }}>
                      <GiftIcon type={gifts[1].icon} size={25} color="var(--cream)" />
                    </div>
                    <span className="premium-gift-label">{gifts[1].label}</span>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Center: Camper Van (Left-to-Right drive-in) */}
          <motion.div
            initial={{ x: '-120vw' }}
            animate={arrived ? { x: 0 } : { x: '-120vw' }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
            style={{ zIndex: 3, position: 'relative', order: 1 }}
          >
            <motion.div 
              animate={{ 
                y: arrived ? [0, -4, 0] : 0,
                x: recoil.x,
              }} 
              transition={{ 
                y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                x: { duration: 0.25, ease: "easeInOut" }
              }}
            >
              <div className="camper-van">
                {/* Heart on Roof with ribbon/bow/tag */}
                <div style={{ position: 'absolute', top: -75, left: '50%', transform: 'translateX(-50%)', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Huge red heart using styled div */}
                  <div style={{
                    position: 'relative',
                    width: 70, height: 70,
                    background: 'linear-gradient(135deg, #FFB3C1, #FB6F92)', // Gorgeous premium pink gradient
                    borderRadius: '50% 50% 0 0',
                    transform: 'rotate(-45deg)',
                    transformOrigin: '0 100%',
                    border: '2px solid var(--gold)', // gold outline
                    boxShadow: '0 4px 10px rgba(251,111,146,0.3)'
                  }}>
                    {/* Hanging white tag */}
                    <div style={{
                      position: 'absolute',
                      bottom: 8, right: -40,
                      transform: 'rotate(45deg)',
                      background: '#FFF',
                      padding: '1px 6px',
                      borderRadius: '2px',
                      border: '1px solid #CCC',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                      <span className="font-cursive-lux" style={{ fontSize: '0.6rem', color: '#1F0408', fontWeight: 'bold' }}>to: you!</span>
                    </div>
                  </div>
                  {/* Pink Bow overlay */}
                  <img src="./assets/red-bow.png" alt="" style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', width: 38, zIndex: 3 }} />
                </div>

                {/* White Top half */}
                <div className="camper-top">
                  <div className="camper-window" />
                  <div className="camper-window" />
                  <div className="camper-window" />
                </div>
                {/* Vintage Pink Bottom half */}
                <div className="camper-bottom">
                  <div className="camper-headlight" style={{ right: 8 }} />
                  <div className="camper-bumper" style={{ right: -6 }} />
                  {/* White decorative stripes */}
                  <div style={{ position: 'absolute', right: 40, top: 12, width: 120, height: 5, background: '#FFF', borderRadius: '3px 0 0 3px' }} />
                  <div style={{ position: 'absolute', right: 20, top: 22, width: 160, height: 16, border: '2px solid #FFF', borderTop: 'none', borderRadius: '0 0 10px 10px', opacity: 0.8 }} />
                </div>
                {/* Spinning wheels */}
                <div className="camper-wheel" style={{ left: 24, animation: wheelsSpinning ? 'spin-wheel 0.4s linear infinite' : 'none' }} />
                <div className="camper-wheel" style={{ right: 24, animation: wheelsSpinning ? 'spin-wheel 0.4s linear infinite' : 'none' }} />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Gifts (Desktop: Right Column, Mobile: flex column) */}
          <AnimatePresence>
            {giftsOut && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', zIndex: 4, order: 3 }}
              >
                {/* Gift 3: Bouquet */}
                <div style={{ position: 'relative' }}>
                  <motion.div
                    initial={{ opacity: 0, x: g3StartX, y: g3StartY, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, x: 0, y: g3ArcY, scale: 1, rotate: 0 }}
                    transition={{
                      x: { duration: 0.8, ease: "easeOut", delay: 0.6 },
                      y: { duration: 0.8, ease: ["easeOut", "easeIn"], times: [0, 0.45, 1], delay: 0.6 },
                      scale: { duration: 0.4, delay: 0.6 },
                      rotate: { duration: 0.8, type: "spring", delay: 0.6 },
                    }}
                    whileHover={{ scale: 1.12, translateY: -6 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onGiftClick(gifts[2].id)}
                    className="premium-gift-box"
                    style={{ background: 'linear-gradient(135deg, #7FA99B, #4C7265)' }}
                  >
                    <div className="premium-gift-lid" style={{ background: 'linear-gradient(135deg, #91C0B1, #5B8576)' }} />
                    <div className="premium-gift-ribbon-v" style={{ background: 'linear-gradient(to bottom, #FFF, #F2F3F4)' }} />
                    <div className="premium-gift-ribbon-h" style={{ background: 'linear-gradient(to right, #FFF, #F2F3F4)' }} />
                    <div style={{ zIndex: 4 }}>
                      <GiftIcon type={gifts[2].icon} size={25} color="var(--cream)" />
                    </div>
                    <span className="premium-gift-label">{gifts[2].label}</span>
                  </motion.div>
                </div>

                {/* Gift 4: Special Card */}
                <div style={{ position: 'relative' }}>
                  <motion.div
                    initial={{ opacity: 0, x: g4StartX, y: g4StartY, scale: 0, rotate: 180 }}
                    animate={{ opacity: 1, x: 0, y: g4ArcY, scale: 1, rotate: 0 }}
                    transition={{
                      x: { duration: 0.8, ease: "easeOut", delay: 0.85 },
                      y: { duration: 0.8, ease: ["easeOut", "easeIn"], times: [0, 0.45, 1], delay: 0.85 },
                      scale: { duration: 0.4, delay: 0.85 },
                      rotate: { duration: 0.8, type: "spring", delay: 0.85 },
                    }}
                    whileHover={{ scale: 1.12, translateY: -6 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onGiftClick(gifts[3].id)}
                    className="premium-gift-box"
                    style={{ background: 'linear-gradient(135deg, #E6C575, #B59344)' }}
                  >
                    <div className="premium-gift-lid" style={{ background: 'linear-gradient(135deg, #FAD787, #C4A14E)' }} />
                    <div className="premium-gift-ribbon-v" style={{ background: 'var(--cherry-red)' }} />
                    <div className="premium-gift-ribbon-h" style={{ background: 'var(--cherry-red)' }} />
                    <div style={{ zIndex: 4 }}>
                      <GiftIcon type={gifts[3].icon} size={25} color="var(--cream)" />
                    </div>
                    <span className="premium-gift-label">{gifts[3].label}</span>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>

      <AnimatePresence>
        {giftsOut && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            style={{ position: 'absolute', bottom: 40, zIndex: 10 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="font-serif-lux"
              style={{
                padding: '10px 32px', borderRadius: '50px',
                border: '1px solid var(--gold)', background: 'var(--gold)',
                fontSize: '1.2rem', fontWeight: 600,
                color: 'var(--cherry-red)', cursor: 'pointer',
              }}
            >
              Next →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
