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
        scale={isMobile ? 0.7 : 1} // Reduced scale to see the whole model
        position={isMobile ? [0, -1.5, 0] : [0, -2, 0]} // Moved model DOWN
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
      camera={{ position: [0, 0, 5], fov: 45 }} // Changed camera position to face the model
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          target={[0, 0, 0]} // Look at center
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <spotLight
          position={[0, 5, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
        />
        <FaceModelObject isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default FaceCanvas;