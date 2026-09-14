import React from 'react';
import { Project } from '../types';
import { Github, FileText, ArrowRight, Play } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <article className="group relative rounded-xl border border-stone-200/90 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-900/40 hover:border-stone-400 dark:hover:border-zinc-700 transition-all duration-200 overflow-hidden flex flex-col">
      {/* Media Showcase */}
      <div
        onClick={() => onSelect(project)}
        className="relative aspect-video w-full overflow-hidden bg-stone-100 dark:bg-zinc-950 border-b border-stone-200/80 dark:border-zinc-800/80 cursor-pointer"
      >
        {project.mediaType === 'video' ? (
          <div className="relative w-full h-full">
            <video
              src={project.mediaSrc}
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute bottom-2.5 right-2.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-mono text-zinc-200 flex items-center gap-1">
              <Play className="w-2.5 h-2.5 fill-current" />
              <span>Simulation Video</span>
            </div>
          </div>
        ) : (
          <img
            src={project.mediaSrc}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
          />
        )}
      </div>

      {/* Body Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Metadata Row */}
          <div className="flex items-center justify-between gap-2 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-zinc-600 dark:text-zinc-400 font-medium">{project.categoryLabel}</span>
              <span className="text-stone-300 dark:text-zinc-700">•</span>
              <span className="text-zinc-500 dark:text-zinc-500">{project.year}</span>
            </div>

            <span
              className={`px-2 py-0.5 rounded text-[11px] font-mono font-medium ${
                project.status === 'Completed'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-900/60'
                  : 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200/80 dark:border-blue-900/60'
              }`}
            >
              {project.status}
            </span>
          </div>

          {/* Heading */}
          <div>
            <h2
              onClick={() => onSelect(project)}
              className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors cursor-pointer"
            >
              {project.title}
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-0.5">
              {project.shortSubtitle}
            </p>
          </div>

          {/* Summary */}
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
            {project.summary}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] px-2 py-0.5 rounded bg-stone-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 border border-stone-200/70 dark:border-zinc-700/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 border-t border-stone-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 font-semibold text-zinc-900 dark:text-zinc-100 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
          >
            <span>Deep Dive</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <div className="flex items-center gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                className="inline-flex items-center gap-1 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
              >
                {link.type === 'github' && <Github className="w-4 h-4" />}
                {link.type === 'paper' && <FileText className="w-4 h-4" />}
                <span className="hidden sm:inline font-mono text-[11px]">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
