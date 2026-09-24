import React from 'react';
import { X, CheckCircle2, Users, Shield, ArrowRight } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProject: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenProject,
}) => {
  if (!isOpen) return null;

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

        <div className="space-y-3">
          <span className="text-[11px] font-bold text-[#B84A39] tracking-wider uppercase font-sans-clean">
            ABOUT KINERA RESEARCH
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans-clean font-bold text-slate-950">
            Research built around the decision, not the deliverable
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            Kinera Research turns fragmented signals — surveys, claims, conversations, behavior — into a full picture your team can act on. Built for healthcare, pharma, and consumer brands who need answers faster than the market moves.
          </p>
        </div>

        <div className="mt-6 space-y-4 pt-4 border-t border-[#EAE6DC]">
          <div className="p-4 bg-white rounded-xl border border-[#E0DBCF] space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-sans-clean flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#B84A39]" />
              The Senior Accountability Principle
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Most research firms win client trust with senior pitch teams, then hand off fieldwork and synthesis to junior analysts. At Kinera, senior researchers are embedded end-to-end — from open question framing to final executive socialization.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-[#E0DBCF] space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-sans-clean flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#B84A39]" />
              Global Reach & Verified Panels
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Over 1,200+ verified healthcare professionals, key opinion leaders, payers, and patients across 40+ countries. Every panelist is double-vetted for clinical veracity to eliminate panel fatigue and fraud.
            </p>
          </div>

          <div className="p-4 bg-[#EFF3EB] rounded-xl border border-[#DCE4D6] space-y-1 text-xs text-slate-700">
            <span className="font-bold text-[#3F4F19] uppercase tracking-wider block text-[10px]">
              CAREERS AT KINERA
            </span>
            <p>
              We are actively hiring Senior Research Principals and Healthcare Data Strategists. Send inquiries to <strong>careers@kineraresearch.com</strong>.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#EAE6DC] flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenProject();
            }}
            className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#141722] hover:bg-[#252A3B] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Start a project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
