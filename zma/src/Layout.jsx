import Header from './Header'
import Hero from './Hero'
import Section from './Section'
import Footer from './Footer'
import About from './About'
import Core from './Core'
import Team from './Team'
import Contact from './Contact'
import Testimonial from './Testimonial';

export default function Layout() {
  return (
    <div className="layout">
     <Header />
    <Hero id="hero" />
    <About id="about" />
    <Section id="section"/>
    <Core id="cores" />
    <Team id="team"/>
    <Testimonial id='testimonial' />
    <Contact id="contact" />
    <Footer />
    </div>
  );
}