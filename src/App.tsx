import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ExperienceSkills } from './components/ExperienceSkills';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PROJECTS } from './data/projects';
import { Project, ProjectCategory } from './types';
import { Sparkles, Layers } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      document.body.classList.add('dark');
      root.style.colorScheme = 'dark';
      localStorage.setItem('portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
      root.style.colorScheme = 'light';
      localStorage.setItem('portfolio_theme', 'light');
    }
  }, [darkMode]);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'space-robotics', label: 'Space & Robotics' },
    { id: 'ml-vision', label: 'Machine Learning' },
    { id: 'software', label: 'Software' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-stone-50 dark:bg-[#0c0c0e] text-zinc-900 dark:text-zinc-100 transition-colors duration-200`}>
      {/* Impeccable Site Header */}
      <Header darkMode={darkMode} onToggleTheme={() => setDarkMode(!darkMode)} />

      {/* Main Single-Column Editorial Canvas */}
      <main id="main-content" className="max-w-4xl mx-auto px-6 space-y-16">
        {/* Hero & Bio */}
        <Hero />

        {/* Selected Work Section */}
        <section id="projects" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                <Layers className="w-3.5 h-3.5" />
                <span>Featured Engineering</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Selected Projects & Research
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div
              role="tablist"
              aria-label="Project filter categories"
              className="flex flex-wrap gap-1 p-1 rounded-xl bg-stone-200/60 dark:bg-zinc-900/80 border border-stone-200 dark:border-zinc-800"
            >
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                    activeCategory === cat.id
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold shadow-xs'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={(p) => setSelectedProject(p)} />
            ))}
          </div>
        </section>

        {/* Skills & Publications */}
        <ExperienceSkills />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>

      {/* Deep Dive Project Modal */}
      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
