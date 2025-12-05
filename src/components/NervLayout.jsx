import React from 'react';
import { motion } from 'framer-motion';

const NervLayout = ({ children }) => {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            position: 'relative',
            overflow: 'hidden',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* Background Grids are handled by CSS/Body, but we can add specific UI chrome here */}

            {/* Top Left System Status */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{ position: 'absolute', top: 30, left: 30 }}
            >
                <div className="nerv-border" style={{ padding: '5px 15px', color: 'var(--nerv-orange)' }}>
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
                <div className="text-alert" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                    INTERNAL POWER
                </div>
                <div style={{ color: 'var(--nerv-orange)', fontSize: '0.8rem' }}>
                    T-MINUS: <span style={{ fontFamily: 'var(--font-display)' }}>05:00:00</span>
                </div>
            </motion.div>

            {/* Bottom Footer Area */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{ position: 'absolute', bottom: 30, width: '100%', textAlign: 'center', color: 'var(--nerv-dark-grey)' }}
            >
                <p style={{ fontSize: '0.7rem', letterSpacing: '1px' }}>GOD IS IN HIS HEAVEN. ALL'S RIGHT WITH THE WORLD.</p>
            </motion.div>

            {/* Main Content Area */}
            <div style={{ zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {children}
            </div>
        </div>
    );
};

export default NervLayout;
