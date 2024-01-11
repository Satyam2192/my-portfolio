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
import {
  tenderbig,
  taskmanager,
  showbooker,
  turulav,
  earthsavers,
  foodbooker,
  weather,
  recipeapi,
} from "../assets/components/index";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "message",
    title: "Message",
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
  //   icon: express,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
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

const Certificates = [
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
]

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
    name: "Tender Big",
    description: [
      "Overview: A Tender Listing Web App designed for listing, buying, and more.",
      "Features: (Under Development)",
      "1. Add, edit, and delete your tenders with the purchase of a membership.",
      "2. Bid on any tender and list projects on the website.",
      "3. Multi-role access with logins for admin, clients, contractors, and subcontractors.",
      "4. Progressive search filters, advanced search, and additional functionalities."
    ],
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },

      {
        name: "mongodb",
        color: "green-text-gradient",
      },

    ],
    image: tenderbig,
    source_code_link1: "https://tenderbig.com",
    source_code_link2: "https://github.com/Satyam2192/",
  },
  {
    name: "Recipe API",
    description: [
      "About: About: This API provides functionalities to manage recipes in a database. It is designed to be used by administrators with the necessary privileges to perform CRUD operations on recipes.",
      "Features: ",
      "1. Retrieve all recipes and access recipes by ID without authentication",
      "2. Admin-exclusive rights for creating, updating, and deleting recipes",
      "3. Search for recipes based on a query",
      "4. Role-based access for both administrators and visitors",
    ],
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "jsonwebtoken",
        color: "green-text-gradient",
      },
      {
        name: "bcrypt",
        color: "blue-text-gradient",
      },

      {
        name: "mongodb",
        color: "green-text-gradient",
      },

    ],
    image: recipeapi,
    source_code_link1: "https://recipes-api-w6l4.onrender.com/api/v1/recipes",
    source_code_link2: "https://github.com/Satyam2192/recipes-API",
  },
  {
    name: "Real Time Task Manager",
    description: [
      "About: It is Task Manager Web App, where you can get your tasks done with the help of your comutility",
      "Features: (Work in Progress)",
      "1. Create your workspace, add a list of Tasks, and add your profile picture or other info.",
      "2. Add members to your workspace, collaborate with them, and comment on any task",
      "3. Get real-time updates and notifications with the dark mode feature",
      "4. Authentication feature with URL protection",
    ],
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
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
        name: "express.js",
        color: "blue-text-gradient",
      },
    ],
    image: taskmanager,
    source_code_link1: "https://real-time-task-manager.netlify.app",
    source_code_link2: "https://github.com/Satyam2192/Real-time-Task-Manager",
  },
  {
    name: "ShowBooker",
    description: [
      "Overview: An online platform dedicated to booking TV show experiences.",
      "Features:",
      "1. Explore a diverse range of shows and engage with the website through likes.",
      "2. Access comprehensive listings of all shows, complete with detailed descriptions and trailers.",
      "3. Seamlessly book tickets for your favorite shows."
    ],
    tags: [
      {
        name: "react.js",
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
        name: "express.js",
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
      "Overview: A dating platform equipped with a sophisticated matching algorithm and interactive chat features.",
      "Features: (Under Development)",
      "1. Streamlined registration process, including the creation of user profiles.",
      "2. Advanced matching algorithm and profile search capabilities.",
      "3. User-friendly 1-1 chatting feature for seamless communication."
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "cloud firestore",
        color: "pink-text-gradient",
      },
    ],
    image:
      turulav,
    source_code_link1: "https://turuluv.netlify.app/",
    source_code_link2: "https://github.com/Satyam2192/TuruLuv/",
  },
  {
    name: "Earth Savers",
    description: [

      "Overview: A platform designed to enlighten users about their carbon footprints and environmental impact.",
      "Features:",
      "1. Real-time tracking of carbon footprint data.",
      "2. User-friendly registration process and contact options.",
      "3. Smooth scroll-up functionality paired with responsive UI designs."
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
    image: earthsavers,
    source_code_link1: "https://skearthsavers.netlify.app/",
    source_code_link2: "https://github.com/Satyam2192/SkEarthSavers",
  },
  {
    name: "Food Booking",
    description: [
      "Overview: A Frontend Food Booking App, facilitating seamless ordering and dining experiences.",
      "Features: ",
      "1. Effortlessly place, modify, and cancel food orders through user-friendly interfaces.",
      "2. Browse and book tables, pre-order meals, and enjoy a streamlined dining process.",
      "3. Diverse user logins for customers, restaurant owners, and delivery personnel.",
      "4. Incorporating progressive search filters, advanced search options, and other enhanced features."
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
    image: foodbooker,
    source_code_link1:
      "https://github.com/Satyam2192/wev-dev-2/tree/main/React_project/react-food-app",
    source_code_link2:
      "https://github.com/Satyam2192/wev-dev-2/tree/main/React_project/react-food-app",
  },
  {
    name: "Weather App",
    description: [
      "Overview: Introducing a Weather Web App dedicated to providing real-time weather updates for your city.",
"Features:",
"1. Effortless City Search: The weather website simplifies the search process, ensuring quick access to information.",
"2. Detailed Real-Time Data: Access comprehensive real-time weather information, including cloud cover, temperature, feels-like temperature, pressure, humidity, and wind speed.",
"3. Precision and Timeliness: The website guarantees accurate and up-to-date weather details, offering reliability for activity planning and well-informed decision-making."
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Rest API",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link1: "https://sk-weather-today.netlify.app/",
    source_code_link2: "https://github.com/Satyam2192/weather",
  },
];

export { services, technologies, experiences, testimonials, projects };
