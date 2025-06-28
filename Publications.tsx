import React from 'react';
import { BookOpen, ExternalLink, Calendar, Eye } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'Strengthening Global Health Security: Lessons from COVID-19',
      journal: 'Health Policy Journal',
      year: '2023',
      type: 'Peer-reviewed Article',
      views: '12,500',
      description: 'Analysis of pandemic response policies and recommendations for future preparedness.',
      link: '#',
    },
    {
      title: 'Educational Equity in Post-Pandemic Recovery',
      journal: 'Education Policy Review',
      year: '2023',
      type: 'Research Report',
      views: '8,300',
      description: 'Comprehensive study on addressing educational disparities through targeted policy interventions.',
      link: '#',
    },
    {
      title: 'Climate Adaptation Strategies for Coastal Communities',
      journal: 'Environmental Policy Quarterly',
      year: '2022',
      type: 'Policy Brief',
      views: '15,200',
      description: 'Evidence-based recommendations for climate resilience in vulnerable coastal regions.',
      link: '#',
    },
    {
      title: 'Healthcare System Resilience: A Framework for Assessment',
      journal: 'Journal of Health Economics',
      year: '2022',
      type: 'Peer-reviewed Article',
      views: '9,700',
      description: 'Novel framework for evaluating healthcare system preparedness and response capabilities.',
      link: '#',
    },
    {
      title: 'Social Welfare Policy in the Digital Age',
      journal: 'Public Administration Review',
      year: '2021',
      type: 'Research Article',
      views: '6,800',
      description: 'Examining how digital transformation affects social welfare program delivery and outcomes.',
      link: '#',
    },
    {
      title: 'Evidence-Based Policy Making: A Practitioner\'s Guide',
      journal: 'Policy Studies Journal',
      year: '2021',
      type: 'Methodology Paper',
      views: '11,400',
      description: 'Practical framework for integrating research evidence into policy development processes.',
      link: '#',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Publications & Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to the academic discourse on policy analysis and evidence-based decision making
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors duration-200">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{pub.year}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{pub.views}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-3">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                  {pub.type}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                {pub.title}
              </h3>
              
              <p className="text-blue-600 font-medium mb-3">{pub.journal}</p>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                {pub.description}
              </p>
              
              <a
                href={pub.link}
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
              >
                <span>Read Publication</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            View All Publications
          </button>
        </div>
      </div>
    </section>
  );
};

export default Publications;