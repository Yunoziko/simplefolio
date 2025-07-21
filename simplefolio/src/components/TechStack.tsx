import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'Python', color: 'from-yellow-400 to-blue-500', icon: '🐍' },
    { name: 'TypeScript', color: 'from-blue-400 to-blue-600', icon: '📘' },
    { name: '.NET', color: 'from-purple-500 to-purple-700', icon: '🔷' },
    { name: 'Go', color: 'from-cyan-400 to-blue-500', icon: '🐹' },
    { name: 'ONNX', color: 'from-orange-400 to-red-500', icon: '🧠' },
    { name: 'HTML', color: 'from-orange-500 to-red-500', icon: '🌐' },
    { name: 'CSS', color: 'from-blue-400 to-purple-500', icon: '🎨' },
    { name: 'JavaScript', color: 'from-yellow-400 to-orange-500', icon: '⚡' },
  ];

  return (
    <section id="tech-stack" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-xl transition-all duration-300`}></div>
              
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-white font-semibold text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
                  {tech.name}
                </h3>
              </div>
              
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${tech.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-xl`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;