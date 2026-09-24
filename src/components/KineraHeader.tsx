import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface KineraHeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenProjectModal: () => void;
}

export const KineraHeader: React.FC<KineraHeaderProps> = ({
  onNavigate,
  onOpenProjectModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Solutions', target: 'solutions-page' },
    { label: 'Approach', target: 'approach-page' },
    { label: 'Industries', target: 'industries-page' },
    { label: 'Insights', target: 'insights-page' },
  ];

  const handleNavClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none animate-fade-in-up">
        <div className="max-w-5xl mx-auto pointer-events-auto">
          <div className="bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-full h-14 sm:h-16 flex items-center justify-between px-4 sm:px-6 transition-all duration-300">
            
            {/* Logo */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center cursor-pointer group text-left"
            >
              {/* Custom Image Logo */}
              <div className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-105">
                <img src="https://ik.imagekit.io/fdhgiehjz/klogo.png?updatedAt=1789918178192" alt="Kinera" className="h-full w-auto object-contain object-left" />
              </div>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 text-[13px] font-semibold text-slate-600">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.target)}
                  className="px-4 py-2 rounded-full hover:bg-black/5 hover:text-slate-950 transition-all cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Start a project CTA */}
            <div className="hidden md:flex items-center">
              <button
                onClick={onOpenProjectModal}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#141722] hover:bg-[#C84B31] transition-all duration-300 cursor-pointer shadow-md shadow-[#141722]/20 hover:shadow-[#C84B31]/30 active:scale-95"
              >
                Start a project
              </button>
            </div>

            {/* Mobile hamburger */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -mr-1 rounded-full hover:bg-black/5 text-slate-700 hover:text-slate-950 transition-colors"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay - Full Screen */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#FBF9F4] z-[60] flex flex-col pointer-events-auto animate-in fade-in duration-200">
          
          {/* Header inside overlay */}
          <div className="flex items-center justify-between px-6 pt-8 pb-4">
            <button onClick={() => { handleNavClick('home'); setMobileMenuOpen(false); }} className="flex items-center">
              <div className="h-9 sm:h-10 w-auto">
                <img src="https://ik.imagekit.io/fdhgiehjz/klogo.png?updatedAt=1789918178192" alt="Kinera" className="h-full w-auto object-contain object-left" />
              </div>
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 -mr-2 rounded-full bg-black/5 text-slate-700 hover:bg-black/10 transition-colors"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 flex flex-col px-6 py-8 overflow-y-auto space-y-2">
            {navLinks.map((link, i) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.target)}
                className="text-left flex items-center justify-between py-5 border-b border-[#EAE6DC]/80 hover:border-slate-300 group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${i * 60}ms`, opacity: 0, animationFillMode: 'forwards' }}
              >
                <span className="font-sans-clean text-3xl font-semibold text-slate-900 group-hover:text-[#C84B31] transition-colors">
                  {link.label}
                </span>
                <span className="text-[#C84B31] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:-translate-x-2">→</span>
              </button>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-auto px-6 pb-10 pt-6 animate-fade-in-up" style={{ animationDelay: '300ms', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] font-sans-clean flex items-center gap-2 mb-6">
              <span className="w-6 h-px bg-slate-300" /> CONTACT US
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectModal();
              }}
              className="w-full py-4 rounded-full text-sm font-bold text-white bg-[#111625] hover:bg-[#252A3B] active:scale-95 transition-all cursor-pointer text-center shadow-lg shadow-[#111625]/20"
            >
              Start a project
            </button>
          </div>

        </div>
      )}
    </>
  );
};
