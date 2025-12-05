import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { playClickSound } from '../utils/sound';

const MagiBrain = ({ name, number, status, delay }) => {
    // Status: 'IDLE', 'THINKING', 'APPROVE', 'DENY'

    const getColor = () => {
        switch (status) {
            case 'APPROVE': return '#39ff14'; // Green
            case 'DENY': return '#e60000'; // Red
            case 'THINKING': return '#ff9d00'; // Orange
            default: return '#555'; // Idle
        }
    };

    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay * 0.2 }}
            style={{
                flex: 1,
                border: `4px solid ${getColor()}`,
                backgroundColor: 'rgba(0,0,0,0.8)',
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '20px',
                margin: '0 10px',
                boxShadow: `0 0 20px ${getColor()}`,
                transition: 'all 0.3s ease'
            }}
        >
            <div style={{
                borderBottom: `2px solid ${getColor()}`,
                paddingBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: getColor() }}>MAGI - 0{number}</h2>
                <div style={{ fontSize: '0.8rem', color: getColor() }}>CODE: {name}</div>
            </div>

            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'monospace',
                fontSize: '0.8rem',
                color: getColor(),
                opacity: 0.7,
                overflow: 'hidden',
                textAlign: 'left'
            }}>
                {status === 'THINKING' ? (
                    <motion.div animate={{ y: [-100, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}>
                         // ANALYZING PATTERN<br />
                         // RESOLVING LOGIC GATES<br />
                         // HEURISTIC SCAN...<br />
                         // CHECKING DATABANKS...<br />
                         // SYNCHRONIZING...
                    </motion.div>
                ) : (
                    <div>[ {status} ]</div>
                )}
            </div>

            <div style={{
                textAlign: 'center',
                fontSize: '3rem',
                fontWeight: 'bold',
                fontFamily: 'var(--font-display)',
                color: getColor(),
                textShadow: `0 0 10px ${getColor()}`
            }}>
                {name}
            </div>
        </motion.div>
    );
};

const MagiSystem = () => {
    const [state, setState] = useState('IDLE'); // IDLE, SCANNING, DECIDED
    const [results, setResults] = useState(['IDLE', 'IDLE', 'IDLE']); // Melchior, Balthasar, Casper

    const startVote = () => {
        playClickSound();
        setState('SCANNING');
        setResults(['THINKING', 'THINKING', 'THINKING']);

        // Sequence results
        setTimeout(() => {
            setResults(['APPROVE', 'THINKING', 'THINKING']);
        }, 1500);

        setTimeout(() => {
            setResults(['APPROVE', 'APPROVE', 'THINKING']);
        }, 2500);

        setTimeout(() => {
            setResults(['APPROVE', 'APPROVE', 'DENY']); // Casper betrays
            setState('DECIDED');
        }, 4000);
    };

    return (
        <div style={{ width: '100%', maxWidth: '1200px', textAlign: 'center' }}>
            <h1 style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--theme-primary)',
                marginBottom: '50px',
                fontSize: '3rem'
            }}>
                SUPERCOMPUTER SYSTEM: MAGI
            </h1>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px' }}>
                <MagiBrain name="MELCHIOR-1" number={1} status={results[0]} delay={0} />
                <MagiBrain name="BALTHASAR-2" number={2} status={results[1]} delay={1} />
                <MagiBrain name="CASPER-3" number={3} status={results[2]} delay={2} />
            </div>

            {state === 'IDLE' && (
                <button
                    onClick={startVote}
                    className="nerv-border"
                    style={{
                        padding: '20px 50px',
                        fontSize: '1.5rem',
                        fontFamily: 'var(--font-display)',
                        color: 'var(--theme-primary)',
                        cursor: 'pointer',
                        background: 'rgba(0,0,0,0.5)'
                    }}
                >
                    REQUEST ARCHIVE ACCESS
                </button>
            )}

            {state === 'DECIDED' && (
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{
                        color: '#e60000',
                        fontSize: '4rem',
                        fontFamily: 'var(--font-display)',
                        border: '10px solid #e60000',
                        padding: '20px',
                        backgroundColor: '#000',
                        display: 'inline-block'
                    }}
                >
                    ACCESS DENIED
                </motion.div>
            )}
        </div>
    );
};

export default MagiSystem;
