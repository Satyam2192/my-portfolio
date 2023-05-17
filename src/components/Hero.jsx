import { motion } from "framer-motion";
import Plx from "react-plx";

import { styles } from "../styles";
import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={15}
      outerSize={15}
      color="193, 11, 111"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
};

const Hero = () => {
  return (
    <section
      className={`h-[100vh] snap-center relative w-full mx-auto bg-cover bg-no-repeat bg-center App`}
    >
      <Cursor />
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 900,
            properties: [
              {
                startValue: 1,
                endValue: 1.18,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        <img
          src="https://r4.wallpaperflare.com/wallpaper/751/849/165/space-galaxy-universe-space-art-wallpaper-a930f8fd615aadabe667486f9001b64d.jpg"
          alt="background"
          className={`relative w-full h-screen mx-auto bg-cover bg-no-repeat bg-center`}
        />
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 3.9,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "static",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <img
          src="https://i.postimg.cc/WpXqgK57/bg-3.png"
          alt="foreground"
          className={`relative w-full h-screen mx-auto bg-cover bg-no-repeat bg-center`}
        />
      </Plx>

      <Plx
        parallaxData={[
          {
            start: 0,
            end: 400,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "5vw",
          width: "100%",
        }}
      >
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex justify-center items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 bg-[#5efff7]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white text-[20px]`}>
              Hi, I'm <span className="text-[#5efff7]">Satyam kumar</span>
            </h1>

            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop 3D visuals, user{" "}
              <br className="sm:block hidden text-[20px]" />
              interfaces and web applications
            </p>
          </div>
        </div>
      </Plx>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="flex justify-center items-start p-2">
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
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
