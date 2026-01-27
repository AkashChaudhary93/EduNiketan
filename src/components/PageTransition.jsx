import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 10
    },
    in: {
        opacity: 1,
        y: 0
    },
    out: {
        opacity: 0,
        y: -10
    }
};

const pageTransition = {
    type: "spring",
    stiffness: 120,
    damping: 25,
    mass: 0.8
};

export default function PageTransition({ children }) {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ willChange: 'transform, opacity' }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}
