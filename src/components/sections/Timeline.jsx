import { motion } from 'framer-motion'

const timelineData = [
  {
    title: "Week 1: Cloud Foundations",
    date: "October 6th - 12th",
    text: "This week is all about getting comfortable with the Google Cloud Skills Boost platform. Videos will start getting published from October 6th. You will earn your first badges and build a solid foundation.",
    sessions: 5,
    color: "blue",
  },
  {
    title: "Doubt Session 1",
    date: "October 13th",
    text: "Have questions? Join our first doubt-clearing session to get help from facilitators and peers.",
    sessions: 0,
    color: "red",
  },
  {
    title: "Week 2: Core Infrastructure & Data",
    date: "October 14th - 20th",
    text: "Now we'll dive into the heart of cloud services. You'll explore computing, storage, and data essentials, learning how to manage them effectively.",
    sessions: 6,
    color: "yellow",
  },
  {
    title: "Doubt Session 2",
    date: "October 21st",
    text: "Stuck on a lab? Our second doubt session is here to help you push through and keep learning.",
    sessions: 0,
    color: "red",
  },
  {
    title: "Week 3: Machine Learning & Advanced Topics",
    date: "October 22nd - 28th",
    text: "Time to explore exciting advanced topics like AI/ML, DevOps, and Security. This week will challenge you to expand your cloud knowledge.",
    sessions: 8,
    color: "green",
  },
  {
    title: "Doubt Session 3",
    date: "October 29th",
    text: "This is the final doubt clearing session. Get all your queries resolved before the final challenge.",
    sessions: 0,
    color: "red",
  },
  {
    title: "Final Days: The Arcade Challenge",
    date: "October 30th - 31st",
    text: "This is your chance to apply everything you've learned! Tackle the Arcade Game challenges and use this time to catch up on any unfinished labs before the deadline.",
    sessions: 1,
    color: "blue",
  },
];

const Timeline = () => {
  return (
    <motion.section id="timeline" className="section">
      <div className="container">
        <h2 className="section-title">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px', verticalAlign: 'bottom' }}>
            <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 2V6" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 2V6" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 10H21" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Program Timeline
        </h2>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <motion.div 
              className="event" 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className={`dot ${item.color}`} />
              <div className="date">{item.date}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Timeline
