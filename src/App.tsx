import React, { useState } from 'react';
import { KineraHeader } from './components/KineraHeader';
import { KineraFooter } from './components/KineraFooter';
import { KineraMainPage } from './pages/KineraMainPage';
import { KineraSolutionsPage } from './pages/KineraSolutionsPage';
import { KineraApproachPage } from './pages/KineraApproachPage';
import { KineraIndustriesPage } from './pages/KineraIndustriesPage';
import { KineraInsightsPage } from './pages/KineraInsightsPage';
import { ProjectModal } from './components/ProjectModal';
import { WalkthroughModal } from './components/WalkthroughModal';
import { SolutionDetailModal } from './components/SolutionDetailModal';
import { InsightArticleModal } from './components/InsightArticleModal';
import { AboutModal } from './components/AboutModal';
import { SolutionItem, InsightArticle } from './types';
import { SOLUTIONS_LIST } from './data/kineraData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'solutions' | 'approach' | 'industries' | 'insights'>('home');
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [projectInitialTopic, setProjectInitialTopic] = useState<string | undefined>(undefined);
  const [walkthroughModalOpen, setWalkthroughModalOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);
  const [selectedInsight, setSelectedInsight] = useState<InsightArticle | null>(null);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'solutions-page') {
      setCurrentPage('solutions');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    if (sectionId === 'approach-page') {
      setCurrentPage('approach');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    if (sectionId === 'industries-page') {
      setCurrentPage('industries');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'insights-page') {
      setCurrentPage('insights');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    if (sectionId === 'home') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If we are on a subpage and trying to navigate to a home section, go home first
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Give it a tiny tick to render home before scrolling
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenProjectModal = (initialCategory?: string) => {
    setProjectInitialTopic(initialCategory);
    setProjectModalOpen(true);
  };

  const handleOpenSolutionById = (solutionId: string) => {
    const found = SOLUTIONS_LIST.find((s) => s.id === solutionId);
    if (found) {
      setSelectedSolution(found);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F4] bg-noise text-slate-900 selection:bg-[#B84A39] selection:text-white">
      {/* Header */}
      <KineraHeader
        onNavigate={handleNavigate}
        onOpenProjectModal={() => handleOpenProjectModal()}
      />

      {/* Main Page Layout matching PDF */}
      <main key={currentPage} className="flex-1 animate-fade-in-up">
        {currentPage === 'home' && (
          <KineraMainPage
            onOpenProjectModal={handleOpenProjectModal}
            onOpenWalkthroughModal={() => setWalkthroughModalOpen(true)}
            onSelectSolution={(sol) => setSelectedSolution(sol)}
            onSelectInsight={(art) => setSelectedInsight(art)}
          />
        )}
        
        {currentPage === 'solutions' && (
          <KineraSolutionsPage
            onOpenProjectModal={handleOpenProjectModal}
          />
        )}
        
        {currentPage === 'approach' && (
          <KineraApproachPage
            onOpenWalkthroughModal={() => setWalkthroughModalOpen(true)}
          />
        )}
        
        {currentPage === 'industries' && (
          <KineraIndustriesPage
            onOpenProjectModal={handleOpenProjectModal}
          />
        )}

        {currentPage === 'insights' && (
          <KineraInsightsPage
            onOpenProjectModal={handleOpenProjectModal}
          />
        )}
      </main>

      {/* Footer matching PDF */}
      <KineraFooter
        onNavigate={handleNavigate}
        onOpenSolution={handleOpenSolutionById}
        onOpenAbout={() => setAboutModalOpen(true)}
        onOpenContact={() => handleOpenProjectModal()}
      />

      {/* Modals & Detail Overlays */}
      <ProjectModal
        isOpen={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
        initialTopic={projectInitialTopic}
      />

      <WalkthroughModal
        isOpen={walkthroughModalOpen}
        onClose={() => setWalkthroughModalOpen(false)}
        onOpenProject={() => handleOpenProjectModal()}
      />

      <SolutionDetailModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onOpenProject={() => handleOpenProjectModal(selectedSolution?.title)}
      />

      <InsightArticleModal
        article={selectedInsight}
        onClose={() => setSelectedInsight(null)}
        onOpenProject={() => handleOpenProjectModal(selectedInsight?.category)}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenProject={() => handleOpenProjectModal()}
      />
    </div>
  );
}
