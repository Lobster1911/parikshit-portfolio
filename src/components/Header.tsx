import React, { useState } from 'react';
import { Moon, Sun, Download, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, onToggleTheme }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Writing', href: '#writing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="site-header"
      className="sticky top-0 z-40 w-full backdrop-blur-md bg-stone-50/85 dark:bg-[#0f0f12]/85 border-b border-stone-200/70 dark:border-zinc-800/80 transition-colors duration-200"
    >
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#about"
          id="header-brand-link"
          className="group flex items-center gap-2.5 text-zinc-900 dark:text-zinc-100 font-semibold tracking-tight text-base hover:opacity-80 transition-opacity"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Available for opportunities" />
          <span>Parikshit Padole</span>
          <span className="hidden sm:inline-block font-mono text-xs font-normal text-zinc-600 dark:text-zinc-400 bg-stone-200/70 dark:bg-zinc-800/80 px-2 py-0.5 rounded-md">
            Robotics & AI
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://blogs.imperial.ac.uk/parikshit/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors font-medium"
          >
            <span>Blogs</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>

          <div className="h-4 w-[1px] bg-stone-300 dark:bg-zinc-700" />

          {/* Resume Download Pill */}
          <a
            href="./images/CV - Padole, Parikshit.pdf"
            download="Parikshit_Padole_CV.pdf"
            id="header-cv-button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            id="theme-toggle-btn"
            title={darkMode ? 'Switch to Light mode' : 'Switch to Dark mode'}
            aria-label={darkMode ? 'Switch to Light mode' : 'Switch to Dark mode'}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-mono border border-stone-300 dark:border-zinc-700 bg-stone-100/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
          >
            {darkMode ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[11px]">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-zinc-600" />
                <span className="text-[11px]">Dark</span>
              </>
            )}
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            id="mobile-theme-toggle-btn"
            title={darkMode ? 'Switch to Light mode' : 'Switch to Dark mode'}
            aria-label={darkMode ? 'Switch to Light mode' : 'Switch to Dark mode'}
            className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-mono border border-stone-300 dark:border-zinc-700 bg-stone-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
          >
            {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-zinc-600" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            id="mobile-menu-toggle"
            aria-label="Open mobile menu"
            className="p-2 rounded-md text-zinc-800 dark:text-zinc-200 hover:bg-stone-200/70 dark:hover:bg-zinc-800"
          >
            {mobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileNavOpen && (
        <div className="md:hidden px-6 py-4 border-b border-stone-200 dark:border-zinc-800 bg-stone-50 dark:bg-[#0f0f12] space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileNavOpen(false)}
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://blogs.imperial.ac.uk/parikshit/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileNavOpen(false)}
            className="flex items-center justify-between text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white py-1"
          >
            <span>Imperial College Blogs</span>
            <ArrowUpRight className="w-4 h-4 opacity-70" />
          </a>
          <div className="pt-2">
            <a
              href="./images/CV - Padole, Parikshit.pdf"
              download="Parikshit_Padole_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 w-full justify-center"
            >
              <Download className="w-4 h-4" />
              <span>Download CV / Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
