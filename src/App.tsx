import { NavigationBar } from './components/Navigation';
import HeroSection from './components/Hero/Hero';
import ProjectsSection from './components/Projects/ProjectsSection';
import AboutSection from './components/About/AboutSection';
import SkillsSection from './components/Skills/SkillsSection';

function App() {
  return (
    <div className='app-container relative'>
      <NavigationBar />
      <main className='relative'>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
      </main>
    </div>
  );
}

export default App;
