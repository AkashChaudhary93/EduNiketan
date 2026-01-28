import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useSpring, useMotionValue, animate } from 'framer-motion';
import {
    Building2,
    Target,
    MapPin,
    ShieldCheck,
    Users,
    Globe2,
    Award,
    ChevronRight,
    Gem,
    Cpu
} from 'lucide-react';
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import SpotlightCard from "../components/SpotlightCard";
import StaggerReveal from "../components/StaggerReveal";
import AnimateNumber from "../components/AnimateNumber";

const leaders = [
    {
        name: "Souvik Gupta",
        role: "Founder & Chief Technical Officer",
        dept: "Technology & Development",
        img: "/images/souvik.jpg-removebg-preview.png"
    },
    {
        name: "Saif Siddique",
        role: "Co-Founder & Chief Finance Officer",
        dept: "Finance & Operations",
        img: ""
    },
    {
        name: "Sujeet Kumar",
        role: "Security Architecture",
        dept: "Technology & Development",
        img: "/images/sujeet.jpg"
    },
    {
        name: "Mohit Raj Deo",
        role: "Chief R&D Officer",
        dept: "Product Development",
        img: "/images/mohit.jpg"
    }
];

const visions = [
    { value: 0, target: 0, suffix: "", title: "Security Breaches", desc: "India's trusted examination platform with zero security breaches.", icon: <ShieldCheck className="w-8 h-8" /> },
    { value: 0, target: 500, suffix: "+", title: "Students Coding", desc: "Grade 6 to Higher Ed students building on EduNiketan.", icon: <Cpu className="w-8 h-8" /> },
    { value: 0, target: 10, suffix: "M+", title: "Deployments", desc: "Institutions deploying EduNiketan platforms across India.", icon: <Globe2 className="w-8 h-8" /> },
    { value: 0, target: 100, suffix: "%", title: "Digital Access", desc: "Bridging the urban-rural divide through digital learning.", icon: <Target className="w-8 h-8" /> }
];

export default function About() {
    return (
        <div className="bg-transparent">

            {/* About Hero */}
            <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-40 bg-[#0a1a2f] mesh-gradient overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-none text-balance">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 animate-gradient-x">Story</span>.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl text-pretty">
                            Founded in 2024, EduNiketan Private Limited is dedicated to restoring
                            trust in the Indian education system through world-class security
                            and scalable digital infrastructure.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-3/5 space-y-12">
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-black text-[#0a1a2f] mb-6 tracking-tight text-balance uppercase">Enterprise Infrastructure for Modern India</h2>
                                <p className="text-xl text-gray-600 font-medium leading-relaxed text-pretty">
                                    We develop enterprise software for secure digital examinations and learning infrastructure.
                                    Registered under the Companies Act 2013, our platforms serve elite universities and schools across the nation.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Gem className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-[#0a1a2f] mb-1">Company Culture</h4>
                                        <p className="text-sm font-medium text-gray-500 italic">Built on transparency, speed, and rigid security standards.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-[#0a1a2f] mb-1">Dual HQ Strategy</h4>
                                        <p className="text-sm font-medium text-gray-500 italic">Optimized for government relations and R&D excellence.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5">
                            <div className="relative group hover:scale-[1.02] transition-transform duration-700">
                                <div className="absolute -inset-4 bg-blue-500/10 rounded-[3rem] blur-xl group-hover:bg-blue-500/20 transition-all duration-700" />
                                <img
                                    src="/images/eduAbout1.jpg"
                                    alt="Infrastructure"
                                    className="relative w-full h-auto rounded-[3rem] shadow-2xl border border-white/10 object-cover aspect-[4/3] grayscale group-hover:grayscale-0 transition-all duration-1000"
                                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"; }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision 2030 Grid */}
            <section className="py-24 bg-white border-y border-gray-100">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-[#0a1a2f] mb-4 tracking-tight text-balance uppercase">Vision 2030</h2>
                        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {visions.map((v, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                            >
                                <SpotlightCard dark={false} className="h-full !p-10 transition-all duration-500 group shadow-xl shadow-blue-500/5">
                                    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                        {v.icon}
                                    </div>
                                    <p className="text-4xl font-black text-[#0a1a2f] mb-2">
                                        <AnimateNumber value={v.target} suffix={v.suffix} />
                                    </p>
                                    <p className="text-blue-600 text-sm font-black uppercase tracking-widest mb-4">{v.title}</p>
                                    <p className="text-sm font-medium text-gray-500 leading-relaxed uppercase tracking-widest">{v.desc}</p>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-[#0a1a2f] mb-6 tracking-tight text-balance uppercase">Executive Leadership</h2>
                        <p className="text-lg text-gray-500 font-black uppercase tracking-widest max-w-2xl mx-auto">The visionaries and architects building India's most secure education platform.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                        {leaders.map((leader, i) => (
                            <div key={i} className="text-center group cursor-pointer">
                                <div className="relative w-full aspect-[4/5] rounded-[2.5rem] bg-white/5 mb-6 overflow-hidden border border-white/10 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-all duration-500">
                                    <img
                                        src={leader.img}
                                        alt={leader.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000"; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                                </div>
                                <h4 className="text-2xl font-black text-[#0a1a2f] mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{leader.name}</h4>
                                <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{leader.role}</p>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{leader.dept}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-24 bg-[#0a1a2f] border-t border-white/5 relative overflow-hidden">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="max-w-xl text-center lg:text-left">
                            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tighter uppercase whitespace-nowrap">Dual-City Ops.</h2>
                            <p className="text-xl text-gray-400 font-medium mb-12">Tactically positioned to bridge the gap between policy making in Varanasi and technical excellence in Chandigarh.</p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="p-8 bg-white/10 border border-white/10 rounded-3xl flex-1 hover:bg-white/20 transition-colors group">
                                    <MapPin className="w-8 h-8 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                                    <h4 className="text-white text-xl font-bold mb-2">Varanasi, UP</h4>
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Registered Headquarter</p>
                                    <ul className="space-y-2 text-sm text-gray-400 font-medium">
                                        <li>Garthama Bazar, 221208</li>
                                        <li>Govt Relations & Policy</li>
                                    </ul>
                                </div>
                                <div className="p-8 bg-white/10 border border-white/10 rounded-3xl flex-1 hover:bg-white/20 transition-colors group">
                                    <MapPin className="w-8 h-8 text-cyan-500 mb-6 group-hover:scale-110 transition-transform" />
                                    <h4 className="text-white text-xl font-bold mb-2">Chandigarh</h4>
                                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mb-4">Operational Hub</p>
                                    <ul className="space-y-2 text-sm text-gray-400 font-medium">
                                        <li>Next-Gen Engineering</li>
                                        <li>Infra Management</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            <Globe2 className="w-full h-auto text-blue-500/5 animate-pulse-slow" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_30px_rgba(59,130,246,1)] animate-ping-slow" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}