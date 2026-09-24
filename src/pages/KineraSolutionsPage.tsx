import React, { useState } from 'react';
import { SOLUTIONS_LIST } from '../data/kineraData';
import { SolutionItem } from '../types';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SolutionDetailModal } from '../components/SolutionDetailModal';

const SOLUTION_ICONS: Record<string, React.ReactNode> = {
  'primary-market-research': (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  'analytics-data-strategy': (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
      <circle cx="19" cy="9" r="1.5" fill="currentColor" />
      <circle cx="14" cy="14" r="1.5" fill="currentColor" />
    </svg>
  ),
  'kol-expert-identification': (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12 18 6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path d="M12 7a5 5 0 0 1 5 5" />
    </svg>
  ),
  'evaluation-impact': (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  'strategic-advisory': (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
};

export const KineraSolutionsPage: React.FC<{
  onOpenProjectModal: (category?: string) => void;
}> = ({ onOpenProjectModal }) => {
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-20">
      {/* Solutions Hero */}
      <section className="pt-20 sm:pt-24 pb-16 sm:pb-20 border-b border-[#EAE6DC] bg-[#FAF8F5] reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-bold text-[#C84B31] tracking-[0.25em] uppercase font-sans-clean block flex items-center justify-center gap-2 mb-6">
            <span className="w-8 h-px bg-[#C84B31]" /> OUR SOLUTIONS <span className="w-8 h-px bg-[#C84B31]" />
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-sans-clean font-semibold text-slate-950 tracking-tight leading-tight max-w-4xl mx-auto">
            Research built around the decision, not the deliverable
          </h1>
          <p className="mt-8 text-sm sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            From double-blind stakeholder IDIs to 1.2M patient claims cohorts, every engagement is custom-scoped around the specific commercial decision you're making.
          </p>
        </div>
      </section>

      {/* Solutions Detailed List */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-32 reveal-on-scroll">
          {SOLUTIONS_LIST.map((sol, index) => (
            <div 
              key={sol.id} 
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start border-t border-[#EAE6DC] pt-12 sm:pt-16 first:border-0 first:pt-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              
              {/* Left Side: Sticky Title & CTA */}
              <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
                <div className="flex items-center gap-4">
                  {/* SVG Icon */}
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center border border-[#EAE6DC] transition-transform duration-500 hover:scale-105"
                    style={{ backgroundColor: sol.badgeBg, color: sol.badgeText }}
                  >
                    {SOLUTION_ICONS[sol.id]}
                  </div>
                  {/* Badge Text */}
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase font-sans-clean text-slate-500">
                    {sol.title}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-3xl lg:text-4xl font-sans-clean font-bold text-slate-950 mb-4 leading-tight">
                    {sol.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {sol.description}
                  </p>
                </div>
                
                <button
                  onClick={() => onOpenProjectModal(sol.title)}
                  className="group inline-flex items-center gap-3 text-sm font-bold text-[#C84B31] hover:text-slate-950 transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Right Side: Deep Details */}
              <div className="lg:col-span-8 bg-white border border-[#EAE6DC] p-6 sm:p-8 lg:p-12 rounded-xl shadow-premium hover:shadow-premium-hover transition-shadow duration-500">
                <div className="space-y-10 sm:space-y-12">
                  
                  {/* Overview */}
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-sans-clean mb-4 border-b border-[#EAE6DC] pb-2">Overview</h4>
                    <p className="text-slate-800 leading-relaxed text-sm sm:text-base">
                      {sol.fullDetails?.overview || sol.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    {/* Key Methods */}
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-sans-clean mb-4 border-b border-[#EAE6DC] pb-2">Key Methods Employed</h4>
                      <ul className="space-y-3">
                        {sol.fullDetails?.keyMethods?.map((method, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-[#C84B31] mt-2 shrink-0" />
                            <span className="text-sm text-slate-600 font-medium leading-relaxed">{method}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Timeline */}
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-sans-clean mb-4 border-b border-[#EAE6DC] pb-2">Typical Timeline</h4>
                      <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#EAE6DC] bg-[#FAF8F5]">
                        <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-semibold text-slate-700">{sol.fullDetails?.typicalTimeline || '4 - 8 Weeks'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Questions */}
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-sans-clean mb-4 border-b border-[#EAE6DC] pb-2">Sample Questions Addressed</h4>
                    <ul className="space-y-4">
                      {sol.fullDetails?.sampleQuestions?.map((q, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#C84B31] shrink-0 mt-0.5 opacity-80" />
                          <span className="text-sm text-slate-600 leading-relaxed">{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Reused Contact CTA */}
      <section className="py-24 bg-[#FAF8F5] border-t border-[#EAE6DC] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase font-sans-clean block">
            ••• READY TO START?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans-clean font-semibold tracking-tight text-slate-950 leading-tight">
            Let's scope your next critical decision.
          </h2>
          <div className="pt-6">
            <button
              onClick={() => onOpenProjectModal()}
              className="px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#111625] hover:bg-[#1E263B] transition-all cursor-pointer shadow-md"
            >
              Start a conversation
            </button>
          </div>
        </div>
      </section>

      <SolutionDetailModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onOpenProject={() => onOpenProjectModal(selectedSolution?.title)}
      />
    </div>
  );
};
