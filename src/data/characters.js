export const CHARACTERS = {
    shinji: {
        id: 'shinji',
        name: 'SHINJI IKARI',
        evangelion: 'EVA-01 TEST TYPE',
        colors: {
            hue: 273,
            sat: '44%',
            light: '53%',
            secHue: 110,
            secSat: '100%',
            secLight: '54%',
            background: 'rgba(57, 13, 84, 0.2)'
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
            hue: 0,
            sat: '100%',
            light: '45%',
            secHue: 37,
            secSat: '100%',
            secLight: '50%',
            background: 'rgba(100, 0, 0, 0.2)'
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
            hue: 178,
            sat: '83%',
            light: '62%',
            secHue: 0,
            secSat: '0%',
            secLight: '94%',
            background: 'rgba(0, 100, 100, 0.1)'
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
    hue: 37,
    sat: '100%',
    light: '50%',
    secHue: 0,
    secSat: '100%',
    secLight: '45%',
    accHue: 110,
    accSat: '100%',
    accLight: '54%'
};
