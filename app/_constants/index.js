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
    texture: "/textures/project/project3.mp4",
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
        path: "/assets/clerk.png",
      },
      {
        id: 5,
        name: "Open AI",
        path: "/assets/openai.png",
      },
    ],
  },
  {
    title: "Tank Wars (in progress)",
    desc: "A huge python 2-player game consisting of more than a dozen interconnected classes. The game is built using the pygame community edition library and uses event and time-driven polling strategies to dynamically update the state of in-game objects such as cannonballs and turrets. The project also implements a MongoDB database to save player scores.",
    subdesc: "",
    href: "https://github.com/femto21/TankWars",
    texture: "/textures/project/project4.mp4",
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python.png",
      },
      {
        id: 2,
        name: "Pygame",
        path: "assets/pygame.png",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/mongo.svg",
      },
    ],
  },
  {
    title: "Break The Box",
    desc: "A single player game made in Java using the Java canvas class. It implements a game loop using active rendering. The user controls a turret at the bottom of the screen using the left and right arrow keys, and the shoots cannonballs using the spacebar. Boxes fall from the sky that need to be destroyed. If any box touches the ground then the game ends.",
    subdesc: "",
    href: "https://github.com/femto21/BreakTheBox",
    texture: "/textures/project/project5.mp4",
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/java.png",
      },
    ],
  },
  {
    title: "Flappy Bird (Femto Edition)",
    desc: "The good ol' single player game made in Java using the Java swing class. It implements a game loop using passive rendering. The user controls a bird, making it flap its wings to soar up and avoid the obstacles. The game ends as soon as the bird goes off-screen or touches an obstacle.",
    subdesc: "",
    href: "https://github.com/femto21/FlappyBird",
    texture: "/textures/project/project6.mp4",
    spotlight: "/assets/spotlight6.png",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/java.png",
      },
    ],
  },
  {
    title: "Beat The Boss",
    desc: "A quiz format game where the player needs to answer questions correctly to deal damage to the boss. The game is made with the Python Tkinter class. There is an alternative version of this game as well made using the turtle class. The results of the game are also stored in a MySQL database.",
    subdesc: "",
    href: "https://github.com/femto21/BeatTheBoss",
    texture: "/textures/project/project7.mp4",
    spotlight: "/assets/spotlight7.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/python.png",
      },
    ],
  },
  {
    title: "Calculators and Converters",
    desc: "A web application, comprising of 4 different calculators and converters - An arithmetic calculator, a temperature converter, a BMI calculator, and a weight converter. It is built using HTML, CSS and Javascript.",
    subdesc: "",
    href: "https://github.com/femto21/CalculatorsAndConverters",
    texture: "/textures/project/project8.mp4",
    spotlight: "/assets/spotlight8.png",
    tags: [
      {
        id: 1,
        name: "HTML",
        path: "/assets/html.png",
      },
      {
        id: 2,
        name: "CSS",
        path: "/assets/css.png",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/javascript.png",
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
