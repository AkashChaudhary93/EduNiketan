import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Zap, ShieldCheck, Languages } from 'lucide-react';

const trustItems = [
  {
    number: "300+",
    label: "Student Tested",
    icon: <GraduationCap className="w-6 h-6 text-blue-400" />
  },
  {
    number: "20,000+",
    label: "Concurrent Capacity",
    icon: <Zap className="w-6 h-6 text-yellow-500" />
  },
  {
    number: "Zero",
    label: "Security Breaches",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />
  },
  {
    number: "50+",
    label: "Languages Supported",
    icon: <Languages className="w-6 h-6 text-indigo-400" />
  }
];

export default function TrustIndicator() {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-[#0a1a2f]/80 backdrop-blur-xl border-t border-white/10 hidden md:block">
      <div className="max-w-[1280px] mx-auto px-6 py-10">
        <div className="flex justify-between items-center gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="flex items-center gap-4 text-white group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600 transition-all duration-300">
                {item.icon}
              </div>
              <div>
                <span className="block text-2xl font-black tracking-tight leading-none mb-1">
                  {item.number}
                </span>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}