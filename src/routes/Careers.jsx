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

const MagneticButton = ({ children, className }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x: x * 0.3, y: y * 0.3 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
        >
            {children}
        </motion.button>
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
        <div className="bg-white">

            {/* Careers Hero */}
            <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 mesh-gradient overflow-hidden">
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
            <section className="py-24 max-w-[1280px] mx-auto px-6 overflow-hidden">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight text-balance">Our Growth Engine</h2>
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
                            className="group relative bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6 opacity-60">
                                Phase {i + 1} • {step.phase}
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-4">{step.title}</h3>
                            <p className="text-sm font-medium text-gray-500 leading-relaxed mb-8">{step.desc}</p>
                            <div className="absolute bottom-10 right-10 opacity-5 text-gray-900 group-hover:opacity-10 transition-opacity">
                                {React.cloneElement(step.icon, { className: "w-20 h-20" })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-24 bg-[#0a1a2f] relative overflow-hidden">
                <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 text-balance">Open Infrastructure Roles</h2>
                            <p className="text-xl text-gray-400 font-medium">Building high-stakes systems requires the best talent. Discover your place in our growing team.</p>
                        </div>
                        <div className="text-right">
                            <p className="text-5xl font-black text-white">05 <span className="text-sm font-bold text-blue-500 block uppercase tracking-widest">Active Openings</span></p>
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
                                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="flex items-center gap-6 w-full md:w-auto">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
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
            </section>

            {/* Recruitment Process */}
            <section className="py-24 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 text-balance">Elite Hiring Process</h2>
                        <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">Our four-step filtration ensures we only bring in the most committed and skilled technical talent.</p>
                    </div>

                    <div className="relative">
                        {/* Timeline Connector Line */}
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 -translate-y-1/2 hidden lg:block" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                            {recruitmentSteps.map((step, i) => (
                                <div key={i} className="text-center group">
                                    <div className="w-20 h-20 bg-[#0a1a2f] text-white rounded-[2rem] flex items-center justify-center text-2xl font-black mx-auto mb-8 shadow-xl group-hover:bg-blue-600 transition-all duration-500 group-hover:scale-110">
                                        {step.id}
                                    </div>
                                    <h4 className="text-xl font-black text-gray-900 mb-3">{step.title}</h4>
                                    <p className="text-sm font-medium text-gray-500 leading-relaxed px-4">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}