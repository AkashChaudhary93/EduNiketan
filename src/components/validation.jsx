import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, CheckCircle } from 'lucide-react';
import AnimateNumber from './AnimateNumber';

export default function Validation() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#0a1a2f] mb-4 tracking-tight uppercase"
          >
            Proven at Scale
          </motion.h2>
        </div>

        {/* Infinite Logo Marquee */}
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-24">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_li]:max-w-none">
            {[
              "Indian Institute of Technology, Delhi",
              "National Institute of Technology, Trichy",
              "Anna University, Chennai",
              "Delhi University",
              "Mumbai University",
              "Banaras Hindu University",
              "Vellore Institute of Technology",
              "BITS Pilani"
            ].map((uni, index) => (
              <li key={index} className="text-xl font-bold text-gray-500 whitespace-nowrap flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" /> {uni}
              </li>
            ))}
          </ul>
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_li]:max-w-none" aria-hidden="true">
            {[
              "Indian Institute of Technology, Delhi",
              "National Institute of Technology, Trichy",
              "Anna University, Chennai",
              "Delhi University",
              "Mumbai University",
              "Banaras Hindu University",
              "Vellore Institute of Technology",
              "BITS Pilani"
            ].map((uni, index) => (
              <li key={index} className="text-xl font-bold text-gray-500 whitespace-nowrap flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" /> {uni}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-[#f8fafc] border border-blue-100 rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl shadow-blue-500/5"
        >
          {/* Decorative Background Element */}
          {/* <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" /> */}

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">

            {/* University Branding */}
            <div className="w-full lg:w-3/5 space-y-8 text-center lg:text-left">
              <div className="flex flex-col md:flex-row items-center gap-8 justify-center lg:justify-start">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-[2.5rem] p-6 flex items-center justify-center border border-blue-100 shadow-lg shadow-blue-500/5">
                  <img
                    src="/images/LPU-Icon-Logo.jpg"
                    alt="LPU Logo"
                    className="w-full h-auto object-contain brightness-110"
                    onError={(e) => {
                      e.target.src = "https://www.lpu.in/images/logo.png";
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-black text-[#0a1a2f] mb-3 tracking-tight uppercase">
                    Lovely Professional University
                  </h3>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-400 font-medium">
                    <Award className="w-5 h-5 text-blue-500" />
                    <span>Premier Institutional Partner</span>
                  </div>
                  <p className="text-gray-500 mt-4 text-sm font-semibold max-w-sm mx-auto lg:mx-0">
                    Jalandhar - Delhi G.T. Road, Phagwara, Punjab (India) - 144411
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-blue-600 p-6 rounded-3xl flex items-center gap-4 shadow-lg shadow-blue-500/20">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white/60 uppercase tracking-widest">Reliability</p>
                    <p className="text-lg font-black text-white leading-none">Zero Failures</p>
                  </div>
                </div>
                <div className="bg-[#0a1a2f] p-6 rounded-3xl border border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <Users className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Pilot Scale</p>
                    <p className="text-lg font-black text-white leading-none">
                      <AnimateNumber value="300" suffix="+" /> Test Users
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Metric */}
            <div className="w-full lg:w-2/5 flex flex-col items-center justify-center p-8 md:p-12 rounded-[2.5rem] bg-white border border-blue-100 text-[#0a1a2f] shadow-2xl relative glass-noise-textured">
              <div className="absolute top-4 right-4 text-blue-500/5">
                <Users className="w-32 h-32" />
              </div>

              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-7xl md:text-8xl font-black mb-2 flex items-center gap-1"
              >
                <AnimateNumber value="40" />K<span className="text-blue-500 text-5xl">+</span>
              </motion.span>

              <p className="text-lg font-bold text-blue-400 uppercase tracking-[0.2em] mb-8">
                Student Reach
              </p>

              <div className="w-full space-y-4 pt-6 border-t border-blue-50">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-gray-400 uppercase tracking-widest">Student Satisfaction</span>
                  <span className="text-[#0a1a2f]"><AnimateNumber value="87" suffix="%" /></span>
                </div>
                <div className="w-full h-2 bg-blue-50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "87%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                  />
                </div>
                <div className="flex justify-between items-center text-sm font-bold pt-2">
                  <span className="text-gray-400 uppercase tracking-widest">Faculty Approval</span>
                  <span className="text-[#0a1a2f]"><AnimateNumber value="91" suffix="%" /></span>
                </div>
                <div className="w-full h-2 bg-blue-50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "91%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="h-full bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                  />
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}