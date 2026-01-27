import React from 'react';
import { motion } from 'framer-motion';

export default function StaggerReveal({ children, delay = 0, staggerChildren = 0.1, className = "" }) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: delay,
                staggerChildren: staggerChildren
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1] // easeOutCubic
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={className}
        >
            {React.Children.map(children, (child) => (
                <motion.div variants={itemVariants}>
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
}
