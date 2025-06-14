import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../Loader";

const FaceModelObject = ({ isMobile }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("./FaceModel.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions["Take 001"]) {
      actions["Take 001"].play();
    }
  }, [actions]);

  return (
    <group ref={group} dispose={null}>
      <primitive
        object={scene}
        scale={isMobile ? 2.5 : 3} // Increased scale for close-up
        position={isMobile ? [0, -4.5, 0] : [0, -5, 0]} // Adjusted to show face/shoulders
        rotation={[0, 0, 0]} // Facing straight forward for passport style
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
      camera={{ 
        position: [0, 0, 2.5], // Very close camera for passport style
        fov: 25, // Narrow FOV to reduce distortion
        near: 0.1,
        far: 100
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          target={[0, 0, 0]} // Focus on face level
          maxPolarAngle={Math.PI / 2} // Limit vertical rotation
          minPolarAngle={Math.PI / 2}
          maxAzimuthAngle={0.5} // Limit horizontal rotation (passport style)
          minAzimuthAngle={-0.5}
        />
        {/* Lighting setup for portrait */}
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
        {/* Key light for face */}
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