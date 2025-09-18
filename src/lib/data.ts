
import type { Skill, Education, Project, ProfileDetails, WorkExperience, Certificate } from './types';
import { Atom, Briefcase, Code, Cpu, Database, GitBranch, Github, GraduationCap, Home, Layers, Mail, MessageSquare, Send, Server, Share2, ShoppingBag, Sparkles, User, Youtube } from 'lucide-react';

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
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#projects', label: 'Projects' },
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
  { name: 'Generative AI', icon: Sparkles },
];

export const EDUCATION_DATA: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Jain University, Bangalore',
    period: 'Pursuing (Expected 2027)',
    description: 'Currently pursuing a Master\'s degree to deepen expertise in advanced computer science topics, software engineering principles, and specialized application development.'
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Parul University, Vadodara',
    period: '2022 - 2025',
    description: 'Focused on core computer science concepts, software development, and application design. Gained a strong foundation in programming, database management, and web technologies.'
  },
  {
    degree: 'Higher Secondary Education (Science)',
    institution: 'T.P Bhatia College of Science, Mumbai',
    period: '2020 - 2022',
    description: "Completed higher secondary education with a focus on science stream subjects. Gained a strong foundation in Physics, Chemistry, and Mathematics."
  },
  {
    degree: 'Secondary School Certificate (10th Grade)',
    institution: 'Sardar Vallabhai Patel Vidhyalaya, Mumbai',
    period: 'Completed 2020',
    description: "Successfully completed secondary school education with a strong academic foundation.\nEquipped with essential skills to pursue higher education and professional development."
  },
];

export const WORK_EXPERIENCE_DATA: WorkExperience[] = [
  {
    title: 'Frontend Developer',
    company: 'Whatbytes',
    companyUrl: 'https://whatbytes.com/',
    period: 'Sep 2024 – Present',
    description: 'Working with modern web technologies like React and Next.js to build and maintain responsive and performant user interfaces.'
  },
  {
    title: 'Software Developer Trainee',
    company: 'AccioJob',
    companyUrl: 'https://acciojob.com/',
    period: 'Oct 2023 – Mar 2024',
    description: 'Intensive training program focusing on MERN stack development, Data Structures & Algorithms, and real-world project building. Gained hands-on experience in frontend and backend technologies.',
    companyLogoUrl: 'https://i.postimg.cc/s2m2FxWq/Screenshot-2025-09-18-154119.png'
  },
  {
    title: 'Junior Frontend Developer',
    company: 'Devfrend Web Solutions',
    companyUrl: 'https://devfrend.in/',
    period: 'Apr 2024 – Jun 2024',
    description: 'Contributed to frontend development projects using modern web technologies. My work focused on creating and enhancing client websites, applying modern development techniques.',
    companyLogoUrl: 'https://i.postimg.cc/Hxj6GSnM/Screenshot-2025-09-18-154537.png'
  }
];

export const CERTIFICATIONS_DATA: Certificate[] = [
  {
    name: 'Build your own static website',
    issuer: 'NXTWAVE',
    imageUrl: 'https://picsum.photos/seed/cert1/600/400',
    linkUrl: 'https://certificates.ccbp.in/academy/static-website?id=UMNAHCVFZK',
    imageAiHint: 'static website'
  },
  {
    name: 'Build your own responsive website',
    issuer: 'NXTWAVE',
    imageUrl: 'https://picsum.photos/seed/cert2/600/400',
    linkUrl: 'https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=EGLQTLCCVB',
    imageAiHint: 'responsive website'
  },
  {
    name: 'Introduction to databases',
    issuer: 'NXTWAVE',
    imageUrl: 'https://picsum.photos/seed/cert3/600/400',
    linkUrl: 'https://certificates.ccbp.in/academy/introduction-to-databases?id=PQDDSJCCGC',
    imageAiHint: 'database introduction'
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
    imageUrl: 'https://i.postimg.cc/yY9YyHhK/Screenshot-2025-06-12-160745.png',
    imageAiHint: 'agency website',
    liveDemoUrl: 'https://codecrafter-three.vercel.app/',
    category: 'React'
  },
  {
    id: '5',
    title: 'ReactHub (Mini Projects)',
    description: 'A collection of small React projects demonstrating various concepts and techniques.',
    imageUrl: 'https://portfolio-kdm.vercel.app/reacthub.png',
    imageAiHint: 'react components',
    liveDemoUrl: 'https://react-hub-delta.vercel.app/github-search',
    category: 'React'
  },
  {
    id: '3',
    title: 'YouTube Clone',
    description: 'A clone of the popular video-sharing platform, implementing core features like video playback and search.',
    imageUrl: 'https://portfolio-kdm.vercel.app/yt.png',
    imageAiHint: 'video platform',
    liveDemoUrl: 'https://youtube-responsive-eosin.vercel.app/',
    category: 'Clone'
  },
  {
    id: '4',
    title: 'Google Sheets Clone',
    description: 'A web-based spreadsheet application mimicking functionalities of Google Sheets.',
    imageUrl: 'https://portfolio-kdm.vercel.app/sheets.png',
    imageAiHint: 'spreadsheet app',
    liveDemoUrl: 'https://google-sheet-chi.vercel.app/',
    category: 'JavaScript'
  },
  {
    id: '6',
    title: 'Wikipedia Clone',
    description: 'A simplified version of Wikipedia, focusing on article display and search functionality.',
    imageUrl: 'https://portfolio-kdm.vercel.app/wiki.png',
    imageAiHint: 'wiki encyclopedia',
    liveDemoUrl: 'https://wikipedia-kdm.vercel.app/',
    category: 'Clone'
  },
  {
    id: '7',
    title: 'Food Munch',
    description: 'A responsive website for a food delivery service, showcasing menu items and order features.',
    imageUrl: 'https://portfolio-kdm.vercel.app/food.png',
    imageAiHint: 'food delivery',
    liveDemoUrl: 'https://foodmunchkdm.ccbp.tech/',
    category: 'JavaScript'
  },
  {
    id: '8',
    title: 'Todos Website',
    description: 'A classic to-do list application for managing tasks with add, edit, and delete functionalities.',
    imageUrl: 'https://portfolio-kdm.vercel.app/todo.png',
    imageAiHint: 'task manager',
    liveDemoUrl: 'https://todokdms.ccbp.tech/',
    category: 'JavaScript'
  },
  {
    id: '9',
    title: 'Blinkit UI Clone',
    description: 'A UI clone of the Blinkit (formerly Grofers) application, focusing on frontend design and layout.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNOCmrNUfplxm1Kp_SsFSTgb_SLZzV4qeNSg&s',
    imageAiHint: 'ecommerce ui',
    liveDemoUrl: 'https://boot-blink.vercel.app/',
    category: 'Clone'
  },
  {
    id: '10',
    title: 'Guess Number Game',
    description: 'An interactive number guessing game built with JavaScript.',
    imageUrl: 'https://portfolio-kdm.vercel.app/guess.png',
    imageAiHint: 'number game',
    liveDemoUrl: 'https://kdmguessgame.ccbp.tech/',
    category: 'JavaScript'
  },
];

export const PROJECT_CATEGORIES = ['All', ...Array.from(new Set(PROJECTS_DATA.map(p => p.category)))];
