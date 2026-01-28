import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users,
    Target,
    Rocket,
    Briefcase,
    MapPin,
    Clock,
    ChevronRight,
    Send,
    Code,
    Shield,
    BookOpen,
    PieChart,
    HardHat,
    Globe2
} from 'lucide-react';
import Footer from "../components/footer";

// SAFE MODE: Replaced heavy JS physics with performant CSS transitions for stability
const MagneticButton = ({ children, className }) => {
    return (
        <button
            className={`${className} hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300`}
            style={{ WebkitFontSmoothing: 'antialiased' }}
        >
            {children}
        </button>
    );
};

const openPositions = [
    { title: "Full-Stack Developer", dept: "Engineering", loc: "Chandigarh", type: "Full-time", icon: <Code className="w-5 h-5 text-blue-400" /> },
    { title: "Security Engineer", dept: "Security", loc: "Chandigarh", type: "Full-time", icon: <Shield className="w-5 h-5 text-emerald-400" /> },
    { title: "Curriculum Designer", dept: "Content", loc: "Remote", type: "Contract", icon: <BookOpen className="w-5 h-5 text-indigo-400" /> },
    { title: "Sales Representative", dept: "Business Dev", loc: "Pan-India", type: "Full-time", icon: <PieChart className="w-5 h-5 text-cyan-400" /> },
    { title: "DevOps Engineer", dept: "Infrastructure", loc: "Chandigarh", type: "Full-time", icon: <HardHat className="w-5 h-5 text-amber-400" /> }
];

const recruitmentSteps = [
    { id: 1, title: "Submission", desc: "Share your profile and basic details." },
    { id: 2, title: "Assessment", desc: "Evaluate skills through structured tests." },
    { id: 3, title: "Cultural Fit", desc: "Mindset and collaboration interview." },
    { id: 4, title: "Leadership", desc: "Final discussion with the founders." }
];

