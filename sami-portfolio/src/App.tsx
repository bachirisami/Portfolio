import { Routes, Route } from 'react-router-dom';
import TabNav from './components/TabNav';
import Home from './pages/Home';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';
import Projects from './pages/Projects';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <div>
      <TabNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}
