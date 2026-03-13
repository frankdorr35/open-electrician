'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Home, Factory, BookOpen, ChevronRight } from 'lucide-react';

const stages = [
  {
    id: 'safety',
    title: 'Safety First',
    icon: ShieldCheck,
    description: 'Master OSHA standards, PPE, lockout/tagout procedures, and basic first aid for electrical hazards.',
    color: 'bg-red-500'
  },
  {
    id: 'residential',
    title: 'Residential',
    icon: Home,
    description: 'Learn house wiring, service entrances, branch circuits, and smart home integration.',
    color: 'bg-blue-500'
  },
  {
    id: 'commercial',
    title: 'Commercial',
    icon: Factory,
    description: 'Explore conduit bending, 3-phase power, motor controls, and large-scale lighting systems.',
    color: 'bg-emerald-500'
  },
  {
    id: 'nec',
    title: 'NEC Mastery',
    icon: BookOpen,
    description: 'Deep dive into the National Electrical Code to ensure every installation is up to standard.',
    color: 'bg-purple-500'
  }
];

export default function SkillTree() {
  const [activeStage, setActiveStage] = useState(stages[0]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Interactive Tree */}
        <div className="space-y-4">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage)}
              className={`w-full flex items-center gap-4 p-6 rounded-2xl border-2 transition-all duration-300 text-left group ${
                activeStage.id === stage.id 
                  ? 'border-safety-orange bg-white shadow-xl scale-[1.02]' 
                  : 'border-slate-100 bg-slate-50/50 hover:border-slate-200'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110 ${
                activeStage.id === stage.id ? stage.color : 'bg-slate-300'
              }`}>
                <stage.icon size={24} />
              </div>
              <div className="flex-1">
                <h4 className={`font-display font-bold text-lg ${
                  activeStage.id === stage.id ? 'text-industrial-navy' : 'text-slate-500'
                }`}>
                  {stage.title}
                </h4>
              </div>
              <ChevronRight className={`transition-transform ${
                activeStage.id === stage.id ? 'text-safety-orange translate-x-1' : 'text-slate-300'
              }`} />
            </button>
          ))}
        </div>

        {/* Right: Content Display */}
        <div className="relative h-[400px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-industrial-navy rounded-[40px] p-12 text-white shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-2xl mb-6 ${activeStage.color}`}>
                  <activeStage.icon size={32} />
                </div>
                <h3 className="text-4xl font-display font-bold mb-6">{activeStage.title} Curriculum</h3>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  {activeStage.description}
                </p>
                <button className="bg-safety-orange text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition-all flex items-center gap-2 group">
                  Explore Modules
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
