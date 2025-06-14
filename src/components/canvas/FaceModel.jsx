import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../Loader";

const FaceModelObject = ({ isMobile }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("./FaceModel.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Debug: Log available animations
    console.log("Available animations:", animations);
    console.log("Available actions:", actions);

    // Try to play all animations
    if (actions) {
      // Get the first animation name
      const animationNames = Object.keys(actions);
      console.log("Animation names:", animationNames);

      if (animationNames.length > 0) {
        // Play the first animation
        const firstAnimation = actions[animationNames[0]];
        if (firstAnimation) {
          firstAnimation.play();
          // Optional: Set animation properties
          firstAnimation.loop = true; // Loop the animation
          firstAnimation.timeScale = 1; // Normal speed
        }
      }

      // Alternative: Play all animations
      // Object.values(actions).forEach(action => {
      //   action.play();
      // });
    }
  }, [actions]);

  return (
    <group ref={group} dispose={null}>
      <primitive
        object={scene}
        scale={isMobile ? 2.5 : 3}
        position={isMobile ? [0, -4.5, 0] : [0, -5, 0]}
        rotation={[0, 0, 0]}
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
      frameloop='always' // Changed from 'demand' to 'always' for animations
      dpr={[1, 2]}
      camera={{ 
        position: [0, 0, 2.5],
        fov: 25,
        near: 0.1,
        far: 100
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          target={[0, 0, 0]}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          maxAzimuthAngle={0.5}
          minAzimuthAngle={-0.5}
        />
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[2, 2, 2]} 
          intensity={0.8} 
          castShadow 
        />
        <directionalLight 
          position={[-2, 2, 2]} 
          intensity={0.5} 
        />
        <spotLight
          position={[0, 2, 3]}
          angle={0.5}
          penumbra={1}
          intensity={0.8}
          castShadow
        />
        <FaceModelObject isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default FaceCanvas;