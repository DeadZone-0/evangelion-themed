import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import NervLayout from './components/NervLayout';
import HexagonMenu from './components/HexagonMenu';
import BootSequence from './components/BootSequence';
import CharacterSelect from './pages/CharacterSelect';
import CharacterDetail from './pages/CharacterDetail';
import { DEFAULT_THEME } from './data/characters';

// Home Component to keep the landing page logic separate
const Home = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ marginBottom: '40px', textAlign: 'center' }}
      >
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '5rem',
          margin: 0,
          color: 'var(--theme-primary)',
          textShadow: '0 0 15px var(--theme-primary)'
        }}>
          NERV
        </h1>
        <div style={{ letterSpacing: '8px', color: 'var(--theme-secondary)', fontWeight: 'bold' }}>
          SPECIAL AGENCY
        </div>
      </motion.div>
      <div style={{ marginTop: '50px', border: '1px solid var(--theme-primary)', padding: '20px' }}>
        AWAITING COMMAND INSTRUCTIONS...
      </div>
    </>
  )
}

function AppContent() {
  const [booted, setBooted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME);
  const navigate = useNavigate();

  // Navigation logic mapping
  const handleMenuSelect = (index) => {
    const items = ['HOME', 'CHARACTERS', 'ARCHIVE', 'LOGS'];
    const item = items[index];
    if (item === 'HOME') {
      setCurrentTheme(DEFAULT_THEME); // Reset theme on home
      navigate('/');
    } else if (item === 'CHARACTERS') {
      setCurrentTheme(DEFAULT_THEME);
      navigate('/characters');
    }
    // Add other routes as needed
  };

  if (!booted) {
    return <BootSequence onComplete={() => setBooted(true)} />;
  }

  return (
    <NervLayout theme={currentTheme}>
      <div style={{ marginBottom: '50px' }}>
        <HexagonMenu
          items={['HOME', 'CHARACTERS', 'ARCHIVE', 'LOGS']}
          activeIndex={-1} // Highlight logic needs state, simplified for now
          onSelect={handleMenuSelect}
        />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterSelect />} />
        <Route path="/character/:id" element={<CharacterDetail setTheme={setCurrentTheme} />} />
      </Routes>
    </NervLayout>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
