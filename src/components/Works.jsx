import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { slideIn } from "../utils/motion";
import { StarsCanvas } from "./canvas";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link1,
  source_code_link2,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-nonerounded-2xl overflow-hidden relative"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 to-blue-500 opacity-50 rounded-2xl"></div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-none p-5 sm:w-[360px] w-full relative z-10"
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
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color} bg-none px-2 py-1 rounded-full`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-3 h-3 rounded-full bg-gradient-to-b from-pink-500 to-purple-500 mb-1"
        />
        <motion.div
          animate={{
            y: [0, -24, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-3 h-3 rounded-full bg-gradient-to-b from-green-500 to-blue-500 mt-1"
        />
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section className="h-100vh  snap-center">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl relative"
      >
        <div className="absolute top-0 left-0 w-full h-full  rounded-2xl opacity-50"></div>
        <p className={styles.sectionSubText}>My Works</p>
        <h3 className={styles.sectionHeadText}>Projects.</h3>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-white text-[17px] max-w-3xl leading-[30px]"
        ></motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <StarsCanvas />
    </section>
  );
};

export default SectionWrapper(Works, "");
