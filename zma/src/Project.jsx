import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Testimonial from "./Testimonial";
import img1 from "./assets/women (1).jpg";
import img2 from "./assets/women (2).jpg";
import img3 from "./assets/women (3).jpg";
import img4 from "./assets/testimonial/market (1).jpg"
import img5 from "./assets/testimonial/market (2).jpg"
import testimonial1 from "./assets/testimonial/testimonial (1).jpg";
import testimonial2 from "./assets/testimonial/testimonial (2).jpg";
import testimonial3 from "./assets/testimonial/testimonial (3).jpg";
import testimonial4 from "./assets/testimonial/testimonial (5).jpg";
import partner from "./assets/partners/partner.webp";
import sponsor from "./assets/sponsors/sponsor.png";
import Header from "./Header";
import Footer from "./Footer";



const slides = [
  {
    img: img1,
    text: "Empower your dreams. Inspire the world.",
  },
  {
    img: img2,
    text: "Believe in yourself and all that you are.",
  },
  {
    img: img3,
    text: "Every step forward is a step toward success.",
  },
  {
    img: img4,
    text: "Putting Smiles on the faces of the People.",
  },
  {
    img: img5,
    text: "Every Opporunity to make Impact.",
  },
];
 const peopleTestimonials = [
  {
    img: testimonial1,
    text: "Zen AMA GSD has transformed my business. Their support and guidance have been invaluable.",
  },
  {
    img: testimonial2,
    text: "I am grateful for the opportunity to be part of their projects. They truly care about making a difference.",
  },
  {
    img: testimonial3,
    text: "Their dedication to empowering women has inspired me to reach new heights.",
  },
  {
    img: testimonial4,
    text: "My Fashion House has receive massive supports,I have been able to get my desired equipmentns.",
  },
];

const AUTOPLAY_DELAY = 3000; 


const Project = () => {
  const [index, setIndex] = useState(0);
 
const [testimonialIndex, setTestimonialIndex] = useState(0);

// const nextTestimonial = () =>
//   setTestimonialIndex((prev) => (prev + 1) % peopleTestimonials.length);
// const prevTestimonial = () =>
//   setTestimonialIndex((prev) => (prev - 1 + peopleTestimonials.length) % peopleTestimonials.length);

  const goToSlide = (i) => setIndex(i)
 

useEffect(()=>{
    const timer = setInterval(()=> setIndex((prev)=> (prev + 1) % slides.length), AUTOPLAY_DELAY);
    return () => clearInterval(timer);
},[])

  return (
     <div>
        <Header />
    <div className="project">
      <div className="project-hero">
       
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="slide"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={slides[index].img}
              alt="Inspiring"
              className="project-hero-img"
            />
            <div className="project-hero-overlay"></div>
            <div className="project-hero-text">{slides[index].text}</div>
          </motion.div>
        </AnimatePresence>
         {/* Pagination dots */}
          <div className="slider-pagination">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`slider-dot${i === index ? " active" : ""}`}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
      </div>
        <div className="project-content">
            <h2>Our Projects</h2>
            <p>
            We are committed to delivering exceptional projects that make a
            difference. Our team works tirelessly to ensure that every project is
            executed with precision and excellence.
            </p>
            <p>
            From innovative designs to sustainable solutions, we strive to exceed
            expectations and create lasting impact.
            </p>
          </div>  
      <Testimonial />
     
        <div className="people-testimonials">
        <h2>What People Say</h2>
        <div className="people-testimonials-text">
             <p>Zen AMA GSD proudly sponsored 20 women from diverse industries and backgrounds to attend the WimBiz Conference, 
           <span>&apos;Dream. Dare. Do. &apos; </span> <br />
            The comprehensive sponsorship covered conference registration, return tickets, accommodation, and meals ensuring the women could focus on personal and professional growth without logistical worries. 
            This empowering event featured inspiring keynotes, interactive workshops, and thought-provoking panel discussions, all designed to ignite personal and professional growth.
             By bringing together women from various walks of life, the conference fostered a supportive network for collaboration, innovation, and progress.</p>
        </div>
        
        <div className="testimonial-slider">
            {/* <button className="testimonial-arrow left" onClick={prevTestimonial}>&lt;</button> */}
            <AnimatePresence mode="wait">
            <motion.div
                key={testimonialIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            >
                <img src={peopleTestimonials[testimonialIndex].img} alt={`Testimonial ${testimonialIndex + 1}`} />
                <p className="quote">&quot;{peopleTestimonials[testimonialIndex].text}&quot;</p>
            </motion.div>
            </AnimatePresence>
            {/* <button className="testimonial-arrow right" onClick={nextTestimonial}>&gt;</button> */}
        </div>
        <div className="testimonial-pagination">
            {peopleTestimonials.map((_, i) => (
            <button
                key={i}
                className={`testimonial-dot${i === testimonialIndex ? " active" : ""}`}
                onClick={() => setTestimonialIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
            />
            ))}
        </div>
        </div>
       
      <div className="partners">
        <h3>Our Partners</h3>
        <p>
          We are proud to collaborate with a diverse range of partners who share
          our vision for positive change. Together, we are making a difference in
          communities around the world.
        </p>
        <div className="partner-logos">
         <a href="https://wimbiz.org/"> <img src={partner} alt="Partner 1" className="partner-img-clt"/></a>
         <a href="https://www.magnificentleadershipconference.com//"> <img src={sponsor} alt="Partner 2"  className="partner-img-cl"/></a>
        </div>
      </div>
    </div>
      <Footer />
     </div>
  );
};

export default Project;
