import { motion } from "framer-motion";

// Parent container animations
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeOut",
      staggerChildren: 0.3, // Staggers animations for children
    },
  },
};

// Animation for heading
const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

// Animation for paragraph
const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 3 } },
};

// Button animations
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <motion.div 
      className="hero"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Ensures smooth animation
    >
      {/* Animated Heading */}
      <motion.div className="hero-text">
        <motion.h1 variants={headingVariants}>
          Bridging the gap between local potential and global opportunities
        </motion.h1>
        
        <motion.p variants={textVariants}>
          As a dynamic development consulting firm, we specialize in empowering individuals, 
          businesses, and communities to thrive in an increasingly interconnected world.
        </motion.p>
      </motion.div>

      {/* Animated Buttons */}
      <motion.div className="hero-btn">
        <motion.button 
          className="hero---btn"
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
        >
          Our services
        </motion.button>

        <motion.button 
          className="hero--btn"
          variants={buttonVariants}
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
        >
          Get in touch
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
