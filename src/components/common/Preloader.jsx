import { motion } from 'framer-motion'

const Preloader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeOut" } } // Reintroduced exit variant
  };

  const dotVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: "0%", opacity: 1 },
    dance: { // New "dance" animation
      y: ["0%", "-40%", "0%", "20%", "0%"], // Up, down, slightly up, back to normal
      scale: [1, 1.2, 0.9, 1.1, 1], // Bounce effect
      rotate: [0, 15, -15, 10, 0], // Slight rotation
      transition: {
        duration: 1.2, // Faster dance
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror", // Smooth back and forth
      }
    }
  };

  return (
    <motion.div 
      className="preloader-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit" // Ensure exit prop is set
    >
      <motion.span className="preloader-dot blue" variants={dotVariants} animate="dance" />
      <motion.span className="preloader-dot red" variants={dotVariants} animate="dance" />
      <motion.span className="preloader-dot yellow" variants={dotVariants} animate="dance" />
      <motion.span className="preloader-dot green" variants={dotVariants} animate="dance" />
    </motion.div>
  );
};

export default Preloader;
