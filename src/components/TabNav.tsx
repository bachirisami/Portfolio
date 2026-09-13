import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import ThemeToggle from './ThemeToggle';

const links = [
  { to: '/', label: 'home' },
  { to: '/experience', label: 'experience' },
  { to: '/education', label: 'education' },
  { to: '/skills', label: 'skills' },
  { to: '/projects', label: 'projects' },
  { to: '/contact', label: 'contact' },
];

export default function TabNav() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="tab-nav">
      <div className="tab-nav-inner">
        <div className="tab-nav-left">
          <div className="tab-brand">
            <span className="tab-dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
            sami-bachiri
          </div>

          <div className="tab-links-desktop">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => 'tab-item' + (isActive ? ' active' : '')}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="tab-nav-right">
          <div className="theme-toggle-top">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
          </div>

          <button
            type="button"
            className="tab-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={'tab-toggle-bar' + (open ? ' open' : '')}></span>
            <span className={'tab-toggle-bar' + (open ? ' open' : '')}></span>
            <span className={'tab-toggle-bar' + (open ? ' open' : '')}></span>
          </button>
        </div>
      </div>

      {open && (
        <div className="tab-links-mobile">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => 'tab-item-mobile' + (isActive ? ' active' : '')}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <ThemeToggle theme={theme} onToggle={toggleTheme} variant="row" />
        </div>
      )}
    </nav>
  );
}
