import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import Ball from "./canvas/Ball";
// This is the corrected import path for the Loader
import CanvasLoader from "./Loader";

const Tech = () => {
  const isMobile = window.innerWidth <= 768;
  const ballsPerRow = isMobile ? 3 : 5;
  const rowOffset = isMobile ? 4 : 3;

  return (
    <div
      className='flex flex-row flex-wrap justify-center gap-10'
      style={{ height: `${Math.ceil(technologies.length / ballsPerRow) * rowOffset * 40}px` }}
    >
      <Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
          {technologies.map((technology, index) => {
            const row = Math.floor(index / ballsPerRow);
            const col = index % ballsPerRow;
            
            return (
              <group
                key={technology.name}
                position={[
                  col * 3 - (ballsPerRow - 1) * 1.5,
                  row * -rowOffset,
                  0
                ]}
              >
                <Ball imgUrl={technology.icon} />
              </group>
            );
          })}
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");