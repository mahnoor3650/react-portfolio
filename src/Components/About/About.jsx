import './about.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import profilrImg from '../../assets/about_profile.svg';
const About =()=>{
    return (
      <div className="about">
        <div className="about-title">
          <h1>About Me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
          <div className="about-left">
            <img src={profilrImg} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                With a strong foundation in web development, I specialize in
                creating seamless digital experiences that combine functionality
                with aesthetics. My expertise extends beyond just coding—I focus
                on optimizing performance, ensuring accessibility, and crafting
                intuitive user interactions that enhance engagement. From
                transforming design concepts into fully responsive applications
                to integrating the latest frontend technologies, I strive to
                build solutions that are both innovative and scalable.
              </p>
              <p>
                Beyond technical skills, I thrive on problem-solving and
                continuous learning. Keeping up with evolving industry trends
                allows me to implement best practices and stay ahead in the
                ever-changing tech landscape. Whether collaborating with teams
                or tackling challenges independently, I am always eager to
                refine my skills, explore new frameworks, and push the
                boundaries of what’s possible in frontend development.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>Javascript</p>
                <hr style={{ width: "80%" }} />
              </div>
              <div className="about-skill">
                <p>React Js</p>
                <hr style={{ width: "70%" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="about-achievements">
          <div className="about-achieve">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-achieve">
            <h1>50+</h1>
            <p>PROJECTS COMPLETED</p>
          </div>
          <hr />
          <div className="about-achieve">
            <h1>50+</h1>
            <p>HAPPY CLIENTS</p>
          </div>
        </div>
      </div>
    );
}
export default About;