import React, { useState } from 'react';
import { Mail, Check, Github, ExternalLink, Download, MapPin, GraduationCap } from 'lucide-react';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'parikshitpadole@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="about" className="pt-8 pb-16 border-b border-stone-200/80 dark:border-zinc-800/80">
      <div className="flex flex-col sm:flex-row items-start gap-8">
        {/* Profile Avatar with subtle editorial border */}
        <div className="relative shrink-0">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-stone-300/80 dark:border-zinc-700/80 shadow-sm bg-stone-100 dark:bg-zinc-800">
            <img
              src="./images/IMG_20240824_221302_916.jpg"
              alt="Parikshit Padole"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
          <div
            className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-stone-50 dark:border-[#0f0f12] rounded-full"
            title="Active"
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                Parikshit Padole
              </h1>
              <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                Open to Opportunities
              </span>
            </div>
            <p className="text-base text-zinc-600 dark:text-zinc-400 font-medium">
              Robotics & Artificial Intelligence Engineer
            </p>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-zinc-500 dark:text-zinc-500 font-mono">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                London, United Kingdom
              </span>
              <span className="inline-flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5" />
                Ulster University
              </span>
            </div>
          </div>

          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base max-w-2xl">
            Engineer and researcher working at the nexus of <strong>Machine Learning</strong> and{' '}
            <strong>Space Systems</strong>. Building autonomous guidance and control systems, satellite attitude
            dynamics simulations, and edge computer vision architectures.
          </p>

          {/* Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            <a
              href="./images/CV - Padole, Parikshit.pdf"
              download="Parikshit_Padole_CV.pdf"
              id="hero-download-cv"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV (PDF)</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              id="hero-copy-email"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium border border-stone-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-stone-100 dark:hover:bg-zinc-800/80 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Mail className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Email' : 'Email Me'}</span>
            </button>

            <a
              href="https://github.com/Lobster1911"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github-link"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium border border-stone-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-stone-100 dark:hover:bg-zinc-800/80 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://blogs.imperial.ac.uk/parikshit/"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-blogs-link"
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-lg text-xs font-medium border border-stone-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-stone-100 dark:hover:bg-zinc-800/80 transition-colors"
            >
              <span>Imperial Blogs</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
