import React from 'react';
import { METHOD_STEPS } from '../data/kineraData';
import { ArrowRight, ArrowDown } from 'lucide-react';

export const KineraApproachPage: React.FC<{
  onOpenWalkthroughModal: () => void;
}> = ({ onOpenWalkthroughModal }) => {
  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-20">
      {/* Approach Hero */}
      <section className="pt-24 pb-20 border-b border-[#EAE6DC] relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'repeating-linear-gradient(0deg,#EAE6DC 0px,#EAE6DC 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#EAE6DC 0px,#EAE6DC 1px,transparent 1px,transparent 60px)' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-[11px] font-bold text-[#C84B31] tracking-[0.25em] uppercase font-sans-clean block flex items-center justify-center gap-2 mb-6 animate-fade-in-up">
            <span className="w-8 h-px bg-[#C84B31]" /> THE KINERA METHOD <span className="w-8 h-px bg-[#C84B31]" />
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-sans-clean font-semibold text-slate-950 tracking-tight leading-tight max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            One framework, from first signal to final decision
          </h1>
          <p className="mt-8 text-sm sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Most research stalls at the handoff between fieldwork and commercial insight. Our method keeps a single senior research team accountable end-to-end, preserving nuanced context through every phase of the project.
          </p>
          
          <div className="mt-12 flex justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="w-10 h-14 rounded-full border border-slate-300 flex items-center justify-center">
              <ArrowDown className="w-4 h-4 text-slate-400 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* The Timeline / Steps */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-24 relative">
            {/* Central Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#EAE6DC] -translate-x-1/2 z-0" />

            {METHOD_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={step.title} 
                  className={`relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full animate-fade-in-up ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  
                  {/* Content Panel */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white border border-[#EAE6DC] p-8 md:p-10 hover:shadow-lg hover:border-[#D4CEC4] transition-all duration-300">
                      <span className="text-[10px] font-bold text-[#C84B31] tracking-[0.25em] uppercase font-sans-clean block mb-4">
                        Phase 0{idx + 1}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-sans-clean font-bold text-slate-950 mb-4">
                        {step.title.replace(/^\d\.\s/, '')}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node / Number */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 bg-[#FAF8F5] border-4 border-white shadow-sm items-center justify-center rounded-none shadow-sm z-20">
                    <span className="text-lg font-bold font-sans-clean text-slate-400">
                      {idx + 1}
                    </span>
                  </div>
                  
                  {/* Empty space for the other half */}
                  <div className="hidden md:block w-1/2" />

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* The Kinera Standard (Core Principles) */}
      <section className="py-24 bg-white border-t border-[#EAE6DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold text-slate-500 tracking-[0.2em] uppercase font-sans-clean block mb-3">
              ••• THE KINERA STANDARD
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans-clean font-semibold text-slate-950 tracking-tight leading-tight">
              Built on three uncompromising principles.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Senior-Led Execution",
                desc: "We don't bait-and-switch. The senior partner who scopes your project is the same researcher conducting your interviews and writing your final synthesis.",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                )
              },
              {
                title: "Zero Boilerplate",
                desc: "Every methodology is built from scratch around your specific decision. We never force-fit your commercial questions into a syndicated or pre-packaged report template.",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="m9 14 2 2 4-4" />
                  </svg>
                )
              },
              {
                title: "Action-First Synthesis",
                desc: "Data without direction is noise. Our deliverables are aggressively edited to highlight the 'so what'—giving your executive team clear, defensible paths forward.",
                icon: (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                  </svg>
                )
              }
            ].map((principle, idx) => (
              <div 
                key={principle.title}
                className="bg-[#FAF8F5] p-8 border border-[#EAE6DC] animate-fade-in-up hover:bg-white hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className="w-12 h-12 bg-white border border-[#EAE6DC] rounded-xl flex items-center justify-center text-[#C84B31] mb-6 shadow-sm">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-sans-clean font-bold text-slate-950 mb-3">
                  {principle.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Footer */}
      <section className="py-32 bg-[#111625] text-center border-t border-[#EAE6DC] relative overflow-hidden">
        {/* Subtle grid background inverted */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'repeating-linear-gradient(0deg,#ffffff 0px,#ffffff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#ffffff 0px,#ffffff 1px,transparent 1px,transparent 60px)' }} />
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans-clean font-semibold text-white tracking-tight leading-tight">
            Ready to see how we apply this to your decisions?
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-xl mx-auto">
            Book a 20-minute walkthrough. We'll show you past deliverables, explain our sourcing constraints, and map out exactly how we approach complex mandates.
          </p>
          <div className="pt-6">
            <button
              onClick={onOpenWalkthroughModal}
              className="group flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-white bg-transparent border border-slate-700 hover:border-[#C84B31] hover:bg-[#C84B31]/10 transition-all cursor-pointer mx-auto"
            >
              <span className="w-2 h-2 rounded-full bg-[#C84B31] group-hover:animate-ping" />
              Request a framework walkthrough
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
