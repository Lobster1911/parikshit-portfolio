import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, Github, FileText, CheckCircle2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="project-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-stone-50 dark:bg-[#121215] border border-stone-300 dark:border-zinc-800 shadow-2xl p-6 sm:p-8 space-y-6 text-zinc-900 dark:text-zinc-100"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          id="close-modal-btn"
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 bg-stone-200/60 dark:bg-zinc-800/60 hover:bg-stone-300 dark:hover:bg-zinc-700 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Information */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-zinc-500 dark:text-zinc-400">{project.categoryLabel}</span>
            <span className="text-stone-300 dark:text-zinc-700">•</span>
            <span className="text-zinc-500 dark:text-zinc-400">{project.year}</span>
            <span className="text-stone-300 dark:text-zinc-700">•</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">{project.status}</span>
          </div>
          <h2 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400">
            {project.shortSubtitle}
          </p>
        </div>

        {/* Media Preview */}
        <div className="rounded-xl overflow-hidden border border-stone-200 dark:border-zinc-800 bg-black/90">
          {project.mediaType === 'video' ? (
            <video
              src={project.mediaSrc}
              controls
              autoPlay
              muted
              loop
              className="w-full max-h-[380px] object-contain mx-auto"
            />
          ) : (
            <img
              src={project.mediaSrc}
              alt={project.title}
              className="w-full max-h-[380px] object-contain mx-auto"
            />
          )}
        </div>

        {/* Full Narrative Overview */}
        <div className="space-y-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
          {project.fullDescription.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Key Features */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
            Key Architectural Features
          </h3>
          <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Grid */}
        <div className="space-y-3 pt-2">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
            Technical Stack & Frameworks
          </h3>
          <div className="rounded-xl border border-stone-200 dark:border-zinc-800 divide-y divide-stone-200 dark:divide-zinc-800 text-xs font-mono">
            {project.technologies.map((t, idx) => (
              <div key={idx} className="p-3 sm:flex sm:justify-between sm:gap-4 bg-stone-100/50 dark:bg-zinc-900/30">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200 block sm:inline mb-1 sm:mb-0">
                  {t.group}
                </span>
                <span className="text-zinc-600 dark:text-zinc-400 sm:text-right">{t.items}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Links Footer */}
        <div className="pt-4 border-t border-stone-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                {link.type === 'github' && <Github className="w-3.5 h-3.5" />}
                {link.type === 'paper' && <FileText className="w-3.5 h-3.5" />}
                <span>View {link.label}</span>
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
