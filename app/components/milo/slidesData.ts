export interface Slide {
  slug: string;
  title: string;
  content: {
    text: string;
    headline?: string;
    top_label?: string;
    bottom_label?: string;
  };
  button_text?: string | null;
  button_link?: string | null;
}

export const slides: Slide[] = [
  {
    slug: "intro",
    title: "Intro",
    content: {
      text: "Yo, I'm Anuj.\nI design & build digital experiences that feel alive.",
      headline: "Creative Developer.\nDesigner. Builder.",
      top_label: "Anuj Rawat",
      bottom_label: "Based in India",
    },
    button_text: "Connect",
    button_link: "https://www.linkedin.com/in/anujrawat10/",
  },
  {
    slug: "experience",
    title: "Experience",
    content: {
      text: "I've been building for the web since day one.\n– Crafted 10+ digital products\n– Worked with startups & agencies\n– Full-stack development\n– UI/UX design obsessed",
    },
  },
  {
    slug: "skills",
    title: "Skills",
    content: {
      text: "My toolkit:\n– React, Next.js, TypeScript\n– Node.js, Python, APIs\n– Tailwind, Framer Motion\n– Figma, Design Systems\n– AI-powered development",
    },
  },
  {
    slug: "approach",
    title: "Approach",
    content: {
      text: "I believe in:\n– shipping fast & iterating\n– clean code that scales\n– design that tells a story\n– experiments over perfection",
    },
  },
  {
    slug: "passion",
    title: "Passion",
    content: {
      text: "I'm obsessed with:\n– creative coding & animations\n– building tools people love\n– pushing the boundaries of web\n– turning ideas into reality",
    },
  },
  {
    slug: "projects",
    title: "Projects",
    content: {
      text: "Some things I've built:\n– Interactive portfolios\n– SaaS platforms\n– E-commerce experiences\n– Creative web experiments\n– Open source tools",
    },
  },
  {
    slug: "collab",
    title: "Collaborate",
    content: {
      text: "Want to build something cool together?",
    },
    button_text: "Let's talk",
    button_link: "mailto:anujrawat10@example.com",
  },
  {
    slug: "contact",
    title: "Contact",
    content: {
      text: "Reach out anytime.\nI'm always up for a good conversation.",
    },
    button_text: "Email me",
    button_link: "mailto:anujrawat10@example.com",
  },
];
