import React from 'react';
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger animation when 30% of element is in view
  });

  return (
    <div id="Experience" className="border-b border-neutral-800 pb-24">
      <motion.h2
        ref={headerRef}
        animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : -100 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.3, // Adjust threshold as needed
          });

          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                ref={ref}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4"
              >
                <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
              </motion.div>
              <motion.div
                ref={ref}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="mb-2 font-semibold">
                  {experience.role} - <span className="text-sm text-purple-200">{experience.company}</span>
                </h6>
                <p className="mb-4 text-neutral-400 text-sm text-justify">{experience.description}</p>
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-200">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
