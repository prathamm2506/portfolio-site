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
        <h5 className="text-light">I'm a freelance website developer, building end-to-end solutions for businesses and professional individuals.</h5>
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
