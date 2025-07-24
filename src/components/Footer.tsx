
import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Personal Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Aavishkar Kamble</h3>
            <p className="text-gray-300 mb-4">
              Full Stack Developer passionate about creating innovative web solutions 
              and exploring the latest technologies.
            </p>
            <p className="text-gray-400 text-sm">
              📍 Mumbai, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-pulse-400 transition-colors duration-200">About</a>
              <a href="#projects" className="block text-gray-300 hover:text-pulse-400 transition-colors duration-200">Projects</a>
              <a href="#skills" className="block text-gray-300 hover:text-pulse-400 transition-colors duration-200">Skills</a>
              <a href="#contact" className="block text-gray-300 hover:text-pulse-400 transition-colors duration-200">Contact</a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:aavishkarkamble04@gmail.com" 
                className="flex items-center space-x-2 text-gray-300 hover:text-pulse-400 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>aavishkarkamble04@gmail.com</span>
              </a>
              <a 
                href="tel:+919325350688" 
                className="flex items-center space-x-2 text-gray-300 hover:text-pulse-400 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>+91-9325350688</span>
              </a>
            </div>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://linkedin.com/in/aavishkar-kamble" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pulse-400 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/aavishkarkamble" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pulse-400 transition-colors duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Aavishkar Kamble. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
