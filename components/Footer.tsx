'use client';

import React from 'react';
import Link from 'next/link';
import { Zap, Github, MessageSquare, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-safety-orange rounded-lg flex items-center justify-center text-white">
                <Zap size={18} className="fill-current" />
              </div>
              <span className="font-display font-black text-xl tracking-tighter text-industrial-navy">
                OPEN<span className="text-safety-orange">ELECTRICIAN</span>
              </span>
            </Link>
            <p className="text-slate-500 max-w-sm leading-relaxed mb-8">
              Empowering the next generation of electricians through open-source education. 100% free, forever. Join our global community of learners and masters.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-safety-orange hover:text-white transition-all">
                <Github size={20} />
              </Link>
              <Link href="#" className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                <MessageSquare size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-industrial-navy uppercase tracking-widest text-sm mb-6">Resources</h4>
            <ul className="space-y-4">
              {['Curriculum', 'Ohm\'s Law Calc', 'NEC Guide', 'Tool Reviews'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-500 hover:text-safety-orange transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-industrial-navy uppercase tracking-widest text-sm mb-6">Community</h4>
            <ul className="space-y-4">
              {['Discord', 'GitHub', 'Contribute', 'License'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-500 hover:text-safety-orange transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm">
            © 2026 Open Electrician. Built with passion for the trades.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-slate-400 hover:text-slate-600 text-sm flex items-center gap-2">
              <Shield size={14} />
              MIT License
            </Link>
            <Link href="#" className="text-slate-400 hover:text-slate-600 text-sm">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
