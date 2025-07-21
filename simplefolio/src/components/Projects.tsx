import React from 'react';
import { ExternalLink, Github, Bot, Gamepad2, Cpu } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Minecraft AI Bot Platform',
      description: 'TypeScript-based Mineflayer integration allowing scripted gameplay and automation with intelligent bot behaviors.',
      technologies: ['TypeScript', 'Node.js', 'Mineflayer', 'AI'],
      icon: <Bot className="text-purple-400" size={32} />,
      color: 'from-purple-500 to-pink-500',
      link: '#'
    },
    {
      title: 'Tokenizer-to-ONNX Converter',
      description: 'Jupyter toolkit converting Hugging Face tokenizers for cross-language use and optimized inference deployment.',
      technologies: ['Python', 'ONNX', 'Jupyter', 'ML'],
      icon: <Cpu className="text-blue-400" size={32} />,
      color: 'from-blue-500 to-cyan-500',
      link: '#'
    },
    {
      title: 'Kernel-Memory E-commerce Demo',
      description: '.NET semantic-search / RAG project leveraging Qdrant and OpenAI models for intelligent product discovery.',
      technologies: ['.NET', 'RAG', 'OpenAI', 'Qdrant'],
      icon: <Gamepad2 className="text-green-400" size={32} />,
      color: 'from-green-500 to-teal-500',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative solutions combining AI, automation, and modern development practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-100 rounded-lg group-hover:scale-110 transition-all duration-300">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href="https://github.com/yunoziko"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors duration-300"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  <a
                    href="https://github.com/yunoziko"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;