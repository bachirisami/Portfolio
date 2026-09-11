import { Routes, Route, useLocation } from 'react-router-dom';
import TabNav from './components/TabNav';
import Home from './pages/Home';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import SkillsPage from './pages/SkillsPage';
import Projects from './pages/Projects';
import ContactPage from './pages/ContactPage';

export default function App() {
  const location = useLocation();

  return (
    <div>
      <TabNav />
      <div key={location.pathname} className="page-transition">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <footer>
        <div className="container-wide">
          built by Sami Bachiri · {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
