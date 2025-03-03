import { motion } from "framer-motion";
import {toast} from 'react-toastify';
import {useForm, ValidationError} from '@formspree/react';

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  const [state, handleSubmit] = useForm("mgvogrog");
 
  const success = () =>{
    toast.success("Success! 🎉", {
      position: "top-right",
      autoClose: 3000, // 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    })
  }

  if (state.succeeded) {
    return success();
  }
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

        <motion.form action="https://formspree.io/f/mgvogrog" onSubmit={handleSubmit} variants={fadeInUp} className="contact-form">
          <input type="text" placeholder="Full name" name="name" id="name" />
           <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors} />

          <input type="email" placeholder="Email address" id="email" name="email" />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors} />

          <input type="tel" placeholder="Phone number" id="number" name="number" />
          <ValidationError
            prefix="Number"
            field="number"
            errors={state.errors} />

          <textarea cols="50" rows="4" placeholder="Message"></textarea>
          <ValidationError
            prefix="Message"
            field="mesaage"
            errors={state.errors} />

          <button type="submit" disabled={state.submitting} className="form-btn">Submit inquiry</button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
