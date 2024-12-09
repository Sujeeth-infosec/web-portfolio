import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-accent-500 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" /> Education
              </h3>
              <div className="space-y-4">
                <div className="bg-dark-100 p-4 rounded-lg">
                  <h4 className="text-white font-medium">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-gray-400">Annamacharya Institute of Technology and Science</p>
                  <p className="text-gray-500">2022 – 2025 | Tirupati, India</p>
                </div>
                <div className="bg-dark-100 p-4 rounded-lg">
                  <h4 className="text-white font-medium">Diploma in Computer Science and Engineering</h4>
                  <p className="text-gray-400">Sri Venkateshwara Polytechnic College</p>
                  <p className="text-gray-500">2015 – 2022 | Tirupati, India</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-accent-500 flex items-center gap-2">
                <Briefcase className="w-5 h-5" /> Experience
              </h3>
              <div className="space-y-4">
                <div className="bg-dark-100 p-4 rounded-lg">
                  <h4 className="text-white font-medium">Cyber Security Analyst Intern</h4>
                  <p className="text-gray-400">Center for Cyber Security Studies And Research</p>
                  <p className="text-gray-500">April 2024 – July 2024 | Jaipur, India</p>
                </div>
                <div className="bg-dark-100 p-4 rounded-lg">
                  <h4 className="text-white font-medium">Security Analyst Intern</h4>
                  <p className="text-gray-400">Cyberfort Digisec Solutions</p>
                  <p className="text-gray-500">January 2022 – May 2022 | Chennai, India</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;