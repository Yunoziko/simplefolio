import React from 'react';
import { Code, Brain, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              Hey! I'm Piyush Shah, a passionate Developer from Pune, Maharashtra with hands-on experience in building engaging, responsive, and scalable projects & applications.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in Python development, AI integration, and modern web technologies. My journey spans from building intelligent automation systems to creating seamless user experiences that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="text-purple-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Full Stack</h3>
                <p className="text-gray-600 text-sm">End-to-end development expertise</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Integration</h3>
                <p className="text-gray-600 text-sm">Smart automation solutions</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">Cutting-edge technology adoption</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Projects Completed</span>
                  <span className="font-bold text-2xl">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Technologies Mastered</span>
                  <span className="font-bold text-2xl">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Years of Experience</span>
                  <span className="font-bold text-2xl">3+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Client Satisfaction</span>
                  <span className="font-bold text-2xl">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;