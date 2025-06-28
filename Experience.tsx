import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Policy Analyst',
      organization: 'World Health Organization',
      location: 'Geneva, Switzerland',
      period: '2020 - Present',
      description: 'Leading policy analysis for global health initiatives, developing evidence-based recommendations for member states on healthcare system strengthening and pandemic preparedness.',
      achievements: [
        'Authored 25+ policy briefs influencing WHO guidelines',
        'Led stakeholder consultations across 15 countries',
        'Developed framework for health system resilience assessment',
      ],
    },
    {
      title: 'Policy Research Manager',
      organization: 'Brookings Institution',
      location: 'Washington, DC',
      period: '2018 - 2020',
      description: 'Managed policy research projects focusing on education reform and social welfare programs, conducting quantitative analysis and stakeholder engagement.',
      achievements: [
        'Published 15 research reports on education policy',
        'Presented findings to Congressional committees',
        'Managed $2M research budget across 8 projects',
      ],
    },
    {
      title: 'Policy Analyst',
      organization: 'Department of Education',
      location: 'Washington, DC',
      period: '2016 - 2018',
      description: 'Analyzed federal education policies, conducted impact assessments, and supported policy development for K-12 education programs.',
      achievements: [
        'Evaluated impact of Title I funding on student outcomes',
        'Supported development of ESSA implementation guidelines',
        'Coordinated with 50+ state education agencies',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through impactful policy work across leading institutions
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="md:ml-16">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-600 font-semibold mb-2">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {exp.organization}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end text-gray-600">
                        <div className="flex items-center mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;