import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiJavascript1} from 'react-icons/di'
import {SiReact} from 'react-icons/si'
import {DiBootstrap} from 'react-icons/di'
import {FiFigma} from 'react-icons/fi'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <div className="section__header">
        <h5>DEVELOPMENT</h5>
        <h2>Experience</h2>
      </div>
      <div className="container experience__container">
        {/* <div className="experience__frontend"> */}
          {/* <h3>Frontend Development</h3> */}
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className='experience__details-icon' />
              <div>
                <h3>HTML</h3>
                {/* <small className='text-dark'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <DiCss3 className='experience__details-icon' />
              <div>
                <h3>CSS</h3>
                {/* <small className='text-dark'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <DiJavascript1 className='experience__details-icon' />
              <div>
                <h3>JavaScript</h3>
                {/* <small className='text-dark'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <SiReact className='experience__details-icon' />
              <div>
                <h3>React</h3>
                {/* <small className='text-dark'>Intermediate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <DiBootstrap className='experience__details-icon' />
              <div>
                <h3>Bootstrap</h3>
                {/* <small className='text-dark'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FiFigma className='experience__details-icon' />
              <div>
                <h3>Figma</h3>
                {/* <small className='text-dark'>Experienced</small> */}
              </div>
            </article>
          </div>
        {/* </div> */}
      </div>
    </section>
  )
}

export default Experience
