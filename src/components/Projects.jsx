import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projectData = [
  {
    title: 'Axon: Contextual AI Query Bot',
    description: "Axon is a sophisticated, full-stack Proof of Concept for a multi-agent AI assistant. It provides a single, conversational interface to access information from two distinct sources: a structured PostgreSQL database and an unstructured document knowledge base. The core of Axon is an intelligent agent that analyzes the user's natural language query and autonomously decides which tool is best suited to answer it—either by querying the database or by searching through documents.",
    tags: ['Gradio', 'FastAPI', 'Python', 'Gemini', 'Auto Gen'],
    liveUrl: '#',
    codeUrl: 'https://github.com/GuptaKJatin/Axon',
  },
  {
    title: 'InsightBox - Offline AI Query Bot',
    description: "An offline-ready RAG chatbot powered by Ollama (local LLM), designed to simplify knowledge access in remote or low-connectivity regions. The system automatically generates vector stores for every document placed in a designated folder, enabling instant context-aware Q&A. Built using LangChain and FAISS, it supports schools, communities, and organizations in sharing knowledge seamlessly without relying on the internet.",
    tags: ['Gradio', 'FastAPI', 'Python', 'ollama', 'RAG','SentenceTransformer'],
    liveUrl: '#',
    codeUrl: 'https://github.com/GuptaKJatin/InsightBox',
  },
  {
    title: 'Serverless Data Processing Pipeline',
    description: 'A cost-effective and scalable data pipeline built on AWS Lambda and S3 for processing and analyzing large datasets automatically.',
    tags: ['AWS Lambda', 'S3', 'Python', 'Serverless'],
    liveUrl: '#',
    codeUrl: '#',
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col justify-center py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-12 text-center">Things I've Built</h2>
      <div className="space-y-12">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 md:p-8 border border-accent rounded-lg bg-background/50 backdrop-blur-sm shadow-lg transition-all duration-300 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/20"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-3">{project.title}</h3>
            <p className="text-text-dark mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-accent text-sm rounded-full">{tag}</span>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-secondary transition-colors"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}              
              {project.codeUrl && (
                <a href={project.codeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <FaGithub /> View Code
              </a>)}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;