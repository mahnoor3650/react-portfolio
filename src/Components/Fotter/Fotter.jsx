import "./fotter.css";

import userIcon from "../../assets/user_icon.svg";
import logo from "../../assets/mylogo1.svg";
const Fotter = () => {
  return (
    <div className="fotter">
      <div className="footer-top">
        <div className="top-left">
          <img src={logo} alt="logo" />
          <p>
            I am a frontend developer from Pakistan with extensive experience in
            building modern web applications, specializing in React.js and .NET
            Core.
          </p>
        </div>
        <div className="top-right">
          <div className="email-input">
            <img src={userIcon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="sub-btn">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="fotter-btm-left">
          © 2023 Mahnoor Khalid. All rights reserved.
        </p>
        <div className="btm-right"><p>Term of services</p>
        <p>Privacy policy</p>
        <p>Contact with me</p></div>
      </div>
    </div>
  );
};

export default Fotter;
