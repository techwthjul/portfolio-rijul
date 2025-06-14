import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
// Import FaceCanvas from canvas folder
import FaceCanvas from "./canvas/FaceModel";

const ServiceCard = ({ index, title, icon }) => (
  <div className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:scale-105 transition-transform duration-300 cursor-pointer'>
        <img
          src={icon}
          alt='service-icon'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className='flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-10'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px] lg:flex-1'
        >
          Hi, I'm Rijul Ugawekar — a Data Scientist with a strong background in cloud-
          native analytics, machine learning, and data visualization. With experience 
          across industries and tools like Python, SQL, AWS, Databricks, and Tableau, I 
          enjoy crafting intelligent data solutions that solve real-world problems.
          <br /><br />
          From building end-to-end ML pipelines for churn prediction and fraud 
          detection to visualizing insights through dashboards and apps, I bridge the 
          gap between raw data and strategic decision-making. I'm passionate about 
          automation, storytelling with data, and continuously learning new tools and 
          technologies to stay ahead in this dynamic field.
        </motion.p>

        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className='lg:flex-shrink-0'
        >
          <div className='w-[300px] h-[400px] lg:w-[350px] lg:h-[450px]'>
            {/* Your 3D Face Model - passport style portrait */}
            <FaceCanvas />
          </div>
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");