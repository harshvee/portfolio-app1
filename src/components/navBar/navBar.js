import React from 'react';
import './navBar.css';
import dev from '../../assets/dev.png';
import { Link } from 'react-scroll';
import contact from '../../assets/contact.png';

const NavBar = () => {
  return (
    <nav className="navBar">
      <img src={dev} alt="logo" className='logo'/>
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Education</Link>
        <Link className="desktopMenuListItem">Experience</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contact} alt="" className="desktopMenuImg" />Contact Me</button>
    </nav>
  )
}

export default NavBar
