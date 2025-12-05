export const CHARACTERS = {
    shinji: {
        id: 'shinji',
        name: 'SHINJI IKARI',
        evangelion: 'EVA-01 TEST TYPE',
        colors: {
            primary: '#8D56BA', // Purple
            secondary: '#39ff14', // Green
            accent: '#ffffff',
            background: 'rgba(57, 13, 84, 0.1)'
        },
        stats: {
            syncRate: 400.0,
            atField: 98,
            aggressive: 85
        },
        bio: 'Third Child. Pilot of Evangelion Unit-01. Deterministic behavior consistent with high synchronization rates under duress.',
        status: 'ACTIVE / BERSERK POTENTIAL'
    },
    asuka: {
        id: 'asuka',
        name: 'ASUKA LANGLEY SORYU',
        evangelion: 'EVA-02 PRODUCTION MODEL',
        colors: {
            primary: '#e60000', // Red
            secondary: '#ff9d00', // Orange
            accent: '#ffcc00',
            background: 'rgba(100, 0, 0, 0.1)'
        },
        stats: {
            syncRate: 98.5,
            atField: 92,
            aggressive: 99
        },
        bio: 'Second Child. Pilot of Evangelion Unit-02. High aptitude for combat. Psychological stability monitoring required.',
        status: 'ACTIVE'
    },
    rei: {
        id: 'rei',
        name: 'REI AYANAMI',
        evangelion: 'EVA-00 PROTOTYPE',
        colors: {
            primary: '#4DEEEA', // Cyan/Blue
            secondary: '#F0F0F0', // White/Grey
            accent: '#000000',
            background: 'rgba(200, 200, 200, 0.05)'
        },
        stats: {
            syncRate: 65.0,
            atField: 88,
            aggressive: 40
        },
        bio: 'First Child. Pilot of Evangelion Unit-00. Origins classified. Essential for Instrumentality Project.',
        status: 'UNKNOWN'
    }
};

export const DEFAULT_THEME = {
    primary: '#ff9d00', // NERV Orange
    secondary: '#e60000', // NERV Red
    accent: '#39ff14' // NERV Green
};
