import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="landing" id="top">
      <nav className="nav">
        <motion.a href="/#top" className="brand" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="brand-dots" aria-hidden>
            <motion.span className="brand-dot blue" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.05 }} />
            <motion.span className="brand-dot red" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.15 }} />
            <motion.span className="brand-dot yellow" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.25 }} />
            <motion.span className="brand-dot green" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.35 }} />
          </span>
          <span>GDG Amity University</span>
        </motion.a>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Final Results</Link>
          <Link to="/leaderboard" onClick={() => setIsMenuOpen(false)}>Full Leaderboard</Link>
        </div>
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </nav>

      {children}

      <footer className="foot">
        <div className="container">
          <p style={{ fontWeight: 700, color: 'var(--fg)' }}>GDG On Campus - Amity University Noida</p>
          <p style={{ marginTop: '8px' }}>© 2025 Google Cloud Study Jams</p>
          <p style={{ marginTop: '8px', fontSize: '12px', color: 'var(--muted)' }}>Website crafted by <a href="https://linkedin.com/in/rajatrajputdev" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', textDecoration: 'underline' }}>Rajat Rajput</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
