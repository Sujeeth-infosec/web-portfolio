import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Shield, Database, Terminal, Box, Globe, Cpu } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, items }: { icon: any, title: string, items: string[] }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-dark-100 p-6 rounded-lg transform transition-all duration-300 hover:shadow-xl"
  >
    <div className="flex items-center gap-3 mb-4">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-6 h-6 text-accent-500" />
      </motion.div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-gray-400 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
          {item}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const Skills = () => {
  const skillsData = [
    {
      icon: Code,
      title: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      items: ["React.js", "Node.js", "Express.js", "RESTful APIs", "GraphQL"]
    },
    {
      icon: Cloud,
      title: "AWS Cloud",
      items: [
        "EC2 Instance",
        "S3 Bucket",
        "VPC",
        "Lambda",
        "IAM",
        "Cloud Watch"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      items: [
        "Web Penetration Testing",
        "Vulnerability Assessment",
        "Digital Forensics",
        "Security Hardening"
      ]
    },
    {
      icon: Terminal,
      title: "Development Tools",
      items: ["Git", "Docker", "VS Code", "Postman", "Linux"]
    },
    {
      icon: Database,
      title: "Databases",
      items: ["MySQL", "MongoDB", "PostgreSQL", "Database Security"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized in web development, cybersecurity, cloud infrastructure, and modern development practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillCard
                  icon={skill.icon}
                  title={skill.title}
                  items={skill.items}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12 text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Microsoft Certified: Azure Administrator Associate",
                "Certified Linux File System Professional",
                "Infosys: Cyber Security and Applied Ethical Hacking",
                "Cisco: Ethical Hacker"
              ].map((cert, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-dark-100 text-gray-300 px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-dark-200 transition-colors duration-200"
                >
                  {cert}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;