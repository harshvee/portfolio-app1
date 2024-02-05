import React, {useState} from 'react';
import './navBar.css';
import dev from '../../assets/dev.png';
import { Link } from 'react-scroll';
import contact from '../../assets/contact.png';
import minilogo from '../../assets/logo.png';

const NavBar = () => {
  const[showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navBar">
      <img src={dev} alt="logo" className='logo'/>
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Education</Link>
        <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Experience</Link>
      </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }}>
        <img src={contact} alt="" className="desktopMenuImg" />Contact Me</button>
        <img src={minilogo} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="mobileListItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="mobileListItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="mobileListItem" onClick={()=>setShowMenu(false)}>Education</Link>
        <Link activeClass="active" to="contactPage" spy={true} smooth={true} offset={-50} duration={500} className="mobileListItem" onClick={()=>setShowMenu(false)}>Experience</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="mobileListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar
