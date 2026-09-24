import React, { useState } from "react";
import { 
  TRUSTED_CLIENTS, 
  STATS_METRICS, 
  SOLUTIONS_LIST, 
  METHOD_STEPS, 
  INDUSTRIES_LIST, 
  INSIGHTS_LIST 
} from '../data/kineraData';
import { SolutionItem, InsightArticle } from '../types';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

interface KineraMainPageProps {
  onOpenProjectModal: (initialCategory?: string) => void;
  onOpenWalkthroughModal: () => void;
  onSelectSolution: (solution: SolutionItem) => void;
  onSelectInsight: (article: InsightArticle) => void;
}

// Custom SVG Icons for each solution card
const SOLUTION_ICONS: Record<string, React.ReactNode> = {
  'primary-market-research': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  'analytics-data-strategy': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
      <circle cx="19" cy="9" r="1.5" fill="currentColor" />
      <circle cx="14" cy="14" r="1.5" fill="currentColor" />
    </svg>
  ),
  'kol-expert-identification': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <circle cx="4" cy="6" r="2.5" />
      <circle cx="20" cy="6" r="2.5" />
      <circle cx="4" cy="18" r="2.5" />
      <circle cx="20" cy="18" r="2.5" />
      <line x1="6" y1="7" x2="10" y2="10" />
      <line x1="18" y1="7" x2="14" y2="10" />
      <line x1="6" y1="17" x2="10" y2="14" />
      <line x1="18" y1="17" x2="14" y2="14" />
    </svg>
  ),
  'brand-message-tracking': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12 18 6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path d="M12 7a5 5 0 0 1 5 5" />
    </svg>
  ),
  'evaluation-impact': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  'strategic-advisory': (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
};

export const KineraMainPage: React.FC<KineraMainPageProps> = ({
  onOpenProjectModal,
  onOpenWalkthroughModal,
  onSelectSolution,
  onSelectInsight,
}) => {
  const [activeIndustryId, setActiveIndustryId] = useState<string>('pharma-biotech');
  const [activeCard, setActiveCard] = useState(0);
  const TOTAL_CARDS = 3;

  const selectedIndustry = INDUSTRIES_LIST.find(i => i.id === activeIndustryId) || INDUSTRIES_LIST[0];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative border-b border-[#EAE6DC] overflow-hidden bg-[#FAF8F5]">
        
        {/* Subtle warm grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{ backgroundImage: 'repeating-linear-gradient(0deg,#111625 0px,#111625 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#111625 0px,#111625 1px,transparent 1px,transparent 60px)' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[88vh] lg:min-h-0">

            {/* ── LEFT: Text Column ── */}
            <div className="flex flex-col justify-center py-24 lg:py-32 lg:pr-16 space-y-10">
              
              {/* Eyebrow Tag */}
              <div className="inline-flex items-center gap-2.5 self-start">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C84B31] opacity-70" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C84B31]" />
                </span>
                <span className="text-[10px] font-bold text-slate-500 tracking-[0.25em] uppercase font-sans-clean">
                  Consumer & Patient Intelligence
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-[42px] sm:text-5xl lg:text-[54px] font-sans-clean font-semibold text-slate-950 leading-[1.06] tracking-tight">
                  Every signal tells part of the story.
                </h1>
                <p className="text-[42px] sm:text-5xl lg:text-[54px] font-sans-clean font-semibold leading-[1.06] tracking-tight">
                  <span className="text-[#C84B31]">We connect them all.</span>
                </p>
              </div>

              {/* Body */}
              <p className="text-base text-slate-600 max-w-lg font-normal leading-relaxed">
                Kinera synthesizes surveys, EHR claims, physician discourse, registries, and telemetry into a single decision-ready picture — built for pharma, healthcare, and consumer leaders who need evidence clarity over speculation.
              </p>

              {/* Inline data proof strip */}
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {[
                  { value: '1.2M+', label: 'Patient records' },
                  { value: '9,400+', label: 'Verified HCP panel' },
                  { value: '75+', label: 'Clinical registries' },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-xl font-bold text-slate-950 font-sans-clean">{value}</div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">{label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenProjectModal()}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#111625] hover:bg-[#1f2b47] active:scale-95 transition-all shadow-md shadow-[#111625]/20 cursor-pointer"
                >
                  Talk to our team
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => scrollToSection('approach')}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-slate-700 bg-white border border-[#DDD7C9] hover:border-slate-400 hover:bg-white transition-all shadow-sm cursor-pointer"
                >
                  See our method
                </button>
              </div>

              {/* Social proof */}
              <div className="pt-6 border-t border-[#EAE6DC] flex items-center gap-4">
                <div className="flex -space-x-2.5">
                  {[11, 12, 13, 14].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/80?img=${i}`}
                      alt=""
                      className="w-8 h-8 rounded-full border-2 border-[#FAF8F5] object-cover shadow-sm"
                    />
                  ))}
                </div>
                <p className="text-xs text-slate-500">
                  Trusted by <span className="font-semibold text-slate-800">insight & strategy teams</span> at 50+ leading healthcare organizations
                </p>
              </div>
            </div>

            {/* ── RIGHT: Interactive Stacked Cards ── */}
            <div className="hidden lg:flex items-center justify-center py-16 pl-8 relative">
              <div className="absolute left-0 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-[#EAE6DC] to-transparent" />

              <div className="flex flex-col items-center gap-5">
                {/* Card stack */}
                <div className="relative w-[380px] h-[440px]">

                  {/* ── CARD 3: Global Markets (dark navy) ── */}
                  {(() => {
                    const pos = (2 - activeCard + TOTAL_CARDS) % TOTAL_CARDS;
                    const styles = [
                      { transform: 'rotate(0deg) translateY(0px) scale(1)',       zIndex: 30, opacity: 1   },
                      { transform: 'rotate(3deg) translateY(6px) scale(0.97)',    zIndex: 20, opacity: 0.85 },
                      { transform: 'rotate(-5deg) translateY(14px) scale(0.93)', zIndex: 10, opacity: 0.65 },
                    ][pos];
                    return (
                      <div className="absolute inset-0 bg-[#111625] rounded-2xl border border-white/10 shadow-2xl transition-all duration-500 ease-out" style={{ ...styles, transformOrigin: 'center bottom' }}>
                        <div className="p-6 h-full flex flex-col justify-between">
                          <div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">40+ Markets</div>
                            <div className="text-2xl font-semibold text-white font-sans-clean leading-snug">Global primary research fielded across 40+ countries</div>
                          </div>
                          <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {[['🇺🇸','USA'],['🇬🇧','UK'],['🇩🇪','DE'],['🇯🇵','JP'],['🇮🇳','IN'],['🇧🇷','BR']].map(([f,l]) => (
                                <div key={l} className="flex items-center gap-1.5 bg-white/10 rounded-lg px-2.5 py-1.5">
                                  <span className="text-lg">{f}</span>
                                  <span className="text-[10px] font-semibold text-slate-400">{l}</span>
                                </div>
                              ))}
                              <div className="flex items-center bg-white/10 rounded-lg px-2.5 py-1.5">
                                <span className="text-[10px] font-semibold text-slate-400">+34 more</span>
                              </div>
                            </div>
                            {pos === 0 && (
                              <button onClick={() => setActiveCard(p => (p + 1) % TOTAL_CARDS)} className="flex items-center justify-between w-full bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-4 py-2.5 cursor-pointer">
                                <span className="text-xs font-semibold text-slate-300">See HCP Signal Trend</span>
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  {/* ── CARD 2: HCP Signal Trend (ivory) ── */}
                  {(() => {
                    const pos = (1 - activeCard + TOTAL_CARDS) % TOTAL_CARDS;
                    const styles = [
                      { transform: 'rotate(0deg) translateY(0px) scale(1)',       zIndex: 30, opacity: 1   },
                      { transform: 'rotate(3deg) translateY(6px) scale(0.97)',    zIndex: 20, opacity: 0.85 },
                      { transform: 'rotate(-5deg) translateY(14px) scale(0.93)', zIndex: 10, opacity: 0.65 },
                    ][pos];
                    return (
                      <div className="absolute inset-0 bg-[#FAF8F5] border border-[#E4DFD3] rounded-2xl shadow-xl transition-all duration-500 ease-out" style={{ ...styles, transformOrigin: 'center bottom' }}>
                        <div className="p-6 h-full flex flex-col justify-between">
                          <div>
                            <div className="text-[10px] font-bold text-[#C84B31] uppercase tracking-widest mb-3">HCP Signal Trend · Q3 2024</div>
                            <svg viewBox="0 0 300 80" className="w-full h-16">
                              <defs>
                                <linearGradient id="sparkGrad2" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="0%" stopColor="#C84B31" stopOpacity="0.25"/>
                                  <stop offset="100%" stopColor="#C84B31" stopOpacity="0"/>
                                </linearGradient>
                              </defs>
                              <path d="M0,65 L25,58 L50,62 L75,50 L100,52 L125,42 L150,44 L175,35 L200,30 L225,22 L250,18 L275,10 L300,5" fill="none" stroke="#C84B31" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M0,65 L25,58 L50,62 L75,50 L100,52 L125,42 L150,44 L175,35 L200,30 L225,22 L250,18 L275,10 L300,5 L300,80 L0,80 Z" fill="url(#sparkGrad2)"/>
                              <circle cx="300" cy="5" r="4" fill="#C84B31"/>
                            </svg>
                          </div>
                          <div>
                            <div className="flex items-end justify-between mb-4">
                              <div>
                                <div className="text-3xl font-bold text-slate-950 font-sans-clean">+18.4%</div>
                                <div className="text-xs text-slate-500 mt-0.5">Prescriber intent index, 12-wk avg</div>
                              </div>
                              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Live
                              </span>
                            </div>
                            {pos === 0 && (
                              <button onClick={() => setActiveCard(p => (p + 1) % TOTAL_CARDS)} className="flex items-center justify-between w-full bg-slate-100 hover:bg-slate-200 transition-colors rounded-xl px-4 py-2.5 cursor-pointer">
                                <span className="text-xs font-semibold text-slate-600">See client testimonial</span>
                                <svg className="w-4 h-4 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  {/* ── CARD 1: Testimonial (white) ── */}
                  {(() => {
                    const pos = (0 - activeCard + TOTAL_CARDS) % TOTAL_CARDS;
                    const styles = [
                      { transform: 'rotate(0deg) translateY(0px) scale(1)',       zIndex: 30, opacity: 1   },
                      { transform: 'rotate(3deg) translateY(6px) scale(0.97)',    zIndex: 20, opacity: 0.85 },
                      { transform: 'rotate(-5deg) translateY(14px) scale(0.93)', zIndex: 10, opacity: 0.65 },
                    ][pos];
                    return (
                      <div className="absolute inset-0 bg-white border border-[#E4DFD3] rounded-2xl shadow-lg transition-all duration-500 ease-out" style={{ ...styles, transformOrigin: 'center bottom' }}>
                        <div className="p-6 h-full flex flex-col justify-between">
                          <div className="space-y-4">
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Decision-Ready Insight</div>
                            <blockquote className="text-[15px] font-medium text-slate-800 leading-relaxed font-sans-clean border-l-2 border-[#C84B31] pl-4">
                              "Kinera gave us payer access intelligence we couldn't get anywhere else — fielded and delivered in under 3 weeks."
                            </blockquote>
                            <div className="flex items-center gap-3">
                              <img src="https://i.pravatar.cc/80?img=12" alt="" className="w-9 h-9 rounded-full object-cover border-2 border-[#EAE6DC]" />
                              <div>
                                <div className="text-xs font-semibold text-slate-800">Director, Market Access</div>
                                <div className="text-[11px] text-slate-400">Top-5 Global Pharma</div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#EAE6DC] mb-4">
                              {[{ v: '21d', l: 'Avg. turnaround' }, { v: '98%', l: 'On-time delivery' }, { v: '50+', l: 'Orgs served' }].map(({ v, l }) => (
                                <div key={l} className="text-center">
                                  <div className="text-base font-bold text-slate-950 font-sans-clean">{v}</div>
                                  <div className="text-[9px] text-slate-400 mt-0.5 leading-tight">{l}</div>
                                </div>
                              ))}
                            </div>
                            {pos === 0 && (
                              <button onClick={() => setActiveCard(p => (p + 1) % TOTAL_CARDS)} className="flex items-center justify-between w-full bg-[#111625] hover:bg-[#1e2d4a] transition-colors rounded-xl px-4 py-2.5 cursor-pointer">
                                <span className="text-xs font-semibold text-white">See global reach</span>
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                </div>

                {/* Dot indicators */}
                <div className="flex items-center gap-2">
                  {Array.from({ length: TOTAL_CARDS }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveCard(i)}
                      className={`rounded-full transition-all duration-300 cursor-pointer ${
                        i === activeCard
                          ? 'w-5 h-1.5 bg-[#C84B31]'
                          : 'w-1.5 h-1.5 bg-[#D9D0C4] hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>



      {/* 2. TRUSTED BY CLIENTS */}
      <section className="py-14 border-b border-[#EAE6DC] bg-[#FAF8F5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center justify-center gap-3">
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-[#DDD7C9]" />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] font-sans-clean whitespace-nowrap">
              Trusted by insight &amp; strategy teams at
            </p>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-[#DDD7C9]" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
          <div className="flex gap-4 animate-marquee w-max">
            {[
              { name: 'Aravel Health', color: '#C84B31', bg: '#FDF0ED', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
              { name: 'Marchand & Kohl', color: '#1E3A5F', bg: '#EDF2F8', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
              { name: 'Northfield Bio', color: '#2D6A4F', bg: '#EDF7F2', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg> },
              { name: 'Union Consumer Group', color: '#5B3E8C', bg: '#F3EFF9', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
              { name: 'Verity Pharma', color: '#8C3E3E', bg: '#F9EFEF', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
              { name: 'Aravel Health', color: '#C84B31', bg: '#FDF0ED', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> },
              { name: 'Marchand & Kohl', color: '#1E3A5F', bg: '#EDF2F8', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
              { name: 'Northfield Bio', color: '#2D6A4F', bg: '#EDF7F2', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg> },
              { name: 'Union Consumer Group', color: '#5B3E8C', bg: '#F3EFF9', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
              { name: 'Verity Pharma', color: '#8C3E3E', bg: '#F9EFEF', icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white border border-[#EAE6DC] rounded-xl px-5 py-3 shadow-sm hover:shadow-md hover:border-[#D4CEC4] transition-all duration-200 shrink-0 cursor-default">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: item.bg, color: item.color }}>
                  {item.icon}
                </div>
                <span className="text-sm font-semibold text-slate-700 font-sans-clean whitespace-nowrap">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. METRICS STATS BAR */}
      <section className="bg-[#EFF3EB] border-b border-[#E0E7DC] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#DCE4D6]">
            {STATS_METRICS.map((stat, idx) => (
              <div 
                key={idx} 
                className={`pt-6 lg:pt-0 ${idx > 0 ? 'lg:pl-8' : ''} space-y-2 group`}
              >
                <div className="text-4xl sm:text-5xl font-sans-clean font-semibold text-slate-950 tracking-tight group-hover:text-[#C84B31] transition-colors">
                  {stat.value}
                </div>
                <p className="text-xs text-slate-600 max-w-[200px] leading-relaxed font-normal">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DO (SOLUTIONS) */}
      <section id="solutions" className="py-24 border-b border-[#EAE6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Section Header with Custom SVG Badge */}
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C84B31]/10 text-[#C84B31] flex items-center justify-center border border-[#C84B31]/20 shadow-2xs">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
                  <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase font-sans-clean">
                ••• WHAT WE DO
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-sans-clean font-semibold text-slate-950 tracking-tight leading-snug">
              Research built around the decision, not the deliverable
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1">
              From double-blind stakeholder IDIs to 1.2M patient claims cohorts, every engagement is custom-scoped around the specific commercial decision you're making.
            </p>
          </div>

          {/* 6 Solution Cards Grid with Custom SVG Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS_LIST.map((sol) => (
              <div
                key={sol.id}
                onClick={() => onSelectSolution(sol)}
                className="bg-white/90 hover:bg-white rounded-2xl p-7 border border-[#E4DFD3] hover:border-[#CFC8BA] transition-all cursor-pointer shadow-2xs hover:shadow-md flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Header Bar: Periodic Badge + Custom SVG Icon */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs font-sans-clean shadow-2xs"
                      style={{ backgroundColor: sol.badgeBg, color: sol.badgeText }}
                    >
                      {sol.badge}
                    </div>

                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200/80 transition-transform group-hover:scale-110 shadow-2xs"
                      style={{ backgroundColor: sol.badgeBg, color: sol.badgeText }}
                    >
                      {SOLUTION_ICONS[sol.id]}
                    </div>
                  </div>

                  <h3 className="text-lg font-sans-clean font-bold text-slate-950 group-hover:text-[#C84B31] transition-colors">
                    {sol.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {sol.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#F2EFE9] flex items-center text-xs font-semibold text-slate-700 group-hover:text-[#C84B31] transition-colors">
                  <span>Learn more</span>
                  <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. THE KINERA METHOD (APPROACH) */}
      <section id="approach" className="bg-[#FAF8F5] text-slate-950 py-28 border-b border-[#EAE6DC] relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'repeating-linear-gradient(0deg,#EAE6DC 0px,#EAE6DC 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#EAE6DC 0px,#EAE6DC 1px,transparent 1px,transparent 60px)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mb-16 space-y-6">
            <span className="text-[11px] font-bold text-[#C84B31] tracking-[0.25em] uppercase font-sans-clean block flex items-center gap-2">
              <span className="w-8 h-px bg-[#C84B31]" /> THE KINERA METHOD
            </span>
            <h2 className="text-4xl sm:text-5xl font-sans-clean font-semibold text-slate-950 tracking-tight leading-tight">
              One framework, from first signal to final decision
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
              Most research stalls at the handoff between fieldwork and commercial insight. Our method keeps a single senior research team accountable end-to-end, preserving nuanced context through every phase of the project.
            </p>
          </div>

          {/* 6-Step Workflow Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            
            {/* Connecting lines for desktop */}
            <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#DDD7C9] to-transparent z-0" />
            <div className="hidden lg:block absolute top-[228px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#DDD7C9] to-transparent z-0" />

            {METHOD_STEPS.map((step, idx) => (
              <div 
                key={step.title} 
                className="group relative bg-white border border-[#EAE6DC] rounded-2xl p-8 hover:border-[#D4CEC4] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-10"
              >
                {/* Number / Dot marker */}
                <div className="w-14 h-14 rounded-full bg-[#FAF8F5] border border-[#DDD7C9] flex items-center justify-center mb-6 group-hover:bg-[#FDF0ED] group-hover:border-[#C84B31] transition-colors">
                  <span className="text-[#C84B31] font-bold font-sans-clean text-lg">
                    0{idx + 1}
                  </span>
                </div>
                
                <h3 className="text-xl font-sans-clean font-semibold text-slate-950 mb-3 group-hover:text-[#C84B31] transition-colors">
                  {step.title.replace(/^\d\.\s/, '')}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Action Footer */}
          <div className="mt-16 flex justify-center">
            <button
              onClick={onOpenWalkthroughModal}
              className="group flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-slate-700 bg-white border border-[#DDD7C9] shadow-sm hover:border-[#C84B31] hover:text-[#C84B31] hover:bg-[#FDF0ED] transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-[#C84B31] group-hover:animate-pulse" />
              Request a framework walkthrough
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#C84B31] transition-colors" />
            </button>
          </div>

        </div>
      </section>

      {/* 6. WHO WE WORK WITH (INDUSTRIES) */}
      <section id="industries" className="py-24 border-b border-[#EAE6DC] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-14 space-y-3">
            <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase font-sans-clean block flex items-center gap-2">
              <span className="w-8 h-px bg-slate-300" /> WHO WE WORK WITH
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans-clean font-semibold text-slate-950 tracking-tight leading-tight">
              Deep experience across health, life sciences, and consumer categories
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-[340px] shrink-0">
              <div className="flex flex-row lg:flex-col gap-1.5 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 hide-scrollbar border-b lg:border-b-0 lg:border-l border-[#EAE6DC] lg:pl-0">
                {INDUSTRIES_LIST.map((ind) => {
                  const isSelected = ind.id === activeIndustryId;
                  return (
                    <button
                      key={ind.id}
                      onClick={() => setActiveIndustryId(ind.id)}
                      className={`text-left px-5 py-3.5 whitespace-nowrap lg:whitespace-normal font-sans-clean text-sm font-semibold transition-all relative ${
                        isSelected
                          ? 'text-[#C84B31] bg-white lg:bg-transparent shadow-sm lg:shadow-none rounded-xl lg:rounded-none'
                          : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50/50 rounded-xl lg:rounded-none'
                      }`}
                    >
                      {/* Active indicator line (Desktop only) */}
                      {isSelected && (
                        <span className="hidden lg:block absolute left-[-1px] top-0 bottom-0 w-[3px] bg-[#C84B31] rounded-r-full shadow-[2px_0_8px_rgba(200,75,49,0.4)]" />
                      )}
                      {ind.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 min-w-0 w-full relative">
              {/* Added key to trigger re-animation on tab change */}
              <div 
                key={selectedIndustry.id} 
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#EAE6DC] shadow-sm animate-[fadeIn_0.4s_ease-out_forwards] relative overflow-hidden"
              >
                {/* Decorative background accent */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C84B31]/[0.03] rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F2EFE9] pb-6">
                    <h3 className="text-2xl sm:text-3xl font-sans-clean font-bold text-slate-950">
                      {selectedIndustry.name}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF0ED] text-[#C84B31] text-[10px] font-bold tracking-widest uppercase font-sans-clean">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31]" /> Specialization
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                    {selectedIndustry.description}
                  </p>

                  <div className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#F2EFE9]">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-sans-clean mb-4">
                      Frequent Decisions Scoped In This Category
                    </span>
                    <ul className="space-y-4">
                      {selectedIndustry.recentQuestions.map((q, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#C84B31] shrink-0 mt-0.5 opacity-80" />
                          <span className="text-sm text-slate-700 font-medium leading-relaxed">{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenProjectModal(selectedIndustry.name)}
                      className="group inline-flex items-center gap-2 bg-[#111625] text-white hover:bg-[#1E263B] px-6 py-3.5 rounded-full text-xs font-semibold transition-all cursor-pointer shadow-md shadow-[#111625]/10"
                    >
                      Scope a study in {selectedIndustry.name}
                      <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. LATEST THINKING (INSIGHTS) */}
      <section id="insights" className="py-28 border-b border-[#EAE6DC] bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#FAF8F5] to-transparent rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/3 -translate-y-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="text-[11px] font-bold text-slate-500 tracking-[0.25em] uppercase font-sans-clean flex items-center gap-2">
                <span className="w-8 h-px bg-slate-300" /> LATEST THINKING
              </span>
              <h2 className="text-4xl sm:text-5xl font-sans-clean font-semibold text-slate-950 tracking-tight leading-tight">
                Insights &amp; perspectives
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Notes from our research teams on what's shaping decisions across health and consumer markets.
              </p>
            </div>
            
            {/* View All Button */}
            <button className="hidden md:flex group items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#C84B31] transition-colors bg-[#FAF8F5] hover:bg-[#FDF0ED] px-5 py-2.5 rounded-full border border-[#EAE6DC] hover:border-[#C84B31]">
              View all insights
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSIGHTS_LIST.map((article, idx) => (
              <div
                key={article.id}
                onClick={() => onSelectInsight(article)}
                className="group flex flex-col bg-white rounded-3xl border border-[#EAE6DC] hover:border-[#D4CEC4] overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Visual Header */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${article.gradientClass} opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500`} />
                  
                  {/* Subtle glass overlay pattern */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPPHBhdGggZD0iTTAgMTBoNDBNMTAgMHY0ME0yMCAwaDQwTTIwIDB2NDBMMzAgMGg0ME0zMCAwdjQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] mix-blend-overlay opacity-50" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 shadow-xs">
                    <span className="text-[9px] font-bold text-slate-800 tracking-widest uppercase font-sans-clean">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="flex-1 p-7 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl font-sans-clean font-bold text-slate-950 group-hover:text-[#C84B31] transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                      {article.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#F2EFE9] flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      {/* Fake author avatar using pravatar for UI polish */}
                      <img 
                        src={`https://i.pravatar.cc/100?img=${10 + idx}`} 
                        alt={article.author} 
                        className="w-8 h-8 rounded-full border border-[#EAE6DC] object-cover" 
                      />
                      <div className="flex flex-col">
                        <span className="text-[11px] font-semibold text-slate-800">{article.author}</span>
                        <span className="text-[10px] text-slate-500">{article.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="w-8 h-8 rounded-full bg-[#FAF8F5] border border-[#EAE6DC] flex items-center justify-center group-hover:bg-[#C84B31] group-hover:border-[#C84B31] transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile View All Button */}
          <div className="flex md:hidden justify-center mt-8">
            <button className="group flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#C84B31] transition-colors bg-[#FAF8F5] hover:bg-[#FDF0ED] px-6 py-3 rounded-full border border-[#EAE6DC] hover:border-[#C84B31] w-full justify-center">
              View all insights
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>
      </section>

      {/* 8. LET'S TALK (CALL TO ACTION) */}
      <section id="contact" className="py-24 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          
          <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase font-sans-clean block">
            ••• LET'S TALK
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans-clean font-semibold text-slate-950 tracking-tight leading-tight">
            Have a decision that needs a clearer picture?
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed font-normal">
            Tell us what you're trying to figure out. We'll tell you honestly whether we're the right team — and how fast we could get you an answer.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => onOpenProjectModal()}
              className="px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#111625] hover:bg-[#212738] transition-all cursor-pointer shadow-xs active:scale-95"
            >
              Start a conversation
            </button>

            <button
              onClick={() => scrollToSection('solutions')}
              className="px-6 py-3 rounded-full text-xs font-semibold text-slate-800 bg-transparent hover:bg-slate-200/50 border border-[#D5D0C5] transition-all cursor-pointer"
            >
              Browse our solutions
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
