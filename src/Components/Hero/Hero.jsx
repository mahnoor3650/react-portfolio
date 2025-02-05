import { useState } from "react";
import './hero.css';
import profileImg from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero =()=>{
    return (
      <div className="hero" id="home">
        <img src={profileImg} alt="" />
        <h1>
          <span>I'm Mahnoor Khalid,</span> a Frontend Developer Dedicated to
          Modern & Responsive Web Apps.
        </h1>
        <p>
          I am a frontend developer passionate about building visually stunning,
          user-friendly, and efficient web applications. Skilled in modern
          frameworks like React.js, with a keen eye for design and performance
          optimization.
        </p>
        <div className="hero-action">
          <div className="hero-contact">
            {" "}
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Contact with me
            </AnchorLink>
          </div>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>
    );
}
export default Hero;