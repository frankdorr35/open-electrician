'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Zap, ArrowRight, Play, Users, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 text-safety-orange px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border border-orange-100">
            <Zap size={14} className="fill-current" />
            100% Free & Open Source
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-black text-industrial-navy leading-[0.9] tracking-tighter mb-8">
            MASTER THE <br />
            <span className="text-safety-orange">ELECTRICAL TRADES.</span> <br />
            ZERO TUITION.
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-12 leading-relaxed">
            The world&apos;s first community-driven electrical school. From basic safety to advanced industrial controls, learn everything you need for a high-paying career.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-safety-orange text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all hover:shadow-xl hover:shadow-orange-200 flex items-center justify-center gap-2 group">
              Start Learning
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white text-industrial-navy border-2 border-slate-200 px-10 py-5 rounded-2xl font-bold text-lg hover:border-industrial-navy transition-all flex items-center justify-center gap-2">
              <Code size={20} />
              Contribute Curriculum
            </button>
          </div>
        </motion.div>

        {/* Stats / Features */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-100 pt-12"
        >
          {[
            { label: 'Active Students', value: '12k+', icon: Users },
            { label: 'Modules', value: '450+', icon: Play },
            { label: 'NEC Updates', value: '2026', icon: Zap },
            { label: 'Cost', value: '$0', icon: Zap },
          ].map((stat, i) => (
            <div key={i} className="text-left">
              <div className="flex items-center gap-2 text-safety-orange mb-2">
                <stat.icon size={16} />
                <span className="text-2xl font-display font-black text-industrial-navy">{stat.value}</span>
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
