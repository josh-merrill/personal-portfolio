import React from 'react'
import './contact.css'
import {BsArrowRight} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h5guq56', 'template_5u8lm2h', form.current, 'BLtzHbbL8dr1ar4d5')

    e.target.reset()
  };

  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <h1>Let's connect <BsArrowRight className='contact__option-icon' /></h1>
            <p>
              Josh Merrill is a frontend developer and web designer based in Seattle. When he's not developing beautfiul websites, he enjoys spending time in nature, traveling and snowboarding.
            </p>
            <p>
              If you’d like to chat about potential job opportunities, project ideas or anything related to web development, feel free to get in touch with him.
            </p>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your full name' required/>
          <input type="email" name="email" placeholder="Your email" required/>
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
