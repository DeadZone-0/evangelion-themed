import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CHARACTERS } from '../data/characters';
import SynchroGraph from '../components/SynchroGraph';

const CharacterDetail = ({ setTheme }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const character = CHARACTERS[id];

    useEffect(() => {
        if (character && setTheme) {
            setTheme(character.colors);
        }
    }, [character, setTheme]);

    if (!character) return <div>PILOT NOT FOUND</div>;

    // Construct HSL string for graph
    const primaryHsl = `hsl(${character.colors.hue}, ${character.colors.sat}, ${character.colors.light})`;

    return (
        <div style={{ width: '90vw', height: '80vh', display: 'flex', gap: '40px', alignItems: 'center' }}>
            {/* Left Stats Column */}
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                style={{ flex: 1, textAlign: 'right' }}
            >
                <h1 style={{
                    fontSize: '4rem',
                    fontFamily: 'var(--font-display)',
                    color: 'var(--theme-primary)',
                    lineHeight: 1,
                    marginBottom: '10px',
                    textShadow: '0 0 20px var(--theme-primary)'
                }}>
                    {character.name.split(' ')[0]}
                </h1>
                <h2 style={{ color: 'var(--theme-secondary)', letterSpacing: '5px' }}>{character.evangelion}</h2>

                <div style={{ marginTop: '40px', borderRight: '4px solid var(--theme-primary)', paddingRight: '20px' }}>
                    {Object.entries(character.stats).map(([key, value]) => (
                        <div key={key} style={{ marginBottom: '15px' }}>
                            <div style={{ textTransform: 'uppercase', fontSize: '0.8rem', color: '#888' }}>{key}</div>
                            <div style={{ fontSize: '1.5rem', color: 'var(--theme-accent)' }}>{value}</div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => navigate('/characters')}
                    className="nerv-border"
                    style={{
                        marginTop: '30px',
                        color: 'var(--theme-primary)',
                        padding: '10px 30px',
                        fontFamily: 'var(--font-display)',
                        cursor: 'pointer',
                        fontSize: '1.2rem'
                    }}
                >
                    [ RETURN ]
                </button>
            </motion.div>

            {/* Center Visual/Graph area */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    border: '1px solid var(--theme-primary)',
                    boxShadow: '0 0 30px var(--theme-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }}
            >
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    border: '2px dashed var(--theme-secondary)',
                    borderRadius: '50%',
                    animation: 'spin 20s linear infinite'
                }}></div>

                {/* Real-time Graph */}
                <div style={{ width: '100%', height: '150px', zIndex: 0 }}>
                    <SynchroGraph color={primaryHsl} />
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: '80px',
                    color: 'var(--theme-primary)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    textShadow: '0 0 10px black'
                }}>
                    SYNC: {character.stats.syncRate}%
                </div>
            </motion.div>

            {/* Right Bio Column */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                style={{ flex: 1, textAlign: 'left' }}
            >
                <div className="nerv-border" style={{ padding: '30px' }}>
                    <h3 style={{ color: 'var(--theme-secondary)', borderBottom: '1px solid var(--theme-secondary)', paddingBottom: '10px' }}>
                    // PERSONAL DATA
                    </h3>
                    <p style={{ lineHeight: '1.8', fontSize: '1.1rem', marginTop: '20px', color: '#ddd' }}>
                        {character.bio}
                    </p>
                    <div style={{ marginTop: '30px', color: 'var(--theme-accent)', fontWeight: 'bold' }}>
                        STATUS: {character.status}
                    </div>
                </div>
            </motion.div>

            <style>{`
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `}</style>
        </div>
    );
};

export default CharacterDetail;
