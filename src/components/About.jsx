import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id }) => (
  <motion.section
    id={id}
    className="min-h-screen flex flex-col justify-center py-16"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.section>
);

const About = () => {
  return (
    <SectionWrapper id="about">
      <h2 className="text-4xl font-bold mb-8 text-center md:text-left">About Me</h2>
      <div className="space-y-6 text-lg text-text-dark max-w-4xl mx-auto md:mx-0 text-center md:text-left">
        <p>
          Hello! I'm Jatin, a full-stack developer and AI engineer passionate about building things that live on the internet. My interest in web development started back in college when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p>
          Fast-forward to today, and I’ve had the privilege of working on a diverse range of projects. My main focus these days is building accessible, inclusive products and digital experiences. I also have a deep interest in artificial intelligence and machine learning, constantly exploring ways to integrate intelligent features into applications.
        </p>
        <p>
          When I'm not at the computer, I'm usually reading, exploring new music, or enjoying a good cup of coffee.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;