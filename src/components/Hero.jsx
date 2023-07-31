import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import katehi from "../assets/katehi.png";
import katesad from "../assets/katesad.png";


const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

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
          <i>Hint: If you are on a computer then try moving around my retro computer...</i>
          {isMobile &&
          (
            <div className="flex justify-center items-center absolute inset-x-0 bottom-0 py-10">

            <div>
              <div className="flex justify-center">
                <img
                  src={katesad}
                  alt="Kate's Image"
                  style={{
                    width: "30vw",
                    maxWidth: "200px",
                    height: "auto",
                    marginBottom: "20px",
                  }}
                />
              </div>
              <p style={{ marginTop: "10px" }}>
                The 3D model experience is not available on mobile devices.
              </p>
            </div>
          </div>
      )}
        </div>
        </div>
        {!isMobile && <ComputersCanvas />}
      </section>
  );
};

export default Hero;
