import React from 'react'
import './footer.css'
import {FiInstagram} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JOSH<span className='text-yellow'> / </span>M.</a>


      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/joshmmerrill/" target="_blank" rel="noreferrer"><FiLinkedin /></a>
        <a href="https://github.com/josh-merrill" target="_blank" rel="noreferrer">< FiGithub/></a>
        <a href="https://www.instagram.com/josh_merrill/" target="_blank" rel="noreferrer"><FiInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Josh Merrill. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
