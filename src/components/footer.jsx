import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a1a2f] text-gray-400 overflow-hidden border-t border-white/5">

      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/05 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* CTA Section */}
      <div className="relative z-10 border-b border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">Ready to Transform Your Institution?</h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Join 500+ elite universities and schools upgrading to EduNiketan's secure infrastructure today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-blue-600 rounded-xl text-white font-bold flex items-center gap-2 hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-600/20">
              Get Started Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/solution" className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold hover:bg-white/10 transition-all">
              View Solutions
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 pt-20 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-black text-white mb-6 tracking-[0.2em] uppercase">EDUNIKETAN</h2>
            <p className="text-gray-400 mb-8 leading-relaxed font-medium">
              Enterprise-grade security and scalability for high-stakes digital examinations.
              Revolutionizing Indian education through technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all duration-300 group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:text-white transition-all duration-300 group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Links: Company */}
          <div>
            <h4 className="text-white font-black mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors font-medium">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition-colors font-medium">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors font-medium">Contact</Link></li>
              <li><Link to="/solution" className="hover:text-blue-400 transition-colors font-medium">Solutions</Link></li>
            </ul>
          </div>

          {/* Links: Products */}
          <div>
            <h4 className="text-white font-black mb-6 text-sm uppercase tracking-widest">Products</h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="hover:text-blue-400 transition-colors font-medium">EduCode</Link></li>
              <li><Link to="/products" className="hover:text-blue-400 transition-colors font-medium">EduLive</Link></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors font-medium">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors font-medium">Security Roadmap</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-black mb-6 text-sm uppercase tracking-widest">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span className="text-[15px]">founder.souvik@eduniketanpvtltd.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-[15px]">+91-62964-89227</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                <span className="text-[15px]">Registered: Varanasi, UP<br />Operational: Chandigarh</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-semibold text-gray-500">
          <p>© {currentYear} EduNiketan Private Limited. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}