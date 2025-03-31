import React from 'react';
import { FaGraduationCap, FaBriefcase, FaRocket, FaProjectDiagram } from 'react-icons/fa';
import Image from 'next/image';

interface ExperienceProps {
  images: string[];
  title: string;
  role: string;
  period: string;
  description: string;
  achievements?: string[];
  businessResults?: string[];
  isReversed?: boolean;
  isLast?: boolean;
  type?: 'education' | 'work' | 'project';
  website?: string;
}

const Experience = ({
  images,
  title,
  role,
  period,
  description,
  achievements,
  businessResults,
  isReversed = false,
  isLast = false,
  type = 'work',
  website
}: ExperienceProps) => {
  const Icon = type === 'education' ? FaGraduationCap : type === 'project' ? FaProjectDiagram : FaBriefcase;

  return (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 relative`}>
      {/* Timeline Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200" />
      
      {/* Timeline Dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-700 flex items-center justify-center">
          <Icon size={16} color="#374151" />
        </div>
      </div>

      {/* Content */}
      <div className={`w-full md:w-1/2 ${isReversed ? 'md:pr-8' : 'md:pl-8'}`}>
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-700">{title}</h3>
            {website && (
              <a 
                href={website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 text-sm"
              >
                Visit Website →
              </a>
            )}
          </div>
          <p className="text-gray-700 mb-2">{role}</p>
          <p className="text-sm text-gray-600 mb-4">{period}</p>
          <p className="text-gray-700 mb-4">{description}</p>
          
          {achievements && achievements.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Achievements</h4>
              <ul className="space-y-2 text-gray-700">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mt-2 mr-2"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {businessResults && businessResults.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Business Impact</h4>
              <ul className="space-y-2 text-gray-700">
                {businessResults.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-gray-700 rounded-full mt-2 mr-2"></span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Images */}
      <div className={`w-full md:w-1/2 ${isReversed ? 'md:pl-8' : 'md:pr-8'}`}>
        <div className="grid grid-cols-3 gap-2">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square">
              <Image
                src={image}
                alt={`${title} image ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
