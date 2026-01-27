import React from 'react';
import { motion } from 'framer-motion';

export default function ReactiveIcon({ icon: Icon, className = "", size = 24, color = "currentColor" }) {
    return (
        <motion.div
            className={`relative flex items-center justify-center ${className}`}
            whileHover="hover"
            initial="initial"
        >
            <motion.div
                variants={{
                    initial: { scale: 1, rotate: 0 },
                    hover: {
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        transition: { duration: 0.4 }
                    }
                }}
            >
                <Icon size={size} color={color} />
            </motion.div>
        </motion.div>
    );
}
