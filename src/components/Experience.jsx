import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn } from "../utils/motion";
import { Tilt } from "react-tilt";
import logo from "../assets/components/1clogo.png";

// Define the ExperienceItem array here
const ExperienceItem = [
  {
    id: 1,
    date: "Jun 2023 - July 2023",
    title: "SDE Intern (Full-time)",
    company_name: "Stoild Pvt Ltd",
    icon: logo,
    iconBg: "#60A5FA",
    points: [
      "1. Frontend Integration Success: Led 80% of Frontend development, optimizing data flow and boosting functionality.",
      "2. Responsive UI Achievement: Developed responsive interfaces using React for Stolid, driving a 10% user surge. Collaborated on robust feature implementation with React, Node.js, and Express.js.",
      "3. Glitch Resolution: Identified and resolved software issues, enhancing performance and user experience. Achieved 15% reduction in technical problems for smoother project delivery..",
    ],
  },
];

const Card = ({
  date,
  company_name,
  icon,
  title,
  points,
  iconBg,
  cursorPos,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "", 0.2, 1)}
      className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 xl:w-[45%]"
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
          className={`w-full h-full bg-gradient-to-br ${iconBg} rounded-2xl p-8  items-center`}
          style={{
            background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 102, 204, 0.5), rgba(51, 153, 255, 0.5), rgba(255, 204, 102, 0.5))`,
          }}
        >
          <i className="fas fa-rocket text-white text-4xl mb-4"></i>
          <div className="flex flex-col justify-center items-center">
            <img src={icon} alt="logo" className="bg-none w-[40%] h-[40%]" />
          </div>
          <div className="flex justify-between mt-6">
            <h2 className="text-white text-2xl font-bold">{company_name}</h2>
            <h2 className="">{date}</h2>
          </div>
          <h3 className="text-white text-xl font-bold mb-2 mt-4 ">{title}</h3>
          <ul
            className="text-white text-md mt-6"
            style={{ listStyle: "none", padding: 0 }}
          >
            {points.map((point, index) => (
              <li key={index} style={{ textAlign: "left", marginLeft: "20px" }}>
                { point}
              </li>
            ))}
          </ul>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Experience = () => {
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
          <p className={styles.sectionSubText}>Overview</p>
          <h3 className={styles.sectionHeadText}>EXPERIENCE</h3>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="m-4 sm:m-5 mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        ></motion.p>
      </div>

      <div className="m-4 mt-10 mb-10 justify-center sm:mt-20 flex flex-wrap gap-10">
        {ExperienceItem.map((item) => (
          <Card
            key={item.id}
            icon={item.icon}
            company_name={item.company_name}
            date={item.date}
            title={item.title}
            points={item.points}
            iconBg={item.iconBg}
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

export default SectionWrapper(Experience, "experience");



