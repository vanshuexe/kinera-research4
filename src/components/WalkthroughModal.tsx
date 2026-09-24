import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { METHOD_STEPS } from '../data/kineraData';

interface WalkthroughModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProject: () => void;
}

export const WalkthroughModal: React.FC<WalkthroughModalProps> = ({
  isOpen,
  onClose,
  onOpenProject,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#121625] border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-white shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <span className="text-[11px] font-bold text-[#C76F62] tracking-wider uppercase font-sans-clean">
            THE KINERA METHOD
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans-clean font-bold text-white">
            One framework, from first signal to final decision
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-lg leading-relaxed">
            Most research stalls at the handoff between fieldwork and insight. Our method keeps a single senior team accountable end-to-end, so nothing gets lost in translation.
          </p>
        </div>

        {/* Step Selector */}
        <div className="grid grid-cols-4 gap-2 mt-6 pt-4 border-t border-slate-800">
          {METHOD_STEPS.map((step, idx) => (
            <button
              key={step.title}
              onClick={() => setActiveStep(idx)}
              className={`p-2.5 rounded-xl text-left transition-all cursor-pointer border ${
                activeStep === idx
                  ? 'bg-slate-800/90 border-[#B84A39] text-white shadow-xs'
                  : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <div className="text-[10px] font-mono text-slate-500 mb-0.5">0{idx + 1}</div>
              <div className="text-xs font-bold font-sans-clean">{step.title}</div>
            </button>
          ))}
        </div>

        {/* Active Step Details */}
        <div className="mt-6 p-6 bg-slate-900/80 rounded-xl border border-slate-800 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#B84A39]" />
            <h3 className="text-lg font-bold font-editorial text-white">
              Phase {activeStep + 1}: {METHOD_STEPS[activeStep].title}
            </h3>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            {METHOD_STEPS[activeStep].description}
          </p>

          <div className="pt-2 text-xs text-slate-400 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B84A39] shrink-0 mt-0.5" />
              <span>Senior principal accountability on every study</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B84A39] shrink-0 mt-0.5" />
              <span>Decision-first scoping with no methodology lock-in</span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-white"
          >
            Close walkthrough
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenProject();
            }}
            className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#B84A39] hover:bg-[#A33D2D] text-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Apply to your decision</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
