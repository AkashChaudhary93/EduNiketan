import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Magnetic({ children }) {
    const ref = useRef(null);

    // Performance: Use motion values instead of state to avoid React re-renders on every mouse move
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics
    const x = useSpring(mouseX, { stiffness: 150, damping: 25, mass: 0.1 });
    const y = useSpring(mouseY, { stiffness: 150, damping: 25, mass: 0.1 });

    const handleMouse = (e) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        mouseX.set(middleX * 0.15);
        mouseY.set(middleY * 0.15);
    }

    const reset = () => {
        mouseX.set(0);
        mouseY.set(0);
    }

    return (
        <motion.div
            style={{
                position: 'relative',
                display: 'inline-block',
                x,
                y,
                willChange: "transform"
            }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
        >
            {children}
        </motion.div>
    )
}
