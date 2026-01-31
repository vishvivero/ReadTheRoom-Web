'use client';

import React, { useState, useEffect } from 'react';
import { Chrome, Zap, MessageSquare, Target, BarChart3, ChevronRight, Check, Star, ArrowRight, MousePointer2, Sparkles, Globe2, ShieldCheck } from 'lucide-react';

const Logo = () => (
  <svg viewBox="0 0 128 128" className="w-full h-full">
    <circle cx="64" cy="64" r="60" fill="#FFD93D"/>
    <ellipse cx="64" cy="68" rx="32" ry="28" fill="#1a1a1a"/>
    <ellipse cx="52" cy="62" rx="10" ry="12" fill="#fff"/>
    <ellipse cx="76" cy="62" rx="10" ry="12" fill="#fff"/>
    <circle cx="54" cy="64" r="5" fill="#1a1a1a"/>
    <circle cx="78" cy="64" r="5" fill="#1a1a1a"/>
    <path d="M54 80 Q64 88 74 80" fill="none" stroke="#FFD93D" stroke-width="3" stroke-linecap="round"/>
    <circle cx="64" cy="32" r="6" fill="#1a1a1a"/>
    <line x1="64" y1="38" x2="64" y2="44" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round"/>
  </svg>
);

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#FFD93D]/30 overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#FFD93D]/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/40 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-2xl group-hover:scale-110 transition-all duration-500 rotate-[-5deg] group-hover:rotate-0">
              <Logo />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">ReadTheRoom</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[13px] font-bold uppercase tracking-widest text-gray-500">
            <a href="#features" className="hover:text-[#FFD93D] transition-colors">Experience</a>
            <a href="#logic" className="hover:text-[#FFD93D] transition-colors">The Logic</a>
            <a href="#pricing" className="hover:text-[#FFD93D] transition-colors">Access</a>
          </div>
          <button className="bg-[#FFD93D] text-black px-6 py-2.5 rounded-full text-[13px] font-black uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,217,61,0.2)]">
            Add to Chrome
          </button>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 md:pt-60 md:pb-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FFD93D] text-[11px] font-bold uppercase tracking-[0.2em] mb-10 animate-fade-in shadow-xl">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Social Intelligence Redefined</span>
              </div>
              
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent italic">
                DON'T JUST<br />REPLY.
              </h1>
              
              <p className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-400 mb-12 font-medium leading-tight tracking-tight">
                The strategic edge for your X feed. High-impact replies that actually sound like you.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="relative group overflow-hidden bg-white text-black px-10 py-5 rounded-2xl text-lg font-black uppercase tracking-tighter hover:bg-[#FFD93D] transition-all duration-500 shadow-2xl">
                  <span className="relative z-10 flex items-center gap-3">
                    <Chrome className="w-6 h-6" />
                    Secure Your Edge
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </button>
              </div>

              {/* Trust Bar */}
              <div className="mt-20 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                {['X.com (Twitter)'].map(p => (
                  <span key={p} className="text-sm font-black uppercase tracking-[0.3em]">{p}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Interface Preview */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FFD93D]/20 to-indigo-500/20 rounded-[32px] blur-2xl opacity-50" />
            <div className="relative rounded-[32px] border border-white/10 bg-[#0F0F0F] overflow-hidden shadow-2xl">
              <div className="h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-6 gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="h-6 w-1/3 bg-white/5 rounded-full mx-auto" />
              </div>
              
              <div className="p-8 md:p-16 flex flex-col md:flex-row gap-12">
                <div className="flex-1 space-y-8">
                  <div className="space-y-4 opacity-40">
                    <div className="w-12 h-12 rounded-full bg-white/10" />
                    <div className="h-4 w-48 bg-white/10 rounded-full" />
                    <div className="h-24 w-full bg-white/5 rounded-2xl" />
                  </div>
                  
                  <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 shadow-2xl transform md:translate-x-12 hover:scale-[1.02] transition-transform duration-500 group">
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl shadow-xl rotate-[-10deg] group-hover:rotate-0 transition-all duration-500">
                      <Logo />
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-black text-[#FFD93D] uppercase tracking-[0.3em]">AI Strategy Active</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Confidence</span>
                        <span className="text-lg font-black text-white">98%</span>
                      </div>
                    </div>
                    <p className="text-xl md:text-2xl font-medium text-white/90 italic leading-snug mb-8">
                      "Leveraging speed over perfection is the ultimate meta-game. This insight into rapid iteration is exactly why you're ahead."
                    </p>
                    <button className="w-full py-4 bg-white text-black text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:bg-[#FFD93D] transition-colors">
                      Execute Reply
                    </button>
                  </div>
                </div>
                
                <div className="w-full md:w-72 space-y-6">
                  <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] space-y-6">
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-[#FFD93D]" />
                      <span className="text-xs font-black uppercase tracking-widest">Mission Controls</span>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Persona</label>
                        <div className="px-4 py-3 rounded-lg bg-white/5 border border-white/5 text-[11px] font-bold text-white">Aggressive Builder</div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Focus</label>
                        <div className="px-4 py-3 rounded-lg bg-white/5 border border-white/5 text-[11px] font-bold text-white">Viral Authority</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section id="features" className="py-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-1px bg-white/10 border-y border-white/10">
              {[
                {
                  title: "Latent Context",
                  desc: "We don't just read the post. We analyze the author's history, thread sentiment, and hidden social cues.",
                  icon: <Globe2 className="w-8 h-8 text-[#FFD93D]" />
                },
                {
                  title: "Groq Velocity",
                  desc: "Inference at the speed of thought. Zero lag. Strategic options delivered while you're still reading.",
                  icon: <Zap className="w-8 h-8 text-[#FFD93D]" />
                },
                {
                  title: "Persona Engine",
                  desc: "Train the AI on your specific tone. It stops sounding like ChatGPT and starts sounding like your best self.",
                  icon: <ShieldCheck className="w-8 h-8 text-[#FFD93D]" />
                }
              ].map((f, i) => (
                <div key={i} className="p-12 md:p-20 bg-[#0A0A0A] group hover:bg-white/[0.02] transition-all duration-700">
                  <div className="mb-10 group-hover:scale-110 transition-transform duration-500">{f.icon}</div>
                  <h3 className="text-3xl font-black tracking-tighter mb-6 italic uppercase">{f.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed font-medium">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-40 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter italic uppercase mb-6">Secure Your Access</h2>
              <p className="text-gray-500 text-xl font-medium tracking-tight">The competitive advantage for founders who ship.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-12 rounded-[40px] border border-white/10 bg-black hover:border-white/20 transition-all duration-500 flex flex-col">
                <div className="mb-12">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-4 block">Deployment 01</span>
                  <h3 className="text-3xl font-black italic uppercase mb-2">Standard</h3>
                  <div className="text-5xl font-black tracking-tighter">$0</div>
                </div>
                <ul className="space-y-6 mb-12 flex-1">
                  {['10 Strategic Replies / Day', 'Global Content Analysis', 'Standard Inference Speed'].map(li => (
                    <li key={li} className="flex items-center gap-3 text-gray-400 font-bold text-sm tracking-tight uppercase">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFD93D]" />
                      {li}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-5 rounded-2xl bg-white/5 border border-white/10 text-white font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                  Initialize
                </button>
              </div>

              <div className="p-12 rounded-[40px] bg-[#FFD93D] text-black transform md:scale-105 shadow-[0_0_80px_rgba(255,217,61,0.15)] flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 rotate-[20deg]">
                  <Zap className="w-32 h-32 fill-black" />
                </div>
                <div className="mb-12 relative z-10">
                  <span className="text-[10px] font-black text-black/40 uppercase tracking-[0.4em] mb-4 block">Deployment 02</span>
                  <h3 className="text-3xl font-black italic uppercase mb-2">Unlimited</h3>
                  <div className="text-5xl font-black tracking-tighter">$12<span className="text-lg opacity-40">/mo</span></div>
                </div>
                <ul className="space-y-6 mb-12 flex-1 relative z-10">
                  {['Infinite Daily ReplieS', 'Custom Writing Personas', 'Priority Feature Access', 'Advanced Logic Presets'].map(li => (
                    <li key={li} className="flex items-center gap-3 text-black font-black text-sm tracking-tight uppercase">
                      <div className="w-1.5 h-1.5 rounded-full bg-black" />
                      {li}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-5 rounded-2xl bg-black text-white font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl relative z-10">
                  Go Unlimited
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-2xl">
                  <Logo />
                </div>
                <span className="text-2xl font-black tracking-tighter uppercase italic">ReadTheRoom</span>
              </div>
              <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="https://x.com/vishvivero" className="hover:text-white transition-colors">Twitter</a>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">© 2026 Developed by Vish.</p>
            </div>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        html {
          scroll-behavior: smooth;
        }

        ::selection {
          background: #FFD93D;
          color: black;
        }
      `}</style>
    </div>
  );
}
