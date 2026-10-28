export const links = {
  contactEmail: "yacineajmiaskip753@gmail.com",
  sourceCode: "https://github.com/yassinebenajmia01",
};

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
] as const;

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "/assets/review1.png",
    review:
      "Working with Shubham was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "/assets/review2.png",
    review:
      "Shubham's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "/assets/review3.png",
    review:
      "I can't say enough good things about Shubham. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "/assets/review4.png",
    review:
      "Shubham was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
] as const;

export const myProjects = [
  {
    title: "ISITCOM University Platform - Full-Stack Web Application",
    desc: "Designed and developed a modern, full-stack university platform to support the digital transformation of ISITCom by centralizing academic, administrative, and communication services into a single secure web application.The platform provides dedicated dashboards for students, teachers, and administrators with role-based access control (RBAC), enabling efficient management of academic activities, announcements, document requests, grades, newsletters, and user administration.",
    subdesc:
      "Built using React, TypeScript, Vite, Next.js API Routes, PostgreSQL, Prisma ORM, Tailwind CSS, NextAuth, and Framer Motion, the platform follows a modular architecture focused on scalability, security, maintainability, and responsive user experience.",
    href: "https://github.com/yassinebenajmia01/uni-website-main-main",
    texture: "/textures/project/Video Project 2.mp4",
    logo: "/assets/isitcom.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Next.js",
        path: "/assets/Nextjs.png",
      },
    ],
  },
  {
    title: "ATAST Social App",
    desc: "A full-stack social media platform developed for the Association Tunisienne pour l'Avenir des Sciences et des Technologies (ATAST) to strengthen communication and engagement among club members. The platform enables users to create posts, interact with the community, and stay updated on events and announcements through a secure and responsive interface.",
    subdesc:
      "Community feed with post creation and interactions,JWT-based authentication and secure user sessions,Event and announcement sharing,Responsive design optimized for desktop and mobile,RESTful API architecture with MongoDB integration.",
    href: "https://github.com/yassinebenajmia01/atast-appBack",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/atast.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/Nodejs.png",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/mongo.png",
      },
    ],
  },
  {
    title: "NeuroNation Clone — Brain Training App",
    desc: "A cross-platform mobile application inspired by NeuroNation, designed to deliver an engaging brain-training experience through interactive cognitive exercises. The app allows users to strengthen memory, attention, and problem-solving skills while tracking their progress in a clean, intuitive interface.",
    subdesc:
      "Interactive brain-training games and cognitive exercises,Personalized progress tracking and performance analytics,Secure user authentication and individual progress synchronization,Modern, responsive UI optimized for Android and iOS,Fast and smooth user experience with optimized performance.",
    href: "https://github.com/yassinebenajmia01/NeuroNation",
    texture: "/textures/project/neuro.mp4",
    logo: "/assets/neuronation.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Flutter",
        path: "/assets/Flutter.png",
      },
      {
        id: 2,
        name: "PostgreSQL",
        path: "/assets/postgresql.svg",
      },
    ],
  },
  {
    title: "Kuriat — Interactive Travel Experience",
    desc: "Designed and developed a premium travel platform with a modern storytelling experience, featuring immersive scroll-driven animations, interactive destination showcases, and a responsive user interface. The project focuses on delivering a high-end digital experience through smooth animations, elegant layouts, and performance-optimized frontend architecture.",
    subdesc:
      "Scroll-driven storytelling with immersive destination showcases,Smooth GSAP-powered animations and premium micro-interactions,Fully responsive UI optimized for desktop, tablet, and mobile,Clean, scalable frontend architecture ready for CMS or backend integration.",
    href: "https://github.com/yassinebenajmia01/Kuriat",
    texture: "/textures/project/boat.mp4",
    logo: "/assets/kuriat.png",
    logoStyle: {
      backgroundColor: "#0A1F33",
      border: "0.2px solid #1A4C73",
      boxShadow: "0px 0px 60px 0px rgba(29, 115, 184, 0.30)",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
    {
      id: 1,
      name: "HTML5",
      path: "/assets/HTML5.svg",
    },
    {
      id: 2,
      name: "CSS3",
      path: "/assets/CSS3.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      path: "/assets/JavaScript.svg",
    },
    {
      id: 4,
      name: "GSAP",
      path: "/assets/gsap.svg",
    }
    
  ],
  },
  {
    title: "Spotify Clone — Music Streaming Platform",
    desc: "A full-stack music streaming application inspired by Spotify, recreating its core user experience with a modern interface, playlist management, music playback controls, and secure user authentication. Built with Next.js and MongoDB, the project focuses on delivering a responsive, high-performance, and production-quality user experience.",
    subdesc:
      "Music library browsing and playlist management,Song search and intuitive navigation,Interactive music playback controls,Secure user authentication and session management,Fully responsive interface optimized for desktop and mobile,Optimized performance for smooth navigation and fast loading.",
    href: "https://github.com/yassinebenajmia01/Spotify2",
    texture: "/textures/project/spotify video.mp4",
    logo: "/assets/spotify.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/Nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/mongo.png",
      },
    ],
  },
] as const;

export const workExperiences = [
  {
    id: 1,
    name: "Freelance",
    pos: "Full-Stack Software Developer",
    duration: "2024 - Present",
    title:
      "Designed, developed, and deployed responsive full-stack web applications using React.js, Next.js, Node.js, and PostgreSQL/MySQL. Collaborated directly with clients to gather requirements and deliver tailored digital solutions. Built secure RESTful APIs and integrated database-driven functionality for dynamic applications. Optimized application performance and user experience across desktop and mobile devices. Managed projects from planning and development to deployment and post-launch support.",
    icon: "/assets/freelance.png",
    animation: "victory",
  },
  {
    id: 2,
    name: "Draxelmaier",
    pos: "Network Internship",
    duration: "June 2025 - July 2025",
    title:
      "Supported network infrastructure operations within an enterprise IT environment.Assisted in configuring and maintaining network infrastructure Supported management of switches, routers, and network devices Worked with the IT team to ensure stable and secure network operations Networking Infrastructure IT Operations",
    icon: "/assets/draxelmaier.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "ISITCOM | Final Year Project",
    pos: "Full-Stack Developer",
    duration: "January 2026 - June 2026",
    title:
      "Designed and built a full-stack university platform for students, faculty, and administrators.Implemented secure authentication and role-based access control.Developed academic services, club management, and administrative dashboards. React.js Node.js Next.js JWT PostegreSQL Vite",
    icon: "/assets/isitcom.png",
    animation: "salute",
  },
] as const;

export const socialLinks = [
  {
    name: "GitHub",
    icon: "/assets/github.svg",
    url: "https://github.com/yassinebenajmia01",
  },
  {
    name: "LinkedIn",
    icon: "/assets/linkedin.svg",
    url: "www.linkedin.com/in/mohamed-yassine-ajmia",
  },
  {
    name: "Instagram",
    icon: "/assets/instagram.svg",
    url: "https://www.instagram.com/yassine_benajmia/",
  },
] as const;
