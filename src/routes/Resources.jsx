import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileText,
    BookOpen,
    Newspaper,
    Search,
    ArrowRight,
    ExternalLink,
    Download,
    Calendar,
    Zap
} from 'lucide-react';
import Footer from "../components/footer";

const resourceCategories = [
    {
        title: "Documentation",
        icon: <FileText className="w-8 h-8 text-blue-500" />,
        desc: "Technical specifications, API references, and integration guides for engineers.",
        links: ["Technical Architecture", "API Documentation", "Integration Guides", "Security Whitepaper"]
    },
    {
        title: "Case Studies",
        icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
        desc: "Detailed deployment results and institutional implementations from our partners.",
        links: ["LPU Pilot Program", "University Deployments", "School Implementations"]
    },
    {
        title: "Media & Press",
        icon: <Newspaper className="w-8 h-8 text-cyan-500" />,
        desc: "Official press releases, media coverage, and company announcements.",
        links: ["Press Releases", "Media Coverage", "Company News"]
    }
];

const articles = [
    {
        title: "Understanding E-Learning Platforms",
        date: "June 10, 2024",
        category: "Technical",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000",
        desc: "A deep dive into the architecture of modern digital assessment systems."
    },
    {
        title: "The Future of Digital Examinations",
        date: "July 12, 2024",
        category: "Policy",
        image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1000",
        desc: "How the Public Examinations Act 2024 is shaping educational technology."
    },
    {
        title: "Scaling to 20k+ Concurrent Users",
        date: "August 05, 2024",
        category: "Infrastructure",
        image: "https://images.unsplash.com/photo-1551288049-bbda38a5f850?q=80&w=1000",
        desc: "Lessons learned from high-stakes university deployments in rural India."
    }
];

export default function Resources() {
    const [activeTab, setActiveTab] = useState("All");

    return (
        <div className="bg-white">

            {/* Resources Hero */}
            <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 mesh-gradient overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
                <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-black uppercase tracking-widest mb-6">
                            <Zap className="w-4 h-4 text-blue-400" />
                            <span>Knowledge Hub</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9] text-balance">
                            Elite <span className="text-gradient">Insights</span>.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-2xl mb-12 text-pretty">
                            Everything you need to integrate, scale, and understand the
                            EduNiketan digital assessment ecosystem.
                        </p>

                        <div className="relative max-w-xl group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-blue-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search documentation, blog, or whitepapers..."
                                className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl pl-16 pr-6 text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all shadow-2xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Resource Categories */}
            <section className="py-24 max-w-[1280px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {resourceCategories.map((cat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="group bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mb-10 shadow-sm border border-gray-100 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                {cat.icon}
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight text-balance">{cat.title}</h3>
                            <p className="text-gray-500 text-sm font-medium mb-8 leading-relaxed italic border-l-2 border-blue-500/20 pl-4">
                                {cat.desc}
                            </p>
                            <ul className="space-y-4">
                                {cat.links.map((link, j) => (
                                    <li key={j}>
                                        <a href="#" className="flex items-center justify-between text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors group/link">
                                            {link}
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Latest Articles Section */}
                <div className="mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight text-balance">Latest Articles</h2>
                        <div className="w-24 h-1.5 bg-blue-600 rounded-full" />
                    </div>
                    <div className="flex gap-4">
                        {["All", "Technical", "Policy", "Infrastructure"].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {articles.filter(a => activeTab === "All" || a.category === activeTab).map((article, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative h-64 mb-8 overflow-hidden rounded-[2.5rem] bg-gray-100">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000"; }}
                                />
                                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-xl">
                                    {article.category}
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
                                <Calendar className="w-4 h-4" />
                                {article.date}
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight text-balance">
                                {article.title}
                            </h3>
                            <p className="text-gray-500 font-medium leading-relaxed mb-8 text-pretty">
                                {article.desc}
                            </p>
                            <div className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all pb-2 border-b-2 border-transparent group-hover:border-blue-500 inline-block">
                                Read Analysis <ArrowRight className="w-4 h-4" />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* CTA Footer Section */}
            <section className="py-24 bg-gray-900 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
                <div className="max-w-[1280px] mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight text-balance">Need Technical Specs?</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">Download our comprehensive integration Whitepaper 2.0 to see how our binary encryption protocol works at scale.</p>
                    <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm inline-flex items-center gap-3 shadow-2xl shadow-blue-500/20 hover:bg-blue-700 transition-all hover:-translate-y-1">
                        <Download className="w-5 h-5" />
                        Download Whitepaper
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
}