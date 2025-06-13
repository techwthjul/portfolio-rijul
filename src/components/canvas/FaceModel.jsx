// src/components/canvas/FaceModel.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const FaceModel = () => {
  const model = useGLTF("./model_rij.glb"); // ✅ public/model_rij.glb must exist
  return (
    <primitive object={model.scene} scale={1.5} position={[0, -1.5, 0]} />
  );
};

const FaceModelCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ fov: 45, near: 0.1, far: 200, position: [0, 0, 5] }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ height: "400px", width: "100%" }} // ✅ Control size here
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} />
        <FaceModel />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default FaceModelCanvas;
