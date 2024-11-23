import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Briefcase, User, Mail, Github, Linkedin, ExternalLink, ChevronRight, Terminal, Gitlab, Instagram, TableCellsMerge } from 'lucide-react';
import Modal from './components/Modal';
import ProjectCard from './components/ProjectCard';
import Section from './components/Section';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Nav from './components/Nav';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Repid",
      description: "Full-featured online store with cart management, payment processing, and real-time inventory",
      tech: ["Next js", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      link: "https://www.repid.uz/"
    },
    {
      title: "Repid CRM",
      description: "Real-time data visualization platform with customizable widgets and reporting",
      tech: ["Next.js", "Chart Js", "Tailwind CSS", "Highcharts"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "http://crm.repid.uz"
    },
    {
      title: "Thenew Education",
      description: "Feature-rich social platform with real-time messaging and content sharing",
      tech: ["Next Js"],
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80",
      link: "https://www.theneweducation.uz/"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Nav activeSection={activeSection} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      <main className="container mx-auto px-4 pt-20">
        <section id="hero" className="min-h-screen flex items-center">
          <div className="space-y-6">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Frontend Developer
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Crafting pixel-perfect, responsive, and accessible web experiences with modern technologies
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all flex items-center gap-2"
              >
                View Resume <ChevronRight size={20} />
              </button>
              <a
                href="#contact"
                className="px-6 py-3 border border-purple-600 rounded-lg hover:bg-purple-600/10 transition-all flex items-center gap-2"
              >
                Contact Me <Mail size={20} />
              </a>
            </div>
          </div>
        </section>

        <Section id="about" title="About Me">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                With over 1 years of experience in frontend development, I specialize in building scalable, performant web applications using modern JavaScript frameworks and tools.
              </p>
              <TechStack />
            </div>
            <div className="relative">
              <img
                src="https://images.stockcake.com/public/a/4/b/a4b3e994-37e9-45e2-87cd-9f7418f5de1f_large/focused-code-developer-stockcake.jpg"
                alt="Profile"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-purple-600 p-4 rounded-lg">
                <Code2 size={32} />
              </div>
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <Timeline />
        </Section>

        <Section id="projects" title="Featured Projects">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Technical Skills">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Frontend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>React Js</li>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>TailwindCSS & Styled Components</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Python</li>
                <li>Django</li>
                <li>PostgreSQL</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
              <ul className="space-y-2 text-gray-300">
                <li>GitLab & GitHub</li>
                <li>Vs Code</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Get in Touch">
          <Contact />
        </Section>
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <footer className="bg-gray-900 mt-20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">© 2024 All rights reserved</p>
            <div className="flex gap-4">
              <a href="https://github.com/IsmoilSayfitdinov" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://gitlab.com/ismoilfronted" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Gitlab size={24} />
              </a>
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;