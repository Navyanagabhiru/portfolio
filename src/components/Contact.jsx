import React from 'react';
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjust threshold as needed
  });

  return (
    <div id="Contact" className="border-b border-neutral-900 pb-4">
      <motion.h2
        ref={ref}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          ref={ref}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          ref={ref}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          href="#"
          ref={ref}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="border-b"
        >
          {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;

