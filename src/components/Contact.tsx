import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );
      
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-200">
      <Toaster position="bottom-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-accent-500">Contact Information</h3>
              <div className="space-y-4">
                <motion.a 
                  href="mailto:sujeethkumararjun@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-accent-500 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                  <span>sujeethkumararjun@gmail.com</span>
                </motion.a>
                <motion.a 
                  href="tel:+918688466702"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 text-gray-400 hover:text-accent-500 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91 8688466702</span>
                </motion.a>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 text-gray-400"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Tirupati, India</span>
                </motion.div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent-500">Social Links</h3>
                <div className="flex gap-4">
                  <motion.a 
                    href="https://github.com/Sujeeth-infosec"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="text-gray-400 hover:text-accent-500 transition-colors duration-200"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/sujeethkumararjun"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    className="text-gray-400 hover:text-accent-500 transition-colors duration-200"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </div>

            <div className="bg-dark-100 p-6 rounded-lg">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full px-4 py-2 bg-dark-200 border border-dark-100 rounded-lg focus:outline-none focus:border-accent-500 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full px-4 py-2 bg-dark-200 border border-dark-100 rounded-lg focus:outline-none focus:border-accent-500 text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-dark-200 border border-dark-100 rounded-lg focus:outline-none focus:border-accent-500 text-white"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className="w-full bg-accent-500 text-white py-2 px-4 rounded-lg hover:bg-accent-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;