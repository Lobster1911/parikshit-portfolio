import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-12 pb-16 text-xs text-zinc-500 dark:text-zinc-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-200/60 dark:border-zinc-800/60 mt-16">
      <div>
        <span>&copy; {new Date().getFullYear()} Parikshit Padole. All rights reserved.</span>
      </div>
      <div className="flex items-center gap-3">
        <span>London, UK</span>
        <span>•</span>
        <span>Robotics & AI</span>
        <span>•</span>
        <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};
