import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, slideIn } from "../utils/motion"; // Corrected import

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link1,
  source_code_link2,
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
        className={`w-full h-full bg-gradient-to-br  rounded-2xl p-8  items-center`}
        style={{
          background: `radial-gradient(circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 102, 102, 0.7), rgba(255, 153, 51, 0.7), rgba(102, 153, 204, 0.7), rgba(255, 51, 102, 0.7))`,
        
        }}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link1, "_blank")}
              className="bg-gradient-to-r from-pink-500 to-purple-500 to-blue-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2"
            >
              <img
                src={"https://www.svgrepo.com/show/143957/link.svg"}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            <div
              onClick={() => window.open(source_code_link2, "_blank")}
              className="bg-gradient-to-r from-green-500 to-blue-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <ul className="mt-5 list-none ml-5 space-y-2"> {/* Changed <ol> to <ul> */}
            {description.map((desc, index) => (
              <li
                key={`description-${index}`}
                className="text-white text-14px pl-1 tracking-wider"
              >
                {desc}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} px-2 py-1 rounded-full`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
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
    <section className="h-full snap-center"> 
      <div>
        <motion.div
          variants={slideIn("left", "tween", 0.1, 0.7)}
          className="flex-[0.75] bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-2xl shadow-su relative"
        >
          <div className="absolute top-0 left-0 w-full h-full rounded-2xl opacity-50"></div>
          <p className={styles.sectionSubText}>My Works</p>
          <h3 className={styles.sectionHeadText}>Projects.</h3>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="m-4 sm:m-5 mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        ></motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} cursorPos={cursorPos} {...project} />
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

export default SectionWrapper(Works, "works");
