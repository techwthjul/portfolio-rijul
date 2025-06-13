import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader"; // Assuming you have a loader component like in other files

const FaceModel = ({ isMobile }) => {
  // Load the 3D model from the public directory
  const face = useGLTF("./FaceModel.glb");

  return (
    <primitive
      object={face.scene}
      scale={isMobile ? 2.5 : 2.8}      // Adjust scale for mobile/desktop
      position={isMobile ? [0, -1.5, 0] : [0, -1.8, 0]} // Adjust position
      rotation={[0, 0, 0]}             // Adjust rotation if needed
    />
  );
};

const FaceCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the user is on a mobile device
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
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
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls allow the user to rotate the model */}
        <OrbitControls
          enableZoom={false} // Disallow zooming
          maxPolarAngle={Math.PI / 2} // Prevent rotating below the ground
          minPolarAngle={Math.PI / 2} // Prevent rotating above
        />
        
        {/* Lights are essential to see the model */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, -5]} intensity={0.75} />

        <FaceModel isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default FaceCanvas;