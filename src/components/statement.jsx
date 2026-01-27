import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import StaggerReveal from './StaggerReveal';

export default function Statement() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">

        <StaggerReveal className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Who We Are
          </h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
        </StaggerReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SpotlightCard dark={false} className="group h-full !p-10 md:!p-14 !bg-white !border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <Eye className="w-8 h-8 text-blue-600 group-hover:text-white" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight flex items-center gap-3">
                Vision
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                To rebuild trust in online examinations and deliver top-tier, institute-grade course content
                through a secure, transparent, and affordable platform. We enable every institution to conduct
                fair, credible, and high-quality digital assessments while preparing the next generation to
                move from passive learning to active coding and innovation.
              </p>

              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-[100px] pointer-events-none transition-all group-hover:w-40 group-hover:h-40" />
            </SpotlightCard>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SpotlightCard dark={false} className="group h-full !p-10 md:!p-14 !bg-white !border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-300">
                <Target className="w-8 h-8 text-indigo-600 group-hover:text-white" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight flex items-center gap-3">
                Mission
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                To ensure fair, secure, and scalable digital examinations across universities and colleges,
                restoring confidence in online assessments. We aim to transform the Indian education system
                by introducing hands-on coding and real-world skill development, ensuring students begin
                building and innovating from an early stage.
              </p>

              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-[100px] pointer-events-none transition-all group-hover:w-40 group-hover:h-40" />
            </SpotlightCard>
          </motion.div>
        </div>

      </div>
    </section>
  );
}