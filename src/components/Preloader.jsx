import React from 'react';

export default function Preloader() {
    return (
        <div className="fixed inset-0 z-[9999] bg-[#0a1a2f] flex items-center justify-center animate-curtain-lift">
            <div className="flex flex-col items-center gap-6 animate-logo-intro">
                <img
                    src="/EduniketanLogoNew.jpg"
                    alt="Eduniketan Logo"
                    className="w-24 h-24 rounded-full shadow-[0_0_60px_rgba(59,130,246,0.6)] ring-2 ring-white/10"
                />
                <h1 className="text-4xl font-bold text-white tracking-[0.3em] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                    EDUNIKETAN
                </h1>
                <div className="w-12 h-1 bg-blue-600 rounded-full mt-2" />
            </div>
        </div>
    );
}
