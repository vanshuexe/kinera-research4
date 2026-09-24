import React from 'react';
import { X, ArrowRight, CheckCircle2, Clock, HelpCircle } from 'lucide-react';
import { SolutionItem } from '../types';

interface SolutionDetailModalProps {
  solution: SolutionItem | null;
  onClose: () => void;
  onOpenProject: () => void;
}

export const SolutionDetailModal: React.FC<SolutionDetailModalProps> = ({
  solution,
  onClose,
  onOpenProject,
}) => {
  if (!solution) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FBF9F4] border border-[#E0DBCF] rounded-2xl max-w-xl w-full p-6 sm:p-8 text-slate-900 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-1.5 rounded-full hover:bg-slate-200/50 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs font-sans-clean shrink-0 shadow-xs"
            style={{ backgroundColor: solution.badgeBg, color: solution.badgeText }}
          >
            {solution.badge}
          </div>
          <div>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-sans-clean">
              SOLUTION CAPABILITY
            </span>
            <h2 className="text-2xl font-sans-clean font-bold text-slate-950">
              {solution.title}
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          {solution.description}
        </p>

        {solution.fullDetails && (
          <div className="mt-5 space-y-5 pt-4 border-t border-[#EAE6DC]">
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-sans-clean mb-2">
                Methodology & Tooling
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {solution.fullDetails.keyMethods.map((m, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-[#E0DBCF]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B84A39] shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-sans-clean mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
                Sample Decisions We Answer
              </h4>
              <div className="space-y-2">
                {solution.fullDetails.sampleQuestions.map((q, i) => (
                  <div key={i} className="text-xs text-slate-700 bg-white/70 p-2.5 rounded-lg border border-[#E0DBCF] italic">
                    "{q}"
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600 bg-[#EFF3EB] p-3 rounded-lg border border-[#DCE4D6]">
              <Clock className="w-4 h-4 text-[#3F4F19] shrink-0" />
              <span><strong>Typical Turnaround:</strong> {solution.fullDetails.typicalTimeline}</span>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#EAE6DC] flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Back to overview
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenProject();
            }}
            className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#141722] hover:bg-[#252A3B] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Scope this solution</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
