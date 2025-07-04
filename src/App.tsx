// path: src/App.tsx

import Header from './components/Nav';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import Projects from './components/ProjectsSection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className='App relative'>
      <Header />
      <main className='relative'>
        {/* Home Page */}
        <Hero />
        <Projects />
        <AboutSection />
        <SkillsSection />
      </main>
    </div>
  );
}

export default App;
