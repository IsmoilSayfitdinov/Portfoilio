import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tech, image, link }) => {
  return (
    <div className="group relative bg-gray-900 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={link}
            className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <ExternalLink size={23} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;