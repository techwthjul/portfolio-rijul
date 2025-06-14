import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three"; // We need to import the core three.js library

import CanvasLoader from "../Loader";

const FaceModelObject = ({ isMobile }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("./FaceModel.glb");
  const { actions } = useAnimations(animations, group);

  // This layout effect will run once and center the model
  useLayoutEffect(() => {
    // ## AUTO-CENTERING LOGIC ##
    // 1. Calculate the bounding box of the entire model
    const box = new THREE.Box3().setFromObject(scene);
    // 2. Calculate the center of that box
    const center = box.getCenter(new THREE.Vector3());
    // 3. Move the model's scene so its center is at the origin [0, 0, 0]
    scene.position.sub(center);
  }, [scene]);

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
        // Now that the model is centered, we can use small, predictable values here.
        // A slight negative Y will move the centered face down into frame.
        position={isMobile ? [0, -0.5, 0] : [0, -0.5, 0]}
        rotation={[0, 0.4, 0]}
      />
    </group>
  );
};

// The Canvas setup below remains the same
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