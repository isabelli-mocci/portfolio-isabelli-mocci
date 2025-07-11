import { useState } from 'react';
import { NavigationBar } from './components/Navigation';
import HeroSection from './components/Hero/Hero';
import ProjectsSection from './components/Projects/ProjectsSection';
import AboutSection from './components/About/AboutSection';
import SkillsSection from './components/Skills/SkillsSection';
import { ContactSection } from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CustomCursor from './components/UI/CustomCursor';

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
      <CustomCursor />
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
      <Footer />
    </div>
  );
}

export default App;
