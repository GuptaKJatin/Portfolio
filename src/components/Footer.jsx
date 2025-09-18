import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-accent/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 flex flex-col sm:flex-row justify-between items-center text-center">
        <p className="text-text-dark mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Jatin Kumar Gupta. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" target="_blank" rel="noreferrer" className="text-2xl text-text-dark hover:text-secondary transition-colors"><FaGithub /></a>
          <a href="#" target="_blank" rel="noreferrer" className="text-2xl text-text-dark hover:text-secondary transition-colors"><FaLinkedin /></a>
          <a href="#" target="_blank" rel="noreferrer" className="text-2xl text-text-dark hover:text-secondary transition-colors"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;