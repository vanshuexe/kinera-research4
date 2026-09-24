import React, { useState } from 'react';
import { X, Clock, Share2, Check, ArrowRight } from 'lucide-react';
import { InsightArticle } from '../types';

interface InsightArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
  onOpenProject: () => void;
}

export const InsightArticleModal: React.FC<InsightArticleModalProps> = ({
  article,
  onClose,
  onOpenProject,
}) => {
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleShare = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FBF9F4] border border-[#E0DBCF] rounded-2xl max-w-2xl w-full p-6 sm:p-8 text-slate-900 shadow-2xl relative max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-1.5 rounded-full hover:bg-slate-200/50 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gradient header banner */}
        <div className={`h-28 sm:h-32 rounded-xl bg-gradient-to-r ${article.gradientClass} mb-6 relative overflow-hidden shadow-xs`} />

        <div className="space-y-3">
          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span className="font-bold text-[#B84A39] tracking-wider uppercase font-sans-clean">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-sans-clean font-bold text-slate-950 leading-tight">
            {article.title}
          </h2>

          <p className="text-xs sm:text-sm font-medium text-slate-600 italic">
            {article.description}
          </p>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-b border-[#EAE6DC] pb-4">
            <span>Authored by <strong>{article.author}</strong></span>
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-950 font-semibold cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="py-6 space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
          {article.content.map((p, idx) => {
            if (p.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl font-bold font-sans-clean text-slate-900 mt-8 mb-4">
                  {p.replace('### ', '')}
                </h3>
              );
            }
            if (p.startsWith('> ')) {
              return (
                <blockquote key={idx} className="border-l-4 border-[#C84B31] pl-6 py-2 my-8 text-lg font-medium italic text-slate-800 bg-[#FAF8F5]">
                  {p.replace('> ', '')}
                </blockquote>
              );
            }
            return (
              <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
            );
          })}
        </div>

        {/* Footer actions */}
        <div className="pt-4 border-t border-[#EAE6DC] flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Close reading
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenProject();
            }}
            className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#141722] hover:bg-[#252A3B] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Discuss this finding</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
