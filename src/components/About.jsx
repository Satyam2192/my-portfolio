import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn } from "../utils/motion";
import { Tilt } from "react-tilt";
import Tech from "./Tech";

const cardItems = [
  {
    icon: "https://svgshare.com/i/tA9.svg",
    title: "Web Developer",
    sub_title: "Experience the future with our cutting-edge designs.",
    gradientColors: "from-purple-500 to-pink-500",
  },
  {
    icon: "https://www.svgrepo.com/show/353515/browserstack.svg",
    title: "Backend Developer",
    sub_title: "Experience the future with our unique features.",
    gradientColors: "from-blue-500 to-green-500",
  },
  {
    icon: "https://www.svgrepo.com/show/439290/react.svg",
    title: "React Developer",
    sub_title: "Experience the future with our React Development.",
    gradientColors: "from-yellow-500 to-red-500",
  },
];

const Card = ({ icon, title, sub_title, gradientColors, cursorPos }) => {
  return (
    <motion.div
      variants={fadeIn("", "", 0.2, 1)}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4"
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.1,
          speed: 500,
          glare: true,
          "max-glare": 0.5,
        }}
        className="w-full h-full"
      >
        <div
          className={`w-full h-full bg-gradient-to-br ${gradientColors} rounded-2xl p-8 flex flex-col justify-center items-center`}
          style={{
            background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 0, 0, 0.5), rgba(255, 255, 0, 0.5), rgba(0, 255, 255, 0.5))`,
          }}
        >
          <i className="fas fa-rocket text-white text-4xl mb-4"></i>
          <img src={icon} alt="logo" className="bg-none" />
          <h3 className="text-white text-lg font-bold mb-2 mt-4">{title}</h3>
          <p className="text-white text-sm text-center">{sub_title}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const About = () => {
  const [cursorPos, setCursorPos] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const onMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  

  return (
    <section className="h-100vh snap-center">
      <div>
        <motion.div
          variants={slideIn("left", "tween", 0.1, 0.7)}
          className="flex-[0.75] bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-2xl shadow-su"
        >
          <p className={styles.sectionSubText}>INTRODUCTION</p>
          <h3 className={styles.sectionHeadText}>Overview.</h3>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="m-4 sm:m-5 mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
      </div>

      <div className="m-4 mt-10 mb-10 justify-center sm:mt-20 flex flex-wrap gap-10">
        {cardItems.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.title}
            sub_title={item.sub_title}
            gradientColors={item.gradientColors}
            cursorPos={cursorPos}
          />
        ))}
      </div>
      <div
        className="cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      >
        <div
          className="cursor__inner"
          style={{
            transform: `translate(-50%, -50%) translate(${
              cursorPos.x - 10
            }px, ${cursorPos.y - 10}px)`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
