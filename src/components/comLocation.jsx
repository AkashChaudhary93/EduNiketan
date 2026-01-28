import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, CheckCircle2 } from 'lucide-react';

const locations = [
  {
    city: "Chandigarh",
    role: "Technical & Development Hub",
    icon: <Globe className="w-8 h-8 text-blue-400" />,
    features: [
      "Tier-1 connectivity infrastructure",
      "50+ university proximity",
      "Technical talent access",
      "R&D Excellence Center"
    ],
    accent: "blue"
  },
  {
    city: "Varanasi",
    role: "Regulatory & Growth Hub",
    icon: <MapPin className="w-8 h-8 text-indigo-400" />,
    features: [
      "Registered Office (Garthama Bazar)",
      "Government initiative access",
      "Policy engagement hub",
      "Strategic North India presence"
    ],
    accent: "indigo"
  }
];

export default function Comlocation() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" /> */}
      {/* <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" /> */}

      <div className="relative z-10 max-w-[1280px] mx-auto px-6">

        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#0a1a2f] mb-4 tracking-tight uppercase"
          >
            Multi-City Operations
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {locations.map((loc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-[#f8fafc] border border-blue-100 p-10 md:p-14 rounded-[3rem] hover:bg-white transition-all duration-500 hover:border-blue-200 shadow-xl shadow-blue-500/5"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-16 h-16 bg-white border border-blue-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                  {loc.icon}
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-black text-[#0a1a2f] mb-2 tracking-tight uppercase">
                    {loc.city}
                  </h3>
                  <p className="text-blue-600 font-black uppercase tracking-widest text-sm mb-8 block">
                    {loc.role}
                  </p>

                  <ul className="space-y-4">
                    {loc.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center justify-center md:justify-start gap-3 text-gray-500">
                        <CheckCircle2 className="w-5 h-5 text-blue-500/30 transition-colors group-hover:text-blue-500 shrink-0" />
                        <span className="text-base font-black uppercase tracking-widest leading-none text-[10px]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover highlight line */}
              <div className="absolute bottom-0 left-12 right-12 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-full" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}