import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Andres Marulanda",
  initials: "AM",
  url: "https://andresmarulanda.com",
  location: "Bogota, Colombia",
  locationLink: "https://www.google.com/maps/place/bogota",
  description:
    "CTO | Software Engineer | Leader in Technology Innovation | Specialist in Software Architecture, Big Data & AI | Passionate about Quantum Research and Quantum Computing.",
  summary: 
    "Software Engineer with 10+ years transforming ideas into robust solutions. Programming since age 15, with experience across legaltech, telecommunications, and enterprise software. Passionate about building from scratch, leading teams, and exploring emerging technologies like AI and Quantum Computing.", 
  open_work:
    "Available for freelance projects and high-impact remote roles.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Tensorflow",
    "PyTorch",
    "Scikit-learn",
    "React",
    "Next.JS",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Django",
    "Node.js",
    "Bun",
    "MongoDB",
    "Supabase", 
    "MySQL",
    "PostgreSQL",
    "IBM",
    "AWS",
    "Docker",
    "Kubernetes",
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
      title: "Chief Technology Officer (CTO)",
      logoUrl: "/mitremedia.png",
      start: "September 2024",
      end: "Present",
      description:
        "I lead the architecture and technological development of Galleon, managing a multidisciplinary team and designing large-scale solutions to optimize operations, logistics, sales and customer service. We implemented microservices, and complete internal productivity system.",
    },
    {
      company: "PRINFER (Industrial Oil & Gas Suppliers)",
      href: [],
      location: "Bogota, Capital District, Colombia",
      title: "Chief Executive Officer (CEO)",
      logoUrl: "/mitremedia.png",
      start: "October 2023",
      end: "Present",
      description:
        "I assumed the general management after the death of my father Cesar Marulanda. I redesigned the company's operations and implemented technological systems to digitalize commercial, inventory and customer service processes, incresing efficiency and profitability.",
    },
    {
      company: "CSI (Industrial Solutions Marketers)",
      href: [],
      location: "Bogota, Capital District, Colombia",
      title: "Chief Technology Officer (CTO)",
      logoUrl: "/mitremedia.png",
      start: "October 2023",
      end: "Present",
      description:
        "Responsible for the technological redesign of the company, leading the modernization of systems, infrastructure and sales strategy through digital solutions, interacting new technologies to strengthen the operation and customer service.",
    },
    {
      company: "AMR Industries",
      href: "https://www.amrindustries.tech/",
      location: "New York, New York, United States",
      title: "Founder & Chief Executive Officer",
      logoUrl: "/mitremedia.png",
      start: "January 2019",
      end: "Present",
      description:
        "Company focused on software development and technological research. I led projects with the Colombian government (in alliance with German foundations), designing specialized solutions and analysis algorithms with emerging technologies such as Artificial Intelligence and Quantum Computing.",
    },
    {
      company: "IBM",
      href: "https://ibm.com",
      location: "California, Hybrid",
      title: "Cybersecurity & Big Data Engineer",
      logoUrl: "/mitremedia.png",
      start: "February 2021",
      end: "October 2022",
      description:
        "During my advanced training fellowship, I participated in intensive academic programs in cybersecurity, big data and quantum computing. I developed real-world solutions together with IBM experts applying the acquired knowledge in personal and business projects.",
    },
    {
      company: "Teleperformance",
      href: "https://tp.com",
      location: "United States, Hybrid",
      title: "Big Data Engineer",
      logoUrl: "/mitremedia.png",
      start: "2021",
      end: "2022",
      description:
        "Analysis and processing of volumes of data for clients in the BPO sector. Implementation of EETL pipelines, analysis of key metrics and report optimization for decision making.",
    },
    {
      company: "Horizonte Legal",
      href: "https://horizontelegal.com",
      location: "California, United States",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
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
      logoUrl: "/buildspace.jpg",
      start: "February 2022",
      end: "October 2026",
    },
    {
      school: "IBM Academic Initiative",
      href: "https://skills.yourlearning.ibm.com",
      degree: "Engineer's Degree, Cybersecurity Professional",
      logoUrl: "/buildspace.jpg",
      start: "April 2021",
      end: "2023",
    },
    {
      school: "Servicio Nacional de Aprendizaje - SENA",
      href: "https://www.sena.edu.co/",
      degree: "Bachelor of Technology - BTech, International Trade",
      logoUrl: "/buildspace.jpg",
      start: "May 2018",
      end: "November 2020",
    },
    {
      school: "New England English School",
      href: "https://colegioinglesnuevainglaterra.com/",
      degree: "Bachelors of Engineering - BE, Accounting and Business Management",
      logoUrl: "/buildspace.jpg",
      start: "January 2018",
      end: "November 2020",
    },
  ],
  projects: [
    {
      title: "Centor",
      href: "https://github.com/AndresMarulanda10/Centor",
      dates: "March 2025 - Present",
      active: true,
      description:
        "An accessible and competitively priced solution that combines a user-friendly and intuitive interface with a user-centric experience. Centor is designed so that anyone, even without technical knowledge or automation experience, can feel comfortable using the platform as their own control center.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "TailwindCSS",
        "Stripe",
        "HeroUI",
        "Biome",
        "Bun",
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
      image: 
        "/./public/centor.jpg",
      video: "",
    },
    {
      title: "Q.U.A.R.K",
      dates: "October 2023 - Present",
      active: true,
      description:
        "Advanced ERP system for Galleon specializing in logistics optimization and purchase/sales forecasting for Mercado Libre operations. Built with quantum prediction algorithms and Big Data analytics in a full-stack architecture, delivering intelligent inventory management and market trend predictions for enhanced e-commerce performance.",
      technologies: [
        "Next.js",
        "Typescript",
        "Supabase",
        "TailwindCSS",
        "Stripe",
        "HeroUI",
        "Docker",
        "Biome",
        "Bun",
        "Quantum Computing",
        "Big Data",
        "Astro",
      ],
      image: "/./public/centor.jpg",
      video: "",
    },
  ],
} as const;
