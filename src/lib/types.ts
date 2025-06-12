import type { LucideIcon } from 'lucide-react';

export interface ProfileDetails {
  name: string;
  title: string;
  logoUrl: string;
  resumeUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  twitterUrl: string;
  email: string;
  heroTexts: string[];
  about: string[];
}

export interface Skill {
  name: string;
  icon: LucideIcon | ((props: React.SVGProps<SVGSVGElement>) => JSX.Element); // Allow custom SVG components
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAiHint: string;
  liveDemoUrl: string;
  category: string;
}

export interface NavLink {
  href: string;
  label: string;
}
