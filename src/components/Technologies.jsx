import React from 'react';
import {RiReactjsLine} from "react-icons/ri";
import {SiMongodb} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import {BiLogoPostgresql} from "react-icons/bi";
import { SiAngular } from 'react-icons/si';
import { SiMysql } from "react-icons/si";
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io'
import { DiJsBadge } from 'react-icons/di'
import { DiDjango } from "react-icons/di";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
const Technologies = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.3,    // Trigger animation when 50% of element is in view
      });
    const iconVariants=(duration)=>({
        initial:{y:-10},
        animate:{
            y:[10,-10],
            transition:{
                duration:duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse",
            }
        },
    });
  return (
    <div id="Technologies" className="border-b border-neutral-800 pb-4">
        <motion.h2
        ref={ref}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
        initial={{opacity:0, y:-100}}
        transition={{duration: 1}}
         className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        ref={ref}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
        initial={{opacity:0, x:-100}}
        transition={{duration: 1}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-2">
                <RiReactjsLine className="text-5xl text-cyan-400" />
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-2">
                <SiMongodb className="text-5xl text-green-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-2">
                <SiAngular className="text-5xl text-red-500" />
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2">
                <FaNodeJs className="text-5xl text-green-500" />
            </motion.div>
            <motion.div 
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-2">
                <BiLogoPostgresql className="text-5xl text-sky-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-2">
                <DiJsBadge className="text-5xl" style={{  color: '#fcb900' }} />
            </motion.div>
            <motion.div
            variants={iconVariants(5.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-2">
                <SiMysql className="text-5xl text-sky-500" />
            </motion.div>
            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-2">
                <FaHtml5 className="text-5xl" style={{ fontSize: '10xl', color: '#F16529' }} />
            </motion.div>
            <motion.div
            variants={iconVariants(6.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-2">
                <IoLogoCss3 className="text-5xl" style={{  color: '#006fc4' }} />
            </motion.div>
            <motion.div
            variants={iconVariants(7)}
            initial="initial"
            animate="animate"
             className='my-6 rounded-2xl border-4 border-neutral-800 p-2'>
                <DiDjango className="text-5xl " style={{  color: '#0c4b33' }} />
            </motion.div>
        </motion.div>
    </div>
  );
};

export default Technologies;
