
import type { Skill, Education, Project, ProfileDetails, WorkExperience } from './types';
import { Atom, Briefcase, Code, Cpu, Database, GitBranch, Github, GraduationCap, Home, Layers, Mail, MessageSquare, Send, Server, Share2, ShoppingBag, User, Youtube } from 'lucide-react';

export const PROFILE_DETAILS: ProfileDetails = {
  name: 'Krishna Dharmendra Mehta',
  title: 'MERN Stack Developer',
  logoUrl: 'https://i.postimg.cc/656dTRxh/circle-transparent.png',
  resumeUrl: 'https://drive.google.com/file/d/1SPE9VhQ9E_IJ62lA3Gjy1vDJeJIzdsaU/view?usp=sharing',
  linkedinUrl: 'https://www.linkedin.com/in/kdmehta704/',
  githubUrl: 'https://github.com/KDMEHTA704',
  twitterUrl: 'https://x.com/Krishna84572328',
  email: 'developerkdm8@gmail.com',
  heroTexts: [
    "Hi, I'm Krishna Dharmendra Mehta",
    "MERN Stack Developer",
    "React Enthusiast",
    "Problem Solver"
  ],
  about: [
    "AccioJob trainee, mastering full-stack development.",
    "Nxtwave CCBP 4.0 fellow, recognized for dedication and skill.",
    "Proficient in MERN stack and Data Structures & Algorithms.",
    "Passionate about creating clean UI/UX and optimizing for performance."
  ]
};

export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export const SKILLS_DATA: Skill[] = [
  { name: 'HTML5', icon: Code },
  { name: 'CSS3', icon: Code },
  { name: 'JavaScript', icon: Code },
  { name: 'Bootstrap', icon: Layers },
  { name: 'Tailwind CSS', icon: Layers },
  { name: 'Git', icon: GitBranch },
  { name: 'GitHub', icon: Github },
  { name: 'React.js', icon: Atom },
  { name: 'Express.js', icon: Server },
  { name: 'Node.js', icon: Cpu },
  { name: 'Postman', icon: Send },
  { name: 'Next.js', icon: Code },
  { name: 'Supabase', icon: Database },
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Parul University',
    period: '2021 - 2024',
    description: 'Focused on core computer science concepts, software development, and application design.'
  },
  {
    degree: 'Higher Secondary Education (Commerce)',
    institution: 'T.P Bhatia College of Science',
    period: '2019 - 2021',
    description: 'Completed higher secondary education with a focus on commerce subjects.'
  },
  {
    degree: 'Secondary School Certificate (10th Grade)',
    institution: 'Sardar Vallabhai Patel Vidhyalaya',
    period: 'Completed 2019',
    description: 'Successfully completed secondary school education.'
  },
];

export const WORK_EXPERIENCE_DATA: WorkExperience[] = [
  {
    title: 'Software Developer Trainee',
    company: 'AccioJob',
    companyUrl: 'https://www.linkedin.com/school/acciojob/posts/?feedView=all',
    period: 'Oct 2024 – Mar 2025',
    description: 'Intensive training program focusing on MERN stack development, Data Structures & Algorithms, and real-world project building. Gained hands-on experience in frontend and backend technologies.'
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Devfrend Web Solutions',
    companyUrl: 'https://www.linkedin.com/company/devfrendcom/posts/?feedView=all',
    period: 'Apr 2025 – Jun 2025',
    description: 'Contributed to frontend development projects using modern web technologies. My work focused on creating and enhancing client websites, applying modern development techniques.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'Freelancing Platform (CodeCrafter)',
    description: 'A full-stack platform connecting freelancers with clients, featuring project posting, bidding, and user profiles.',
    imageUrl: 'https://i.postimg.cc/nVWtWPVL/Screenshot-2025-06-12-160550.png',
    imageAiHint: 'freelance platform',
    liveDemoUrl: 'https://codecrafter-tech.vercel.app/',
    category: 'React'
  },
  {
    id: '2',
    title: 'Agency Website (CodeCrafter Web)',
    description: 'A modern, responsive website for a fictional web development agency, showcasing services and portfolio.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'agency website',
    liveDemoUrl: '#',
    category: 'React'
  },
  {
    id: '3',
    title: 'YouTube Clone',
    description: 'A clone of the popular video-sharing platform, implementing core features like video playback and search.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'video platform',
    liveDemoUrl: '#',
    category: 'Clone'
  },
  {
    id: '4',
    title: 'Google Sheets Clone',
    description: 'A web-based spreadsheet application mimicking functionalities of Google Sheets.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'spreadsheet app',
    liveDemoUrl: '#',
    category: 'JavaScript'
  },
  {
    id: '5',
    title: 'ReactHub (Mini Projects)',
    description: 'A collection of small React projects demonstrating various concepts and techniques.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'react components',
    liveDemoUrl: '#',
    category: 'React'
  },
  {
    id: '6',
    title: 'Wikipedia Clone',
    description: 'A simplified version of Wikipedia, focusing on article display and search functionality.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'wiki encyclopedia',
    liveDemoUrl: '#',
    category: 'Clone'
  },
  {
    id: '7',
    title: 'Food Munch',
    description: 'A responsive website for a food delivery service, showcasing menu items and order features.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'food delivery',
    liveDemoUrl: '#',
    category: 'JavaScript'
  },
  {
    id: '8',
    title: 'Todos Website',
    description: 'A classic to-do list application for managing tasks with add, edit, and delete functionalities.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'task manager',
    liveDemoUrl: '#',
    category: 'JavaScript'
  },
  {
    id: '9',
    title: 'Blinkit UI Clone',
    description: 'A UI clone of the Blinkit (formerly Grofers) application, focusing on frontend design and layout.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'ecommerce ui',
    liveDemoUrl: '#',
    category: 'Clone'
  },
  {
    id: '10',
    title: 'Guess Number Game',
    description: 'An interactive number guessing game built with JavaScript.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageAiHint: 'number game',
    liveDemoUrl: '#',
    category: 'JavaScript'
  },
];

export const PROJECT_CATEGORIES = ['All', ...Array.from(new Set(PROJECTS_DATA.map(p => p.category)))];
