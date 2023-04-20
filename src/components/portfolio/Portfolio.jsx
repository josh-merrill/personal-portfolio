import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

// METHOD FOR PORTFOLIO OBJECTS

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Art Collective',
    subtitle: 'Ruby on Rails',
    github: 'https://github.com/josh-merrill/PRIVATE-ART-803',
    demo: 'https://www.artcollective.live',
  },
  {
    id: 2,
    image: IMG2,
    title: 'MoonLink',
    subtitle: 'Ruby on Rails/Web3',
    github: 'https://github.com/niznet89/twt-bio',
    demo: 'https://www.m00nlink.xyz/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Art Marketplace',
    subtitle: 'Ruby on Rails',
    github: 'https://github.com/niznet89/rbnb',
    demo: 'http://art-marketplace-803.herokuapp.com/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Personal Portfolio',
    subtitle: 'React',
    github: 'https://github.com/josh-merrill/portfolio',
    demo: 'https://www.josh-merrill.com',
  },
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="section__header">
        <h5>RECENT WORK</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, subtitle, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <small>{subtitle}</small>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
