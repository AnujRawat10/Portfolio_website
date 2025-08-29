"use client";

import Image from "next/image";
import Link from "next/link";

type TechStack = {
  id: string | number;
  name: string;
  category: string;
  description: string;
  logo: string; // URL or path to logo
  color: string; // Brand color for subtle theming
  href?: string;
};

export default function TechStackShowcase({
  techStacks = [
    // Frontend
    {
      id: 1,
      name: "React",
      category: "Frontend",
      description: "UI Library",
      logo: "https://unpkg.com/simple-icons@v9/icons/react.svg",
      color: "#61DAFB",
      href: "https://react.dev",
    },
    {
      id: 2,
      name: "Next.js",
      category: "Framework",
      description: "React Framework",
      logo: "https://unpkg.com/simple-icons@v9/icons/nextdotjs.svg",
      color: "#000000",
      href: "https://nextjs.org",
    },
    {
      id: 3,
      name: "TypeScript",
      category: "Language",
      description: "Typed JavaScript",
      logo: "https://unpkg.com/simple-icons@v9/icons/typescript.svg",
      color: "#3178C6",
      href: "https://typescriptlang.org",
    },
    {
      id: 4,
      name: "Tailwind",
      category: "Styling",
      description: "Utility CSS",
      logo: "https://unpkg.com/simple-icons@v9/icons/tailwindcss.svg",
      color: "#06B6D4",
      href: "https://tailwindcss.com",
    },
    {
      id: 5,
      name: "Vue.js",
      category: "Frontend",
      description: "Progressive Framework",
      logo: "https://unpkg.com/simple-icons@v9/icons/vuedotjs.svg",
      color: "#4FC08D",
      href: "https://vuejs.org",
    },
    {
      id: 6,
      name: "Angular",
      category: "Frontend",
      description: "Web Framework",
      logo: "https://unpkg.com/simple-icons@v9/icons/angular.svg",
      color: "#DD0031",
      href: "https://angular.io",
    },

    // Backend & Languages
    {
      id: 7,
      name: "Node.js",
      category: "Runtime",
      description: "JavaScript Runtime",
      logo: "https://unpkg.com/simple-icons@v9/icons/nodedotjs.svg",
      color: "#339933",
      href: "https://nodejs.org",
    },
    {
      id: 8,
      name: "Python",
      category: "Language",
      description: "Programming Language",
      logo: "https://unpkg.com/simple-icons@v9/icons/python.svg",
      color: "#3776AB",
      href: "https://python.org",
    },
    {
      id: 9,
      name: "JavaScript",
      category: "Language",
      description: "Programming Language",
      logo: "https://unpkg.com/simple-icons@v9/icons/javascript.svg",
      color: "#F7DF1E",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      id: 10,
      name: "Go",
      category: "Language",
      description: "Systems Language",
      logo: "https://unpkg.com/simple-icons@v9/icons/go.svg",
      color: "#00ADD8",
      href: "https://golang.org",
    },

    // Databases
    {
      id: 11,
      name: "PostgreSQL",
      category: "Database",
      description: "SQL Database",
      logo: "https://unpkg.com/simple-icons@v9/icons/postgresql.svg",
      color: "#336791",
      href: "https://postgresql.org",
    },
    {
      id: 12,
      name: "MongoDB",
      category: "Database",
      description: "NoSQL Database",
      logo: "https://unpkg.com/simple-icons@v9/icons/mongodb.svg",
      color: "#47A248",
      href: "https://mongodb.com",
    },
    {
      id: 13,
      name: "Redis",
      category: "Database",
      description: "In-Memory Store",
      logo: "https://unpkg.com/simple-icons@v9/icons/redis.svg",
      color: "#DC382D",
      href: "https://redis.io",
    },
    {
      id: 14,
      name: "MySQL",
      category: "Database",
      description: "SQL Database",
      logo: "https://unpkg.com/simple-icons@v9/icons/mysql.svg",
      color: "#4479A1",
      href: "https://mysql.com",
    },

    // Cloud & DevOps
    {
      id: 15,
      name: "AWS",
      category: "Cloud",
      description: "Cloud Platform",
      logo: "https://unpkg.com/simple-icons@v9/icons/amazonaws.svg",
      color: "#FF9900",
      href: "https://aws.amazon.com",
    },
    {
      id: 16,
      name: "Docker",
      category: "DevOps",
      description: "Containerization",
      logo: "https://unpkg.com/simple-icons@v9/icons/docker.svg",
      color: "#2496ED",
      href: "https://docker.com",
    },
    {
      id: 17,
      name: "Kubernetes",
      category: "DevOps",
      description: "Orchestration",
      logo: "https://unpkg.com/simple-icons@v9/icons/kubernetes.svg",
      color: "#326CE5",
      href: "https://kubernetes.io",
    },
    {
      id: 18,
      name: "GraphQL",
      category: "API",
      description: "Query Language",
      logo: "https://unpkg.com/simple-icons@v9/icons/graphql.svg",
      color: "#E10098",
      href: "https://graphql.org",
    },
  ],
  viewAllHref = "#",
}: {
  techStacks?: TechStack[];
  viewAllHref?: string;
}) {
  // Split tech stacks into two rows
  const firstRow = techStacks.slice(0, Math.ceil(techStacks.length / 2));
  const secondRow = techStacks.slice(Math.ceil(techStacks.length / 2));

  return (
    <section
      id='tech-stack'
      className='scroll-mt-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 py-16 sm:py-20 lg:py-24'
      aria-labelledby='tech-stack-title'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <div className='mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-600'>
            <span className='inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500' />
            Technologies & Tools
          </div>

          <h2
            id='tech-stack-title'
            className='text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl'
          >
            <span className='bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent'>
              Tech Stack
            </span>
          </h2>

          <p className='mt-4 text-lg text-slate-600 max-w-2xl mx-auto'>
            Cutting-edge technologies powering modern applications
          </p>

          <div className='mt-8'>
            <Link
              href={viewAllHref}
              className='inline-flex items-center rounded-full bg-gradient-to-r from-slate-900 to-slate-700 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105'
            >
              Explore All Technologies
            </Link>
          </div>
        </div>

        {/* Tech Stack Rows */}
        <div className='space-y-12'>
          {/* First Row - Left to Right Animation */}
          <div className='relative overflow-hidden'>
            <div className='flex animate-scroll-left gap-8 py-4'>
              {[...firstRow, ...firstRow, ...firstRow].map((tech, index) => (
                <TechCard key={`${tech.id}-${index}`} tech={tech} />
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left Animation */}
          <div className='relative overflow-hidden'>
            <div className='flex animate-scroll-right gap-8 py-4'>
              {[...secondRow, ...secondRow, ...secondRow].map((tech, index) => (
                <TechCard key={`${tech.id}-${index}`} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 45s linear infinite;
          width: max-content;
        }

        .animate-scroll-right {
          animation: scroll-right 45s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}

function TechCard({ tech }: { tech: TechStack }) {
  const CardContent = () => (
    <article
      className='group flex-shrink-0 w-80 overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1 hover:bg-white hover:z-10'
      style={{
        boxShadow: `0 0 0 1px ${tech.color}10, 0 4px 6px -1px rgb(0 0 0 / 0.1)`,
      }}
      aria-label={`${tech.name} - ${tech.description}`}
    >
      {/* Logo Container */}
      <div className='mb-4 flex justify-center'>
        <div
          className='relative h-16 w-16 rounded-xl p-3 transition-all duration-300 group-hover:scale-110'
          style={{
            backgroundColor: `${tech.color}15`,
            border: `1px solid ${tech.color}30`,
          }}
        >
          <div className='relative h-full w-full'>
            <Image
              src={tech.logo}
              alt={`${tech.name} logo`}
              fill
              className='object-contain'
              sizes='64px'
              onError={(e) => {
                // Fallback for broken images
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `<div class="flex items-center justify-center h-full text-xl font-bold transition-all duration-300 group-hover:scale-110" style="color: ${
                    tech.color
                  }">${tech.name.charAt(0)}</div>`;
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='text-center space-y-2'>
        <h3 className='text-lg font-bold text-slate-900 group-hover:text-slate-800 transition-colors'>
          {tech.name}
        </h3>

        <div className='space-y-1'>
          <p className='text-sm font-medium' style={{ color: tech.color }}>
            {tech.category}
          </p>
          <p className='text-sm text-slate-600'>{tech.description}</p>
        </div>
      </div>

      {/* Hover Effects */}
      <div
        className='absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-10'
        style={{ backgroundColor: tech.color }}
      />
    </article>
  );

  return tech.href ? (
    <Link href={tech.href} target='_blank' rel='noopener noreferrer'>
      <CardContent />
    </Link>
  ) : (
    <CardContent />
  );
}
