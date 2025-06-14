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
        scale={isMobile ? 9 : 12}

        // ## THE FINAL, CORRECTED ADJUSTMENT TO MOVE THE MODEL UP ##
        // Use a POSITIVE value for the Y-axis. Start with something like 1.5 and adjust.
        position={isMobile ? [0, 1.5, 0] : [0, 1.5, 0]}

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
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <FaceModelObject isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default FaceCanvas;