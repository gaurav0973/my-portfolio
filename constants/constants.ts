import { teardownTraceSubscriber } from "next/dist/build/swc/generated-native";

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/gaurav0973', icon: 'github' },
  { name: 'Twitter', url: 'https://x.com/gauravkmaurya09', icon: 'twitter' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/gaurav-maurya0973/', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:gauravKmaurya09@gmail.com', icon: 'mail' },
  { name : "LeetCode", url: 'https://leetcode.com/u/gaurav972003/', icon: 'leetcode' },
  { name : "GeeksforGeeks", url: 'https://www.geeksforgeeks.org/user/gaurav009/', icon: 'gfg' },
  {name : "Medium", url: 'https://medium.com/@gauravkmaurya09', icon: 'medium' }
];

export const EMAIL = 'gauravKmaurya09@gmail.com';
export const TABS = ['Projects', 'Blogs', 'Contact']; //['Projects', 'POW', 'Blogs', 'Contact'];
export const IMAGE_PLACEHOLDER = 'https://avatars.githubusercontent.com/u/151557489?s=400&u=c5e2c5aa9bf7ecdf12fb4194ec8a4afc1b8e7393&v=4';

export const EXPERIENCE_DATA = [
  {
    company: "Astraea Solutions",
    role: "Product Tech Intern",
    date: "Jun 2025 - Jul 2025",
    description: `
Built and deployed a Cyber Range module on AWS for 200+ students.
Authored detailed 25+ page technical documentation.
Collaborated with professors from 3 IITs to align technical solutions.
Worked with the UI/UX team to enhance the learner experience.
    `,
    link : "https://www.linkedin.com/company/astraeasolutions/"
  }
];

export const FEATURED_PROJECTS = [
  {
    title: 'AlgoQuest',
    description: 'A LeetCode-Inspired Coding Platform',
    link: 'https://campuscrush.site/',
    videoPreview: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    technologies: ['React', 'Node.js', 'MongoDB'],

  },
  {
    title: 'CampusCrush',
    description: 'A Social Networking Platform for College Students',
    link: 'https://github.com/gaurav0973/campusCrush-Docs',
    videoPreview: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
];

export const PROJECTS_DATA = [
   {
    title: 'Unitrade-AI driven Marketplace',
    description: 'An AI-Driven Marketplace for Buying and Selling Used Products',
    technology : ["React", "Node.js", "MongoDB"],
    link: 'https://github.com/gaurav0973/UniTrade-AI-driven-marketPlace',
  },
  {
    title: 'Learning Full Stack Development',
    description: 'A notion like editor with real-time collaboration up to 5 users',
    technology : ["JavaScript", "React", "Node.js"],
    link: "https://github.com/gaurav0973/fullStackJourney009"
  },
  {
    title: 'StackFlow Inspired Q&A Platform',
    description: 'A Q&A Platform Inspired by StackOverflow',
    technology : ["React", "Node.js", "MongoDB"],
    link: 'https://github.com/gaurav0973/stackoverflow-inspired',
  },
  {
    title: 'devEvents',
    description: 'A Social Networking Platform for College Students',
    technology : ["React", "Node.js", "MongoDB"],
    link: "https://github.com/gaurav0973/devEvents"
  },
];

export const POW_DATA = [
    { id: 1, title: 'feat: add dark mode toggle', repo: 'portfolio-v2', status: 'Open', lines: 120 },
    { id: 2, title: 'fix: resolve cors issue on staging', repo: 'api-service', status: 'Closed', lines: 25 },
    { id: 3, title: 'docs: update readme with deployment instructions', repo: 'internal-tool', status: 'Closed', lines: 50 },
    { id: 4, title: 'refactor: simplify user authentication logic', repo: 'auth-service', status: 'Open', lines: 300 },
];

