import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Analytics } from '@vercel/analytics/react';
import './App.css'
import Header from './Header'
import Hero from './Hero'
import Section from './Section'
import Footer from './Footer'
import About from './About'
import Core from './Core'
import Team from './Team'
import Contact from './Contact'
import Testimonial from './Testimonial';

function App() {

  return (
    <>
    <ToastContainer />
    {/* <RouterProvider router={Router}/> */}
    <Header />
    <Hero id="hero" />
    <About id="about" />
    <Section id="section"/>
    <Core id="core" />
    <Team id="team"/>
    <Testimonial id='testimonial' />
    <Contact id="contact" />
    <Footer />
     <Analytics />
    </>
  )
}

export default App
