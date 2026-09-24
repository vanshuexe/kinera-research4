import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

interface KineraFooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenSolution: (solutionId: string) => void;
  onOpenAbout: () => void;
  onOpenContact: () => void;
}

export const KineraFooter: React.FC<KineraFooterProps> = ({
  onNavigate,
  onOpenSolution,
  onOpenAbout,
  onOpenContact,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [legalModal, setLegalModal] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#121625] text-slate-300 pt-16 pb-12 border-t border-slate-800 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full border border-slate-400 flex items-center justify-center text-white font-sans-clean font-bold text-xs">
                K
              </div>
              <span className="font-sans-clean text-lg font-bold tracking-tight text-white">
                kinera
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-xs font-normal">
              Full-picture research and analytics for teams making high-stakes decisions in health and consumer markets.
            </p>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-sans-clean">
              SOLUTIONS
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button 
                  onClick={() => onOpenSolution('primary-market-research')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Primary Research
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenSolution('analytics-data-strategy')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Analytics & Strategy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenSolution('kol-expert-identification')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  KOL Identification
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenSolution('brand-message-tracking')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Brand Tracking
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-sans-clean">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button 
                  onClick={onOpenAbout} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenAbout} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Careers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('insights')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Insights
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenContact} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-sans-clean">
              LEGAL
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button 
                  onClick={() => setLegalModal('Privacy Policy')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLegalModal('Terms of Use')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setLegalModal('Cookie Policy')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Stay In The Loop Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-sans-clean">
              STAY IN THE LOOP
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Occasional notes on research and category trends. No spam.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex rounded-lg overflow-hidden border border-slate-700 bg-slate-900/90 focus-within:border-slate-500">
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs text-white bg-transparent focus:outline-none placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  className="px-3 py-2 text-xs font-semibold text-white bg-[#B84A39] hover:bg-[#A33D2D] transition-colors cursor-pointer shrink-0"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : 'Sign up'}
                </button>
              </div>
              {subscribed && (
                <span className="text-[11px] text-emerald-400 block animate-in fade-in">
                  You are on the list!
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <p>© 2026 Kinera Research. All rights reserved. — Dummy site for design review only.</p>
            <div className="flex items-center gap-3 text-slate-400">
              <a href="#linkedin" className="hover:text-white transition-colors">in</a>
              <a href="#twitter" className="hover:text-white transition-colors">X</a>
              <a href="#instagram" className="hover:text-white transition-colors">ig</a>
            </div>
          </div>

          <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
            DUMMY SITE · PLACEHOLDER CONTENT
          </div>
        </div>

      </div>

      {/* Legal Information Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#151928] border border-slate-800 rounded-2xl max-w-lg w-full p-6 text-slate-300 shadow-2xl relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-white mb-3 font-sans-clean">
              {legalModal}
            </h3>
            <div className="space-y-2 text-xs text-slate-400 max-h-64 overflow-y-auto pr-2">
              <p>
                Kinera Research maintains strict primary research ethics and double-blind respondent privacy protocols compliant with EphMRA, CASRO, and HIPAA requirements.
              </p>
              <p>
                All research participants undergo double-opt-in verification. Commercial client datasets, custom forecasting algorithms, and strategic deliverables are treated as privileged and confidential.
              </p>
              <p>
                This digital asset serves as a prototype interface and architectural demonstrator for design review.
              </p>
            </div>
            <div className="mt-5 text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
