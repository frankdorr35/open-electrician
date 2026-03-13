import Link from "next/link";
import { Camera, Folder, Settings, Users, Layout, HelpCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30">
      {/* Header: Solid White backgrounds to make the logo pop */}
      <header className="bg-white py-4 px-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-start">
          <img 
            src="/logo.png" 
            alt="Open Electrician Logo" 
            className="h-12 w-auto object-contain"
          />
        </div>
      </header>

      {/* Main Grid: Responsive 1-col mobile, 2-col desktop */}
      <div className="max-w-7xl mx-auto p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Primary Button 1: 'Log Job' - Most prominent with orange border */}
          <Link href="/log-job" className="flex flex-col items-center justify-center p-10 bg-zinc-900 border-2 border-orange-500 rounded-3xl transition-all hover:bg-zinc-800 active:scale-[0.98] group cursor-pointer shadow-xl shadow-orange-500/10">
            <div className="mb-6 p-4 bg-orange-500/10 rounded-2xl text-orange-500 group-hover:scale-110 transition-transform">
              <Camera size={56} strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">Log Job</h2>
            <p className="text-zinc-400 text-base font-medium">Record audio & take photos</p>
          </Link>

          {/* Primary Button 2: 'Review Jobs' - Highly visible */}
          <button className="flex flex-col items-center justify-center p-10 bg-zinc-900 border-2 border-zinc-800 rounded-3xl transition-all hover:bg-zinc-800 active:scale-[0.98] group cursor-pointer shadow-xl">
            <div className="mb-6 p-4 bg-zinc-800 rounded-2xl text-orange-500 group-hover:scale-110 transition-transform">
              <Folder size={56} strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">Review Jobs</h2>
            <p className="text-zinc-400 text-base font-medium">Search archives & generate PDF reports</p>
          </button>

          {/* Placeholders 1-4: Muted styling */}
          <div className="flex flex-col items-center justify-center p-8 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl opacity-40 grayscale">
            <div className="mb-4 text-zinc-600">
              <Settings size={32} />
            </div>
            <h3 className="text-xl font-bold text-zinc-500 uppercase tracking-widest">Placeholder 1</h3>
          </div>

          <div className="flex flex-col items-center justify-center p-8 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl opacity-40 grayscale">
            <div className="mb-4 text-zinc-600">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-zinc-500 uppercase tracking-widest">Placeholder 2</h3>
          </div>

          <div className="flex flex-col items-center justify-center p-8 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl opacity-40 grayscale">
            <div className="mb-4 text-zinc-600">
              <Layout size={32} />
            </div>
            <h3 className="text-xl font-bold text-zinc-500 uppercase tracking-widest">Placeholder 3</h3>
          </div>

          <div className="flex flex-col items-center justify-center p-8 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl opacity-40 grayscale">
            <div className="mb-4 text-zinc-600">
              <HelpCircle size={32} />
            </div>
            <h3 className="text-xl font-bold text-zinc-500 uppercase tracking-widest">Placeholder 4</h3>
          </div>

        </div>
      </div>

      {/* Visual background treatment for a premium feel */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full" />
      </div>
    </main>
  );
}
