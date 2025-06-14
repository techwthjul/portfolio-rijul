import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants";
import { github } from "../assets";

const CertificationCard = ({ index, name, organization, date, image, verify_link }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
        />
        
        {/* Verify button */}
        {verify_link && verify_link !== "#" && (
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(verify_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='verify'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        )}
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{organization}</p>
        <p className='mt-2 text-secondary text-[12px]'>{date}</p>
        
        {/* Verify link as text button */}
        {verify_link && verify_link !== "#" && (
          <button
            onClick={() => window.open(verify_link, "_blank")}
            className='mt-3 text-[14px] text-[#915EFF] hover:text-white transition-colors'
          >
            Verify Certificate →
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My achievements</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {certifications.map((certification, index) => (
          <CertificationCard 
            key={certification.name} 
            index={index} 
            {...certification} 
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");