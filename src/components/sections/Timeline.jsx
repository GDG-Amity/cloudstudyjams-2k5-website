import { motion } from 'framer-motion'

const timelineData = [
  {
    title: "Week 1: Cloud Foundations",
    date: "October 1st - 7th",
    text: "This week is all about getting comfortable with the Google Cloud Skills Boost platform and earning your first badges. It's a great way to build a solid foundation.",
    sessions: 5,
    color: "blue",
  },
  {
    title: "Week 2: Core Infrastructure & Data",
    date: "October 8th - 14th",
    text: "Now we'll dive into the heart of cloud services. You'll explore computing, storage, and data essentials, learning how to manage them effectively.",
    sessions: 5,
    color: "red",
  },
  {
    title: "Week 3: Machine Learning & Advanced Topics",
    date: "October 15th - 21st",
    text: "Time to explore exciting advanced topics like AI/ML, DevOps, and Security. This week will challenge you to expand your cloud knowledge.",
    sessions: 5,
    color: "yellow",
  },
  {
    title: "Week 4: Specialization & Arcade Prep",
    date: "October 22nd - 28th",
    text: "In our final week, you'll complete your remaining skill badges and get ready for the ultimate challenge. It's all about solidifying your expertise.",
    sessions: 5,
    color: "green",
  },
  {
    title: "Final Days: The Arcade Challenge",
    date: "October 29th - 31st",
    text: "This is your chance to apply everything you've learned! Tackle the Arcade Game challenges and use this time to catch up on any unfinished labs before the deadline.",
    sessions: 0,
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
