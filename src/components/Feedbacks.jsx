import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const VideoCard = ({
  index,
  videoUrl,
  thumbnail,
  title,
}) => {
  const handleVideoClick = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-6 rounded-3xl xs:w-[320px] w-full cursor-pointer group hover:bg-black-100 transition-all duration-300'
      onClick={handleVideoClick}
    >
      {/* Video Thumbnail Container */}
      <div className='relative w-full h-[180px] rounded-2xl overflow-hidden mb-4'>
        <img
          src={thumbnail}
          alt={title}
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/320x180/1a1a2e/ffffff?text=Video+Thumbnail';
          }}
        />
        
        {/* Play Button Overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center'>
          <div className='w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300'>
            <svg className='w-6 h-6 text-white ml-1' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M8 5v14l11-7z'/>
            </svg>
          </div>
        </div>

        {/* Duration Badge (Optional) */}
        <div className='absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded'>
          Demo
        </div>
      </div>

      {/* Video Info */}
      <div className='mt-4'>
        <h3 className='text-white font-bold text-[16px] mb-2 group-hover:text-secondary transition-colors'>
          {title}
        </h3>
        
        {/* Video Stats */}
        <div className='flex items-center justify-between text-[12px] text-gray-400'>
          <span>Project Demo</span>
          <div className='flex items-center gap-1'>
            <svg className='w-3 h-3' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z'/>
            </svg>
            <span className='group-hover:text-secondary transition-colors'>Watch</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My project demonstrations</p>
          <h2 className={styles.sectionHeadText}>YouTube Videos.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((video, index) => (
          <VideoCard key={`video-${index}`} index={index} {...video} />
        ))}
      </div>
      
      {/* View All Videos Button */}
      <div className="flex justify-center pb-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary flex items-center gap-2"
          onClick={() => window.open('https://www.youtube.com/@rijulugawekar', '_blank')} // Replace with your actual YouTube channel
        >
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M8 5v14l11-7z'/>
          </svg>
          View All Videos
        </motion.button>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");