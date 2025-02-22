import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./assets/logo (1).png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav>
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link to="about" smooth={true} duration={500}>About us</Link>
          <Link to="services" smooth={true} duration={500}>Our services</Link>
          <Link to="team" smooth={true} duration={500}>Our team</Link>
          <Link to="contact" smooth={true} duration={500}>Get in touch</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={() => setIsOpen(true)}>
          <FaBars />
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          {/* Close Button */}
          <button className="close-button" onClick={() => setIsOpen(false)}>
            <FaTimes  />
          </button>

          {/* Mobile Links */}
          <div className="mobile-links">
            <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About us</Link>
            <Link to="services" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Our services</Link>
            <Link to="team" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Our team</Link>
            <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Get in touch</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
