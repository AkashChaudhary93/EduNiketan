import React from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Building,
    Globe,
    MessageSquare,
    ChevronRight,
    ExternalLink,
    ArrowRight
} from 'lucide-react';
import Footer from "../components/footer";
import SpotlightCard from "../components/SpotlightCard";

export default function Contact() {
    return (
        <div className="bg-white min-h-screen">

            {/* Contact Hero */}
            <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 mesh-gradient overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
                <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-none text-balance">
                            Get in <span className="text-gradient">Touch</span>.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto text-pretty">
                            Ready to secure your institution's future? Reach out to our
                            founding team for global-standard infrastructure solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Contact Grid */}
            <section className="py-24 max-w-[1280px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Contact Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <SpotlightCard dark={false} className="h-full !p-8 md:!p-14 !bg-white !border-gray-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-bl-[100px] pointer-events-none" />

                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 tracking-tight text-balance">Direct Inquiry</h2>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-6 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white transition-all duration-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Institution Name</label>
                                        <input type="text" placeholder="University of..." className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-6 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white transition-all duration-300" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Work Email</label>
                                        <input type="email" placeholder="john@university.edu" className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-6 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white transition-all duration-300" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Institution Type</label>
                                        <select className="w-full h-14 bg-gray-50 border border-gray-100 rounded-2xl px-6 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white transition-all duration-300 appearance-none cursor-pointer">
                                            <option>Select Type</option>
                                            <option>University</option>
                                            <option>College</option>
                                            <option>Corporate</option>
                                            <option>Govt Organization</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">Message</label>
                                    <textarea placeholder="How can our infrastructure support you?" rows="5" className="w-full bg-gray-50 border border-gray-100 rounded-[2rem] p-6 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 focus:bg-white transition-all duration-300 resize-none"></textarea>
                                </div>

                                <button type="submit" className="w-full h-16 bg-blue-600 rounded-2xl text-white font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-all hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-3">
                                    Send Proposal
                                    <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </SpotlightCard>
                    </motion.div>

                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-5 space-y-10">

                        {/* Founder Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                opacity: { duration: 0.8 }
                            }}
                            className="lg:col-span-5"
                        >
                            <SpotlightCard className="h-full !p-10 !bg-[#0a1a2f] !border-white/5 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-[100px]" />
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-8">Executive Contact</h3>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-blue-500/20">
                                        <img src="/src/images/souvik.jpg-removebg-preview.png" alt="Souvik" className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000"; }} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black tracking-tight">Souvik Gupta</h4>
                                        <p className="text-sm font-bold text-gray-500">Founder & CEO</p>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-6 border-t border-white/5">
                                    <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer group/item">
                                        <Mail className="w-5 h-5 text-blue-500 group-hover/item:scale-110 transition-transform" />
                                        <span className="text-sm font-bold">founder.souvik@eduniketanpvtltd.com</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer group/item">
                                        <Phone className="w-5 h-5 text-blue-500 group-hover/item:scale-110 transition-transform" />
                                        <span className="text-sm font-bold">+91-62964-89227</span>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>

                        {/* Location Cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                                opacity: { duration: 0.8 }
                            }}
                            className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-600">
                                    <Building className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-black text-gray-900 tracking-tight">Offices</h3>
                            </div>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                    <div>
                                        <p className="text-sm font-black text-gray-900">Varanasi, UP</p>
                                        <p className="text-xs font-medium text-gray-500">Garthama Bazar, 221208 • Registered Office</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                    <div>
                                        <p className="text-sm font-black text-gray-900">Chandigarh Hub</p>
                                        <p className="text-xs font-medium text-gray-500">Technical Development & Infrastructure Ops</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Links Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-blue-600/5 rounded-[3rem] border border-blue-600/10"
                        >
                            <ul className="space-y-6">
                                {[
                                    "Schedule Technical Demo",
                                    "Partnership Inquiries",
                                    "Support Documentation"
                                ].map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="flex items-center justify-between text-sm font-black text-blue-600 group hover:gap-4 transition-all">
                                            {link}
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}