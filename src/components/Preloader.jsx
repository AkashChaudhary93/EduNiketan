import React, { memo } from 'react';
import { motion } from 'framer-motion';

const Preloader = memo(function Preloader() {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.87, 0, 0.13, 1], delay: 2 }}
            className="fixed inset-0 z-[9999] bg-[#020617] flex items-center justify-center overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex flex-col items-center gap-8 relative"
            >
                {/* Lens Flare Effect */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.5, 0.2],
                        rotate: [0, 90, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-blue-500/20 blur-[50px] rounded-full -z-10"
                />

                <div className="relative">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 border border-blue-500/20 rounded-full border-dashed"
                    />
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        src="/EduniketanLogoNew.jpg"
                        alt="Eduniketan Logo"
                        className="w-24 h-24 md:w-28 md:h-28 rounded-full shadow-[0_0_60px_rgba(59,130,246,0.4)] ring-4 ring-white/5 relative z-10"
                    />
                </div>

                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-3xl md:text-5xl font-black text-white tracking-[0.2em] md:tracking-[0.4em] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
                    >
                        EDUNIKETAN
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 120 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "circIn" }}
                    className="h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                />
            </motion.div>
        </motion.div>
    );
});

export default Preloader;
