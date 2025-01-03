import React from 'react';
import { Code2, Database, Terminal } from 'lucide-react';

const TechStack: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-900 p-6 rounded-lg">
        <Code2 className="mb-4 text-purple-500" size={32} />
        <h3 className="text-xl font-semibold mb-2">Frontend</h3>
        <ul className="space-y-2 text-gray-300">
          <li>React & Next.js</li>
          <li>React Query</li>
          <li>JavaScript</li>
          <li>TailwindCSS</li>
        </ul>
      </div>
      
      <div className="bg-gray-900 p-6 rounded-lg">
        <Database className="mb-4 text-purple-500" size={32} />
        <h3 className="text-xl font-semibold mb-2">Backend</h3>
        <ul className="space-y-2 text-gray-300">
          <li>Python</li>
          <li>Django</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
      
      <div className="bg-gray-900 p-6 rounded-lg">
        <Terminal className="mb-4 text-purple-500" size={32} />
        <h3 className="text-xl font-semibold mb-2">Tools</h3>
        <ul className="space-y-2 text-gray-300">
          <li>GitLab & GitHub</li>
          <li>Vs Code</li>
        </ul>
      </div>
    </div>
  );
};

export default TechStack;