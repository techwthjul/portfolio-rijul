import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";

import CanvasLoader from "../Loader";

const FaceModelObject = ({ isMobile }) => {
  const group = useRef();
  // ## 1. LOADS ANIMATIONS ##
  // useGLTF loads both the 3D scene AND any animations embedded in the .glb file.
  const { scene, animations } = useGLTF("./FaceModel.glb");

  // ## 2. CONNECTS ANIMATIONS TO THE MODEL ##
  // The useAnimations hook prepares the animations for playback on your model.
  const { actions } = useAnimations(animations, group);

  // ## 3. PLAYS THE ANIMATION ##
  // This useEffect hook runs once and finds the animation named "Take 001" (or similar) and plays it.
  useEffect(() => {
    if (actions["Take 001"]) {
        actions["Take 001"].play();
    }
  }, [actions]);

  return (
    // The "ref={group}" is what links the model to the useAnimations hook.
    <group ref={group} dispose={null}>
      <primitive
        object={scene}
        scale={isMobile ? 9 : 12}
        // This is the position to adjust to frame the face correctly.
        position={isMobile ? [0, 0.2, 0] : [0, 0.2, 0]}
        rotation={[0, 0.4, 0]}
      />
    </group>
  );
};

// The rest of the file sets up the canvas environment
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
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <FaceModelObject isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default FaceCanvas;