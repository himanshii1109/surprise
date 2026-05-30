import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import IntroScreen from './components/IntroScreen';
import LockScreen from './components/LockScreen';
import CakeScreen from './components/CakeScreen';
import { Question1Screen, Question1NoScreen, Question2Screen } from './components/QuestionScreens';
import MessageScreen from './components/MessageScreen';
import WishScreen from './components/WishScreen';
import TruckScreen from './components/TruckScreen';
import { Gift1Envelope, Gift1Letter, Gift2Screen, Gift3Screen, Gift4Screen } from './components/GiftScreens';
import FinalScreen from './components/FinalScreen';

/*
  SCREEN FLOW:
  intro → lock → cake → question1 → question1_no → question2 → message → wish → truck
    → gift1_envelope → gift1_letter
    → gift2
    → gift3
    → gift4
    → final
*/

function App() {
  const [currentScreen, setCurrentScreen] = useState('intro');

  const goTo = (screen) => setCurrentScreen(screen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'intro':
        return <IntroScreen key="intro" onNext={() => goTo('lock')} />;

      case 'lock':
        return <LockScreen key="lock" onUnlock={() => goTo('cake')} />;

      case 'cake':
        return <CakeScreen key="cake" onNext={() => goTo('question1')} />;

      case 'question1':
        return (
          <Question1Screen
            key="q1"
            onYes={() => goTo('question2')}
            onNo={() => goTo('question1_no')}
            onBack={() => goTo('cake')}
          />
        );

      case 'question1_no':
        return <Question1NoScreen key="q1no" onGoBack={() => goTo('question1')} />;

      case 'question2':
        return <Question2Screen key="q2" onYes={() => goTo('message')} onBack={() => goTo('question1')} />;

      case 'message':
        return <MessageScreen key="msg" onNext={() => goTo('wish')} onBack={() => goTo('question2')} />;

      case 'wish':
        return <WishScreen key="wish" onNext={() => goTo('truck')} onBack={() => goTo('message')} />;

      case 'truck':
        return <TruckScreen key="truck" onGiftClick={(id) => goTo(id)} onNext={() => goTo('final')} />;

      case 'gift1_envelope':
        return <Gift1Envelope key="g1env" onOpen={() => goTo('gift1_letter')} onBack={() => goTo('truck')} />;

      case 'gift1_letter':
        return <Gift1Letter key="g1letter" onBack={() => goTo('truck')} />;

      case 'gift2':
        return <Gift2Screen key="g2" onBack={() => goTo('truck')} />;

      case 'gift3':
        return <Gift3Screen key="g3" onBack={() => goTo('truck')} />;

      case 'gift4':
        return <Gift4Screen key="g4" onNext={() => goTo('final')} onBack={() => goTo('truck')} />;

      case 'final':
        return <FinalScreen key="final" />;

      default:
        return <LockScreen key="lock" onUnlock={() => goTo('cake')} />;
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative' }}>
      <AnimatePresence mode="wait">
        {renderScreen()}
      </AnimatePresence>
    </div>
  );
}

export default App;
