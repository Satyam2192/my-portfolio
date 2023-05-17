import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Station = ({ isMobile }) => {
  const station = useGLTF("./space_station/scene.gltf");

  return (
    <mesh>
      <ambientLight intensity={0.1} />
      
      <pointLight position={[10, -10, 10]} color="#00ff00" intensity={1} />
      <pointLight position={[-10, -10, 10]} color="#ff00ff" intensity={1} />
      
      <pointLight position={[0, 0, 0]} color="#ffffff" intensity={1.2} />
      <spotLight position={[10, 10, 20]} angle={0.15} penumbra={1} color="#ff0040" intensity={2} />
      <spotLight position={[-10, 10, -20]} angle={0.15} penumbra={1} color="#00ffff" intensity={2} />
      <spotLight position={[0, 50, 0]} angle={0.2} penumbra={1} color="#ffff00" intensity={2} />
      <primitive
        object={station.scene}
        scale={isMobile ? 0.5 : 0.45}
        position={isMobile ? [0, 0, 0] : [0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};



const StationCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            autoRotateSpeed={isMobile ? -5 : -3}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Station isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StationCanvas;