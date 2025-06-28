import React from 'react';
import { ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Global Health Security Framework',
      category: 'Health Policy',
      description: 'Comprehensive analysis of pandemic preparedness policies across 30 countries, resulting in actionable recommendations for strengthening global health security infrastructure.',
      image: 'https://images.pexels.com/photos/3951628/pexels-photo-3951628.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '18 months',
      stakeholders: '15 countries',
      impact: '95% implementation rate',
      tags: ['Global Health', 'Policy Framework', 'International Cooperation'],
    },
    {
      title: 'Education Equity Assessment',
      category: 'Education Policy',
      description: 'Multi-state analysis of educational disparities and policy interventions, providing evidence-based recommendations for improving educational outcomes in underserved communities.',
      image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '12 months',
      stakeholders: '25 school districts',
      impact: '$50M funding secured',
      tags: ['Education Reform', 'Equity Analysis', 'Evidence-Based Policy'],
    },
    {
      title: 'Climate Adaptation Strategy',
      category: 'Environmental Policy',
      description: 'Development of climate resilience policies for coastal communities, incorporating economic impact analysis and stakeholder engagement to create sustainable adaptation strategies.',
      image: 'https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '24 months',
      stakeholders: '8 coastal states',
      impact: '40% emissions reduction',
      tags: ['Climate Policy', 'Adaptation Strategy', 'Economic Analysis'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Impactful policy analysis projects that have shaped decision-making across various sectors
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Calendar className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-gray-600">{project.duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-gray-600">{project.stakeholders}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-gray-600">{project.impact}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>View Details</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;