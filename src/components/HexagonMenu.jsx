import React from 'react';
import { motion } from 'framer-motion';
import { playHoverSound, playClickSound } from '../utils/sound';

const HexagonButton = ({ label, index, active, onClick }) => {
    // Hexagon math for SVG (flat topped or pointy topped? The screenshot was pointy topped)
    // Pointy topped: 
    // Points: (50, 0), (100, 25), (100, 75), (50, 100), (0, 75), (0, 25) for a 100x100 coord system

    const isSelected = active;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => playHoverSound()}
            onClick={() => {
                playClickSound();
                onClick();
            }}
            style={{
                width: '140px', // Wider to fit text
                height: '140px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                margin: '0 10px'
            }}
        >
            <motion.svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible' }}
            >
                {/* Glow Filter */}
                <defs>
                    <filter id={`glow-${index}`} x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Background / Fill */}
                <motion.path
                    d="M50 2 L95 25 L95 75 L50 98 L5 75 L5 25 Z"
                    fill={isSelected ? 'var(--theme-primary)' : 'rgba(0,0,0,0.5)'}
                    stroke="none"
                    animate={{
                        fill: isSelected ? 'var(--theme-primary)' : 'rgba(0,0,0,0.5)',
                        opacity: isSelected ? 0.8 : 0.5
                    }}
                />

                {/* Tech Borders - Left Bracket */}
                <motion.path
                    d="M50 2 L5 25 L5 75 L25 85"
                    fill="none"
                    stroke="var(--theme-primary)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ filter: `url(#glow-${index})` }}
                />

                {/* Tech Borders - Right Bracket */}
                <motion.path
                    d="M50 98 L95 75 L95 25 L75 15"
                    fill="none"
                    stroke="var(--theme-primary)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={{ filter: `url(#glow-${index})` }}
                />

                {/* Animated Rims on Hover */}
                <motion.path
                    d="M50 2 L95 25 L95 75 L50 98 L5 75 L5 25 Z"
                    fill="none"
                    stroke="var(--theme-secondary)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileHover={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />

                {/* Decorative Bits */}
                <circle cx="50" cy="8" r="1.5" fill="var(--theme-secondary)" />
                <circle cx="50" cy="92" r="1.5" fill="var(--theme-secondary)" />

            </motion.svg>

            {/* Label Text */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                color: isSelected ? '#000' : 'var(--theme-primary)',
                fontFamily: 'var(--font-display)',
                fontSize: label.length > 8 ? '0.8rem' : '0.9rem', // Adjust size for long text
                fontWeight: 'bold',
                letterSpacing: '2px',
                textShadow: isSelected ? 'none' : '0 0 5px var(--theme-primary)',
                pointerEvents: 'none'
            }}>
                {label}
            </div>
        </motion.div>
    );
};

const HexagonMenu = ({ items, activeIndex, onSelect }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '15px'
        }}>
            {items.map((item, index) => (
                <HexagonButton
                    key={item}
                    label={item}
                    index={index}
                    active={index === activeIndex}
                    onClick={() => onSelect(index)}
                />
            ))}
        </div>
    );
};

export default HexagonMenu;
