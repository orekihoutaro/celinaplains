import React from 'react'
import herobg from '../assets/herobg.jpg'
import { motion } from 'framer-motion'
import celina from '../assets/celina-bg.jpg'

const Hero = () => {
  return (
    <div className="relative">
      <img src={celina} alt="celina" draggable="false" className="fixed object-cover w-full h-full -z-50 blur-sm" autoPlay loop/>
      <motion.div
        initial={{ y: "-50vw" }}
        animate={{ y:0 }}
        transition={{ type: "spring", stiffness: 80, delay: 0.4}}
        className="absolute w-1/2 -z-10 sm:w-1/3 md:w-1/4 top-24 sm:top-36 md:top-40 left-5 md:left-20">
        <img src={herobg} draggable="false" alt="hero" className="object-cover w-full h-full"/>
      </motion.div>  
      <motion.h1 
        initial={{ x: "-50vw"}}
        animate={{ x:0 }}
        transition={{ type: "spring", stiffness: 40, delay: 0.4}}
        className="absolute text-4xl font-semibold text-blue-500 top-48 sm:top-60 md:top-72 left-12 md:left-36 sm:text-5xl md:text-7xl lg:text-8xl font-poppins drop-shadow-2xl">C E L I N A</motion.h1>
      <motion.h1 
          initial={{ y: "150vw"}}
          animate={{ y:0 }}
          transition={{ type: "spring", stiffness: 40, delay: 0.4}}
          className="absolute z-30 text-2xl font-semibold text-white top-60 sm:top-72 md:top-96 left-36 sm:left-48 md:left-72 sm:text-3xl md:text-4xl lg:text-5xl font-poppins drop-shadow-2xl">P L A I N S</motion.h1>
      <motion.p 
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1}}
        className="absolute z-10 text-xl font-semibold text-white sm:text-2xl md:text-3xl top-80 sm:top-96 md:top-120 left-1/2 sm:left-1/2 font-poppins">
        Discover Your Serene Haven at Celina Plains <br/> Where Peaceful Living Begins
      </motion.p>
      <motion.div 
        initial={{ y: "150vw"}}
        animate={{ y:0 }}
        transition={{ type: "spring", stiffness: 40, delay: 0.4}}
        className="absolute w-1/4 bg-blue-300 top-36 sm:top-48 md:top-56 left-10 sm:left-20 h-1/2 -z-20">
      </motion.div>
    </div>
  )
}

export default Hero
