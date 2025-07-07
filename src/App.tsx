import { useState } from 'react';
import { NavigationBar } from './components/Navigation';
import HeroSection from './components/Hero/Hero';
import ProjectsSection from './components/Projects/ProjectsSection';
import AboutSection from './components/About/AboutSection';
import SkillsSection from './components/Skills/SkillsSection';
import { ContactSection } from './components/Contact/ContactSection';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenContactModal = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className='app-container relative'>
      <NavigationBar onContactClick={handleOpenContactModal} />
      <main className='relative'>
        <HeroSection />
        <ProjectsSection />
        <AboutSection onContactClick={handleOpenContactModal} />
        <SkillsSection />
      </main>
      <ContactSection 
        isOpen={isContactModalOpen} 
        onClose={handleCloseContactModal} 
      />
    </div>
  );
}

export default App;
