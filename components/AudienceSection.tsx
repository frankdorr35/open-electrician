'use client';

import React from 'react';
import { GraduationCap, Code, ArrowRight, Github, BookOpen } from 'lucide-react';

export default function AudienceSection() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Learners Card */}
          <div className="group bg-slate-800/50 border border-slate-700 p-12 rounded-[40px] hover:bg-slate-800 transition-all duration-500">
            <div className="w-16 h-16 bg-safety-orange rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
              <GraduationCap size={32} className="text-white" />
            </div>
            <h3 className="text-4xl font-display font-bold mb-6">For Learners</h3>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Prep for your apprenticeship, pass your journeyman exam, or just learn how to wire your own workshop. Our curriculum is built by masters, for the next generation.
            </p>
            <ul className="space-y-4 mb-10">
              {['Step-by-step video guides', 'Interactive circuit simulators', 'Certification prep tracks'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-safety-orange rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="flex items-center gap-2 text-safety-orange font-bold text-lg group/btn">
              Start Learning Free
              <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Masters/Devs Card */}
          <div className="group bg-slate-800/50 border border-slate-700 p-12 rounded-[40px] hover:bg-slate-800 transition-all duration-500">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:-rotate-6 transition-transform">
              <Code size={32} className="text-white" />
            </div>
            <h3 className="text-4xl font-display font-bold mb-6">For Masters & Devs</h3>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Open Electrician is built on GitHub. Fork our curriculum, contribute new modules, or build tools to help students visualize complex electrical concepts.
            </p>
            <ul className="space-y-4 mb-10">
              {['Markdown-based curriculum', 'Open API for tool builders', 'Community peer review'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                <Github size={20} />
                Fork on GitHub
              </button>
              <button className="flex items-center gap-2 border border-slate-600 px-6 py-3 rounded-xl font-bold hover:bg-slate-700 transition-colors">
                <BookOpen size={20} />
                Docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
