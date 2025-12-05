import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SEQUENCE = [
    "MAGI SYSTEM OS v6.0",
    "INITIALIZING KERNEL...",
    "LOADING DRIVERS...",
    "CHECKING MEMORY: 64TB OK",
    "CONNECTING TO CENTRAL DOGMA...",
    "SYNC RATIO: 0.0%",
    "SYNC RATIO: 45.5%",
    "SYNC RATIO: 98.2%",
    "CONNECTION ESTABLISHED.",
    "DECRYPTING INTERFACE...",
    "ACCESS GRANTED."
];

const BootSequence = ({ onComplete }) => {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < SEQUENCE.length) {
                setLines(prev => [...prev, SEQUENCE[index]]);
                index++;
            } else {
                clearInterval(interval);
                setTimeout(onComplete, 1000);
            }
        }, 400); // 400ms per line

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: '#000',
            color: 'var(--nerv-orange)',
            fontFamily: 'var(--font-main)',
            padding: '50px',
            fontSize: '1.2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        }}>
            {lines.map((line, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ marginBottom: '5px' }}
                >
                    {'> ' + line}
                </motion.div>
            ))}
            <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                style={{ width: '15px', height: '20px', backgroundColor: 'var(--nerv-orange)', marginTop: '5px' }}
            />
        </div>
    );
};

export default BootSequence;
