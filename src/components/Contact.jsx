import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-center py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
      <p className="max-w-xl text-text-dark mb-8">
        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open and I'll get back to you!
      </p>
      <motion.a
        href="mailto:your-email@example.com"
        className="px-8 py-4 border border-secondary text-secondary font-semibold rounded-lg shadow-lg hover:bg-secondary hover:text-white transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Say Hello
      </motion.a>
    </motion.section>
  );
};

export default Contact;