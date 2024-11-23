import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="min-h-screen py-20">
      <h2 className="text-4xl font-bold mb-12 relative">
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          {title}
        </span>
        <div className="absolute -bottom-4 left-0 w-20 h-1 bg-purple-600" />
      </h2>
      {children}
    </section>
  );
};

export default Section;