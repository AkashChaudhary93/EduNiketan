import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, BookOpen, UserCheck, BarChart3, Clock, Lock } from 'lucide-react';

const tabs = [
    {
        id: "admin",
        label: "Admin Dashboard",
        icon: <BarChart3 className="w-4 h-4" />,
        color: "blue"
    },
    {
        id: "student",
        label: "Exam Interface",
        icon: <BookOpen className="w-4 h-4" />,
        color: "amber"
    },
    {
        id: "proctor",
        label: "Proctor View",
        icon: <UserCheck className="w-4 h-4" />,
        color: "emerald"
    }
];

const content = {
    admin: {
        title: "Real-time Institutional Oversight",
        desc: "Monitor exam concurrency, server load, and malpractice alerts across thousands of centers instantly.",
        stats: [
            { label: "Active Sessions", value: "12,405" },
            { label: "Server Load", value: "24%" },
            { label: "Flagged Incidents", value: "3" }
        ],
        mockUI: (
            <div className="w-full h-full p-6 space-y-4">
                <div className="flex gap-4">
                    <div className="w-1/3 h-32 bg-blue-500/10 rounded-xl border border-blue-500/20 p-4">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 mb-4" />
                        <div className="h-2 w-16 bg-blue-500/20 rounded mb-2" />
                        <div className="h-6 w-24 bg-blue-500/30 rounded" />
                    </div>
                    <div className="w-1/3 h-32 bg-indigo-500/10 rounded-xl border border-indigo-500/20 p-4">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 mb-4" />
                        <div className="h-2 w-16 bg-indigo-500/20 rounded mb-2" />
                        <div className="h-6 w-24 bg-indigo-500/30 rounded" />
                    </div>
                    <div className="w-1/3 h-32 bg-emerald-500/10 rounded-xl border border-emerald-500/20 p-4">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 mb-4" />
                        <div className="h-2 w-16 bg-emerald-500/20 rounded mb-2" />
                        <div className="h-6 w-24 bg-emerald-500/30 rounded" />
                    </div>
                </div>
                <div className="w-full h-40 bg-gray-500/5 rounded-xl border border-gray-500/10 p-4 space-y-3">
                    <div className="h-4 w-1/4 bg-gray-500/10 rounded" />
                    <div className="space-y-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center gap-4 h-8 bg-white/5 rounded px-2">
                                <div className="w-8 h-8 rounded bg-gray-500/20" />
                                <div className="flex-1 h-2 bg-gray-500/10 rounded" />
                                <div className="w-12 h-2 bg-gray-500/10 rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    },
    student: {
        title: "Distraction-Free Assessment",
        desc: "A locked-down browser environment aimed at maximizing focus and preventing unauthorized resource access.",
        stats: [
            { label: "Questions Attempted", value: "45/60" },
            { label: "Time Remaining", value: "00:45:10" },
            { label: "Sync Status", value: "Online" }
        ],
        mockUI: (
            <div className="w-full h-full p-6 flex gap-6">
                <div className="w-64 h-full bg-white/5 rounded-xl border border-white/10 p-4 space-y-2 hidden md:block">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-8 w-full bg-white/5 rounded flex items-center px-2 text-[10px] text-gray-500">Question {i + 1}</div>
                    ))}
                </div>
                <div className="flex-1 space-y-6">
                    <div className="h-4 w-2/3 bg-amber-500/20 rounded" />
                    <div className="h-32 bg-white/5 rounded-xl border border-white/10 p-4" />
                    <div className="space-y-3">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="flex gap-3 items-center">
                                <div className="w-4 h-4 rounded-full border border-white/20" />
                                <div className="h-3 w-1/2 bg-white/10 rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    },
    proctor: {
        title: "AI-Powered Proctoring",
        desc: "Automated gaze tracking, object detection, and noise analysis alerts in real-time.",
        stats: [
            { label: "Confidence Score", value: "98%" },
            { label: "Active Alerts", value: "0" },
            { label: "Video Feed", value: "HD 60fps" }
        ],
        mockUI: (
            <div className="w-full h-full p-6 grid grid-cols-2 lg:grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-black/40 rounded-lg relative overflow-hidden border border-emerald-500/20 group">
                        <div className="absolute top-2 right-2 w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2">
                            <div className="h-1.5 w-16 bg-white/20 rounded" />
                        </div>
                        {i === 1 && (
                            <div className="absolute inset-0 flex items-center justify-center bg-red-500/10 border-2 border-red-500 rounded-lg">
                                <Lock className="w-6 h-6 text-red-500" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        )
    }
};

export default function PlatformTour() {
    const [activeTab, setActiveTab] = useState("admin");

    return (
        <div className="w-full max-w-[1280px] mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-[#0a1a2f] mb-6 uppercase tracking-tight">
                    Platform Tour
                </h2>
                <div className="flex flex-wrap justify-center gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-2.5 rounded-full text-sm font-black uppercase tracking-widest transition-all md:text-xs flex items-center gap-2
                ${activeTab === tab.id
                                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20 scale-105'
                                    : 'bg-white text-gray-500 hover:bg-gray-50 border border-gray-100'}`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-[#0a1a2f] rounded-[2.5rem] p-4 lg:p-8 shadow-2xl overflow-hidden relative min-h-[600px] flex flex-col md:flex-row gap-8">

                {/* Visual Window */}
                <div className="flex-1 bg-[#0f172a] rounded-[2rem] border border-white/5 relative overflow-hidden shadow-inner order-2 md:order-1">
                    <div className="absolute top-4 left-4 flex gap-2 z-10">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 pt-12"
                        >
                            {content[activeTab].mockUI}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Content Sidebar */}
                <div className="w-full md:w-1/3 flex flex-col justify-center gap-8 relative z-10 p-4 md:p-0 order-1 md:order-2">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-black uppercase tracking-widest mb-6">
                                {tabs.find(t => t.id === activeTab).icon}
                                {tabs.find(t => t.id === activeTab).label}
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase leading-none">
                                {content[activeTab].title}
                            </h3>
                            <p className="text-gray-400 font-medium leading-relaxed mb-8">
                                {content[activeTab].desc}
                            </p>

                            <div className="space-y-4">
                                {content[activeTab].stats.map((stat, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-2">
                                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</span>
                                        <span className="text-white font-mono">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
}
