import { motion } from 'framer-motion'
import { Link } from "react-scroll";
import { Link as RouterLink } from 'react-router-dom';
import { useScrollTo } from 'react-screen-scroll';
import logo from './assets/logo (2).png'
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
  
  
const Footer = ()=> {
  const scrollTo = useScrollTo()

    return (
        <motion.div
              className="footer"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >

           
             <motion.div className="footer-flex" variants={containerVariants}>

            <motion.div variants={textVariants} className="footer-1" >
                <img src={logo} alt="logo" className='footer-logo'/>
                <motion.h1 variants={titleVariants}>Contacts</motion.h1>
                <motion.p><a href="mailto:zenama@gmail.com">info@zenama.ng</a></motion.p>
                <motion.p><a href="tel:+23418123448901">+2348123448901</a></motion.p>
                <motion.p>No.5 Malta Street, Efab Metropolis, Karsana District, Abuja.</motion.p>
            </motion.div>
            <motion.div className="footer-2" variants={textVariants}>
                <motion.h1>Useful links</motion.h1>
                <motion.p> <RouterLink to='/' smooth={true} duration={500} onClick={()=>{scrollTo("smooth",0)}} className='footer-link-text'>Home</RouterLink></motion.p>
                <motion.p> <Link to='about' smooth={true} duration={500} onClick={()=>{scrollTo("smooth",500)}} >About us</Link> </motion.p>
                <motion.p> <Link to='core' smooth={true} duration={500} onClick={()=>{scrollTo("smooth",700)}}>Our services</Link> </motion.p>
                <motion.p> <Link to='contact' smooth={true} duration={500} onClick={()=>{scrollTo("smooth",800)}}>Get in touch</Link> </motion.p>
            </motion.div>
             </motion.div>

            <motion.em>&copy; Zen AMA - 2025</motion.em>
        </motion.div>
    )
}

export default Footer