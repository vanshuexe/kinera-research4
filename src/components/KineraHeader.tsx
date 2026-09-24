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
    <header className="sticky top-0 z-40 bg-[#FBF9F4]/90 backdrop-blur-md border-b border-[#EAE6DC] transition-all animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group text-left"
          >
            {/* Circle K */}
            <div className="w-8 h-8 rounded-full border border-slate-900/80 flex items-center justify-center text-slate-900 font-sans-clean font-bold text-sm transition-transform group-hover:scale-105">
              K
            </div>

            {/* Brand text */}
            <div className="flex flex-col">
              <span className="font-sans-clean text-xl font-bold tracking-tight text-slate-950 leading-none">
                kinera
              </span>
              <span className="font-sans-clean text-[9px] font-semibold tracking-[0.24em] text-slate-500 uppercase mt-0.5">
                RESEARCH
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-700">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.target)}
                className="hover:text-slate-950 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Start a project CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenProjectModal}
              className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#141722] hover:bg-[#252A3B] transition-all cursor-pointer shadow-xs active:scale-95"
            >
              Start a project
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-950"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EAE6DC] bg-[#FBF9F4] px-6 py-5 shadow-lg space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-800">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.target)}
                className="text-left py-1.5 hover:text-[#B84A39] transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#EAE6DC]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProjectModal();
              }}
              className="w-full py-3 rounded-full text-xs font-bold text-white bg-[#141722] hover:bg-[#252A3B] transition-all cursor-pointer text-center"
            >
              Start a project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
