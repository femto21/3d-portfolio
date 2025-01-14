import path from "path";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "My Portfolio",
    desc: "A 3D portfolio to showcase my skills in a professional way. It is interactive with the users, showcasing various 3D objects (implemented with Three.js) that the users can interact with, along with a bento grid, my projects, and a contact form.",
    subdesc:
      "Built as a Web app with Next.js 14, Three.js, React,  GSAP, and Tailwind CSS, this portfolio is designed for optimal performance and accessiblity for all devices",
    href: "https://github.com/femto21/3d-portfolio",
    texture: "/textures/project/project1.mp4",

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
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Next",
        path: "/assets/next.png",
      },
      {
        id: 4,
        name: "Three",
        path: "/assets/three.png",
      },
    ],
  },
  {
    title: "Updating Soon",
    desc: "I'm working to add other projects here, meanwhile you can check them out on my github - https://github.com/femto21",
    subdesc: "",
    href: "https://github.com/femto21",
    texture: "/textures/project/project2.mp4",

    spotlight: "/assets/spotlight2.png",
    tags: [],
  },
  {
    title: "Femto AI",
    desc: "An AI chatbot, featuring the character Femto/Griffith from 'Berserk', and powered by Open AI API. Users can signup to the website and start interacting with the chatbot. Since I have to pay for the API, each user gets around 500 tokens (around 3-4 medium length answers).",
    subdesc:
      "The chatbot is built using Next.js, React, Tailwind CSS, Open AI, Clerk, and Daisy UI.",
    href: "https://github.com/femto21/Femto-AI",
    texture: "/textures/project/project3/mp4",
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Next",
        path: "/assets/next.png",
      },
      {
        id: 4,
        name: "Clerk",
        path: "/assets/clerk.webp",
      },
      {
        id: 5,
        name: "Open AI",
        path: "/assets/openai.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
];
