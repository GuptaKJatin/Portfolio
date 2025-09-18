import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws,FaRobot,FaMicrosoft,FaDatabase    } from 'react-icons/fa';
import { SiDjango, SiGit, SiPostgresql,SiTailwindcss, SiMongodb, SiTensorflow, SiNextdotjs,SiGooglecloud,SiHuggingface,SiScikitlearn } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: '.Net Core', icon: <SiNextdotjs /> }, // No direct .NET icon in react-icons, using Next.js as placeholder or consider SiDotnet if available
  { name: 'SQL', icon: <FaDatabase   /> }, // No direct SQL icon, using MongoDB as placeholder or consider SiMysql/SiPostgresql if available
  { name: 'FastAPI', icon: <FaPython /> }, // No FastAPI icon, using Python as closest
  { name: 'Django', icon: <SiDjango /> }, // No FastAPI icon, using Python as closest
  { name: 'Python', icon: <FaPython /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'PostgreSQL', icon: <SiPostgresql  /> }, // No direct PostgreSQL icon imported, consider SiPostgresql
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'TensorFlow', icon: <SiTensorflow /> },
  { name: 'Hugging Face', icon: <SiHuggingface  /> },
  { name: 'sikit learn', icon: <SiScikitlearn  /> },
  { name: 'Ollama', icon: <FaRobot  /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'GCP', icon: <SiGooglecloud /> }, // No GCP icon imported, using AWS as placeholder or consider SiGooglecloud if available
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Git', icon: <SiGit /> },
  { name: 'TFS', icon: <FaMicrosoft /> },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="min-h-screen flex flex-col justify-center py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Technologies I Use</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-background/50 border border-accent rounded-lg"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(188, 111, 241, 0.5)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-5xl text-secondary mb-3">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;