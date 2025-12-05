import React from 'react';
import { motion } from 'framer-motion';
import { playHoverSound, playClickSound } from '../utils/sound';

const Hexagon = ({ label, delay, onClick, active }) => {
    return (
        <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: delay * 0.1, type: 'spring', stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
            onHoverStart={() => playHoverSound()}
            onClick={() => {
                playClickSound();
                onClick();
            }}
            style={{
                width: '100px',
                height: '115px',
                position: 'relative',
                margin: '0 5px',
                cursor: 'pointer',
                filter: active ? 'drop-shadow(0 0 10px var(--nerv-orange))' : 'none'
            }}
        >
            <div style={{
                backgroundColor: active ? 'var(--nerv-orange)' : 'rgba(20, 20, 20, 0.8)',
                width: '100%',
                height: '100%',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: active ? 'none' : '2px solid var(--nerv-orange)',
                color: active ? '#000' : 'var(--nerv-orange)',
                fontWeight: 'bold',
                fontFamily: 'var(--font-display)',
                letterSpacing: '1px',
                fontSize: '0.9rem'
            }}>
                {label}
            </div>
        </motion.div>
    );
};

const HexagonMenu = ({ items, activeIndex, onSelect }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            {items.map((item, index) => (
                <Hexagon
                    key={item}
                    label={item}
                    delay={index}
                    active={index === activeIndex}
                    onClick={() => onSelect(index)}
                />
            ))}
        </div>
    );
};

export default HexagonMenu;
