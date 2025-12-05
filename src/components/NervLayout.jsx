import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const NervLayout = ({ children, theme }) => {
    // Update CSS variables when theme changes
    useEffect(() => {
        if (theme) {
            const root = document.documentElement;
            root.style.setProperty('--theme-hue', theme.hue);
            root.style.setProperty('--theme-sat', theme.sat);
            root.style.setProperty('--theme-light', theme.light);

            if (theme.secHue !== undefined) {
                root.style.setProperty('--theme-sec-hue', theme.secHue);
                root.style.setProperty('--theme-sec-sat', theme.secSat);
                root.style.setProperty('--theme-sec-light', theme.secLight);
            }

            // Dynamic grid color using HSL with low opacity
            root.style.setProperty('--grid-color', `hsla(${theme.hue}, ${theme.sat}, ${theme.light}, 0.15)`);
        }
    }, [theme]);

    // Dynamic Grid Background
    const gridStyle = {
        backgroundImage: `
        linear-gradient(var(--grid-color) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
      `,
        backgroundSize: '40px 40px',
    };

    return (
        <div
            style={{
                ...gridStyle,
                width: '100vw',
                height: '100vh',
                position: 'relative',
                overflow: 'hidden',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >

            {/* Top Left System Status */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ position: 'absolute', top: 30, left: 30 }}
            >
                <div className="nerv-border" style={{ padding: '5px 15px', color: 'var(--theme-primary)', borderColor: 'var(--theme-primary)' }}>
                    <h4 style={{ margin: 0, letterSpacing: '2px' }}>MAGI-01: MELCHIOR</h4>
                    <small style={{ fontSize: '0.6rem' }}>STATUS: ONLINE</small>
                </div>
            </motion.div>

            {/* Top Right Timer/Clock */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ position: 'absolute', top: 30, right: 30, textAlign: 'right' }}
            >
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--theme-secondary)' }}>
                    INTERNAL POWER
                </div>
                <div style={{ color: 'var(--theme-primary)', fontSize: '0.8rem' }}>
                    T-MINUS: <span style={{ fontFamily: 'var(--font-display)' }}>05:00:00</span>
                </div>
            </motion.div>

            {/* Main Content Area */}
            <div style={{ zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {children}
            </div>

            {/* Bottom Footer Area */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{ position: 'absolute', bottom: 30, width: '100%', textAlign: 'center', color: '#444' }}
            >
                <p style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>GOD IS IN HIS HEAVEN. ALL'S RIGHT WITH THE WORLD.</p>
            </motion.div>
        </div>
    );
};

export default NervLayout;
