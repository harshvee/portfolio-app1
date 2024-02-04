import React from 'react'
import './About.css';
import admin from '../../assets/admin.jpg';
import apexdev from '../../assets/apexdev.png';
import lwcdev from '../../assets/lwcdev.png';

const About = () => {
  return (
    <section id ="skills">
        <span className="aboutTitle">What I <span className="do">Do</span></span>
        <span className="skillDesc">I am a skilled 5X Certified Salesforce Developer having more than 3 years experience in LWC, Apex and Digital Experience<span className="do">(Formarly Community Cloud).</span></span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={admin} alt="dev1" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Salesforce Admin</h2>
                    <p>Making interactive database and App design using Flows, Permission Sets, Profiles, App Builder, Custom Metadata, etc</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={apexdev} alt="dev2" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Salesforce Apex Development</h2>
                    <p>Providing Backend functionality to LWC components using complex business logics.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={lwcdev} alt="dev3" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Salesforce LWC Development</h2>
                    <p>Creating interactive and eye catching responsive UI with help of LWC Components and slds classes.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About