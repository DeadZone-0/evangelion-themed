import React from 'react';
import { motion } from 'framer-motion';

function App() {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            backgroundImage: `
        linear-gradient(var(--grid-color) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
      `,
            backgroundSize: '40px 40px',
            backgroundPosition: 'center center'
        }}>
            {/* Central Hexagon or Logo Placeholder */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "circOut" }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <h1 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '6rem',
                    margin: 0,
                    letterSpacing: '10px',
                    color: 'var(--nerv-orange)',
                    textShadow: '0 0 20px var(--nerv-orange)'
                }}>
                    NERV
                </h1>
                <h2 style={{
                    fontFamily: 'var(--font-main)',
                    fontSize: '1.5rem',
                    letterSpacing: '5px',
                    color: 'var(--nerv-red)',
                    marginTop: '-10px',
                    textTransform: 'uppercase'
                }}>
                    Tactical Operations
                </h2>
            </motion.div>

            {/* Corners UI simulation */}
            <div style={{ position: 'absolute', top: 20, left: 20, fontFamily: 'var(--font-display)' }}>
                <div className="nerv-border" style={{ padding: '10px 20px' }}>
                    SYSTEM: NORMAL
                </div>
            </div>

            <div style={{ position: 'absolute', bottom: 20, right: 20, fontFamily: 'var(--font-display)' }}>
                <div className="nerv-border" style={{ padding: '10px 20px' }}>
                    CPU: ONLINE
                </div>
            </div>

        </div>
    )
}

export default App;
