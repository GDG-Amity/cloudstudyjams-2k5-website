import { motion } from 'framer-motion'

const rewardsData = [
  {
    tier: 1,
    milestone: "When 100 students complete the program",
    rewards: [
      "Swag kits for all 100 participants",
      "Exclusive access to live Google Cloud learning sessions for everyone",
    ],
  },
  {
    tier: 2,
    milestone: "When 70 students complete the program",
    rewards: [
      "Swag kits for all 70 participants",
      "Exclusive access to live Google Cloud learning sessions for everyone",
    ],
  },
  {
    tier: 3,
    milestone: "When 50 students complete the program",
    rewards: [
      "Swag kits for all 50 participants",
      "Exclusive access to live Google Cloud learning sessions for everyone",
    ],
  },
];

const FacilitatorRewards = () => {
  return (
    <motion.section id="facilitator-rewards" className="section">
      <div className="container">
        <h2 className="section-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px', verticalAlign: 'bottom' }}>
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 6V2" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22V18" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 12H22" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12H6" stroke="#FBBC05" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Community Milestones & Rewards
        </h2>
        <p className="section-subtitle">
          Let's team up and reach these goals! The more of us who complete the Study Jams, the more awesome rewards we unlock for our entire community. Encourage your friends, help each other out, and let's make this a huge success together!
        </p>
        <div className="rewards-cards">
          {rewardsData.map((tierData) => (
            <div className="reward-card" key={tierData.tier}>
              <div className="reward-card-tier">Tier {tierData.tier}</div>
              <div className="reward-card-milestone">{tierData.milestone}</div>
              <ul className="reward-card-rewards">
                {tierData.rewards.map((reward, i) => (
                  <li key={i}>{reward}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="rewards-note">
          <strong>Heads up:</strong> If our community's completion numbers fall between these tiers (for example, if 65 people finish the program), we'll reward the top performers based on the leaderboard. So, keep pushing and aim for the top!
        </p>
      </div>
    </motion.section>
  );
};

export default FacilitatorRewards;