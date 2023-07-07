import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'
import {BsArrowRight} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className='text-green'>👋 HI THERE, I'M...</h5>
        <h1 className='text-green'>Josh Merrill</h1>
        <h5 className="text-green subtitle">FRONTEND DEVELOPER</h5>
        < CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Say hello! < BsArrowRight className='scroll__down-icon' /></a>
      </div>
    </header>
  )
}

export default Header
