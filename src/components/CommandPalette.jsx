import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, Command, ArrowRight, FileText, Home, Layers, Box, Phone, Briefcase } from 'lucide-react';

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    // Toggle with Cmd+K or Ctrl+K
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const commands = [
        { title: "Home", icon: <Home className="w-4 h-4" />, path: "/", type: "Page" },
        { title: "Our Products", icon: <Box className="w-4 h-4" />, path: "/products", type: "Page" },
        { title: "Solutions", icon: <Layers className="w-4 h-4" />, path: "/solution", type: "Page" },
        { title: "Resources & Docs", icon: <FileText className="w-4 h-4" />, path: "/resources", type: "Page" },
        { title: "Careers", icon: <Briefcase className="w-4 h-4" />, path: "/careers", type: "Page" },
        { title: "Contact Sales", icon: <Phone className="w-4 h-4" />, path: "/contact", type: "Page" },
    ];

    const filteredCommands = commands.filter(cmd =>
        cmd.title.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (path) => {
        navigate(path);
        setIsOpen(false);
        setQuery("");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[2000] flex items-start justify-center pt-[20vh] px-4">

                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-[#0a1a2f]/60 backdrop-blur-md"
                    />

                    {/* Palette Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                        className="relative w-full max-w-2xl bg-[#0f172a] border border-blue-500/20 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Search Input */}
                        <div className="relative border-b border-white/10 px-4 py-4 flex items-center gap-3">
                            <Search className="w-5 h-5 text-blue-500" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Type a command or search..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full bg-transparent text-white text-lg placeholder:text-gray-500 focus:outline-none"
                            />
                            <div className="hidden md:flex items-center gap-1">
                                <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">ESC</span>
                            </div>
                        </div>

                        {/* Results List */}
                        <div className="max-h-[300px] overflow-y-auto p-2">
                            <div className="text-xs font-bold text-gray-500 px-3 py-2 uppercase tracking-widest">
                                Suggested
                            </div>

                            {filteredCommands.length > 0 ? (
                                <div className="space-y-1">
                                    {filteredCommands.map((cmd, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSelect(cmd.path)}
                                            className="w-full flex items-center justify-between px-3 py-3 rounded-xl hover:bg-white/5 group transition-colors text-left"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                    {cmd.icon}
                                                </div>
                                                <span className="text-gray-200 font-medium group-hover:text-white">
                                                    {cmd.title}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs text-gray-600 font-mono group-hover:text-gray-400">
                                                    {cmd.type}
                                                </span>
                                                <ArrowRight className="w-4 h-4 text-gray-600 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="px-4 py-12 text-center text-gray-500">
                                    <p>No results found.</p>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="bg-white/5 px-4 py-2 flex items-center justify-between text-[10px] text-gray-500 border-t border-white/5">
                            <div className="flex items-center gap-2">
                                <Command className="w-3 h-3" />
                                <span className="font-bold">COMMAND MENU</span>
                            </div>
                            <div>
                                EduNiketan <span className="text-blue-500">v2.0</span>
                            </div>
                        </div>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
