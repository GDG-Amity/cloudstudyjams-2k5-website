import { motion } from 'framer-motion'

const facilitatorsData = [
  {
    name: "Rajat Rajput",
    designation: "Organizer",
    imageUrl: "/rajat-rajput.jpg",
    color: "white",
  },
  {
    name: "Kanchan Rai",
    designation: "Organizer",
    imageUrl: "/kanchan-rai.jpg",
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