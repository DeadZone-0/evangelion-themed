```javascript
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NervLayout from './components/NervLayout';
import HexagonMenu from './components/HexagonMenu';
import StatusMonitor from './components/StatusMonitor';

function App() {
  const [activeTab, setActiveTab] = useState('HOME');

  return (
    <NervLayout>
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
          color: 'var(--nerv-orange)',
          textShadow: '0 0 15px var(--nerv-orange)'
        }}>
          NERV
        </h1>
        <div style={{ letterSpacing: '8px', color: 'var(--nerv-red)', fontWeight: 'bold' }}>
          SPECIAL AGENCY
        </div>
      </motion.div>

      <div style={{ marginBottom: '50px' }}>
         <HexagonMenu items={['HOME', 'PROJECTS', 'ARCHIVE', 'LOGS']} />
      </div>

      {/* Main Display Area */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', justifyContent: 'center', width: '80%', maxWidth: '1000px' }}>
          
          <StatusMonitor />
          
          <motion.div 
            className="nerv-border"
            style={{ 
              flex: 1, 
              height: '300px', 
              padding: '20px', 
              backgroundColor: 'rgba(0,0,0,0.8)',
              overflowY: 'auto'
            }}
          >
            <h3 style={{ borderBottom: '1px solid var(--nerv-orange)', paddingBottom: '10px', marginBottom: '15px' }}>
              // DATA_OUTPUT: {activeTab}
            </h3>
            <p style={{ lineHeight: '1.6', fontSize: '0.9rem', color: '#ccc' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Target confirmation: Blue. Pattern matches Angel content.
            </p>
            <br/>
            <p style={{ lineHeight: '1.6', fontSize: '0.9rem', color: '#ccc' }}>
              System synchronisation ratio currently at 400%. 
            </p>
          </motion.div>

      </div>
    </NervLayout>
  )
}

export default App;
```
