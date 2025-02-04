import { motion } from 'framer-motion';
import img1 from './assets/icons (7).png';
import img2 from './assets/icons (6).png';
import img3 from './assets/icons (5).png';   
import img4 from './assets/icons (4).png';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Core = () => {
  return (
    <div className="core">
      <h1>Core Values</h1>
      <p>We strive for the highest standards in every project, <br />
      ensuring quality and impact.</p>
      <div className="core-flex">
        {[{ img: img1, title: "Integrity", text: "We always do what is right and keep our words." },
          { img: img2, title: "Compassion", text: "We have keen interest in our customers’ needs and wants." },
          { img: img3, title: "Excellence", text: "We believe that anything worth doing is worth doing well." },
          { img: img4, title: "Diligence", text: "Constant and earnest effort to accomplish tasks for our clients with precision." }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="flex"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
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
