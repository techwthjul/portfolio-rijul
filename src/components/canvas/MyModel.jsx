import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";

const FaceModel = () => {
  const model = useGLTF("/model_rij.glb"); // ✅ This matches your filename

  return (
    <primitive object={model.scene} scale={2.5} position={[0, -2, 0]} />
  );
};

const MyModelCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [4, 2, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} />
        <FaceModel />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default MyModelCanvas;
