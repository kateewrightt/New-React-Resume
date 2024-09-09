import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import kateabout from "../assets/kateabout.png";

// <div className='mt-20 flex flex-wrap gap-10'>
// {services.map((service, index) => (
//   <ServiceCard key={service.title} index={index} {...service} />
// ))}
// </div>

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
        <p className={styles.sectionSubText}>Nice to meet you</p>
        <h2 className={styles.sectionHeadText}>
          <img src={kateabout} alt="Kate's Image" className="h-[1.5em] w-[1.5em] inline align-text-bottom" /> About Me
        </h2>
        <br></br>
      </motion.div>
      <b variants={fadeIn("", "", 0.1, 1)}
        className='mt-4  text-[20px] max-w-6xl leading-[30px]'
        >📚 The Basics</b>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[20px] max-w-6xl leading-[30px]'
      >
        I'm a recent computer science graduate, 
        and I'm keen to continue my learning journey through side projects and engaging in this community. 
        I graduated with a Bachelor of Computer Science with distinction 
        in August 2024 with a 6.5/7.0 GPA!
      </motion.p>
      <br></br>
      <b variants={fadeIn("", "", 0.1, 1)}
        className='mt-4  text-[20px] max-w-6xl leading-[30px]'
        >💻 My Happy Places</b>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[20px] max-w-6xl leading-[30px]'
      >
       I enjoy working on projects using React, JavaScript, TypeScript, 
       and Express, and I'm really familiar with AWS for solving scaling problems. 
       I'm also improving my Java skills and spending a lot of time on 
       LeetCode to sharpen my algorithm knowledge. Recently, I've started 
       exploring Go to broaden my backend expertise. 

      </motion.p>
      <br></br>
      <b variants={fadeIn("", "", 0.1, 1)}
        className='mt-4  text-[20px] max-w-6xl leading-[30px]'
        >💜 Beyond Coding</b>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[20px] max-w-6xl leading-[30px]'
      >
        I'm currently living in Brisbane 
        but I'm keen to move to Sydney in 2025. I've already 
        found some nice food spots in Sydney — but if you 
        have any food recommendations, I'd love to hear them! 
      </motion.p>
      <br></br>
      

      
    </>
  );
};

export default SectionWrapper(About, "about");
