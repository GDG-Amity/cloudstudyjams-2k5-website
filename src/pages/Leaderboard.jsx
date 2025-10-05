import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    fetch('/leaderboard.csv')
      .then((response) => response.text())
      .then((text) => {
        const rows = text.split('\n').slice(1);
        const data = rows.map((row) => {
          const columns = row.split(',');
          return {
            name: columns[0].replace(/"/g, ''),
            badges: parseInt(columns[6], 10) || 0,
          };
        });
        // Sort by badges completed
        data.sort((a, b) => b.badges - a.badges);
        setLeaderboardData(data);
      });
  }, []);

  return (
    <motion.div
      className="leaderboard-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container">
        <h1 className="leaderboard-title">Leaderboard</h1>
        <p className="leaderboard-subtitle">
          Leaderboard updates every two hours. Last updated: 7:30 PM
        </p>
        <div className="leaderboard-table-container">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Badges Completed</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.badges}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default Leaderboard;