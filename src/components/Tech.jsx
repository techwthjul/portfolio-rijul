import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies I work with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech Stack.
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
        {technologies.map((technology) => (
          <div 
            className='w-28 h-28 group relative' 
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            {/* Tooltip */}
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
              <div className='bg-tertiary px-3 py-1 rounded-md'>
                <p className='text-white text-[14px] font-medium whitespace-nowrap'>
                  {technology.name}
                </p>
              </div>
              {/* Arrow pointing up */}
              <div className='absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-tertiary'></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");