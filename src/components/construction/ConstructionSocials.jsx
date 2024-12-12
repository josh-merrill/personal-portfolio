import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const ConstructionSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/joshmerrill" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://linkedin.com/in/joshmerrill" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default ConstructionSocials;
