```javascript
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NervLayout from './components/NervLayout';
import HexagonMenu from './components/HexagonMenu';
import StatusMonitor from './components/StatusMonitor';
import BootSequence from './components/BootSequence';

function App() {
  const [booted, setBooted] = useState(false);
  const menuItems = ['HOME', 'PROJECTS', 'ARCHIVE', 'LOGS'];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTab = menuItems[activeIndex];

  if (!booted) {
      return <BootSequence onComplete={() => setBooted(true)} />;
  }

  const renderContent = () => {
      switch(activeTab) {
          case 'PROJECTS':
              return (
                  <div>
                      <h4>// ACTIVE_PROJECTS</h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                          {['EVA-00 Prototype', 'EVA-01 Test Type', 'EVA-02 Production Model'].map(item => (
                              <li key={item} style={{ borderBottom: '1px dashed #444', padding: '10px 0', color: 'var(--nerv-green)' }}>
                                  > {item} [DEPLOYED]
                              </li>
                          ))}
                      </ul>
                  </div>
              );
          case 'ARCHIVE':
              return (
                  <div>
                      <h4>// CLASSIFIED_DATA</h4>
                      <p style={{ color: 'var(--nerv-red)' }}>ACCESS DENIED. CLEARANCE LEVEL: COMMANDER REQUIRED.</p>
                      <div style={{ marginTop: '20px', fontSize: '0.8rem', opacity: 0.7 }}>
                          Attempting bypass... Failed.
                      </div>
                  </div>
              );
          default:
              return (
                  <>
                    <p style={{ lineHeight: '1.6', fontSize: '0.9rem', color: '#ccc' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Target confirmation: Blue. Pattern matches Angel content.
                    </p>
                    <br/>
                    <p style={{ lineHeight: '1.6', fontSize: '0.9rem', color: '#ccc' }}>
                        System synchronisation ratio currently at 400%. 
                    </p>
                  </>
              );
      }
  };

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
         <HexagonMenu 
            items={menuItems} 
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
         />
      </div>

      {/* Main Display Area */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', justifyContent: 'center', width: '80%', maxWidth: '1000px' }}>
          
          <StatusMonitor />
          
          <motion.div 
            key={activeTab} // Triggers animation on change
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="nerv-border"
            style={{ 
              flex: 1, 
              minHeight: '300px', 
              padding: '20px', 
              backgroundColor: 'rgba(0,0,0,0.8)',
              overflowY: 'auto'
            }}
          >
            <h3 style={{ borderBottom: '1px solid var(--nerv-orange)', paddingBottom: '10px', marginBottom: '15px' }}>
              // DATA_OUTPUT: {activeTab}
            </h3>
            {renderContent()}
          </motion.div>

      </div>
    </NervLayout>
  )
}

export default App;

```
