import React from 'react';
import { MapPin, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col justify-center min-h-screen">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Piyush Shah
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-medium">
              Python Developer & Digital Innovator
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <MapPin size={20} />
              <span className="text-lg">Pune, Maharashtra</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about building engaging, responsive, and scalable applications with cutting-edge technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
              Let's Collaborate
            </button>
            <div className="flex gap-4">
              <a href="https://github.com/yunoziko" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/piyush-shah-156ba0267" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="mailto:shahpiyush11089@icloud.com" className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;