export default function Careers() {
    return (
        <div className="bg-transparent">

            {/* Careers Hero */}
            <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 bg-[#0a1a2f] mesh-gradient overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-none text-balance">
                            Join the <span className="text-gradient">Mission</span>.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl mb-10 text-pretty">
                            We're building the future of secure digital education.
                            Help us restore trust in examinations and innovate at scale.
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm font-bold text-blue-400 tracking-[0.2em] uppercase">
                            <span>Elite Tech</span>
                            <span className="text-white opacity-20">•</span>
                            <span>Hyper Growth</span>
                            <span className="text-white opacity-20">•</span>
                            <span>Impact-First</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Growth Timeline / Roadmap */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-[#0a1a2f] mb-4 tracking-tight text-balance uppercase">Our Growth Engine</h2>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { phase: "Current", title: "Founding Core", desc: "Laying the bedrock of elite exam infra.", icon: <Users /> },
                            { phase: "Months 1-6", title: "Scale Phase", desc: "Expanding engineering & operations.", icon: <Rocket /> },
                            { phase: "Months 7-12", title: "Innovation", desc: "Curriculum & research excellence.", icon: <Target /> },
                            { phase: "Year 2+", title: "Enterprise", desc: "Global outreach and elite deployment.", icon: <Globe2 /> }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="group relative bg-[#f8fafc] border border-blue-100 p-10 rounded-[2.5rem] transition-all duration-500 shadow-xl shadow-blue-500/5 group-hover:bg-white group-hover:border-blue-200"
                            >
                                <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-6 block">
                                    Phase {i + 1} <span className="mx-2 opacity-50">•</span> {step.phase}
                                </div>
                                <h3 className="text-2xl font-black text-[#0a1a2f] mb-4 uppercase tracking-tight">{step.title}</h3>
                                <p className="text-sm font-medium text-gray-600 leading-relaxed mb-8 uppercase tracking-widest">{step.desc}</p>
                                <div className="absolute bottom-10 right-10 opacity-5 text-blue-500 group-hover:opacity-10 transition-opacity">
                                    {React.cloneElement(step.icon, { className: "w-20 h-20" })}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Life at EduNiketan Grid */}
            < section className="py-24 bg-white border-y border-gray-100" >
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black text-[#0a1a2f] mb-6 uppercase tracking-tight">Life at EduNiketan</h2>
                            <p className="text-xl text-gray-500 font-medium max-w-xl">
                                More than just code. It's about building a legacy in Indian education.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div className="px-6 py-3 bg-[#f8fafc] rounded-2xl border border-gray-100 flex flex-col items-center">
                                <span className="text-2xl font-black text-blue-600">4.8/5</span>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Glassdoor</span>
                            </div>
                            <div className="px-6 py-3 bg-[#f8fafc] rounded-2xl border border-gray-100 flex flex-col items-center">
                                <span className="text-2xl font-black text-emerald-600">92%</span>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Retention</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-[600px]">
                        <div className="md:col-span-2 md:row-span-2 relative rounded-[2.5rem] overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000"
                                alt="Team Meeting"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2f]/80 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full mb-3 inline-block">Chandigarh HQ</span>
                                <h3 className="text-2xl font-bold text-white">Engineering Sprint</h3>
                            </div>
                        </div>
                        <div className="relative rounded-[2.5rem] overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000"
                                alt="Strategy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors" />
                        </div>
                        <div className="relative rounded-[2.5rem] overflow-hidden group">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000"
                                alt="Discussion"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="md:col-span-2 relative rounded-[2.5rem] overflow-hidden group bg-[#0a1a2f] flex items-center justify-center p-8 text-center">
                            <div>
                                <h3 className="text-3xl font-black text-white mb-4">"Best Place to Work"</h3>
                                <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">Certified 2024-25</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Open Positions */}
            < section className="py-24 bg-[#0a1a2f] border-y border-white/5 relative overflow-hidden" >
                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
                        <div className="max-w-2xl text-center md:text-left">
                            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tight text-pretty leading-none">Open Infrastructure Roles</h2>
                            <p className="text-xl text-white/60 font-medium">Building high-stakes systems requires the best talent. Discover your place in our growing team.</p>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-5xl font-black text-white">05 <span className="text-sm font-black text-blue-500 block uppercase tracking-widest mt-2">Active Openings</span></p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {openPositions.map((job, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white/10 border border-white/10 rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-white/20 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="flex items-center gap-6 w-full md:w-auto">
                                    <div className="w-14 h-14 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center">
                                        {job.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-white mb-1">{job.title}</h4>
                                        <span className="text-xs font-black text-blue-400 uppercase tracking-widest">{job.dept}</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-center gap-8 w-full md:w-auto">
                                    <div className="flex items-center gap-2 text-gray-400 text-sm font-bold">
                                        <MapPin className="w-4 h-4" />
                                        {job.loc}
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400 text-sm font-bold">
                                        <Clock className="w-4 h-4" />
                                        {job.type}
                                    </div>
                                    <MagneticButton className="px-6 py-3 bg-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-colors">
                                        Apply Now
                                    </MagneticButton>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Recruitment Process */}
            < section className="py-24 bg-white border-t border-gray-100" >
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-[#0a1a2f] mb-6 uppercase tracking-tight text-balance">Elite Hiring Process</h2>
                        <p className="text-lg text-gray-400 font-black uppercase tracking-widest max-w-2xl mx-auto">Our four-step filtration ensures we only bring in the most committed technical talent.</p>
                    </div>

                    <div className="relative">
                        {/* Timeline Connector Line */}
                        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 hidden lg:block" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                            {recruitmentSteps.map((step, i) => (
                                <div key={i} className="text-center group">
                                    <div className="w-20 h-20 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center text-2xl font-black mx-auto mb-8 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-all duration-500">
                                        {step.id}
                                    </div>
                                    <h4 className="text-xl font-black text-[#0a1a2f] mb-3 uppercase tracking-tight">{step.title}</h4>
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] leading-relaxed px-4">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            <Footer />
        </div >
    );
}