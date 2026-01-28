import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function SpotlightCard({ children, className = "", dark = true }) {
    const cardRef = useRef(null);
    const [opacity, setOpacity] = useState(0);

    // Mouse coordinates for Tilt
    const handleMouseMove = (e) => {
        if (!cardRef.current || window.matchMedia("(pointer: coarse)").matches) return;
        const rect = cardRef.current.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty('--x', `${x}px`);
        cardRef.current.style.setProperty('--y', `${y}px`);
    };

    const handleMouseEnter = () => {
        if (window.matchMedia("(pointer: coarse)").matches) return;
        setOpacity(1);
    };
    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`group relative overflow-hidden rounded-2xl border transition-colors duration-500
                ${dark
                    ? 'border-white/10 bg-[#0a2039]/60'
                    : 'border-gray-200 bg-white shadow-lg shadow-blue-500/5'
                } ${className}`}
        >
            {/* Dynamic Spotlight Border */}
            <div
                className="pointer-events-none absolute -inset-px rounded-2xl transition duration-300 z-30 opacity-0 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(400px circle at var(--x) var(--y), ${dark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.2)'}, transparent 40%)`,
                    padding: '1.5px'
                }}
            />

            {/* Inward Spotlight Glow */}
            <div
                className="pointer-events-none absolute -inset-px transition duration-300 z-0"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at var(--x) var(--y), ${dark ? 'rgba(59, 130, 246, 0.12)' : 'rgba(59, 130, 246, 0.05)'}, transparent 40%)`,
                }}
            />

            <div className="relative z-10 p-[1px] subpixel-antialiased">
                <div style={{ transform: "translateZ(20px)" }} className="h-full w-full">
                    {children}
                </div>
            </div>
        </motion.div>
    );
}
