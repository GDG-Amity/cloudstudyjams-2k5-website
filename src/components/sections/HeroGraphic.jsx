import { motion } from 'framer-motion'

const HeroGraphic = () => {
  return (
    <motion.div className="hero-graphic" initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}>
      <motion.div 
        className="graphic-dot blue" 
        variants={dotVariants} 
        custom={0}
        animate={danceAnimation}
        transition={getTransition(0)}
      />
      <motion.div 
        className="graphic-dot red" 
        variants={dotVariants} 
        custom={1} 
        animate={danceAnimation}
        transition={getTransition(1)}
      />
      <motion.div 
        className="graphic-dot yellow" 
        variants={dotVariants} 
        custom={2} 
        animate={danceAnimation}
        transition={getTransition(2)}
      />
      <motion.div 
        className="graphic-dot green" 
        variants={dotVariants} 
        custom={3} 
        animate={danceAnimation}
        transition={getTransition(3)}
      />
    </motion.div>
  )
}

const dotVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: i => ({
    opacity: 1,
    scale: 1,
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 20, 
      delay: i * 0.1 
    }
  }),
}

const danceAnimation = {
  y: [0, -20, 0, 20, 0],
  x: [0, 10, 0, -10, 0],
  scale: [1, 1.2, 1, 1.2, 1],
  rotate: [0, 45, 0, -45, 0],
};

const getTransition = (i) => ({
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
  delay: i * 0.5,
});

export default HeroGraphic
