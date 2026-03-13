'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Info, Zap } from 'lucide-react';

export default function OhmsLawCalculator() {
  const [v, setV] = useState<string>('');
  const [i, setI] = useState<string>('');
  const [r, setR] = useState<string>('');
  const [activeField, setActiveField] = useState<'V' | 'I' | 'R' | null>(null);

  const calculate = () => {
    const numV = parseFloat(v);
    const numI = parseFloat(i);
    const numR = parseFloat(r);

    if (!isNaN(numI) && !isNaN(numR)) {
      setV((numI * numR).toFixed(2));
    } else if (!isNaN(numV) && !isNaN(numR) && numR !== 0) {
      setI((numV / numR).toFixed(2));
    } else if (!isNaN(numV) && !isNaN(numI) && numI !== 0) {
      setR((numV / numI).toFixed(2));
    }
  };

  const clear = () => {
    setV('');
    setI('');
    setR('');
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 max-w-md mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-safety-orange">
          <Calculator size={24} />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl">Ohm&apos;s Law Calculator</h3>
          <p className="text-sm text-slate-500">V = I × R</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Voltage (V)</label>
          <div className="flex items-center">
            <input
              type="number"
              value={v}
              onChange={(e) => setV(e.target.value)}
              placeholder="Volts"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-safety-orange/20 focus:border-safety-orange outline-none transition-all"
            />
            <span className="absolute right-4 text-slate-400 font-mono">V</span>
          </div>
        </div>

        <div className="relative">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Current (I)</label>
          <div className="flex items-center">
            <input
              type="number"
              value={i}
              onChange={(e) => setI(e.target.value)}
              placeholder="Amps"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-safety-orange/20 focus:border-safety-orange outline-none transition-all"
            />
            <span className="absolute right-4 text-slate-400 font-mono">A</span>
          </div>
        </div>

        <div className="relative">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Resistance (R)</label>
          <div className="flex items-center">
            <input
              type="number"
              value={r}
              onChange={(e) => setR(e.target.value)}
              placeholder="Ohms"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-safety-orange/20 focus:border-safety-orange outline-none transition-all"
            />
            <span className="absolute right-4 text-slate-400 font-mono">Ω</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-8">
        <button
          onClick={calculate}
          className="bg-industrial-navy text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
        >
          <Zap size={18} className="text-safety-orange fill-current" />
          Solve
        </button>
        <button
          onClick={clear}
          className="bg-slate-100 text-slate-600 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors"
        >
          Clear
        </button>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-2xl flex gap-3 border border-blue-100">
        <Info size={20} className="text-blue-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-blue-700 leading-relaxed">
          Enter any two values and click Solve to calculate the third. Ohm&apos;s Law is the foundation of electrical theory.
        </p>
      </div>
    </div>
  );
}
