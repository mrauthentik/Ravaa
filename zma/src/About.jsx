import { motion } from "framer-motion";
import img from "./assets/Rectangle 2.png";

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

const About = () => {
  return (
    <motion.div
      className="about-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Left Section - Text */}
      <motion.div className="about-us">
        <motion.div className="about-title" variants={titleVariants}>
          About Us
        </motion.div>
        
        <motion.div className="sub-text" variants={textVariants}>
          Empowering Sustainable Development
        </motion.div>

        <motion.div className="about-text" variants={textVariants} whileHover={{ scale: 1.05 }}>
        {/* At Zen AMA Global Springs Development Services, we empower sustainable development by bridging the gap between local potentials and global opportunities. As a dynamic development consulting firm, we specialize in helping individuals, businesses, and communities thrive in an increasingly interconnected world. */}
       This is a social impact company focused on improving the well being of vulnerable populations in Africa. We focus on Health, Education and Economic Develpment.
        </motion.div>

        <motion.div className="story-title" variants={titleVariants}>
          Our Story
        </motion.div>

        <motion.div className="story-text" variants={textVariants} whileHover={{ scale: 1.05 }}>
        Founded on the principles of collaboration, innovation, and sustainability, our team of experts bring a wealth of experience in global development. We have partnered with grassroot organizations, private sector leaders, and international institutions to drive meaningful change across Global Health, Education, Governance, and Economic Development.
        </motion.div>
      </motion.div>
       <img src={img} alt="" className="about-img" />
      {/* Right Section - Image */}
      <motion.div className="about-image" variants={imageVariants}>
        {/* <img src={img} alt="About Us" /> */}
      </motion.div>
    </motion.div>
  );
};

export default About;
