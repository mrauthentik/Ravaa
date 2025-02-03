import logo from './assets/logo (1).png';

const Header = () => {
  return (
    <div>
      <nav>
         <div className="logo">
          <img src={logo} alt="" />
         </div>
         <div className="links">
          <a href="/">About us</a>
          <a href="/">Our services</a>
          <a href="/">Our team</a>
          <a href="/">Get in touch</a>
         </div>
         <div className="nav-button">
          Get in touch
         </div>
      </nav>
    </div>
  )
}

export default Header
