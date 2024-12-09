import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, Cloud, Container } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-200 to-dark-300 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Bommu Sujeeth Kumar
          </h1>
          <div className="flex justify-center gap-4 mb-6">
            <Shield className="w-8 h-8 text-accent-500" />
            <Cloud className="w-8 h-8 text-accent-500" />
            <Container className="w-8 h-8 text-accent-500" />
          </div>
          <p className="text-xl text-gray-300 mb-8">
            Cybersecurity Analyst & Cloud Security Specialist
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Final-year Computer Science Engineering student specializing in Cybersecurity, AWS Cloud, and Docker. 
            Passionate about creating secure and innovative solutions with expertise in Python development and cloud infrastructure.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href="#projects" className="btn btn-outline">View Projects</a>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-12"
          >
            <ChevronDown className="w-6 h-6 mx-auto text-accent-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;