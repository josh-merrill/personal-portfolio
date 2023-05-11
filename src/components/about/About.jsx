import React from "react";
import "./about.css";
import { HiOutlineCode } from "react-icons/hi";
import { BiPaint } from "react-icons/bi";
import { BiBookContent } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <div className="section__header">
        <h5>GET TO KNOW ME</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about__container">
        <div className="about__cards">
          <article className="about__card">
            <HiOutlineCode className="about__icon background-green" />
            <div className="about__text">
              <h3 className="text-green">Web Development</h3>
              <p>3+ years of experience</p>
            </div>
          </article>
          <article className="about__card">
            <BiPaint className="about__icon background-yellow" />
            <div className="about__text">
              <h3 className="text-green">Web Design</h3>
              <p>5+ years of experience</p>
            </div>
          </article>
          <article className="about__card">
            <BiBookContent className="about__icon background-orange" />
            <div className="about__text">
              <h3 className="text-green">Content Strategy</h3>
              <p>6+ years of experience</p>
            </div>
          </article>
        </div>

        <div className="about__content">
          <p>
            I’m a frontend web developer passionate about building beautiful
            websites that people love to use. With over 6+ years of experience
            in the tech, healthcare and aviation industries, I have built a
            reputation for helping companies achieve their business outcomes by
            creating digital experiences and end-to-end communication programs
            that increase employee engagement and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
