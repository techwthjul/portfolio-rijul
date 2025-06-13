import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../Loader"; // Assuming you have this loader component

const FaceModelObject = ({ isMobile }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("./FaceModel.glb");
  const { actions } = useAnimations(animations, group);

  // This hook plays the animation
  useEffect(() => {
    // If "Take 001" doesn't work, find the correct animation name by logging the actions object
    // console.log(Object.keys(actions)); 
    if (actions["Take 001"]) { // Replace "Take 001" with your actual animation name if needed
        actions["Take 001"].play();
    }
  }, [actions]);

  return (
    // Use a group to apply animations to the model
    <group ref={group} dispose={null}>
      <primitive
        object={scene}
        
        // ## ADJUST SCALE HERE ##
        // This number makes the model bigger or smaller.
        scale={isMobile ? 9 : 12} 
        
        // ## ADJUST POSITION HERE ##
        // The second number (Y-axis) moves the model up or down.
        // A less negative number (like -1.8) moves it UP.
        // A more negative number (like -2.5) moves it DOWN.
        position={isMobile ? [0, -1.8, 0] : [0, -1.8, 0]} 
        
        // This rotates the model side-to-side for a better angle.
        rotation={[0, 0.4, 0]}
      />
    </group>
  );
};

const FaceCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
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
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Lights are essential for the model to be visible */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <FaceModelObject isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default FaceCanvas;