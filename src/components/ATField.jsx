import React from 'react';
import { motion } from 'framer-motion';

const ATField = ({ active }) => {
    if (!active) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            {[1, 2, 3, 4].map((i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 2]
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                    style={{
                        position: 'absolute',
                        width: '600px',
                        height: '600px',
                        border: '40px solid rgba(255, 165, 0, 0.6)',
                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                        boxShadow: '0 0 50px rgba(255, 100, 0, 0.8), inset 0 0 50px rgba(255, 100, 0, 0.8)'
                    }}
                />
            ))}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                    position: 'absolute',
                    color: 'orange',
                    fontFamily: 'var(--font-display)',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    textShadow: '0 0 20px red',
                    letterSpacing: '5px'
                }}
            >
                ABSOLUTE TERROR FIELD
            </motion.div>
        </div>
    );
};

export default ATField;
