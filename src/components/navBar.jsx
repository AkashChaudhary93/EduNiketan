import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useMotionValue, useTransform } from 'framer-motion';

import Magnetic from './Magnetic';

function NavBar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const { scrollY, scrollYProgress } = useScroll();
  const location = useLocation();
  const navRef = useRef(null);

  // Mouse-following glint
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Solution', path: '/solution' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-[1001] flex justify-center pt-6 px-6 pointer-events-none"
        style={{ perspective: '1000px' }}
      >
        <motion.nav
          ref={navRef}
          onMouseMove={handleMouseMove}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: visible ? 0 : -120,
            opacity: 1,
            maxWidth: scrolled ? '1200px' : '1280px',
          }}
          style={{ willChange: "transform" }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 25,
            maxWidth: { duration: 0.6, ease: "easeOut" }
          }}
          className={`w-full pointer-events-auto transition-all duration-500 rounded-full border relative overflow-hidden
            ${scrolled
              ? 'bg-[#0a1a2f] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-2'
              : 'bg-transparent border-transparent py-5'
            }`}
        >
          {/* Superior Glassmorphism Glint & Noise - REMOVED NOISE FOR SAFETY */}
          {/* <div className="absolute inset-0 bg-noise pointer-events-none mix-blend-overlay opacity-[0.03]" /> */}

          {/* Cursor Following Glint */}
          <motion.div
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(59, 130, 246, 0.15), transparent 80%)`
              )
            }}
          />

          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-30" />

          <div className="px-8 flex items-center justify-between relative z-10 font-sans">
            {/* Logo Section - Left Aligned */}
            <div className="flex-1 flex justify-start min-w-max">
              <Magnetic>
                <NavLink to="/" className="flex items-center gap-3 group">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-blue-500 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                    <motion.img
                      src="/EduniketanLogoNew.jpg"
                      alt="Eduniketan Logo"
                      className="relative h-10 w-10 min-w-[40px] rounded-full ring-2 ring-white/10 group-hover:ring-blue-500/50 transition-all duration-500 shadow-2xl object-cover brightness-105 contrast-105"
                      style={{ imageRendering: 'high-quality' }}
                    />
                  </div>
                  <span className="text-xl font-black text-white tracking-[0.1em] group-hover:tracking-[0.15em] transition-all duration-500 whitespace-nowrap">
                    EDUNIKETAN
                  </span>
                </NavLink>
              </Magnetic>
            </div>

            {/* Desktop Menu - Centered Liquid sliding Pill */}
            <div
              className={`hidden lg:flex items-center bg-[#0a2039] rounded-full p-1 border border-white/5 relative overflow-hidden flex-none transition-all duration-500 ${scrolled ? 'gap-0.5' : 'gap-1'}`}
              onMouseLeave={() => setHoveredPath(null)}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onMouseEnter={() => setHoveredPath(item.path)}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-[12px] font-black uppercase tracking-widest transition-all duration-500 rounded-full z-20 whitespace-nowrap
                   ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
                   ${scrolled ? 'px-3' : 'px-4'}`
                  }
                >
                  {item.name}

                  {/* Unified Liquid Pill Logic */}
                  {hoveredPath === item.path && (
                    <motion.div
                      className="absolute inset-0 bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] rounded-full -z-10 border border-white/5"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  {location.pathname === item.path && !hoveredPath && (
                    <motion.div
                      className="absolute inset-0 bg-white/10 shadow-[0_8px_16px_rgba(0,0,0,0.2)] rounded-full -z-10 border border-white/10"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </NavLink>
              ))}
            </div>

            {/* CTA Section - Right Aligned */}
            <div className="flex-1 flex justify-end items-center gap-4 min-w-max">
              <div className="hidden md:flex items-center flex-shrink-0">
                <Magnetic>
                  <button className={`group relative bg-blue-600 rounded-full text-white text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-blue-500/40 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-500 overflow-hidden whitespace-nowrap ${scrolled ? 'px-5 py-2' : 'px-6 py-2.5'}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className="relative flex items-center gap-2">
                      Schedule Demo
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </motion.div>
                    </span>
                  </button>
                </Magnetic>
              </div>

              {/* Mobile Toggle inside the right flex container */}
              <Magnetic>
                <button
                  className="lg:hidden p-2.5 text-white hover:bg-white/10 rounded-full transition-colors z-[1100] active:scale-90 flex-none"
                  onClick={() => setOpen(!open)}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={open ? 'close' : 'open'}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </motion.div>
                  </AnimatePresence>
                </button>
              </Magnetic>
            </div>
          </div>

          {/* Cinematic Scroll Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 z-50 origin-left"
            style={{
              scaleX: scrollYProgress,
              filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
            }}
          />
        </motion.nav >
      </div >

      {/* Cinematic Mobile Menu - MOVED OUTSIDE CONSTRAINED PARENT */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#020617] lg:hidden z-[9999] flex flex-col items-center py-20 pointer-events-auto overflow-y-auto scrollbar-hide"
          >
            <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none sticky top-0" />

            {/* Close Button Inside Menu */}
            <button
              onClick={() => setOpen(false)}
              className="fixed top-8 right-8 p-3 text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-[10000] backdrop-blur-md"
            >
              <X className="w-7 h-7" />
            </button>

            <motion.div
              className="flex flex-col gap-5 text-center px-6 w-full max-w-sm"
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={{
                    open: { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)' },
                    closed: { y: 40, opacity: 0, scale: 0.9, filter: 'blur(10px)' }
                  }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-3xl font-black uppercase tracking-[0.2em] transition-all duration-500 block py-3 rounded-2xl
                     ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-white/60 hover:text-white hover:bg-white/5'}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  open: { scale: 1, opacity: 1, y: 0 },
                  closed: { scale: 0.8, opacity: 0, y: 20 }
                }}
                className="pt-8"
              >
                <button className="w-full py-6 bg-white text-blue-600 rounded-3xl font-black text-xl uppercase tracking-widest shadow-2xl active:scale-95 transition-all">
                  Get Started
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
