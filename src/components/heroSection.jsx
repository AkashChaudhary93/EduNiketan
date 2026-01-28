import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Shield, Zap, Users, ArrowRight, Play, Lock, Database, Code, Globe } from 'lucide-react';
import TrustIndicator from './TrustIndicator';
import Magnetic from './Magnetic';
import ReactiveIcon from './ReactiveIcon';

export default function HeroSection() {
  //   const mouseX = useMotionValue(0);
  //   const mouseY = useMotionValue(0);

  //   const springConfig = { damping: 25, stiffness: 150 };
  //   const auraX = useSpring(mouseX, springConfig);
  //   const auraY = useSpring(mouseY, springConfig);

  //   useEffect(() => {
  //     const handleMouseMove = (e) => {
  //       mouseX.set(e.clientX);
  //       mouseY.set(e.clientY);
  //     };
  //     window.addEventListener("mousemove", handleMouseMove);
  //     return () => window.removeEventListener("mousemove", handleMouseMove);
  //   }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const particles = [
    { icon: Lock, x: "10%", y: "20%", size: 40, delay: 0 },
    { icon: Database, x: "85%", y: "15%", size: 30, delay: 2 },
    { icon: Code, x: "15%", y: "70%", size: 25, delay: 4 },
    { icon: Globe, x: "80%", y: "80%", size: 35, delay: 1 },
    { icon: Shield, x: "45%", y: "10%", size: 20, delay: 3 },
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center overflow-hidden bg-[#0a1a2f]">
      {/* Background with Overlay */}
      {/* Optimized Interactive Mouse Aura */}
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0 bg-blue-900/10 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Content Left */}
          <motion.div
            className="w-full lg:w-3/5 text-white text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-6"
            >
              <ReactiveIcon icon={Shield} size={16} color="currentColor" />
              <span>Public Examinations Act 2024 Compliant</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-6xl lg:text-7xl font-bold leading-[1.2] lg:leading-[1.1] tracking-tight mb-4 text-balance"
            >
              Enterprise-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 animate-gradient-x">Security</span> for Digital Exams
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed font-medium opacity-90 text-pretty"
            >
              The most trusted platform for high-stakes examinations. Scalable, secure, and fully compliant with national safety standards.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <Magnetic>
                <button className="group relative w-full sm:w-auto h-[60px] px-8 bg-blue-600 rounded-xl font-bold text-white flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:scale-105 shadow-xl shadow-blue-500/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    Schedule Demo
                    <ReactiveIcon icon={ArrowRight} size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Magnetic>

              <Magnetic>
                <button className="w-full sm:w-auto h-[60px] px-8 bg-white/10 border border-white/20 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/5">
                  <ReactiveIcon icon={Play} size={20} />
                  <span>View Platform</span>
                </button>
              </Magnetic>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm font-semibold text-gray-400 mb-10"
            >
              <div className="flex items-center gap-4 bg-white/5 pr-6 pl-2.5 rounded-full border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] group cursor-default h-12">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0">
                  <ReactiveIcon icon={Users} size={18} color="rgb(96 165 250)" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors leading-none mb-[1px]">20,000+ Concurrent Users</span>
              </div>

              <div className="flex items-center gap-4 bg-white/5 pr-6 pl-2.5 rounded-full border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] group cursor-default h-12">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center shrink-0">
                  <ReactiveIcon icon={Zap} size={18} color="rgb(234 179 8)" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors leading-none mb-[1px]">99.9% Uptime Guarantee</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Mockup Right */}
          <motion.div
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="relative group">
              {/* Decorative elements behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />

              <img
                src="/images/dashboard-mockup.png"
                alt="EduNiketan Dashboard Preview"
                className="relative w-full max-w-[500px] h-auto rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border border-white/10 transition-transform duration-500 group-hover:-translate-y-2"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1551288049-bbda38a5f850?auto=format&fit=crop&q=80&w=1000";
                }}
              />

              {/* Optional badge on image */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Live Scaling</p>
                  <p className="text-sm font-black text-black leading-none">Healthy</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>

      <TrustIndicator />
    </section>
  );
}