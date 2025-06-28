import React from 'react';
import { ArrowDown, Download, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Policy Analysis for
              <span className="text-blue-600 block">Meaningful Change</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              I transform complex policy challenges into actionable insights that drive evidence-based decision making for governments and organizations worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View My Work
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </button>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Policy analyst working with data"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">150+</div>
                <div className="text-sm text-gray-600">Policy Reports</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-600" />
      </div>
    </section>
  );
};

export default Hero;