import { motion } from "framer-motion";
import Plx from "react-plx";
import { useSpring, animated } from "react-spring";

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
  const textAnimation = useSpring({
    from: { transform: "translate3d(0,-50px,0)", opacity: 0 },
    to: { transform: "translate3d(0,0,0)", opacity: 1 },
    config: { tension: 300, friction: 10 },
  });

  const backgroundImage =
    window.innerWidth > 768
      ? "https://r4.wallpaperflare.com/wallpaper/751/849/165/space-galaxy-universe-space-art-wallpaper-a930f8fd615aadabe667486f9001b64d.jpg"
      : "https://w0.peakpx.com/wallpaper/346/335/HD-wallpaper-triangle-planet-color-colorful-geoglyser-abstract-blue-cosmos-dream-earth-fluid-galaxy-orange-pink-psychedelic-purple-rainbow-holographic-solar-system-space-stars-texture-vaporwave.jpg";

  return (
    <section
      className={`h-[100vh] snap-center relative w-full mx-auto bg-cover bg-no-repeat bg-center App overflow-hidden`}
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
          src={`${backgroundImage}`}
          alt="background"
          className={`relative w-full h-screen mx-auto bg-cover bg-no-repeat bg-center flex overflow-hidden`}
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
          className={`relative w-full h-screen mx-auto bg-cover bg-no-repeat bg-center overflow-hidden`}
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
        <animated.div style={textAnimation}>
          <div className="flex flex-col justify-center items-center h-screen animate__animated animate__fadeInDown duration-1000 delay-500 transform rotateY-10">
            <div className="text-center">
              <div className="text-white text-3xl sm:text-5xl font-bold">
                <h1>Hi, I'm</h1>
                <h1 className="ml-3 text-[#5efff7]">Satyam kumar</h1>
              </div>
              <p className="mt-4 text-white-100 w-[250px] text-lg sm:text-xl sm:w-[500px]">
                I develop 3D visuals, user interfaces and web applications
              </p>
            </div>
          </div>
        </animated.div>
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
