import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import Leaderboard from './pages/Leaderboard';
import NotFound from './pages/NotFound';

import './styles/timeline.css';
import './styles/syllabus.css';
import './styles/facilitator-rewards.css';
import './styles/program-facilitators.css';
import './styles/leaderboard.css';
import './styles/not-found.css';
import './styles/landing.css';
import './styles/preloader.css';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
