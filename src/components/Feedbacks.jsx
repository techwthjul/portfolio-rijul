import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[150px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Project Demonstrations</p>
          <h2 className={styles.sectionHeadText}>📺 YouTube Demos</h2>
        </motion.div>
      </div>

      <div
        className={`-mt-10 pb-14 ${styles.paddingX} grid sm:grid-cols-2 gap-10 justify-center`}
      >
        {testimonials.map((video, index) => (
          <div
            key={index}
            className="bg-tertiary p-5 rounded-xl hover:shadow-xl transition duration-300"
          >
            <a
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="rounded-lg w-full mb-3"
              />
              <strong className="text-white text-[16px]">{video.title}</strong>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
