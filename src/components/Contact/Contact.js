import React from 'react'
import './Contact.css';
import mphasis from '../../assets/mphasis.png';
import cg from '../../assets/cg.png';
import trailheadIcon from '../../assets/trail.png';
import linkedinIcon from '../../assets/linkedin.png';
import instagramIcon from '../../assets/ig.png';
import githubIcon from '../../assets/git.png';

const Contact = () => {
  return (
    <section id="contactPage">
        <div className="orgs">
            <h1 className="contactPageTitle">Organizations I,ve worked with</h1>
            <p className="orgDesc">I have opportunity to work with smoe of the best service based organizations with group of experts, collaborative peers and strong mentors.
            </p>
            <div className="orgImgs">
                <img src={mphasis} alt="" className="orgImg"></img>
                <img src={cg} alt="" className="orgImg"></img>
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form to discuss any work opportunity.</span>
            <form className="contactForm">
                <input type="text" className="name" placeholder="Your Name"/>
                <input type="email" className="email" placeholder="Your Email"/>
                <textarea name="message" className="msg" rows="5" placeholder="Your Message"></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={trailheadIcon} alt="Trailhead" className="link"></img>
                    <img src={linkedinIcon} alt="LinkedIn" className="link"></img>
                    <img src={instagramIcon} alt="Instagram" className="link"></img>
                    <img src={githubIcon} alt="Github" className="link"></img>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact