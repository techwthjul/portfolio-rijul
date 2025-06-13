import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Face = () => {
  const model = useGLTF("./model_rij.glb");
  return (
    <primitive
      object={model.scene}
      scale={1.5}
      position={[0, -1.2, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
};

const FaceCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [2, 2, 5],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* 💡 Fix: Add enough light */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <OrbitControls autoRotate enableZoom={false} />
        <Face />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default FaceCanvas;
