import React from 'react'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import About from './components/about/About.jsx'
import Experience from './components/experience/Experience.jsx'
import Services from './components/services/Services.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'
// import Testimonial from './components/testimonial/Testimonial.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import About2 from './components/about2/About2.jsx'
import Counter from './components/counter/Counter.jsx'
import TimeLine from './components/timeline/TimeLine.jsx'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      {/* <About/> */}
      <About2/>
      <Experience/>
      {/* <Services/> */}
      <Portfolio/>
      {/* <Testimonial/> */}
      <Contact/>
      <Footer/>
      <Counter/>
      <TimeLine/>
    </>
  )
}

export default App;
