import React from 'react';
import { Code, Heart, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Code className="text-white" size={16} />
            </div>
            <span className="text-white font-bold text-lg">Piyush Shah</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-6">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>and</span>
            <Coffee className="text-yellow-500" size={16} />
            <span>in Pune, Maharashtra</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2025 Piyush Shah. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Python Developer & Digital Innovator
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;