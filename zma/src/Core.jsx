import { motion } from 'framer-motion';
import img1 from './assets/icons (7).png';
import img2 from './assets/icons (6).png';
import img3 from './assets/icons (5).png';
import img4 from './assets/icons (4).png';
import img5 from './assets/icons (1).png';
import img6 from './assets/icons (2).png';
import img7 from './assets/icons (3).png';

// Motion variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Core = () => {
  return (
    <div className="core">
      <motion.h1 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        variants={cardVariants}
      >
        Core Values
      </motion.h1>

      <motion.p 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        variants={cardVariants}
      >
        We strive for the highest standards in every project, <br />
        ensuring quality and impact.
      </motion.p>

      <div className="core-flex">
        {[ 
          { img: img1, title: "Integrity", text: "We always do what is right and keep our words." },
          { img: img2, title: "Compassion", text: "We have keen interest in our customers’ needs and wants." },
          { img: img3, title: "Excellence", text: "We believe that anything worth doing is worth doing well." },
          { img: img4, title: "Diligence", text: "Constant and earnest effort to accomplish tasks for our clients with precision." }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="flex"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Animates when 20% is visible
            transition={{ delay: index * 0.2 }}
          >
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.h1 
        className="service-header"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        variants={cardVariants}
      >
        Our Services
      </motion.h1>

      <motion.p 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        variants={cardVariants}
      >
        At Zen AMA Global Springs Development Services, we provide tailored solutions to <br />
        empower individuals and organizations with the skills, knowledge, and strategies <br />
        needed for success.
      </motion.p>

      <div className="service">
        {[
          { img: img5, title: 'Capacity building', text: " Equipping individuals and organizations with the skills, knowledge, and expertise needed to excel in their fields." },
          { img: img6, title: 'Local Business Infrastructure Strengthening', text: "Supporting businesses with tailored strategies to enhance their operational capacity and long-term sustainability." },
          { img: img7, title: 'Development Consulting', text: "Providing strategic guidance and support to organizations navigating complex development challenges." }
        ].map((item, index) => (
          <motion.div 
            key={index}
            className="service-flex"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ delay: index * 0.2 }}
          >
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Core;
