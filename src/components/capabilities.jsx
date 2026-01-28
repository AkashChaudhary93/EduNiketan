import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Server, FileCheck, CheckCircle2 } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import ReactiveIcon from './ReactiveIcon';

const capabilities = [
  {
    title: "Military-Grade Security",
    icon: ShieldAlert,
    iconColor: "rgb(59 130 246)",
    description: "Robust protection for high-stakes digital environments.",
    features: [
      "Binary encryption",
      "Proprietary authenticated browser",
      "Real-time fraud detection",
      "Forensic video retention",
      "Anti-reverse engineering"
    ]
  },
  {
    title: "Enterprise Scalability",
    icon: Server,
    iconColor: "rgb(79 70 229)",
    description: "Built for massive concurrency and reliability.",
    features: [
      "20,000+ concurrent students",
      "7 OS versions supported",
      "99.9% uptime guarantee",
      "0.5 Mbps minimum bandwidth",
      "Multi-region deployment"
    ]
  },
  {
    title: "Regulatory Compliance",
    icon: FileCheck,
    iconColor: "rgb(16 185 129)",
    description: "Aligned with national and international standards.",
    features: [
      "Public Examinations Act 2024",
      "ISO 27001 roadmap",
      "NEP 2020 aligned",
      "Audit-first architecture",
      "Government-ready infrastructure"
    ]
  }
];

export default function Capabilities() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#0a1a2f] mb-4 uppercase tracking-tight"
          >
            Our Technology
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <SpotlightCard dark={false} className="h-full !p-10 transition-all duration-300 shadow-xl shadow-blue-500/5 glass-noise-textured">
                <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ReactiveIcon icon={cap.icon} size={32} color={cap.iconColor} />
                </div>

                <h3 className="text-2xl font-black text-[#0a1a2f] mb-4 tracking-tight uppercase">
                  {cap.title}
                </h3>

                <p className="text-gray-600 mb-8 font-medium">
                  {cap.description}
                </p>

                <ul className="space-y-4">
                  {cap.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-gray-500">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-[15px] font-black uppercase tracking-widest leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}