import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Andres Marulanda",
  initials: "AM",
  url: "https://andresmarulanda.com",
  location: "Bogota, Colombia",
  locationLink: "https://www.google.com/maps/place/bogota",
  description:
    "Software Architect & Engineering Leader | 6+ years in Microservicios, AI/Quantum ML, Next.js, Node.js, JavaScript, TypeScript, Python.",
  summary: 
    "Software Engineer with +6 years of experience designing scalable architectures and leading multidisciplinary teams in Software Factory, startups and e-commerce. As a current architect, I have implemented microservices with Next.js, Node.js and Bun, automated critical processes (reducing operational loads by 80% and developed prediction systems with Quantum Machine Learning. Specialized in digital transformation and performance optimization in high demand environments.", 
  open_work:
    "Available for freelance projects remote roles.",
  avatarUrl: "/me.png",
  skills: [
    "Software Architecture",
    "Full Stack Development",
    "Microservices",
    "Technical Leadership",
    "Software Development",
    "Teaching",
    "Agile Methodologies",
    "Design Patterns"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "andresmarulanda1027@icloud.com",
    tel: "+573192518970",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AndresMarulanda10",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/carlos-andres-marulanda-rojas-amr/?locale=en_US",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:andresmarulanda1027@icloud.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Galleon",
      href: [],
      location: "New York, Remote",
      title: "Senior Software Architect",
      logoUrl: "/galleon_logo.svg",
      start: "September 2024",
      end: "Present",
      description:
        "Leading technology architecture and development for Galleon's core platform, managing an engineers team and designing scalable solutions for operations, logistics and customer service optimization.",
    },
    {
      company: "PRINFER (Industrial Oil & Gas Suppliers)",
      href: [],
      location: "Bogota, Capital District, Colombia",
      title: "Software Analyst and Developer",
      logoUrl: "/prinfer_logo.svg",
      start: "October 2023",
      end: "Present",
      description:
        "Leading digital transformation and business operations for industrial supply company, implementing custom technology solutions to modernize commercial processes and inventory management.",
    },
    {
      company: "CSI (Industrial Solutions Marketers)",
      href: [],
      location: "Bogota, Capital District, Colombia",
      title: "Software Engineer",
      logoUrl: "/csi_logo.svg",
      start: "October 2023",
      end: "Present",
      description:
        "I lead comprehesive technology modernization for industrial solutions company, implementing digital tools to enhance logistics traceability and customer service operations.",
    },
    {
      company: "AMR Industries",
      href: "https://www.amrindustries.tech/",
      location: "New York, New York, United States",
      title: "Founder & Chief Executive Officer",
      logoUrl: "/amr_logo.svg",
      start: "January 2019",
      end: "Present",
      description:
        "I founded and led software development company specializing in emerging technologies research and government project implementation. Directed multidisciplinary teams developing AI and Quantum Computing Solutions.",
    },
    {
      company: "IBM",
      href: "https://ibm.com",
      location: "California, Hybrid",
      title: "Cybersecurity & Big Data Engineer",
      logoUrl: "/ibm_logo.svg",
      start: "February 2021",
      end: "October 2022",
      description:
        "Selected for IBM academic scholarship program focusing on cybersecurity, big data and quantum computing. Developed real-world solutions alongside IBM experts, applying advanced knowledge to personal and enterprise projects.",
    },
    {
      company: "Teleperformance",
      href: "https://tp.com",
      location: "United States, Hybrid",
      title: "Big Data Engineer",
      logoUrl: "/teleperformance_logo.svg",
      start: "May 2020",
      end: "January 2021",
      description:
        "Analysis and processing of volumes of data for clients in the BPO sector. Implementation of EETL pipelines, analysis of key metrics and report optimization for decision making.",
    },
    {
      company: "Horizonte Legal",
      href: "https://horizontelegal.com",
      location: "California, United States",
      title: "Software Engineer",
      logoUrl: "/horizonte_legal-logo.svg",
      start: "2019",
      end: "2021",
      description:
        "Development of web platforms for lawyer recruitment. Creation of backend and frontend functionalities, database integration and remote services deployment.",
    },
  ],
  education: [
    {
      school: "Corporación Universitaria Iberamericana",
      href: "https://www.ibero.edu.co/",
      degree: "Engineer's Degree, Computer Software Engineering",
      logoUrl: "/ibero_logo.svg",
      start: "February 2022",
      end: "October 2026",
    },
    {
      school: "IBM Academic Initiative",
      href: "https://skills.yourlearning.ibm.com",
      degree: "Engineer's Degree, Cybersecurity Professional",
      logoUrl: "/ibm_logo.svg",
      start: "April 2021",
      end: "October 2023",
    },
    {
      school: "Servicio Nacional de Aprendizaje - SENA",
      href: "https://www.sena.edu.co/",
      degree: "Bachelor of Technology - BTech, International Trade",
      logoUrl: "/sena_logo.svg",
      start: "May 2018",
      end: "November 2020",
    },
    {
      school: "New England English School",
      href: "https://colegioinglesnuevainglaterra.com/",
      degree: "Bachelors of Engineering - BE, Accounting and Business Management",
      logoUrl: "/colegio_inglaterra_logo.svg",
      start: "January 2018",
      end: "November 2020",
    },
  ],
  projects: [
    {
      title: "Centor",
      href: "https://github.com/AndresMarulanda10/Centor",
      dates: "May 2024 - Present",
      active: true,
      description:
        "Centor is an open source management platform focused on task management, specially designed for tech startups looking to facilitate goal tracking, organize tasks in chronological order, keep their teams organized, and analyze employee performance based on data and qualities.",
      technologies: [
        "Expo",
        "Typescript",
        "Supabase",
        "HeroUI",
        "Docker",
        "Biome",
        "Bun",
        "Big Data",
      ],
      links: [
        {
          type: "Website",
          href: "https://centor.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AndresMarulanda10/Centor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "./centor_logo.svg",
      // video: "",
    },
    {
      title: "Q.U.A.R.K",
      dates: "October 2024 - July 2025",
      active: true,
      description:
        "Customized ERP software tailored for an export and product sales company, incorporating data analysis, recommendation algorithms, and logistics and business management functionalities.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "HeroUI",
        "Docker",
        "Biome",
        "Bun",
        "Quantum Computing",
        "Big Data",
        "Astro",
        "Machine Learning",
        "MCP",
        "API's"
      ],
      image: "./quark.svg",
      // video: "",
    },
    {
      title: "Triceo",
      dates: "August 2023 - Present",
      active: true,
      description:
        "Triceo is a multi-platform application for managing barbershops and barbers, optimizing all their processes, scheduling, visualization, customer attraction, automatic pricing, and implementation of artificial intelligence recognition to monitor haircuts.",
      technologies: [
        "Expo",
        "Typescript",
        "Supabase",
        "Tailwind CSS",
        "Docker",
        "Biome",
        "Node.js",
        "Machine Learning",
        "API's"
      ],
      image: "./quark.svg",
      // video: "",
    },
    {
      title: "Ancrar",
      dates: "December 2023 - Present",
      active: true,
      description:
        "Ancrar is a specialized mobile app for learning Spanish verbs with an interactive feature similar to, but innovative compared to, a card game. It is aimed at companies and individuals in the United States who want or need to learn Spanish in a simple and fun way.",
      technologies: [
        "Expo",
        "Typescript",
        "Supabase",
        "Tailwind CSS",
        "Docker",
        "Biome",
        "Node.js",
        "Machine Learning",
        "API's"
      ],
      image: "./quark.svg",
      // video: "",
    },
    {
      title: "ABIUDEA - PASIF",
      dates: "July 2022 - October 2023",
      active: false,
      description:
        "Abiudea - PASIF was an application developed with the support of the Colombian government and German investors. The application focused on high-impact rural areas in the country, aiming to meet the needs of residents using the system developed by ABIUDEA, PASIF. This application was a great initiative for the large percentage of people in the area with visual impairments.",
      technologies: [
        "Flutter",
        "Dart",
        "Supabase",
        "Tailwind CSS",
        "Docker",
        "Biome",
        "Node.js",
        "Machine Learning",
        "API's"
      ],
      image: "./quark.svg",
      // video: "",
    },
    {
      title: "E-Commerce Platform",
      dates: "October 2023 - December 2023",
      active: false,
      description:
        "The E-Commerce Platform was developed to facilitate online sales for small and medium-sized businesses in Colombia. It aimed to provide a user-friendly interface for both sellers and buyers, incorporating features such as product catalogs, shopping carts, and secure payment gateways.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "HeroUI",
        "Docker",
        "Biome",
        "Bun",
        "Big Data",
        "API's"
      ],
      image: "./quark.svg",
      // video: "",
    },
  ],
} as const;
