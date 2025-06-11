import { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars, FaRegTimesCircle } from "react-icons/fa";
import { useScrollTo } from "react-screen-scroll";
import logo from "./assets/logo (1).png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useScrollTo();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/'
  const handleSectionClick = (sectionId, scrollOffset = 0) => {
      if(isHomePage){
        const element = document.getElementById(sectionId)
        if(element){
          element.scrollIntoView({behaviour:'smooth'})
        }
        if(scrollOffset){
          scrollTo(scrollOffset)
        }
      }else{
        navigate(`/`)
      }
  }

  const handleMobileSectionClick = (sectionId, scrollOffset = 0) => {
    setIsOpen(false); // Close the mobile menu
    handleSectionClick(sectionId, scrollOffset);
  }
  return (
    <header>
      <nav>
        {/* Logo */}
        <div className="logo">
          <RouterLink to='/'><img src={logo} alt="Logo" /></RouterLink>
          
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {isHomePage ? (
            <>
            
            <Link to="about" smooth={true} duration={500} className="nav-text" onClick={() => scrollTo(900)}>About us</Link> 
             <Link to="cores" smooth={true} duration={500} className="nav-text">Our services</Link>
             <Link to="team" smooth={true} duration={500} className="nav-text">Our team</Link>
              <RouterLink to="/projects" className="nav-text">Projects</RouterLink>
             <Link to="testimonials" smooth={true} duration={500} className="nav-text">Testimonials</Link>
             <Link to="contact" smooth={true} duration={500} className="nav-button header-btn">Get in touch</Link>
            </>
          ) : (
            <>
              <Link onClick={() => handleSectionClick('about', 900)} className="nav-text nav-button-style">About us</Link>
              <Link onClick={() => handleSectionClick('cores')} className="nav-text nav-button-style">Our services</Link>
              <Link onClick={() => handleSectionClick('team')} className="nav-text nav-button-style">Our team</Link>
              <Link onClick={() => handleSectionClick('testimonials')} className="nav-text nav-button-style">Testimonials</Link>
              <Link onClick={() => handleSectionClick('contact')} className="nav-text nav-button header-btn">Get in touch</Link>
            </>
          )}
        
        
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
              {isHomePage ? (
              <>
                <Link to="about" smooth={true} duration={500} onClick={() => {
                  setIsOpen(false);
                  scrollTo(500);
                }}>About us</Link>
                <Link to="cores" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Our services</Link>
                <Link to="team" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Our team</Link>
                <Link to="testimonials" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Testimonials</Link>
                <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Get in touch</Link>
              </>
            ) : (
              <>
                <Link onClick={() => handleMobileSectionClick('about', 500)}>About us</Link>
                <Link onClick={() => handleMobileSectionClick('cores')}>Our services</Link>
                <Link onClick={() => handleMobileSectionClick('team')}>Our team</Link>
                <Link onClick={() => handleMobileSectionClick('testimonials')}>Testimonials</Link>
                <Link onClick={() => handleMobileSectionClick('contact')}>Get in touch</Link>
              </>
            )}
            <RouterLink to="/projects" onClick={() => setIsOpen(false)}>Projects</RouterLink>
          </div> 
        </div>
      </nav>
    </header>
  );
};

export default Header;
