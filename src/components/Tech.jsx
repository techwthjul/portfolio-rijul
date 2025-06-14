import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import Ball from "./canvas/Ball";
import CanvasLoader from "./Loader";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        // Each technology gets its own small canvas wrapper.
        // This isolates them and prevents the "Too Many Contexts" error
        // because we are only rendering a few at a time.
        <div className='w-28 h-28' key={technology.name}>
          <Canvas frameloop='demand' dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls enableZoom={false} />
              <Ball imgUrl={technology.icon} />
            </Suspense>
            <Preload all />
          </Canvas>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");