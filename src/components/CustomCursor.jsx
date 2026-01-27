import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (!target || !(target instanceof Element)) {
                setIsHovered(false);
                return;
            }

            const isInteractive =
                target.closest('button') ||
                target.closest('a') ||
                target.closest('.spotlight-card') ||
                target.closest('.cursor-pointer') ||
                window.getComputedStyle(target).cursor === 'pointer';

            setIsHovered(!!isInteractive);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[99999] rounded-full border border-blue-500/50 mix-blend-difference flex items-center justify-center"
            style={{
                x: springX,
                y: springY,
                translateX: '-50%',
                translateY: '-50%',
            }}
            animate={{
                width: isHovered ? 80 : 20,
                height: isHovered ? 80 : 20,
                backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.4)',
                borderWidth: isHovered ? '1px' : '2px',
                borderColor: isHovered ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.8)',
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 150 }}
        >
            <motion.div
                className="w-1 h-1 bg-blue-400 rounded-full"
                animate={{ scale: isHovered ? 0 : 1 }}
            />
        </motion.div>
    );
}
