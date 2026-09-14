import React from 'react';
import { SKILL_GROUPS, PUBLICATIONS_AND_WRITING } from '../data/projects';
import { ArrowUpRight, Cpu, Layers } from 'lucide-react';

export const ExperienceSkills: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Skills Section */}
      <section id="skills" className="space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Skills & Core Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="p-5 rounded-xl border border-stone-200/90 dark:border-zinc-800/90 bg-white/60 dark:bg-zinc-900/40 space-y-3"
            >
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                {group.title}
              </h3>
              <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-mono">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-zinc-600 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Publications & Writing Section */}
      <section id="writing" className="space-y-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            <Layers className="w-3.5 h-3.5" />
            <span>Research & Editorial</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Publications & Technical Writing
          </h2>
        </div>

        <div className="space-y-3">
          {PUBLICATIONS_AND_WRITING.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-xl border border-stone-200/90 dark:border-zinc-800/90 bg-white/60 dark:bg-zinc-900/40 hover:border-stone-400 dark:hover:border-zinc-700 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span>{item.venue}</span>
                    <span>•</span>
                    <span>{item.year}</span>
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};
