import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// This is our test object: a simple red box.
// We are NOT loading your .glb file at all in this test.
const TestBox = () => {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

// The rest of the file is a standard canvas setup.
const FaceCanvas = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <TestBox />
      </Suspense>
    </Canvas>
  );
};

export default FaceCanvas;