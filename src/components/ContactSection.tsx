import React, { useState } from 'react';
import { Mail, Check, Github, Instagram, ExternalLink, Download } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'parikshitpadole@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="pt-12 border-t border-stone-200/80 dark:border-zinc-800/80 space-y-6">
      <div className="space-y-1">
        <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Get in Touch
        </span>
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Let’s Connect & Collaborate
        </h2>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
        Whether you’re interested in collaborating on autonomous robotics, spacecraft guidance systems, or machine
        learning research — feel free to drop me a line.
      </p>

      {/* Quick Contact Links Box */}
      <div className="p-6 rounded-2xl border border-stone-200/90 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-900/40 space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Direct Email</span>
            <div className="text-sm font-mono font-medium text-zinc-900 dark:text-zinc-100">{email}</div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send Mail</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium border border-stone-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : null}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-stone-200/60 dark:border-zinc-800/60 flex flex-wrap gap-4 text-xs">
          <a
            href="https://github.com/Lobster1911"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 font-medium transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>GitHub (@Lobster1911)</span>
          </a>

          <a
            href="https://blogs.imperial.ac.uk/parikshit/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 font-medium transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Imperial College Blogs</span>
          </a>

          <a
            href="https://instagram.com/parikshit_1911"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 font-medium transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram</span>
          </a>

          <a
            href="./images/CV - Padole, Parikshit.pdf"
            download="Parikshit_Padole_Resume.pdf"
            className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 font-medium transition-colors ml-auto"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};
