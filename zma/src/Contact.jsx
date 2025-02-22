import { motion } from "framer-motion";

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div className="contact-block" variants={fadeInUp}>
        <motion.div className="contact-text" variants={fadeInUp}>
          <h1>Get in touch with us</h1>
          <p>
            Ready to collaborate and drive sustainable development? <br />
            <br /> Contact us today to explore how our expertise can
            <br /> support your organization&apos;s goals.
          </p>
        </motion.div>

        <motion.form action="#" variants={fadeInUp} className="contact-form">
          <input type="text" placeholder="Full name" />
          <input type="email" placeholder="Email address" />
          <input type="tel" placeholder="Phone number" />
          <textarea cols="50" rows="4" placeholder="Message"></textarea>
          <button type="submit" className="form-btn">Submit inquiry</button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
