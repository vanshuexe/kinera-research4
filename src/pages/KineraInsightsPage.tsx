import React from 'react';
import { INSIGHTS_LIST } from '../data/kineraData';
import { InsightArticle } from '../types';
import { ArrowRight, Clock, User } from 'lucide-react';
import { InsightArticleModal } from '../components/InsightArticleModal';

export const KineraInsightsPage: React.FC<{
  onOpenProjectModal: (category?: string) => void;
}> = ({ onOpenProjectModal }) => {
  const [selectedInsight, setSelectedInsight] = React.useState<InsightArticle | null>(null);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pt-20">
      {/* Insights Hero */}
      <section className="pt-24 pb-20 border-b border-[#EAE6DC] bg-white relative overflow-hidden">
        {/* Subtle mesh background element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#EAE6DC]/30 to-transparent rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[11px] font-bold text-[#C84B31] tracking-[0.25em] uppercase font-sans-clean block flex items-center justify-center gap-2 mb-6 animate-fade-in-up">
            <span className="w-8 h-px bg-[#C84B31]" /> LATEST THINKING <span className="w-8 h-px bg-[#C84B31]" />
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-sans-clean font-semibold text-slate-950 tracking-tight leading-tight max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Notes from the frontier of healthcare and consumer markets
          </h1>
          <p className="mt-8 text-sm sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Our research directors publish regular perspectives on methodology shifts, regulatory impacts, and the hidden currents shaping executive decisions.
          </p>
        </div>
      </section>

      {/* Insights List */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {INSIGHTS_LIST.map((insight, index) => {
            return (
              <div 
                key={insight.id}
                onClick={() => setSelectedInsight(insight)}
                className="group relative flex flex-col md:flex-row bg-white border border-[#EAE6DC] rounded-xl overflow-hidden cursor-pointer shadow-premium hover:shadow-premium-hover transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image/Gradient Area */}
                <div className="overflow-hidden relative shrink-0 w-full md:w-1/3 h-48 md:h-auto">
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${insight.gradientClass} opacity-90 transition-transform duration-700 group-hover:scale-110`}
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay group-hover:bg-black/0 transition-colors duration-500" />
                  
                  {/* Category Badge overlaying the gradient */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 shadow-sm">
                    <span className="text-[9px] font-bold text-slate-800 tracking-[0.2em] uppercase font-sans-clean">
                      {insight.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-grow bg-white group-hover:bg-[#FAF8F5] transition-colors duration-500 p-8 md:p-10">
                  <h2 className="font-sans-clean font-bold text-slate-950 mb-4 group-hover:text-[#C84B31] transition-colors duration-300 leading-snug text-2xl md:text-3xl">
                    {insight.title}
                  </h2>
                  
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow text-sm md:text-base">
                    {insight.description}
                  </p>

                  {/* Metadata (Author, Time) */}
                  <div className="pt-6 mt-auto border-t border-[#EAE6DC] flex flex-wrap items-center justify-between text-xs font-medium text-slate-500 gap-4">
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>{insight.author.split(' ')[0]}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{insight.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-[#C84B31] font-bold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      <span>READ</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Action Footer */}
      <section className="py-24 bg-[#111625] text-center border-t border-[#EAE6DC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-[11px] font-bold text-[#C84B31] tracking-[0.2em] uppercase font-sans-clean block">
            ••• SUBSCRIBE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans-clean font-semibold tracking-tight text-white leading-tight">
            Get these insights delivered.
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed pt-2">
            No spam, just signal. Join 10,000+ executives who receive our monthly research briefing.
          </p>
          <div className="pt-8 max-w-md mx-auto flex gap-3">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#C84B31] transition-colors"
            />
            <button className="px-8 py-3.5 rounded-full text-sm font-semibold text-slate-950 bg-white hover:bg-[#FAF8F5] transition-all cursor-pointer shadow-md">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <InsightArticleModal
        article={selectedInsight}
        onClose={() => setSelectedInsight(null)}
        onOpenProject={() => {
          setSelectedInsight(null);
          onOpenProjectModal(selectedInsight?.category);
        }}
      />
    </div>
  );
};
