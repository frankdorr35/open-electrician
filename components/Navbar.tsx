'use client';

import React from 'react';
import Link from 'next/link';
import { Zap, Github, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-safety-orange rounded-xl flex items-center justify-center text-white transition-transform group-hover:rotate-12">
            <Zap size={24} className="fill-current" />
          </div>
          <span className="font-display font-black text-2xl tracking-tighter text-industrial-navy">
            OPEN<span className="text-safety-orange">ELECTRICIAN</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Curriculum', 'Tools', 'Community', 'Contribute'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-bold text-slate-600 hover:text-safety-orange transition-colors uppercase tracking-widest"
            >
              {item}
            </Link>
          ))}
          <Link 
            href="https://github.com" 
            target="_blank"
            className="flex items-center gap-2 bg-industrial-navy text-white px-5 py-2.5 rounded-xl font-bold hover:bg-slate-800 transition-all hover:shadow-lg"
          >
            <Github size={18} />
            GitHub
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-industrial-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {['Curriculum', 'Tools', 'Community', 'Contribute'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-slate-700 hover:text-safety-orange transition-colors"
              >
                {item}
              </Link>
            ))}
            <Link 
              href="https://github.com" 
              className="flex items-center justify-center gap-2 bg-industrial-navy text-white py-4 rounded-xl font-bold"
            >
              <Github size={20} />
              GitHub
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

import { AnimatePresence } from 'motion/react';
