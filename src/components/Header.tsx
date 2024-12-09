import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-dark-200/80 backdrop-blur-sm z-50 border-b border-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-white">Sujeeth Kumar</h1>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
            <div className="flex items-center gap-4">
              <a href="https://github.com/Sujeeth-infosec" target="_blank" rel="noopener noreferrer" 
                 className="social-icon" title="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sujeethkumararjun" target="_blank" rel="noopener noreferrer"
                 className="social-icon" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:sujeethkumararjun@gmail.com"
                 className="social-icon" title="Email">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+918688466702"
                 className="social-icon" title="Phone">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;