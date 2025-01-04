import { useState, useEffect } from 'react';
import {  Code2,  Mail, Github,  ChevronRight,Gitlab, } from 'lucide-react';
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
      description: "campaign landing page",
      tech: ["Next js", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      link: "https://www.repid.uz/"
    },
    {
      title: "Reduce CRM",
      description: "The crm system for restaurant management for reduce was made by rapid campaign",
      tech: ["Next.js", "Chart Js", "Tailwind CSS", "Highcharts"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "http://crm.repid.uz"
    },
    {
      title: "Thenew Education",
      description: "engilish school landing page",
      tech: ["Next Js"],
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80",
      link: "https://www.theneweducation.uz/"
    },
    {
      title: "OTMK CRM",
      description: "crm made for government to manage employees and developers",
      tech: ["Next Js", "React Query", "Tailwind CSS", "Shadcn UI", "Chart Js", "Highcharts",],
      image: "https://i.ytimg.com/vi/0l_z0vW5qqU/sddefault.jpg",
      link: "https://crmotmk.repid.uz"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Nav activeSection={activeSection} isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      <main className="container mx-auto px-4 pt-20">
        <section id="hero" className="min-h-screen flex items-center justify-between ">
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
          <div className='hidden lg:block'>
            <img className='rounded-[30%]' src='https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg'/>
          </div>
        </section>

        <Section id="about" title="About Me">
          <div className="grid mobile:grid-cols-1  gap-12 items-center ">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
              <p>
                🌍 I have been working in the field of programming for 1 years and have gained experience by participating in many projects. I am proficient in JavaScript, Python programming languages. I continue to learn different new knowledge during each work experience. My goal is to benefit everyone by doing their job perfectly 💻✨
              </p>
              <div className='h-[1px] my-6 w-full bg-gray-700'></div>
              <p>
                Proficient in various programming languages including JavaScript. Possess 1 years of hands-on experience in software development using leading frameworks and tools. Adept at gathering business requirements, designing software architectures, and delivering high-quality solutions across the software development lifecycle.
              </p>
              <div className='h-[1px] my-6 w-full bg-gray-700'></div>

              <p>
                💻Languages and Frameworks: Python, JavaScript, React Js, Next Js, Database, PostgreSQL, Chatgpt, Github, API, Django
              </p>
              <div className='h-[1px] my-6 w-full bg-gray-700'></div>

              <p>
                📈Highly skilled and experienced in:
              </p>
              
              <br/>

              <ul>
                <li>✔️Software development</li>
                <li>✔️API</li>
                <li>✔️Software Architecture Design</li>
                <li>✔️Version Control (GIT)</li>
                <li>✔️JavaScript || Python</li>
                <li>✔️Solves for bugs</li>
                <li>✔️Testing programs</li>
                <li>✔️Coding high quality</li>
              </ul>
              <div className='h-[1px] my-6 w-full bg-gray-700'></div>

              <p>
                💡 What I Can Do for You:
              </p>
              <br/>
              <ul>
                <li>
                  Software Development: Full-cycle software development from concept to deployment, ensuring the highest quality at every stage.
                </li>
                <li>
                  API Development: Expert in building and integrating RESTful APIs for seamless communication between systems.
                </li>
                <li>
                  Database Management: Proficient in PostgreSQL, and advanced database design, ensuring smooth data handling and optimization.
                </li>
                <li>
                  Bug Fixing & Testing: Quick to identify and solve bugs, and ensure robust testing for smooth performance.
                </li>
                <li>
                  Version Control: Fluent in Git to maintain clean and efficient collaboration on projects.
                </li>
              </ul>
              <div className='h-[1px] my-6 w-full bg-gray-700'></div>

              <p>
                🛠 Technical Expertise:
              </p>
              <br/>
              <ul>
                <li>Languages: Python, JavaScript</li>
                <li>Frameworks: React Js, Django, Next Js</li>
                <li>Databases: PostgreSQL</li>
                <li>Tools: GitHub, Git, ChatGPT, API, Aiogram</li>
                <li>
                  Software Architecture: Expertise in designing efficient, scalable architectures for complex software solutions
                </li>
              </ul>
              <div className='h-[1px] my-6 w-full bg-gray-700'></div>

              <p>
                📧I want to cooperate with you for a long time. Of course, the assigned task is performed very skillfully and handed over to the client. Each job is done perfectly according to the client's requirements. Contact me I will be happy to work with you. I look forward to your offer.
              </p>
              <div className='h-[1px] my-6 w-full bg-gray-700'></div>


              </p>
              <TechStack />
            </div>
            <div className="relative block sm:hidden">
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

        <Section id="experience" title="Experience" >
          <Timeline />
        </Section>

        <Section id="projects" title="Featured Projects">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                <li>React Query</li>
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