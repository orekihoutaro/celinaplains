import React from 'react';
import { motion } from 'framer-motion';
import Video from './Video';
import NewsFeed from './NewsFeed';

const About = () => {
  return (
    <section id="about" className="absolute flex flex-col w-full bg-white top-80 sm:top-96 md:top-112 xs:bg-transparent">
        <div className="flex flex-col md:flex-row">
            <div className="flex flex-col gap-4 p-4 sm:p-8">
                {/* Your motion.div elements and contents */}
            </div>
            <div className="w-full">
                <motion.div
                    initial={{ x: "150vw" }}
                    animate={{ x:0 }}
                    whileInView="show"
                    transition={{ type: "spring", stiffness: 40, delay: 0.4}}
                    className="flex flex-col justify-start p-4 font-semibold text-black sm:p-8 font-poppins"
                    >
                    <h1 className="py-2 text-2xl text-black sm:py-4 sm:text-3xl font-poppins">Find us here </h1>
                    <iframe src="https://www.google.com/maps/d/u/7/embed?mid=1rSKTnKNq9Kuo62S8eeERRZf2f0pTW5c&ehbc=2E312F" className="w-full h-64 sm:h-96"></iframe>
                </motion.div>
            </div>
        </div>
        <Video />
    </section>
  )
}

export default About
