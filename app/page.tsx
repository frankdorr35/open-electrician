import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SkillTree from '@/components/SkillTree';
import OhmsLawCalculator from '@/components/OhmsLawCalculator';
import AudienceSection from '@/components/AudienceSection';
import Footer from '@/components/Footer';
import AICompanion from '@/components/AICompanion';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />

      {/* Skill Tree Section */}
      <section id="curriculum" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black text-industrial-navy mb-4">
            YOUR PATH TO <span className="text-safety-orange">MASTERY</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Our open-source roadmap takes you from zero knowledge to professional-grade skills. Click a stage to see what you&apos;ll learn.
          </p>
        </div>
        <SkillTree />
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Open Source Tools
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-black text-industrial-navy mb-6">
                POWERFUL TOOLS <br />
                IN YOUR <span className="text-safety-orange">POCKET.</span>
              </h2>
              <p className="text-slate-600 text-xl leading-relaxed mb-8">
                We&apos;re building a suite of open-source calculators and simulators to help you visualize electrical theory. No ads, no paywalls, just pure utility.
              </p>
              <div className="space-y-4">
                {[
                  'Conduit Bending Calculator',
                  'Voltage Drop Estimator',
                  'Wire Sizing Tool',
                  'NEC Reference Search'
                ].map((tool) => (
                  <div key={tool} className="flex items-center gap-3 text-industrial-navy font-bold">
                    <div className="w-5 h-5 bg-safety-orange rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    {tool}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <OhmsLawCalculator />
            </div>
          </div>
        </div>
      </section>

      <AudienceSection />

      <Footer />

      <AICompanion />
    </main>
  );
}
