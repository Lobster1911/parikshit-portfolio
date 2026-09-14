export type ProjectCategory = 'all' | 'space-robotics' | 'ml-vision' | 'software';

export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'paper' | 'demo' | 'external';
}

export interface Project {
  id: string;
  title: string;
  shortSubtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  status: 'Completed' | 'Research' | 'In Progress';
  year: string;
  summary: string;
  fullDescription: string[];
  mediaType: 'video' | 'image';
  mediaSrc: string;
  secondaryMediaSrc?: string;
  tags: string[];
  features: string[];
  technologies: {
    group: string;
    items: string;
  }[];
  links: ProjectLink[];
}
