import React from 'react';
import { INDUSTRIES_LIST } from '../data/kineraData';
import { ArrowRight } from 'lucide-react';

export const KineraIndustriesPage: React.FC<{
  onOpenProjectModal: (category?: string) => void;
}> = ({ onOpenProjectModal }) => {
  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-20">
      {/* Industries Hero */}
      <section className="pt-24 pb-20 border-b border-[#EAE6DC] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[11px] font-bold text-[#C84B31] tracking-[0.25em] uppercase font-sans-clean block flex items-center justify-center gap-2 mb-6 animate-fade-in-up">
            <span className="w-8 h-px bg-[#C84B31]" /> EXPERTISE <span className="w-8 h-px bg-[#C84B31]" />
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-sans-clean font-semibold text-slate-950 tracking-tight leading-tight max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Deep context across health and consumer markets
          </h1>
          <p className="mt-8 text-sm sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            We don't start from zero. Our teams bring years of category-specific fluency to every mandate, so we spend time answering your commercial questions—not learning the basics of your industry.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_LIST.map((industry, index) => (
              <div 
                key={industry.id}
                className="group flex flex-col bg-white border border-[#EAE6DC] p-8 md:p-10 hover:bg-[#111625] hover:border-[#111625] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 animate-fade-in-up overflow-hidden relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Decorative Hover Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#C84B31] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />

                {/* Number / Identifier */}
                <div className="text-[10px] font-bold text-slate-400 group-hover:text-slate-500 tracking-[0.2em] font-sans-clean mb-6 border-b border-[#EAE6DC] group-hover:border-slate-800 pb-4 transition-colors duration-500">
                  VOL. {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Title & Desc */}
                <h2 className="text-2xl font-sans-clean font-bold text-slate-950 mb-4 group-hover:text-white transition-colors duration-500">
                  {industry.name}
                </h2>
                <p className="text-slate-600 group-hover:text-slate-300 leading-relaxed text-sm mb-10 flex-grow transition-colors duration-500">
                  {industry.description}
                </p>

                {/* Recent Questions */}
                <div className="bg-[#FAF8F5] group-hover:bg-[#1E263B] p-6 border border-[#EAE6DC] group-hover:border-transparent space-y-4 transition-all duration-500 transform group-hover:translate-y-[-4px]">
                  <h4 className="text-[10px] font-bold text-slate-500 group-hover:text-slate-400 uppercase tracking-widest font-sans-clean transition-colors duration-500">
                    Recent Questions Answered
                  </h4>
                  <ul className="space-y-4">
                    {industry.recentQuestions.map((q, qIdx) => (
                      <li key={qIdx} className="flex items-start gap-3 text-xs text-slate-700 group-hover:text-slate-200 leading-relaxed transition-colors duration-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C84B31] mt-1.5 shrink-0" />
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-8 mt-auto border-t border-[#EAE6DC] group-hover:border-slate-800 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <button
                    onClick={() => onOpenProjectModal(industry.name)}
                    className="inline-flex items-center gap-3 text-xs font-bold text-[#C84B31] hover:text-white transition-colors uppercase tracking-widest w-full"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Footer */}
      <section className="py-24 bg-[#111625] text-center border-t border-[#EAE6DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-[11px] font-bold text-[#C84B31] tracking-[0.2em] uppercase font-sans-clean block">
            ••• DON'T SEE YOUR CATEGORY?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans-clean font-semibold tracking-tight text-white leading-tight">
            We cross-pollinate insights across adjacent markets.
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed pt-2">
            Many of our most impactful insights come from mapping consumer health trends to clinical pharma strategies, or digital health metrics to medical device adoption.
          </p>
          <div className="pt-8">
            <button
              onClick={() => onOpenProjectModal()}
              className="px-8 py-4 rounded-full text-sm font-semibold text-slate-950 bg-white hover:bg-[#FAF8F5] transition-all cursor-pointer shadow-md"
            >
              Start a conversation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
