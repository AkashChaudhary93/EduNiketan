import { useEffect } from 'react';
import Lenis from 'lenis';
import ScrollProgress from './components/ScrollProgress';
import NavBar from './components/navBar'
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/PageTransition';
import Preloader from './components/Preloader';
import Home from './routes/Home';
import About from './routes/About';
import Products from './routes/Products';
import Solution from './routes/Solution';
import Resources from './routes/Resources';
import Contact from './routes/Contact';
import Careers from './routes/Careers'
import ShowArrpw from './components/arrowButton'
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();

  //   useEffect(() => {
  //     const lenis = new Lenis({
  //       duration: 0.8,
  //       lerp: 0.12,
  //       smoothWheel: true,
  //       wheelMultiplier: 1,
  //       touchMultiplier: 2,
  //     });

  //     function raf(time) {
  //       lenis.raf(time);
  //       requestAnimationFrame(raf);
  //     }

  //     requestAnimationFrame(raf);

  //     return () => {
  //       lenis.destroy();
  //     };
  //   }, []);

  return (
    <>
      {/* <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 mesh-atmosphere opacity-50" />
        <div className="absolute inset-0 bg-noise opacity-10" />
      </div> */}

      <Preloader />
      {/* <CommandPalette /> */}
      {/* <ScrollProgress /> */}
      <NavBar />

      <main>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
            <Route path="/solution" element={<PageTransition><Solution /></PageTransition>} />
            <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      {/* <ShowArrpw /> */}
    </>
  );
}

export default App
