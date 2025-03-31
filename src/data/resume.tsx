import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Andres Marulanda",
  initials: "AM",
  url: "https://andresmarulanda.com",
  location: "Bogota, Colombia",
  locationLink: "https://www.google.com/maps/place/bogota",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people.",
  summary:
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "Tensorflow",
    "PyTorch",
    "Scikit-learn",
    "React",
    "Next.js",
    "Typescript",
    "TailwindCSS",
    "Javascript",
    "Django",
    "Node.js",
    "Bun",
    "MongoDB",
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
        url: "https://dub.sh/dillion-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
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
      badges: [],
      location: "New York, Remote",
      title: "Chief Technology Officer",
      logoUrl: "/mitremedia.png",
      start: "September 2024",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Proveedores Industriales de Ferretería - PRINFER",
      badges: [],
      href: [],
      location: "Colombia, Hybrid",
      title: "Chief Executive Officer",
      logoUrl: "/mitremedia.png",
      start: "October 2023",
      end: "Present",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Comercializadora de Soluciones Industriales - CSI",
      href: [],
      badges: [],
      location: "Colombia, Hybrid",
      title: "Chief Technology Officer",
      logoUrl: "/mitremedia.png",
      start: "October 2023",
      end: "Present",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "AMR Industries",
      href: "https://amrindustries.tech/",
      badges: [],
      location: "New York, Hybrid",
      title: "Founder & Chief Executive Officer",
      logoUrl: "/mitremedia.png",
      start: "January 2019",
      end: "Present",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "IBM",
      href: "https://ibm.com",
      badges: [],
      location: "California, Hybrid",
      title: "Cybersecurity & Big Data Engineer",
      logoUrl: "/mitremedia.png",
      start: "February 2021",
      end: "October 2022",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Big Data Developer",
      href: "https://tp.com",
      badges: [],
      location: "United States, Hybrid",
      title: "Big Data Developer",
      logoUrl: "/mitremedia.png",
      start: "April 2021",
      end: "February 2022",
      description:
        "As a Big Data Developer at Teleperformance, I worked on projects analyzing and processing large amounts of data to improve the efficiency and performance of the company's systems. I designed and implemented data analysis algorithms and used tools such as Hadoop, PowerBI and Apache Spark to process large volumes of data. In addition, as a software developer, I worked on the creation and maintenance of systems and applications, using programming languages such as, Python and SQL.",
    },
    {
      company: "Horizonte Legal",
      href: "https://horizontelegal.com",
      badges: [],
      location: "Calofirnia, USA",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "March 2021",
      end: "May 2019",
      description:
        "At Horizonte Legal, I worked as a software engineer focused on the development of document and legal process management solutions. In particular, I worked in the implementation of OCR solutions for document digitalization, as well as in the integration of document management systems for workflow optimization. I also collaborated in the design and development of legal process management solutions to improve efficiency and reduce costs.",
    },
  ],
  education: [
    {
      school: "IBM",
      href: "https://buildspace.so",
      degree: "Engineer's Degree, Cybersecurity Professional",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "Corporación Universitaria Iberamericana",
      href: "https://uwaterloo.ca",
      degree: "Master of Engineering, Computer Software Engineering",
      logoUrl: "/buildspace.jpg",
      start: "2016",
      end: "2021",
    },
    {
      school: "Servicio Nacional de Aprendizaje - SENA",
      href: "https://wlu.ca",
      degree: "BTech, Internatinal Trade",
      logoUrl: "/buildspace.jpg",
      start: "2016",
      end: "2021",
    },
    {
      school: "New England English School",
      href: "https://ibo.org",
      degree: "Bacherlor, Accounting and Business Management",
      logoUrl: "/buildspace.jpg",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
} as const;
