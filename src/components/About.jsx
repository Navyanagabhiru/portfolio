import React from 'react';
import aboutImg from "../assets/Aboutme1.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust threshold as needed
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust threshold as needed
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Adjust threshold as needed
  });

  return (
    <div id="About" className="border-b border-neutral-900 pb-4">
      <motion.h2
        ref={headingRef}
        animate={{ opacity: headingInView ? 1 : 0, y: headingInView ? 0 : -100 }}
        initial={{ opacity: 0, y: -70 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        About
        <span className="text-neutral-300"> Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          ref={imageRef}
          animate={{ opacity: imageInView ? 1 : 0, x: imageInView ? 0 : -100 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex flex-col items-center lg:items-start">
            <img className="rounded-2xl" src={aboutImg} alt="about" style={{ height: '250px', width: '500px' }} />
          </div>
        </motion.div>
        <motion.div
          ref={textRef}
          animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : -100 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-sm text-justify">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
