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

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Work",
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
  //   name: "Redux Toolkit",
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
    name: "Turu Lav",
    description:
      "It is a user-friendly front-end UI design of a dating website, incorporating beautiful animations to enhance the user experience and responsive UI designs",
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
    source_code_link2: "https://github.com/Satyam2192/TuruLuv/tree/main/src",
  },
  {
    name: "Earth Savers",
    description:
      "It provides users with information about their carbon footprints. Implemented features such as scroll-up, login, signup, reset password, contact, comment, and more. Built with visually appealing and responsive UI designs, ensuring optimal user experience on various platforms such as desktop and mobile.",
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
    description:
      "It is a food booking website that integrates with a recipe API, allowing users to search and save their favorite recipes. The website features a user-friendly interface that allows users to easily search recipes and add or remove them from their favorites list.",
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
    source_code_link1: "https://github.com/Satyam2192/wev-dev-2/tree/main/React_project/react-food-app",
    source_code_link2: "https://github.com/Satyam2192/wev-dev-2/tree/main/React_project/react-food-app",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
