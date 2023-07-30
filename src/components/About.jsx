import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import kateabout from "../assets/kateabout.png";


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
        I'm a penultimate year computer science student, 
        fueled by my passion for software development and 
        driven by the thrill of problem-solving. 
      </motion.p>
      <br></br>
      <b variants={fadeIn("", "", 0.1, 1)}
        className='mt-4  text-[20px] max-w-6xl leading-[30px]'
        >💻 My Happy Places</b>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[20px] max-w-6xl leading-[30px]'
      >
        JavaScript, Java, React, Python, and C# are the 
        languages where I truly thrive. These are my happy 
        places where I feel confident in my abilities and 
        can create innovative solutions with ease.
      </motion.p>
      <br></br>
      <b variants={fadeIn("", "", 0.1, 1)}
        className='mt-4  text-[20px] max-w-6xl leading-[30px]'
        >💜 Beyond Coding</b>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[20px] max-w-6xl leading-[30px]'
      >
      I'm a passionate music lover, with a special affinity 
      for local Australian bands. Attending live gigs and 
      immersing myself in the vibrant music scene brings me 
      immense joy and inspiration. Exploring the intersection 
      of technology and music is an exciting adventure that 
      fuels my creative spirit.      
      </motion.p>
      <br></br>
      

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
