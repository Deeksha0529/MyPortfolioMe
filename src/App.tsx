import React, { useState } from 'react';
import { Code2, Database, Layout, Bot } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceCard from './components/ServiceCard';
import CodingProfiles from './components/CodingProfiles';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    { 
      title: 'Frontend Development', 
      icon: Code2,
      description: 'Building responsive and interactive user interfaces using modern web technologies like React, TypeScript, and Tailwind CSS.'
    },
    { 
      title: 'API Integration', 
      icon: Database,
      description: 'Seamlessly connecting frontend applications with backend services through RESTful APIs and GraphQL.'
    },
    { 
      title: 'Responsive Web Design', 
      icon: Layout,
      description: 'Creating beautiful, mobile-first websites that work flawlessly across all devices and screen sizes.'
    },
    { 
      title: 'AI Tools Expert', 
      icon: Bot,
      description: 'Leveraging cutting-edge AI tools like ChatGPT, BOLT.NEW.AI, and Canvas for enhanced development workflows.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <AnimatedSection>
          <section id="home">
            <Hero />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="profiles">
            <CodingProfiles />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service) => (
                  <ServiceCard
                    key={service.title}
                    title={service.title}
                    Icon={service.icon}
                    description={service.description}
                  />
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="projects">
            <Projects />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="about">
            <About />
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="contact">
            <Contact />
          </section>
        </AnimatedSection>
      </main>

      <Footer />
    </div>
  );
};

export default App;