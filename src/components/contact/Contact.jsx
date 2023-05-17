import React from 'react'
import './contact.css'
import {BsArrowRight} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_73htloi', 'template_5dloqiw', form.current, 'yjKiiWeFFvwY6rZFF')

    e.target.reset()
    alert('Your message has been sent successfully!')
  };

  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <h1>Let's connect <BsArrowRight className='contact__option-icon' /></h1>
            <p>
              I'm a Seattle-based <span className='text-green bold'>frontend developer</span> who brings my unique blend of expertise in <span className='text-green bold'>web design</span> and <span className='text-green bold'>content strategy</span> to create exceptional user interfaces with <span className='text-green bold'>React</span>.
            </p>
            <p>
              If you consider me a good candidate for an open position, or if you'd like to discuss a freelance project, or if you just want to say hello, feel free to contact me on social media or by email.
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
