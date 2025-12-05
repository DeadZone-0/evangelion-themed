import React from 'react';
import { motion } from 'framer-motion';
import { CHARACTERS } from '../data/characters';
import { useNavigate } from 'react-router-dom';

const CharacterSelect = () => {
    const navigate = useNavigate();

    return (
        <div style={{ width: '100%', maxWidth: '1000px' }}>
            <h2 style={{
                color: 'var(--theme-primary)',
                fontFamily: 'var(--font-display)',
                marginBottom: '30px',
                borderBottom: '2px solid var(--theme-primary)',
                display: 'inline-block'
            }}>
                PILOT SELECTION
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                {Object.values(CHARACTERS).map((char, i) => (
                    <motion.div
                        key={char.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                        onClick={() => navigate(`/character/${char.id}`)}
                        className="nerv-border"
                        style={{
                            padding: '20px',
                            cursor: 'pointer',
                            borderColor: char.colors.primary,
                            boxShadow: `0 0 10px ${char.colors.primary}`,
                            minHeight: '200px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div>
                            <div style={{
                                fontSize: '2rem',
                                color: char.colors.secondary,
                                fontFamily: 'var(--font-display)',
                                marginBottom: '10px'
                            }}>
                                {i === 0 ? '01' : i === 1 ? '02' : '00'}
                            </div>
                            <h3 style={{ color: char.colors.primary, margin: 0 }}>{char.name}</h3>
                            <p style={{ color: '#aaa', fontSize: '0.8rem' }}>{char.evangelion}</p>
                        </div>

                        <div style={{ marginTop: '20px', display: 'flex', gap: '5px' }}>
                            <div style={{ height: '5px', flex: 1, backgroundColor: char.colors.primary }}></div>
                            <div style={{ height: '5px', width: '20%', backgroundColor: char.colors.secondary }}></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CharacterSelect;
