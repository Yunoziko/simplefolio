import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Mail className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400">shahpiyush11089@icloud.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <MapPin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-400">Pune, Maharashtra, India</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <Phone className="text-green-400" size={24} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-400">+91 620380245</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/yunoziko" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/piyush-shah-156ba0267" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="https://www.instagram.com/piyush_shah._" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-300 hover:scale-110">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
                />
              </div>
              
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300"
              />
              
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors duration-300 resize-none"
              ></textarea>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;