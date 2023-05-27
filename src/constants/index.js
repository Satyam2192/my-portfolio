import { NavLink } from "react-router-dom";
import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
} from "../assets";
import { showbooker } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "",
  },
  {
    title: "React Developer",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },

  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Express js",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Code Jam ",

    icon: "https://codejam.sg/wp-content/uploads/2021/01/logo-pic.jpg",
    iconBg: "white",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  //   {
  //     title: "React Native Developer",
  //     company_name: "Tesla",
  //     icon: tesla,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2021 - Feb 2022",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#383E56",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ShowBooker",
    description:[
      "About: It is an online TV show booking website",
      "Features: (Work in Progress)",
      "1. Search various shows and like website",
      "2. Get all shows listed and descriptions of shows with trailers",
      "3. Book your favorite show",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express js",
        color: "blue-text-gradient",
      },
    ],
    image: showbooker,
    source_code_link1: "https://showbooker.netlify.app/",
    source_code_link2: "https://github.com/Satyam2192/movie-tickets-booking-",
  },
  {
    name: "Turu Lav",
    description: [
      "About: It is a dating website with a matching algorithm and chatting features",
      "Features: (Work in Progress)",
      "1. Registration functionality with the making of the profile section.",
      "2. Features of matching algorithm and search profile.",
      "3. 1-1 chatting feature for users",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:
      "https://i.postimg.cc/SQ6hBjTK/Screenshot-from-2023-04-08-22-44-39.png",
    source_code_link1: "https://turuluv.netlify.app/",
    source_code_link2: "https://github.com/Satyam2192/TuruLuv/",
  },
  {
    name: "Earth Savers",
    description:[
      "About: It provides users with information about their carbon footprints.",
      "Features:",
      "1. Realtime carbon footprint data.",
      "2. Registration functionality and contact option.",
      "3. Scroll-up functionality with responsive UI designs.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: "https://iili.io/HUPnvyB.png",
    source_code_link1: "https://skearthsavers.netlify.app/",
    source_code_link2: "https://github.com/Satyam2192/SkEarthSavers",
  },
  {
    name: "Food Booking",
    description:[
      "About: It is a food booking website that integrates with a recipe API",
      "Features: ",
      "1. It has a user-friendly UI interface that allows users to easily search recipes",
      "2. Search your favorate recipes",
      "3. Add or remove recipes from favorites list.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rest API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "https://iili.io/HUPzBEu.png",
    source_code_link1:
      "https://github.com/Satyam2192/wev-dev-2/tree/main/React_project/react-food-app",
    source_code_link2:
      "https://github.com/Satyam2192/wev-dev-2/tree/main/React_project/react-food-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
