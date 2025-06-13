// src/components/canvas/FaceModel.jsx

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

// A simple component to load the model
const FaceModelObject = () => {
  const face = useGLTF("./FaceModel.glb"); // This loads your model
  return <primitive object={face.scene} scale={10} />;
};

// A simple canvas to render the model in
const FaceCanvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <Suspense fallback={null}>
        <FaceModelObject />
      </Suspense>
    </Canvas>
  );
};

export default FaceCanvas;