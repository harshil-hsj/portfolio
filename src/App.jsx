import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';
import Technologies from './components/Technologies';

const App = () => {
  return (
    <div className="relative h-screen w-screen">
      {/* Background Gradient */}
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      {/* Main Content */}

      <main >
        <About />
        <Projects />
        <Technologies/>
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
