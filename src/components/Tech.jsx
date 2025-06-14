import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import Ball from "./canvas/Ball"; // Import the new Ball component
import CanvasLoader from "../Loader";

const Tech = () => {
  // Determine if we are on a mobile device to adjust the layout
  const isMobile = window.innerWidth <= 768;
  const ballsPerRow = isMobile ? 3 : 5; // 3 balls per row on mobile, 5 on desktop
  const rowOffset = isMobile ? 4 : 3;   // Adjust vertical spacing between rows

  return (
    <div
      className='flex flex-row flex-wrap justify-center gap-10'
      style={{ height: `${Math.ceil(technologies.length / ballsPerRow) * rowOffset * 40}px` }} // Dynamically calculate height
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
                  col * 3 - (ballsPerRow - 1) * 1.5, // X position
                  row * -rowOffset,                     // Y position
                  0                                   // Z position
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