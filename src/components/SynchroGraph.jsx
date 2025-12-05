import React, { useRef, useEffect } from 'react';

const SynchroGraph = ({ color = '#fff' }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;

        const resize = () => {
            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const draw = () => {
            time += 0.05;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.lineWidth = 2;
            ctx.strokeStyle = color;
            ctx.beginPath();

            for (let x = 0; x < canvas.width; x++) {
                // Complex wave interference pattern
                const y = canvas.height / 2 +
                    Math.sin(x * 0.01 + time) * 30 +
                    Math.sin(x * 0.02 - time * 0.5) * 20;

                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Add a second ghost wave
            ctx.lineWidth = 1;
            ctx.strokeStyle = color + '40'; // Low opacity
            ctx.beginPath();
            for (let x = 0; x < canvas.width; x++) {
                const y = canvas.height / 2 +
                    Math.sin(x * 0.015 + time * 1.2) * 40;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            animationFrameId = window.requestAnimationFrame(draw);
        };
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [color]);

    return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default SynchroGraph;
