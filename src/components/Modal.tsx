import React from 'react';
import { X, Download } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-auto">
        <div className="sticky top-0 bg-gray-900 p-4 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Resume</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold">Ismoil Sayfitdinov</h1>
                <p className="text-gray-400">Frontend Developer</p>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
                  <Download size={20} />
                  Download PDF
                </button>
              </div>
            </div>
            
            <div className="flex gap-4 text-sm text-gray-400">
              <span>ismoilfronted@gmail.com</span>
              <span>•</span>
              <span>+998 (97) 704 25 53</span>
              <span>•</span>
              <span>Uzbekistan, Tashkent</span>
            </div>
          </div>

          <section>
            <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
            <p className="text-gray-300">
              Frontend Developer with 1 years of experience building scalable web applications.
              Specialized in Next Js ecosystem and modern JavaScript. Strong focus on performance optimization
              and responsive design.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
            <div className="space-y-6">
              
              <div>
                <div className="flex justify-between mb-2">
                  <div>
                    <h4 className="font-semibold">Frontend Developer</h4>
                    <p className="text-purple-400 mt-1">Repid Uzbekistan</p>
                  </div>
                  <p className="text-gray-400">2023</p>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Developed responsive web applications using Next Js</li>
                  <li>Implemented CRM system using Next Js pipelines</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <ul className="list-disc list-inside text-gray-300">
                  <li>React Js</li>
                  <li>JavaScript</li>
                  <li>Next.js</li>
                  <li>TailwindCSS</li>
                  <li>React Query</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tools & Others</h4>
                <ul className="list-disc list-inside text-gray-300">
                  <li>GitLab & GitHub</li>
                  <li>Webpack & Vite</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div>
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
                  <p className="text-purple-400">Najot Talim Academy</p>
                </div>
                <p className="text-gray-400">2023-03-20  - 2023-10-20</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Modal;