import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold">Let's Work Together</h3>
        <p className="text-gray-300">
          I'm always interested in hearing about new projects and opportunities.
          Feel free to reach out if you'd like to connect!
        </p>
        <div className="flex items-center gap-2 text-purple-400">
          <Mail size={20} />
          <a href="mailto:contact@example.com">ismoilfronted@gmail.com</a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all flex items-center justify-center gap-2"
        >
          Send Message
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default Contact;