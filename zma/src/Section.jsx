import { motion } from "framer-motion";
import img from "./assets/Rectangle 12.png";


// Parent container animation
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.3 },
  },
};

// Title animation
const titleVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

// Text animation
const textVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

// Image animation
const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const Section = () => {
  return (
    <motion.div
      className="vision"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Section - Text */}
      <motion.div className="vision-text">
        <motion.h2 variants={titleVariants}>Our Vision</motion.h2>
        
        <motion.p variants={textVariants} whileHover={{ scale: 1.05 }}>
          At Zen AMA Global Springs, we envision a world where local communities 
          are empowered to drive their own development, leveraging global resources 
          and expertise to create lasting impact. Join us in unlocking the potential 
          of individuals, businesses, and communities worldwide.
        </motion.p>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div className="vision-image" variants={imageVariants}>
        <img src={img} alt="Our Vision" className="vision-img"/>
      </motion.div>
    </motion.div>
  );
};

export default Section;
