import React from 'react';
import { Sparkles, Zap, Brain, Users } from 'lucide-react';

const Founder = () => {
  return (
    <section id="founder" className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Founder & Visionary
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                  <Sparkles className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Flowgen Arc</h3>
                  <p className="text-purple-300">AI Service Provider</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                As the founder of Flowgen Arc, I lead a cutting-edge AI service provider focused on automation and smart assistant technologies. We transform businesses through intelligent solutions that streamline operations and enhance user experiences.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Users className="text-blue-400 mx-auto mb-2" size={24} />
                  <p className="text-white font-semibold">10+</p>
                  <p className="text-gray-400 text-sm">Clients Served</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <Brain className="text-purple-400 mx-auto mb-2" size={24} />
                  <p className="text-white font-semibold">25+</p>
                  <p className="text-gray-400 text-sm">AI Solutions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">Our Expertise</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Zap className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Intelligent Automation</h4>
                  <p className="text-gray-400 text-sm">Streamline workflows with AI-powered solutions</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Brain className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Smart Assistants</h4>
                  <p className="text-gray-400 text-sm">Custom AI assistants for enhanced productivity</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Sparkles className="text-green-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Digital Transformation</h4>
                  <p className="text-gray-400 text-sm">Modernize operations with cutting-edge tech</p>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 mt-8">
              Learn More About Flowgen Arc
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;