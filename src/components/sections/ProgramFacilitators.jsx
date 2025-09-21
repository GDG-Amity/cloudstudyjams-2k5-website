import { motion } from 'framer-motion'

const facilitatorsData = [
  {
    name: "Rajat Rajput",
    designation: "Organizer",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQG_kQOJ-ust-g/profile-displayphoto-crop_800_800/B56ZiNP6C9G0AI-/0/1754716416398?e=1759363200&v=beta&t=MdON6C-_lPfL6ZiWZYUUtsu-EppT7wlZmNQ9W14Um98",
    color: "blue",
  },
  {
    name: "Kanchan Rai",
    designation: "Organizer",
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQETlJy2HqgUXA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723292855560?e=1759363200&v=beta&t=l_j_FWMA4QtsLp26UWe7LBQojBKvF9yUYxp_L_LDzcE",
    color: "red",
  },
];

const ProgramFacilitators = () => {
  return (
    <motion.section id="program-facilitators" className="section">
      <div className="container">
        <h2 className="section-title">Program Facilitators</h2>
        <div className="facilitators-grid">
          {facilitatorsData.map((facilitator, index) => (
            <motion.div 
              className="facilitator-card" 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className={`facilitator-image-wrapper ${facilitator.color}`}>
                <img src={facilitator.imageUrl} alt={facilitator.name} className="facilitator-image" />
              </div>
              <h3>{facilitator.name}</h3>
              <p className="designation">{facilitator.designation}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default ProgramFacilitators