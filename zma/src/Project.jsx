import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Testimonial from "./Testimonial";
import img1 from "./assets/women (1).jpg";
import img2 from "./assets/women (2).jpg";
import img3 from "./assets/women (3).jpg";
import Header from "./Header";

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
];

const AUTOPLAY_DELAY = 3000; 


const Project = () => {
  const [index, setIndex] = useState(0);

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
    </div>
     </div>
  );
};

export default Project;
