import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Sarah Chen</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Transforming complex policy challenges into actionable insights through evidence-based analysis and strategic thinking.
            </p>
            <div className="flex space-x-2">
              <a href="mailto:sarah.chen@policyanalyst.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+15551234567" className="text-gray-300 hover:text-white transition-colors duration-200">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Public Policy Analysis</li>
              <li>Healthcare Policy</li>
              <li>Education Reform</li>
              <li>Environmental Policy</li>
              <li>Social Welfare</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Sarah Chen. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;