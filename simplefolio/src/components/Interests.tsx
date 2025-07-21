import React from 'react';
import { Gamepad2, Briefcase, Trophy, Coffee } from 'lucide-react';

const Interests = () => {
  return (
    <section id="interests" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Beyond Code
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When I'm not crafting code, I'm exploring new worlds and building connections
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl">
                <Gamepad2 className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Gaming Enthusiast</h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Gaming fuels my creativity and problem-solving skills. From strategy games that sharpen logical thinking to immersive worlds that inspire new project ideas, gaming is my creative playground where innovation meets entertainment.
            </p>
            
            <div className="flex items-center gap-4">
              <Trophy className="text-yellow-500" size={20} />
              <span className="text-gray-600">Strategy, RPG, and Indie game enthusiast</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl">
                <Briefcase className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Freelance Ready</h3>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Always open to exciting freelance opportunities and collaborations. Whether it's building innovative AI solutions, creating seamless web applications, or tackling unique technical challenges, I'm here to turn your vision into reality.
            </p>
            
            <div className="flex items-center gap-4">
              <Coffee className="text-orange-500" size={20} />
              <span className="text-gray-600">Available for remote and local projects</span>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex gap-4 p-6 bg-gray-50 rounded-2xl">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              Start a Project
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-purple-400 hover:text-purple-600 transition-all duration-300">
              View Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;