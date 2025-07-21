import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Founder from './components/Founder';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <About />
        <TechStack />
        <Projects />
        <Founder />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;