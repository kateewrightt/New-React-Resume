import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import katehi from "../assets/katehi.png";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className='text-[#915EFF]'>Kate </span>
          <img src={katehi} alt="Kate's Image" className="h-[1.5em] w-[1.5em] inline align-text-bottom ml-2" />
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a girl in tech who loves to blend creativity and technology... 
          </p>
          <br></br>
          <i>Hint: Try moving around my retro computer...</i>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
