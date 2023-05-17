import React, { useState } from "react";
import { StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

const Tech = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="h-100vh snap-center" onMouseMove={handleMouseMove}>
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: "none",
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      >
        <div
          className="absolute "
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            border: "2px solid white",
            boxShadow: "0 0 10px 5px rgba(255,255,255,0.5)",
            transform: `translate(${cursorPos.x - 50}px, ${
              cursorPos.y - 50
            }px)`,
            pointerEvents: "none",
          }}
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10 relative">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <img src={technology.icon} />
          </div>
        ))}
        <StarsCanvas />
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
