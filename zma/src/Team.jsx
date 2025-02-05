import { motion } from 'framer-motion';
import img1 from './assets/img (2).png';
import img2 from './assets/img (3).png';

const Team = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="team">
      <motion.h1 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, amount: 0.2 }} 
        variants={cardVariants}
      >
        Our Team
      </motion.h1>

      <motion.p 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: false, amount: 0.2 }} 
        variants={cardVariants}
      >
        We are a team of dedicated professionals with diverse backgrounds <br />
        and expertise, our team is the driving force behind our success.
      </motion.p>

      <div className="team-img">
        {[
          { img: img1, name: 'Maria Asuelimen', title: 'Founder & CEO' },
          { img: img2, name: 'Nomsey Okosa', title: 'Executive Director Monitoring Evaluation and Learning' },
          { img: img2, name: 'Richard Eze', title: 'Executive Director Admin and Operations' }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="team-slide"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Appears when 20% is visible
            transition={{ delay: index * 0.2 }}
          >
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
