import React from 'react';

const Timeline: React.FC = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Repid",
      period: "2023",
      description: "Built websites for various clients",
      achievements: [
        "Delivered 6+ client projects",
        "Learned modern web technologies",
        "Improved site performance"
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-purple-600">
          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-600 rounded-full" />
          <div className="mb-1 flex justify-between items-center">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <span className="text-purple-400">{exp.period}</span>
          </div>
          <p className="text-purple-400 mb-2">{exp.company}</p>
          <p className="text-gray-300 mb-4">{exp.description}</p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            {exp.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Timeline;