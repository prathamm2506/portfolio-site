import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Headersocial from './Headersocial'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className='aligntextcentermain'>Hello I'm</h5>
        <h1>Pratham Matkar</h1>
        <h5 className="text-light">VESIT '26 | Web Dev Intern @ Rhyno EV | Jr. Web Editor @ IEEE - VESIT <br />Ex R & D Intern @ Indrones | GPM '23</h5>
        <CTA/>
        <Headersocial/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
