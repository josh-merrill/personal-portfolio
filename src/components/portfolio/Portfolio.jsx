import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import Reveal from "../../utils/Reveal";

// METHOD FOR PORTFOLIO OBJECTS

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Natural Wine Club",
    subtitle: "React",
    github: "https://github.com/josh-merrill/natural-wine-club",
    demo: "https://naturalwineclub.co",
  },
  {
    id: 2,
    image: IMG2,
    title: "Quizzical",
    subtitle: "React",
    github: "https://github.com/josh-merrill/react-quizzical",
    demo: "https://react-quizzical-game.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Tenzies",
    subtitle: "React",
    github: "https://github.com/josh-merrill/react-tenzies",
    demo: "https://react-tenzies-dice-game.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Personal Portfolio",
    subtitle: "React",
    github: "https://github.com/josh-merrill/personal-portfolio",
    demo: "https://www.josh-merrill.com",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <Reveal>
        <div className="section__header">
          <h2>Projects</h2>
        </div>
        <div className="container portfolio__container">
          {data.map(({ id, image, title, subtitle, github, demo }) => {
            return (
              <Reveal>
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <small>{subtitle}</small>
                  <div className="portfolio__item-cta">
                    <a
                      href={github}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
};

export default Portfolio;
