'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Camera, Mic, Square, Save } from 'lucide-react';
import Link from 'next/link';

export default function LogJobPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    equipmentSpotted: string;
    extractedSpecs: string;
    professionalSummary: string;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event: any) => {
        const currentTranscript = Array.from(event.results)
          .map((result: any) => result[0].transcript)
          .join('');
        setTranscript(currentTranscript);
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  // Camera Handlers
  const handleSnapPhoto = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Clean up previous object URL to avoid memory leaks
      if (imagePreview) URL.revokeObjectURL(imagePreview);
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  // Speech Handlers
  const toggleRecording = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsRecording(true);
      } catch (err) {
        console.error("Failed to start recognition:", err);
      }
    }
  };

  const handleSaveAndAnalyze = async () => {
    if (!selectedFile) {
      alert("Please snap a photo first!");
      return;
    }

    setIsAnalyzing(true);
    setAnalysisResult(null);

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("transcript", transcript);

      const response = await fetch("/api/analyze-job", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to analyze job");
      }

      const data = await response.json();
      setAnalysisResult(data);
      console.log('Analysis result received:', data);
    } catch (error) {
      console.error('Error analyzing job:', error);
      alert('Error analyzing job. Please ensure your GEMINI_API_KEY is correct in .env.local');
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-orange-500/30">
      {/* Header */}
      <header className="p-4 border-b border-zinc-800 flex items-center bg-zinc-950 sticky top-0 z-10 shadow-lg">
        <Link href="/" className="p-2 hover:bg-zinc-800 rounded-full transition-colors mr-2">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-xl font-bold tracking-tight">New Job Record</h1>
      </header>

      <main className="flex-1 p-6 flex flex-col gap-8 max-w-md mx-auto w-full pt-10 pb-20">
        
        {/* Camera Section */}
        <section className="flex flex-col items-center">
          <input 
            type="file" 
            accept="image/*" 
            capture="environment" 
            className="hidden" 
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <button 
            disabled={isAnalyzing}
            onClick={handleSnapPhoto}
            className="w-full aspect-square max-w-[180px] bg-orange-500 rounded-[2.5rem] flex flex-col items-center justify-center gap-3 transition-all hover:brightness-110 active:scale-95 shadow-xl shadow-orange-500/20 group disabled:opacity-50 disabled:grayscale"
          >
            <div className="p-3 bg-black/10 rounded-2xl group-hover:scale-110 transition-transform">
              <Camera size={48} className="text-black" strokeWidth={1.5} />
            </div>
            <span className="text-black font-black uppercase text-xs tracking-widest">Snap Photo</span>
          </button>
          
          {imagePreview && (
            <div className="mt-8 relative group">
              <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-orange-500 shadow-2xl shadow-orange-500/20">
                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-2 -right-2 bg-orange-500 text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter shadow-lg">
                Preview
              </div>
            </div>
          )}
        </section>

        <div className="h-px bg-zinc-900 w-full" />

        {/* Voice Section */}
        <section className="flex flex-col items-center w-full gap-4">
          <button 
            disabled={isAnalyzing}
            onClick={toggleRecording}
            className={`w-full py-6 rounded-3xl flex items-center justify-center gap-4 transition-all active:scale-95 border-2 disabled:opacity-50 ${
              isRecording 
                ? 'bg-red-500 border-red-500 shadow-xl shadow-red-500/40 animate-pulse' 
                : 'bg-zinc-900 border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700'
            }`}
          >
            <div className={`p-2 rounded-xl ${isRecording ? 'bg-white/20' : 'bg-orange-500/10'}`}>
              {isRecording ? <Square size={24} fill="white" className="text-white" /> : <Mic size={24} className="text-orange-500" strokeWidth={1.5} />}
            </div>
            <span className="font-black uppercase tracking-widest text-base">
              {isRecording ? 'Recording...' : 'Voice Note'}
            </span>
          </button>

          {/* Transcript Area */}
          <div className="w-full flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4">
              Field Transcripts
            </label>
            <textarea
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              placeholder="Start speaking to record notes or type here..."
              className="w-full h-32 bg-zinc-900/50 border border-zinc-800 rounded-3xl p-5 text-sm text-zinc-300 focus:outline-none focus:border-orange-500 transition-colors resize-none placeholder:text-zinc-700"
            />
          </div>
        </section>

        {/* Results Section */}
        {analysisResult && (
          <section className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="p-5 bg-zinc-900/80 rounded-3xl border border-zinc-800 flex flex-col gap-4">
              <div>
                <h3 className="text-xs font-black text-orange-500 uppercase tracking-[0.2em] mb-1">Equipment Spotted</h3>
                <p className="text-lg font-bold text-white leading-tight">{analysisResult.equipmentSpotted}</p>
              </div>
              
              <div className="h-px bg-zinc-800" />
              
              <div>
                <h3 className="text-xs font-black text-orange-500 uppercase tracking-[0.2em] mb-1">Extracted Specs</h3>
                <p className="text-sm font-medium text-zinc-300 leading-relaxed font-mono">{analysisResult.extractedSpecs}</p>
              </div>

              <div className="h-px bg-zinc-800" />
              
              <div>
                <h3 className="text-xs font-black text-orange-500 uppercase tracking-[0.2em] mb-1">Field Summary</h3>
                <p className="text-sm font-medium text-zinc-400 italic leading-relaxed">"{analysisResult.professionalSummary}"</p>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* Action Footer */}
      <footer className="p-6 bg-zinc-950/80 backdrop-blur-xl border-t border-zinc-900 sticky bottom-0">
        <button 
          disabled={isAnalyzing || isRecording}
          onClick={handleSaveAndAnalyze}
          className="w-full bg-white text-black py-5 rounded-2xl font-black uppercase tracking-tight text-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 active:scale-[0.98] shadow-2xl shadow-white/5 disabled:opacity-50"
        >
          {isAnalyzing ? (
            <>
              <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Save size={24} />
              Save & Analyze
            </>
          )}
        </button>
      </footer>

      {/* Visual background treatment */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-500/[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-500/[0.03] blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
