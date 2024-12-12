import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import './construction.css';

const ConstructionUpdate = () => {
  return (
    <div className="under-construction">
      <div className="background-gradient" />
      <div className="dot-pattern"></div>

      <div className="under-construction__container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="under-construction__heading">
  New site <br/>
  <span>coming </span> soon
</h1>

          <p className="under-construction__text">
            I'm crafting a brand new portfolio experience to showcase my latest projects
            and skills. Stay tuned for something special!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="under-construction__links"
        >
          <a href="mailto:joshmmerrill@outlook.com" className="under-construction__cta">
            Get in touch
            <ArrowRight />
          </a>

          <div className="under-construction__socials">
            <a
              href="https://github.com/josh-merrill"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/joshmmerrill/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Linkedin />
            </a>
          </div>

          <p className="under-construction__launch">
            Expected launch: Early 2025
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ConstructionUpdate;
