import { useState } from "react";
import './hero.css';
import profileImg from "../../assets/profile_img.svg";
const Hero =()=>{
    return (
      <div className="hero">
        <img src={profileImg} alt="" />
        <h1>
          <span>I'm Mahnoor Khalid,</span> a Frontend Developer
          Dedicated to Modern & Responsive Web Apps.
        </h1>
        <p>
          I am a frontend developer passionate about building visually stunning,
          user-friendly, and efficient web applications. Skilled in modern
          frameworks like React.js, with a keen eye for design and performance
          optimization.
        </p>
        <div className="hero-action">
          <div className="hero-contact">Contact with me</div>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>
    );
}
export default Hero;