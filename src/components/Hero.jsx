import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaTwitter,FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          Jatin Kumar Gupta
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-secondary mt-2">
          <Typewriter
            words={['Full-Stack Developer', 'AI Engineer', 'The LaziCreater']}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="max-w-2xl mt-6 text-lg text-text-dark">
          I build dynamic and intelligent web applications, blending creative front-end experiences with robust back-end logic and AI-powered features.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 flex items-center gap-6"
      >
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-secondary transition-all duration-300 cursor-pointer"
        >
          Connect With Me
        </Link>
        <div className="flex items-center gap-4">
          <a href="https://github.com/GuptaKJatin" target="_blank" rel="noreferrer" className="text-3xl text-text-dark hover:text-secondary transition-colors"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/jatin-kumar-gupta-1b02b0214/" target="_blank" rel="noreferrer" className="text-3xl text-text-dark hover:text-secondary transition-colors"><FaLinkedin /></a>
          <a href="https://www.instagram.com/mr._jatin_/" target="_blank" rel="noreferrer" className="text-3xl text-text-dark hover:text-secondary transition-colors"><FaInstagram /></a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;