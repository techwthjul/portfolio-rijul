import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets"; // Use as placeholder for Medium icon
import { SectionWrapper } from "../hoc";
import { blogs } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const BlogCard = ({
  index,
  title,
  description,
  tags,
  image,
  blog_link,
  read_time,
  date,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='blog_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(blog_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <svg 
                className='w-6 h-6 fill-white'
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{title}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          <div className='mt-2 flex justify-between items-center'>
            <p className='text-[12px] text-secondary'>{date}</p>
            <p className='text-[12px] text-secondary'>{read_time}</p>
          </div>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${title}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Blogs = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My thoughts and insights</p>
        <h2 className={`${styles.sectionHeadText}`}>Medium Blogs.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I write about data engineering, machine learning, cloud technologies,
          and my journey in tech. These articles reflect my experiences,
          learnings, and insights gained while working on various projects.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {blogs.map((blog, index) => (
          <BlogCard key={`blog-${index}`} index={index} {...blog} />
        ))}
      </div>

      {/* View All Articles Button */}
      <div className='mt-16 flex justify-center'>
        <motion.button
          variants={fadeIn("", "", 0.1, 1)}
          onClick={() => window.open("https://medium.com/@rijulu17ugawekar", "_blank")}
          className='bg-tertiary py-4 px-10 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-[#915EFF] transition-all duration-300 flex items-center gap-3'
        >
          <span>View All Articles on Medium</span>
          <svg 
            className='w-5 h-5 fill-white'
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
          </svg>
        </motion.button>
      </div>
    </>
  );
};

export default SectionWrapper(Blogs, "blogs");