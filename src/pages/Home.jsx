import { motion } from 'framer-motion';
import HeroGraphic from '../components/sections/HeroGraphic';
import Timeline from '../components/sections/Timeline';
import Syllabus from '../components/sections/Syllabus';
import FacilitatorRewards from '../components/sections/FacilitatorRewards';
import ProgramFacilitators from '../components/sections/ProgramFacilitators';

const Home = () => {
  return (
    <>
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
              <a className="btn primary disabled" href="#" onClick={(e) => e.preventDefault()} style={{pointerEvents: "none", opacity: 0.6}}>Registrations Closed</a>
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

      <Syllabus />

      <FacilitatorRewards />

      <ProgramFacilitators />
    </>
  );
};

export default Home;