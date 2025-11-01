import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Confetti from '../components/common/Confetti';
import { motion } from 'framer-motion';
import '../styles/results.css';

const parseCsv = (text) => {
  const lines = text.trim().split(/\r?\n/);
  if (lines.length <= 1) return [];
  // Skip header
  return lines.slice(1).map((row) => {
    // Simple split by comma; fields we need don't contain commas except within quotes for long names list, ignored here
    const cols = row.split(',');
    return {
      name: (cols[0] || '').replace(/\"/g, '').replace(/"/g, '').trim(),
      badges: parseInt(cols[6], 10) || 0,
      arcade: parseInt(cols[8], 10) || 0,
    };
  });
};

export default function FinalResults() {
  const [rows, setRows] = useState([]);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    fetch('/leaderboard.csv')
      .then((r) => r.text())
      .then((t) => setRows(parseCsv(t)))
      .catch(() => setRows([]));
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 2800);
    return () => clearTimeout(t);
  }, []);

  const { participants, withBadges, totalBadges, totalArcade, top, top3, distribution } = useMemo(() => {
    const participants = rows.length;
    const withBadges = rows.filter((r) => r.badges > 0).length;
    const totalBadges = rows.reduce((sum, r) => sum + (r.badges || 0), 0);
    const totalArcade = rows.reduce((sum, r) => sum + (r.arcade || 0), 0);
    const sorted = [...rows]
      .sort((a, b) => (b.badges - a.badges) || (b.arcade - a.arcade) || a.name.localeCompare(b.name))
    const top = sorted.slice(0, 10);
    const top3 = sorted.slice(0, 3);

    const buckets = [
      { key: '0', label: '0', match: (n) => n === 0, count: 0 },
      { key: '1-3', label: '1–3', match: (n) => n >= 1 && n <= 3, count: 0 },
      { key: '4-7', label: '4–7', match: (n) => n >= 4 && n <= 7, count: 0 },
      { key: '8-12', label: '8–12', match: (n) => n >= 8 && n <= 12, count: 0 },
      { key: '13+', label: '13+', match: (n) => n >= 13, count: 0 },
    ];
    rows.forEach((r) => {
      const n = r.badges || 0;
      const b = buckets.find((bk) => bk.match(n));
      if (b) b.count += 1;
    });
    const maxBucket = Math.max(1, ...buckets.map((b) => b.count));
    const distribution = { buckets, max: maxBucket };

    return { participants, withBadges, totalBadges, totalArcade, top, top3, distribution };
  }, [rows]);

  return (
    <motion.div className="results-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {showConfetti && <Confetti duration={2500} particleCount={200} />}
      <div className="container">
        <div className="results-hero">
          <h1>Google Cloud Study Jams 2025 Final Results</h1>
          <p className="muted">Thanks to everyone who participated. Here are the highlights and the final Top 10 leaderboard.</p>
        </div>

        {/* Winner Spotlights */}
        <div className="spotlights">
          {top3.map((u, i) => (
            <div className={`spotlight-card rank-${i + 1}`} key={i}>
              <div className="avatar" aria-hidden>{getInitials(u.name)}</div>
              <div className="spotlight-meta">
                <div className="spotlight-rank">#{i + 1}</div>
                <div className="spotlight-name">{u.name}</div>
                <div className="spotlight-stats">
                  <span className="pill-small">Badges: {u.badges}</span>
                  <span className="pill-small">Arcade: {u.arcade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Participants</div>
            <div className="stat-value">{participants}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Earned Badges</div>
            <div className="stat-value">{totalBadges}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Completed Arcade Games</div>
            <div className="stat-value">{totalArcade}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Learners With ≥1 Badge</div>
            <div className="stat-value">{withBadges}</div>
          </div>
        </div>

        <div className="panel" style={{ marginTop: 32 }}>
          <div className="panel-bg" />
          <h2 className="section-title">Top 10 Leaderboard</h2>
          <div className="leaderboard-table-container">
            <table className="leaderboard-table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Badges</th>
                  <th>Arcade</th>
                </tr>
              </thead>
              <tbody>
                {top.map((u, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{u.name}</td>
                    <td>{u.badges}</td>
                    <td>{u.arcade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="muted" style={{ marginTop: 12 }}>
            <Link to="/leaderboard" style={{ color: 'var(--fg)', textDecoration: 'underline' }}>
              See the full leaderboard for all participants
            </Link>
          </p>
        </div>

        {/* Badges Distribution */}
        <div className="panel" style={{ marginTop: 24 }}>
          <div className="panel-bg" />
          <h2 className="section-title">Badges Distribution</h2>
          <div className="chart-grid">
            {distribution.buckets.map((b) => (
              <div className="chart-row" key={b.key}>
                <div className="chart-label">{b.label}</div>
                <div className="chart-bar">
                  <div
                    className="chart-bar-fill"
                    style={{ width: `${(b.count / distribution.max) * 100}%` }}
                    aria-valuemin={0}
                    aria-valuemax={distribution.max}
                    aria-valuenow={b.count}
                    role="progressbar"
                  />
                </div>
                <div className="chart-count">{b.count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function getInitials(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] || '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}
