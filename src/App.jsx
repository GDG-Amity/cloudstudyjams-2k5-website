import { motion } from 'framer-motion'
import { useState, useEffect } from 'react' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HeroGraphic from './components/sections/HeroGraphic'
import Timeline from './components/sections/Timeline'
import FacilitatorRewards from './components/sections/FacilitatorRewards'
import ProgramFacilitators from './components/sections/ProgramFacilitators'
import NotFound from './pages/NotFound'
import Preloader from './components/common/Preloader' 

import './styles/timeline.css'
import './styles/facilitator-rewards.css'
import './styles/program-facilitators.css'
import './styles/not-found.css'
import './styles/landing.css'
import './styles/preloader.css'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="landing" id="top">
      <nav className="nav">
        <motion.a href="#top" className="brand" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="brand-dots" aria-hidden>
            <motion.span className="brand-dot blue" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.05 }} />
            <motion.span className="brand-dot red" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.15 }} />
            <motion.span className="brand-dot yellow" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.25 }} />
            <motion.span className="brand-dot green" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.35 }} />
          </span>
          <span>GDG Amity University</span>
        </motion.a>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#timeline" onClick={() => setIsMenuOpen(false)}>Timeline</a>
          <a href="#facilitator-rewards" onClick={() => setIsMenuOpen(false)}>Rewards</a>
          <a href="#program-facilitators" onClick={() => setIsMenuOpen(false)}>Facilitators</a>
        </div>
        <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </nav>

      <motion.main className="hero">
        <div className="orbs" aria-hidden>
          <motion.div className="orb blue" style={{ width: 320, height: 320, top: -60, left: -40 }}
            animate={{ x: [0, 20, -10, 0], y: [0, -15, 8, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="orb green" style={{ width: 260, height: 260, bottom: -50, right: -30 }}
            animate={{ x: [0, -18, 10, 0], y: [0, 10, -10, 0] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="orb yellow" style={{ width: 180, height: 180, top: 20, right: 80 }}
            animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
        </div>

        <div className="container">
          <div>
            <p className="sub">
              Hosted by GDG On Campus - Amity University Noida
            </p>
            <h1 className="headline">Google Cloud Study Jams 2025</h1>
            <p className="sub">
              Get ready for hands-on learning with Google Cloud! Our official labs will help you earn Skill Badges and truly level up with your campus community. It's a focused start to boost your cloud skills.
            </p>
            <div className="cta">
              <a className="btn primary" href="https://forms.gle/QagpTebJMepCFYki8" target="_blank" rel="noopener noreferrer">Register Now</a>
            </div>
          </div>
          <HeroGraphic />
        </div>
      </motion.main>

      <motion.section id="about" className="section" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6, ease: 'easeOut' }}>
        <div className="container">
          <div className="panel">
            <div className="panel-bg" />
            <h2 className="section-title">About Study Jams</h2>
            <p className="about-text" style={{margin:'0 auto'}}>
              This is a month-long, hands-on program from GDG On Campus designed to help you learn Google Cloud by actually building. You'll complete guided labs, earn 19 Skill Badges, and finish strong with the Arcade challenge, all happening throughout October.
            </p>
            <div className="about-highlights" style={{justifyContent:'center'}}>
              <span className="pill"><span className="dot" style={{background:'#4285f4'}} /> GDG On Campus · Cohort 1</span>
              <span className="pill"><span className="dot" style={{background:'#34a853'}} /> October 2025</span>
              <span className="pill"><span className="dot" style={{background:'#fbbc05'}} /> 19 Skill Badges + Arcade</span>
              <span className="pill"><span className="dot" style={{background:'#ea4335'}} /> Google Cloud Skills Boost</span>
            </div>
          </div>
        </div>
      </motion.section>

      <Timeline />

      <FacilitatorRewards />

      <ProgramFacilitators />

      <footer className="foot">
        <div className="container">
          <p style={{ fontWeight: 700, color: 'var(--fg)' }}>GDG On Campus - Amity University Noida</p>
          <p style={{ marginTop: '8px' }}>© 2025 Google Cloud Study Jams</p>
          <p style={{ marginTop: '8px', fontSize: '12px', color: 'var(--muted)' }}>Website crafted by <a href="https://linkedin.com/in/rajatrajputdev" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', textDecoration: 'underline' }}>Rajat Rajput</a></p>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); 
  }, []);

  return (
    <Router>
      {isLoading && <Preloader />} {/* Show preloader if loading */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}
