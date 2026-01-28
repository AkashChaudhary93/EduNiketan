import React from 'react';
import { motion } from 'framer-motion';
import {
    Building,
    School,
    Users2,
    Briefcase,
    ChevronRight,
    ShieldCheck,
    CheckCircle2,
    Award,
    Globe2,
    PieChart,
    Lock,
    Zap
} from 'lucide-react';
import Footer from "../components/footer";
import SpotlightCard from "../components/SpotlightCard";
import ReactiveIcon from "../components/ReactiveIcon";
import AnimateNumber from "../components/AnimateNumber";

const solutionCategories = [
    {
        title: "Universities & Colleges",
        icon: Building,
        description: "High-stakes examination infrastructure for large-scale digital assessments with 20,000+ student capacity.",
        features: ["Secure Infrastructure", "Real-time Proctoring", "Public Exams Act Compliant", "Advanced Analytics"],
        color: "blue"
    },
    {
        title: "Schools (Grade 6+)",
        icon: School,
        description: "NEP 2020-aligned coding curriculum deployment and hands-on learning platforms.",
        features: ["Age-appropriate UI", "Teacher Training", "Low-bandwidth Ready", "Student Tracking"],
        color: "indigo"
    },
    {
        title: "Coaching Centers",
        icon: Users2,
        description: "Scalable test preparation infrastructure with performance analytics and mock exam capabilities.",
        features: ["Performance Analytics", "Mock Exams", "Batch Management", "Progress Dashboards"],
        color: "cyan"
    },
    {
        title: "Corporate Training",
        icon: Briefcase,
        description: "Placement preparation systems and interview simulation tools for skills assessment.",
        features: ["Interview Simulation", "Skills Assessment", "Custom Modules", "Competency Tracking"],
        color: "gray"
    }
];

export default function Solution() {
    return (
        <div className="bg-[#020617]">

            {/* Solution Hero */}
            <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 bg-[#0a1a2f] mesh-gradient overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-none text-balance">
                            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 animate-gradient-x">Solutions</span>.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl text-pretty">
                            Bridging the gap between traditional education and the digital future with
                            secure, compliant, and scalable technological infrastructure.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Platform Tour - Interactive Tabbed UI */}
            <section className="bg-white relative z-10">
                {/* <PlatformTour /> */}
            </section>

            {/* Categories Section */}
            <section className="py-24 bg-white relative z-10">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {solutionCategories.map((sol, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-[#f8fafc] border border-blue-100 p-10 lg:p-14 rounded-[3rem] transition-all duration-500 hover:bg-white hover:border-blue-200 shadow-xl shadow-blue-500/5 hover:shadow-blue-500/10"
                            >
                                <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-3xl flex items-center justify-center mb-10 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <ReactiveIcon icon={sol.icon} size={32} color="currentColor" />
                                </div>
                                <h3 className="text-3xl font-black text-[#0a1a2f] mb-6 tracking-tight text-balance uppercase">{sol.title}</h3>
                                <p className="text-gray-600 text-lg font-medium mb-10 leading-relaxed">
                                    {sol.description}
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                    {sol.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-black text-gray-500 uppercase tracking-widest">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <button className="flex items-center gap-2 text-blue-500 font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                                    Explore Infrastructure <ChevronRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study Highlight */}
            <section className="py-24 bg-[#0a1a2f] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <div className="glass-card rounded-[3rem] p-10 lg:p-20 overflow-hidden relative group glass-noise-textured">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-24 items-center">
                            <div className="lg:col-span-7 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-black uppercase tracking-widest mb-8">
                                    Case Study Highlight
                                </div>
                                <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 mb-8">
                                    <div className="w-24 h-24 bg-white rounded-3xl p-4 shadow-2xl shadow-blue-500/20 border border-blue-100 flex-shrink-0">
                                        <img
                                            src="https://www.lpu.in/images/logo.png"
                                            alt="LPU"
                                            className="w-full h-full object-contain"
                                            onError={(e) => { e.target.src = "https://www.lpu.in/images/logo.png"; }}
                                        />
                                    </div>
                                    <h2 className="text-3xl md:text-5xl lg:text-2xl xl:text-5xl font-black text-white tracking-tight uppercase leading-[0.9] max-w-lg">
                                        Lovely Professional <span className="text-blue-500">University</span>
                                    </h2>
                                </div>
                                <p className="text-xl text-white/50 font-medium mb-10 leading-relaxed max-w-xl">
                                    Deploying secure examination infrastructure for one of India's largest private universities.
                                    Restoring credibility and trust through transparency.
                                </p>
                                <button className="px-8 py-4 bg-white text-[#0a1a2f] rounded-2xl font-black transition-transform hover:scale-105 flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                                    <span>View Architecture</span>
                                    <ReactiveIcon icon={ChevronRight} size={20} />
                                </button>
                            </div>

                            <div className="lg:col-span-5 grid grid-cols-2 gap-4 xl:gap-6">
                                {[
                                    { label: "Students Tested", value: "300+", icon: <Users2 className="w-5 h-5" />, color: "blue" },
                                    { label: "Security Issues", value: "0", icon: <ShieldCheck className="w-5 h-5" />, color: "emerald" },
                                    { label: "Student NPS", value: "87/100", icon: <Award className="w-5 h-5" />, color: "indigo" },
                                    { label: "Faculty NPS", value: "91/100", icon: <Award className="w-5 h-5" />, color: "cyan" }
                                ].map((stat, i) => {
                                    const colorMap = {
                                        blue: "text-blue-400 bg-blue-500/20",
                                        emerald: "text-emerald-400 bg-emerald-500/20",
                                        indigo: "text-indigo-400 bg-indigo-500/20",
                                        cyan: "text-cyan-400 bg-cyan-500/20"
                                    };
                                    return (
                                        <SpotlightCard key={i} className="!p-8 rounded-[2rem] hover:bg-white/10 transition-colors" dark={true}>
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 ${colorMap[stat.color]}`}>
                                                {stat.icon}
                                            </div>
                                            <p className="text-white text-3xl font-black mb-1">
                                                <AnimateNumber value={stat.value} />
                                            </p>
                                            <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest leading-none">{stat.label}</p>
                                        </SpotlightCard>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Policy Alignment */}
            <section className="py-32 bg-white border-t border-gray-100 relative z-20">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-[#0a1a2f] mb-4 tracking-tight text-balance uppercase">Government & Policy Alignment</h2>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "NEP 2020", desc: "Mandatory coding from Grade 6", icon: <Globe2 className="w-6 h-6" /> },
                            { title: "Exams Act 2024", desc: "Full legal compliance audit", icon: <Lock className="w-6 h-6" /> },
                            { title: "Digital India 2.0", desc: "Advanced national infra", icon: <Zap className="w-6 h-6" /> },
                            { title: "UP Initiative", desc: "40k+ school coding push", icon: <PieChart className="w-6 h-6" /> }
                        ].map((policy, i) => (
                            <div key={i} className="group p-8 bg-[#f8fafc] border border-blue-100 rounded-[2rem] transition-all duration-300 hover:bg-white hover:border-blue-200 shadow-xl shadow-blue-500/5">
                                <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    {policy.icon}
                                </div>
                                <h4 className="text-xl font-black text-[#0a1a2f] mb-2 uppercase tracking-tight">{policy.title}</h4>
                                <p className="text-sm font-medium text-gray-500 leading-relaxed uppercase tracking-widest">{policy.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}