import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    ShieldCheck,
    Cpu,
    Globe,
    Lock,
    Layout,
    Zap,
    FileText,
    Users,
    ChevronRight,
    Database,
    BarChart3
} from 'lucide-react';
import Footer from "../components/footer";
import SpotlightCard from "../components/SpotlightCard";
import ReactiveIcon from "../components/ReactiveIcon";

// SAFE MODE: Replaced heavy JS physics with performant CSS transitions
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

export default function Products() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    return (
        <div className="bg-transparent selection:bg-blue-500/30">

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center pt-32 lg:pt-40 overflow-hidden bg-[#0a1a2f] mesh-gradient">
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

                <div className="max-w-[1280px] mx-auto px-6 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-600/30 text-blue-500 text-sm font-black mb-6">
                            <ReactiveIcon icon={Zap} size={16} />
                            <span>Next-Generation Infrastructure</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] text-balance">
                            Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 animate-gradient-x">Products</span> for Elite Schools.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-medium mb-12 leading-relaxed text-pretty">
                            Enterprise-grade power meets military-grade security.
                            Built for universities conducting high-stakes digital assessments.
                        </p>
                        <MagneticButton className="group flex items-center gap-3 px-8 py-4 bg-blue-600 rounded-2xl font-black text-white shadow-2xl shadow-blue-500/40 hover:bg-blue-700 transition-colors">
                            <span>Request High-Level Demo</span>
                            <ReactiveIcon icon={ChevronRight} size={20} className="group-hover:translate-x-1 transition-transform" />
                        </MagneticButton>
                    </motion.div>
                </div>
            </section>

            {/* Bento Grid Features */}
            <section className="py-24 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 md:auto-rows-[160px]">

                        {/* EduCode Large Bento Box */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-4 md:row-span-3 lg:col-span-4 lg:row-span-4"
                        >
                            <SpotlightCard dark={false} className="h-full p-8 md:p-12 flex flex-col justify-between group transition-all duration-500 overflow-hidden shadow-xl shadow-blue-500/5">
                                <div>
                                    <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center mb-10 shadow-lg shadow-blue-500/20">
                                        <ReactiveIcon icon={Layout} size={32} color="white" />
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black text-[#0a1a2f] mb-6 tracking-tight text-balance uppercase">EduCode</h2>
                                    <p className="text-xl text-gray-600 font-medium max-w-lg mb-12 leading-relaxed text-pretty">
                                        The core engine of high-stakes testing. Secure, scalable, and audit-ready infrastructure
                                        powering thousands of concurrent examinations with zero margin for error.
                                    </p>
                                </div>
                                <div className="relative mt-8 group-hover:scale-[1.02] transition-transform duration-700">
                                    <img
                                        src="/EduDashboard.jpg.png"
                                        alt="Dashboard"
                                        className="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
                                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1551288049-bbda38a5f850?q=80&w=1000"; }}
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        {/* Security Box */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-3"
                        >
                            <SpotlightCard className="h-full p-8 md:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-blue-500/5" dark={false}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-[100px]" />
                                <div>
                                    <ReactiveIcon icon={ShieldCheck} size={40} color="rgb(37 99 235)" className="mb-6" />
                                    <h3 className="text-2xl font-black text-[#0a1a2f] mb-4 tracking-tight uppercase">Security</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Binary Encryption",
                                            "Proprietary Browser",
                                            "AI Dual Proctoring",
                                            "Anti-Reverse Engine"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-500 text-sm font-black uppercase tracking-widest">
                                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-8 flex items-center justify-between relative z-10">
                                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em]">Military Grade</span>
                                    <Lock className="w-5 h-5 text-gray-700" />
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        {/* Performance Box */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-2"
                        >
                            <SpotlightCard dark={false} className="h-full p-8 flex flex-col justify-center transition-all duration-500 shadow-xl shadow-blue-500/5">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-center shadow-sm">
                                        <BarChart3 className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h3 className="text-xl font-black text-[#0a1a2f] uppercase tracking-tight">Performance</h3>
                                </div>
                                <p className="text-gray-400 font-bold text-3xl tabular-nums">99.9% <span className="text-xs font-black uppercase tracking-widest block mt-1 text-indigo-600">Uptime SLA</span></p>
                            </SpotlightCard>
                        </motion.div>

                        {/* Scale Box */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-2"
                        >
                            <SpotlightCard dark={false} className="h-full p-8 flex flex-col justify-center transition-all duration-500 shadow-xl shadow-blue-500/5">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center shadow-sm text-emerald-600">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-black text-[#0a1a2f] uppercase tracking-tight">Concurrency</h3>
                                </div>
                                <p className="text-gray-400 font-bold text-3xl tabular-nums">20k+ <span className="text-xs font-black uppercase tracking-widest block mt-1 text-emerald-600">Test Users</span></p>
                            </SpotlightCard>
                        </motion.div>

                        {/* Technical Specs Large Strip */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="md:col-span-4 md:row-span-2 lg:col-span-6 lg:row-span-2"
                        >
                            <SpotlightCard className="h-full p-10 flex flex-col md:flex-row items-center justify-between gap-8 !bg-[#0b1b35] !border-white/10 shadow-2xl" dark={true}>
                                <div className="flex-1">
                                    <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-4">Global Compliance & Capability</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {["NEP 2020", "ISO 27001", "Public Exams Act 2024", "Multi-region"].map((tag, i) => (
                                            <span key={i} className="px-4 py-1.5 bg-blue-600/20 border border-white/10 rounded-full text-xs font-black uppercase tracking-widest text-blue-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                                    <div className="text-center md:text-left border-l border-white/10 pl-6">
                                        <p className="text-blue-500 text-xs font-black uppercase tracking-widest mb-1">Content</p>
                                        <p className="text-white text-xl font-black leading-none">180+ Coding Labs</p>
                                    </div>
                                    <div className="text-center md:text-left border-l border-white/10 pl-6">
                                        <p className="text-blue-500 text-xs font-black uppercase tracking-widest mb-1">Scale</p>
                                        <p className="text-white text-xl font-black leading-none">50+ Bio-checks</p>
                                    </div>
                                    <div className="hidden md:block border-l border-white/10 pl-6">
                                        <p className="text-blue-500 text-xs font-black uppercase tracking-widest mb-1">Support</p>
                                        <p className="text-white text-xl font-black leading-none">24/7 Ops Hub</p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Competitive Edge Table */}
            <section className="py-24 bg-[#0a1a2f] border-t border-white/5 relative overflow-hidden">
                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">The Competitive Edge</h2>
                        <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">See why 500+ institutions are switching from legacy providers to EduNiketan.</p>
                    </div>

                    <div className="overflow-x-auto pb-4">
                        <table className="w-full min-w-[800px] border-collapse text-left">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="py-6 px-6 text-gray-400 font-black uppercase tracking-widest text-sm w-1/3">Feature</th>
                                    <th className="py-6 px-6 text-blue-400 font-black uppercase tracking-widest text-lg w-1/3 bg-blue-900/10 rounded-t-2xl border-x border-t border-blue-500/20">EduNiketan™</th>
                                    <th className="py-6 px-6 text-gray-500 font-bold uppercase tracking-widest text-sm w-1/3">Traditional Vendors</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { feature: "Uptime Guarantee", us: "99.9% SLA (Financially Backed)", them: "< 95% (Best Effort)" },
                                    { feature: "Simultaneous Users", us: "20,000+ Concurrent", them: "< 2,000 Limit" },
                                    { feature: "Security Protocol", us: "Binary Encryption + AI Proctor", them: "SSL Only + Manual Check" },
                                    { feature: "Deployment Time", us: "14 Days (Rapid Rollout)", them: "3-6 Months" },
                                    { feature: "Support Model", us: "24/7 Dedicated Ops Hub", them: "Email Support (48h TAT)" }
                                ].map((row, i) => (
                                    <tr key={i} className="group hover:bg-white/5 transition-colors">
                                        <td className="py-6 px-6 text-white font-bold text-lg">{row.feature}</td>
                                        <td className="py-6 px-6 text-blue-300 font-bold text-lg bg-blue-900/5 border-x border-blue-500/10 flex items-center gap-2">
                                            <ShieldCheck className="w-5 h-5 text-blue-500" /> {row.us}
                                        </td>
                                        <td className="py-6 px-6 text-gray-500 font-medium">{row.them}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Pricing Section - Interactive Toggle */}
            {/* <PricingSection /> */}

            {/* Target Deployment */}
            <section className="py-24 bg-[#f8fafc] border-t border-gray-100">
                <div className="max-w-[1280px] mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-[#0a1a2f] mb-16 tracking-tight text-balance uppercase">Built For Excellence</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "Elite Universities",
                            "Premium Colleges",
                            "Govt Institutions",
                            "Corporate Labs",
                            "Olympiad Hubs"
                        ].map((target, i) => (
                            <motion.span
                                key={i}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="px-10 py-5 bg-white border border-blue-100 rounded-3xl font-black text-[#0a1a2f] uppercase tracking-widest text-sm shadow-xl shadow-blue-500/5 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-default"
                            >
                                {target}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}