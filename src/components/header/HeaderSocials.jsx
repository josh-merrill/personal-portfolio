import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://github.com/josh-merrill" target="_blank" rel='noreferrer'><FaGithubSquare/></a>
      <a href="https://www.linkedin.com/in/joshmmerrill/" target="_blank" rel='noreferrer'><FaLinkedin/></a>
      <a href="https://www.instagram.com/josh_merrill/" target="_blank" rel="noreferrer"><FaInstagramSquare /></a>
    </div>
  )
}

export default HeaderSocials
