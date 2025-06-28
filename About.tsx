import React from 'react';
import { Award, BookOpen, Globe, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Globe, value: '25+', label: 'Countries Analyzed' },
    { icon: BookOpen, value: '150+', label: 'Policy Reports' },
    { icon: Award, value: '10+', label: 'Awards Received' },
    { icon: Users, value: '50+', label: 'Stakeholder Engagements' },
  ];

  const expertise = [
    'Public Policy Analysis',
    'Economic Impact Assessment',
    'Social Policy Development',
    'Environmental Policy',
    'Healthcare Policy',
    'Education Reform',
    'Data-Driven Research',
    'Stakeholder Engagement',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transforming Policy Through Evidence
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over 8 years of experience in policy analysis, I specialize in translating complex research into actionable policy recommendations. My work spans across multiple sectors including healthcare, education, and environmental policy.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I hold a Master's in Public Policy from Georgetown University and have worked with government agencies, NGOs, and international organizations to develop evidence-based solutions for pressing societal challenges.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {expertise.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184337/pexels-photo-3184337.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Policy research and analysis"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">8+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors duration-200">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;