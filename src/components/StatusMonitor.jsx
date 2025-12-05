import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StatusMonitor = () => {
    const [stats, setStats] = useState([
        { label: 'SYNC RATE', value: 45 },
        { label: 'PSYCHO', value: 30 },
        { label: 'AT FIELD', value: 80 }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => prev.map(stat => ({
                ...stat,
                value: Math.min(100, Math.max(0, stat.value + (Math.random() * 20 - 10)))
            })));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="nerv-border" style={{
            padding: '20px',
            width: '250px',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
        }}>
            <h3 style={{ borderBottom: '1px solid var(--nerv-red)', paddingBottom: '5px', color: 'var(--nerv-red)' }}>PILOT STATUS</h3>
            {stats.map(stat => (
                <div key={stat.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '2px' }}>
                        <span>{stat.label}</span>
                        <span>{stat.value.toFixed(1)}%</span>
                    </div>
                    <div style={{ width: '100%', height: '10px', backgroundColor: '#333' }}>
                        <motion.div
                            animate={{ width: `${stat.value}%` }}
                            transition={{ ease: "linear", duration: 0.5 }}
                            style={{
                                height: '100%',
                                backgroundColor: stat.value > 80 ? 'var(--nerv-red)' : stat.value > 50 ? 'var(--nerv-orange)' : 'var(--nerv-green)'
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StatusMonitor;
