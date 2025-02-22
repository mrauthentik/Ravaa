
import './App.css'
import Header from './Header'
import Hero from './Hero'
import Section from './Section'
import Footer from './Footer'
import About from './About'
import Core from './Core'
import Team from './Team'
import Contact from './Contact'

function App() {

  return (
    <>
    {/* <RouterProvider router={Router}/> */}
    <Header />
    <Hero id="hero" />
    <About id="about" />
    <Section id="services"/>
    <Core id="core" />
    <Team id="team"/>
    <Contact id="contact" />
    <Footer />
    </>
  )
}

export default App
