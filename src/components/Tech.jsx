import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import kateknow from "../assets/kateknow.png";


import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div>
   
        <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>What I Know</p>
        <h2 className={`${styles.sectionHeadText}`}>
          <img src={kateknow} alt="Kate's Image" className="h-[1.5em] w-[1.5em] inline align-text-bottom" /> Languages and Frameworks
        </h2>
        </motion.div>
      <div className='w-full flex'>
      <motion.div variants={textVariant()}>
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[20px] max-w-6xl leading-[30px]'
          >
          Explore a visual representation of the diverse array of technologies and frameworks
          I've explored and mastered. Each ball showcases a unique tool or platform that I have
          used to create innovative projects.
          </p>
          <br></br>
          <p className="text-secondary text-lg mb-6">
            Programming Languages: JavaScript, Typescript, Python, C, C#, HTML, CSS, Java, C#, Java
            <br></br>
            Frameworks and Technology: React, Node, AWS, JUnit, Git, Bootstrap, Figma, Docker
          </p>

        </motion.div>

        
      </div>
      
        
      
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
