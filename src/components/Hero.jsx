import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Navya2.png";
import { motion } from "framer-motion";

const containerVariants = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay, ease: "easeOut" },
  },
});

const imageVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: 1.2, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <div id="Home" className="border-b border-neutral-900 pb-4 lg:mb-35 mt-20">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate="visible"
              className="lg:pb-8 text-6xl-custom font-thin tracking-tight mt-16 lg:text-5xl"
              style={{
                fontSize: '4rem', // Adjust font size for smaller screens
                marginTop: '8rem' // Adjust margin-top for smaller screens
              }}
            >
              Navya Nagabhiru
            </motion.h1>
            <motion.span
              variants={containerVariants(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={containerVariants(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-sm text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-10 flex justify-end items-center"> {/* Adjusted alignment */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-end"
            style={{ marginTop: "70px", marginBottom: "5px" }}
          >
            <motion.img
              className="rounded-2xl"
              src={profilePic}
              alt="Navya Nagabhiru"
              style={{ maxWidth: "85%", height: "auto" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
