import React from 'react';
import './Education.css';
import Ieee from '../../assets/ieee.png';
import Agile from '../../assets/agile.png';
import Team from '../../assets/team.jpg';
import Team2 from '../../assets/team2.png';

const Education = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Education</h2>
        <span className="worksDesc">I am a 5X Certified Salesforce Developer having around 3.2 years’ experience in Salesforce Domain 
            with good knowledge in troubleshooting, coding, configuration, and setup with specialization in LWC. I posses a vast domain 
            knowledge as have Bechlors degree in Electrical and Research based masters degree in Nanotechnology. I have a published journal
            in IEEE (also funded by MHRD,India) I am committed to ensuring that networks using the Salesforce community portal and other 
            tools run smoothly and effectively to ensure costumer success. I have clear understanding of Teamwork and communication of 
            technical resources to anyone and maintain training plans. Motivated to grow and learn in Salesforce implementations and Development.
        </span>
        <div className="worksImgs">
            <img src={Ieee} alt="" className="worksImg"/>
            <img src={Agile} alt="" className="worksImg"/>
            <img src={Team} alt="" className="worksImg"/>
            <img src={Team2} alt="" className="worksImg"/>
        </div>
    </section>
  )
}

export default Education