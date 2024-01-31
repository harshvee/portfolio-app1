import React from 'react';
import './intro.css';
import mainPic from '../../assets/image.jpg';
import { Link } from 'react-scroll';
import hire from '../../assets/hire.png';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent"></div>
      <span className="hello">Hello,<br/></span>
      <span className="introText">I'm <span className="introName">Harsh</span><br/>Salesforce Developer</span>
      <p className="introPara">I create visually appealing UI using LWC and Apex</p>
      <Link><button className="btn"><img src={hire} alt="Hire Me" class ="hireIcon"/>Hire Me</button></Link>
      <img src = {mainPic} alt ="Profile" className="imgBg"/>
    </section>
  )
}

export default Intro