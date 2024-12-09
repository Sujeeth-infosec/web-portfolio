import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  homepage: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Sujeeth-infosec/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        // Filter out forked repositories and sort by created date
        const filteredProjects = data
          .filter((repo: Repository) => !repo.fork)
          .sort((a: Repository, b: Repository) => 
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          )
          .slice(0, 6); // Get the 6 most recent projects
        setProjects(filteredProjects);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
          
          {loading && (
            <div className="text-center text-gray-400">
              Loading projects...
            </div>
          )}

          {error && (
            <div className="text-center text-red-500">
              {error}
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                title={project.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                description={project.description || 'No description available'}
                technologies={project.topics.length > 0 ? project.topics : ['N/A']}
                github={project.html_url}
                live={project.homepage}
              />
            ))}
          </div>

          {!loading && !error && projects.length === 0 && (
            <div className="text-center text-gray-400">
              No projects found.
            </div>
          )}

          <div className="text-center mt-12">
            <a
              href="https://github.com/Sujeeth-infosec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-500 text-white px-6 py-2 rounded-lg hover:bg-accent-600 transition-colors duration-200"
            >
              View More on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;