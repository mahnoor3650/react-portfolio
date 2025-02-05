import { useRef, useState } from 'react'
import './navbar.css';
import logo from '../../assets/mylogo1.svg'
import Underline from "../../assets/nav_underline.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {
const [menu,setMenu]=useState("home");
const mebiref=useRef();
const openMenu= ()=>{
mebiref.current.style.right='0';
}
const closeMenu = () => {
  mebiref.current.style.right = "-350px";
};
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="nav-img" />
      <img src={menu_open} alt="logo" className="nav-open" onClick={openMenu} />
      <ul ref={mebiref} className="nav-menu">
        <img src={menu_close} alt="logo" className="nav-close"  onClick={closeMenu}/>
        <li className="items">
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>{" "}
          {menu === "home" ? <img src={Underline} alt="" /> : null}
        </li>
        <li className="items">
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={Underline} alt="" /> : null}
        </li>
        <li className="items">
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>{" "}
          {menu === "services" ? <img src={Underline} alt="" /> : null}
        </li>
        <li className="items">
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>{" "}
          {menu === "work" ? <img src={Underline} alt="" /> : null}
        </li>
        <li className="items">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>{" "}
          {menu === "contact" ? <img src={Underline} alt="" /> : null}
        </li>
      </ul>
      <div className="nav-conact">
        {" "}
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Contact with Me{" "}
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
