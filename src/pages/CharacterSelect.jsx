import React from 'react';
import { motion } from 'framer-motion';
import { CHARACTERS } from '../data/characters';
import { useNavigate } from 'react-router-dom';

const CharacterSelect = () => {
    const navigate = useNavigate();

    return (
        <div style={{ width: '100%', maxWidth: '1200px', position: 'relative' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                borderBottom: '2px solid var(--theme-primary)',
                paddingBottom: '10px',
                marginBottom: '50px'
            }}>
                <h2 style={{
                    color: 'var(--theme-primary)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    margin: 0,
                    textShadow: '0 0 10px var(--theme-primary)'
                }}>
                    PERSONNEL DATABASE
                </h2>
                <span style={{ fontFamily: 'monospace', color: 'var(--theme-secondary)' }}>
                    auth_level: COMMANDER
                </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                {Object.values(CHARACTERS).map((char, i) => (
                    <motion.div
                        key={char.id}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        onClick={() => navigate(`/character/${char.id}`)}
                        style={{
                            cursor: 'pointer',
                            position: 'relative',
                            height: '400px'
                        }}
                    >
                        {/* Tech Decoration */}
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                            border: `1px solid ${char.colors.primary}`,
                            clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)',
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            zIndex: 1
                        }}></div>

                        {/* Content Container */}
                        <div style={{ position: 'relative', zIndex: 2, padding: '30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <div style={{
                                fontSize: '4rem',
                                color: 'rgba(255,255,255,0.1)',
                                fontFamily: 'var(--font-display)',
                                position: 'absolute',
                                top: '10px',
                                right: '20px',
                                fontWeight: '900'
                            }}>
                                {i === 0 ? '01' : i === 1 ? '02' : '00'}
                            </div>

                            <div style={{ width: '50px', height: '5px', backgroundColor: char.colors.secondary, marginBottom: '20px' }}></div>

                            <h3 style={{
                                color: char.colors.primary,
                                margin: 0,
                                fontSize: '1.8rem',
                                fontFamily: 'var(--font-display)',
                                textShadow: `0 0 10px ${char.colors.primary}`
                            }}>
                                {char.name}
                            </h3>
                            <p style={{ color: '#fff', fontSize: '0.9rem', marginBottom: 'auto', opacity: 0.8, marginTop: '5px' }}>
                                {char.evangelion}
                            </p>

                            {/* Decorative Data Grid */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '10px',
                                marginTop: '20px',
                                fontSize: '0.7rem',
                                color: char.colors.secondary,
                                fontFamily: 'monospace'
                            }}>
                                <div style={{ border: `1px solid ${char.colors.secondary}40`, padding: '5px' }}>SYNC RATIO: {char.stats.syncRate}%</div>
                                <div style={{ border: `1px solid ${char.colors.secondary}40`, padding: '5px' }}>AT FIELD: {char.stats.atField}</div>
                                <div style={{ border: `1px solid ${char.colors.secondary}40`, padding: '5px' }}>STATUS: {char.status}</div>
                            </div>

                            <div style={{
                                marginTop: '20px',
                                textAlign: 'right',
                                color: char.colors.primary,
                                fontSize: '0.8rem',
                                letterSpacing: '2px'
                            }}>
                                [ ACCESS FILE ]
                            </div>
                        </div>

                        {/* Corner Accent */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-5px',
                            right: '-5px',
                            width: '30px',
                            height: '30px',
                            borderBottom: `3px solid ${char.colors.secondary}`,
                            borderRight: `3px solid ${char.colors.secondary}`,
                            zIndex: 3
                        }}></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CharacterSelect;
