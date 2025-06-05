import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";
import { useScrollTo } from "react-screen-scroll";
import logo from "./assets/logo (1).png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useScrollTo();
  return (
    <header>
      <nav>
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link to="about" smooth={true} duration={500} className="nav-text" onClick={() => scrollTo(900)}>About us</Link>
          <Link to="core" smooth={true} duration={500} className="nav-text">Our services</Link>
          <Link to="team" smooth={true} duration={500} className="nav-text">Our team</Link>
          <Link to="testimonials" smooth={true} duration={500} className="nav-text">Testimonials</Link>
          <Link to="contact" smooth={true} duration={500} className="nav-button header-btn">Get in touch</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={() => setIsOpen(true)}>
          <FaBars />
        
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          {/* Close Button */}
          <button className="close-button" onClick={() => setIsOpen(false)}>
            {/* <FaTimes  /> */}
            {/* <FaTimesCircle /> */}
            <FaRegTimesCircle />
          </button>

          {/* Mobile Links */}
          <div className="mobile-links">
            <Link to="about"  smooth={true} duration={500} onClick={() =>{ 
                    setIsOpen(false);
                   scrollTo(500)
                    
                  } 
                    
                    }
                    >About us</Link>
            <Link to="core" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Our services</Link>
            <Link to="team" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Our team</Link>
            <Link to="testimonial" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Testimonials</Link>
            <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Get in touch</Link>
            
          </div> 
        </div>
      </nav>
    </header>
  );
};

export default Header;
