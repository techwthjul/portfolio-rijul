import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const FaceModelObject = ({ isMobile }) => {
  const group = useRef();
  const { scene, animations } = useGLTF("./FaceModel.glb");
  const { actions } = useAnimations(animations, group);

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
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
        
        // ## THE FINAL TWEAK ##
        // Change the Y position to a more negative number to move the model down,
        // which brings the face and shoulders into view.
        position={isMobile ? [0, -1.5, 0] : [0, -1.5, 0]}

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