import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// ## 1. IMPORT YOUR FACE CANVAS ##
import FaceCanvas from "./canvas/FaceModel";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* ## 2. WRAP TEXT AND CANVAS IN A FLEX CONTAINER ## */}
      <div className='mt-4 flex flex-col lg:flex-row items-start gap-10'>
        
        {/* Your existing paragraph, with a width specified for large screens */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px] lg:w-[60%]'
        >
          Hi, I'm Rijul Ugawekar — a Data Scientist with a strong background in cloud-native analytics, machine learning, and data visualization. With experience across industries and tools like Python, SQL, AWS, Databricks, and Tableau, I enjoy crafting intelligent data solutions that solve real-world problems.
          <br/><br/>
          From building end-to-end ML pipelines for churn prediction and fraud detection to visualizing insights through dashboards and apps, I bridge the gap between raw data and strategic decision-making. I'm passionate about automation, storytelling with data, and continuously learning new tools and technologies to stay ahead in this dynamic field.
        </motion.p>

        {/* ## 3. ADD THE FACE CANVAS WITH SIZING ## */}
        {/* The container needs a specific height to render the canvas correctly */}
        <div className='w-full lg:w-[40%] h-[350px] md:h-[450px]'>
          <FaceCanvas />
        </div>

      </div>

      {/* Your existing service cards section is untouched */}
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");