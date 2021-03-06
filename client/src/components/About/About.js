import React, { Fragment } from 'react';
import resume from './img/tori-miller-resume.pdf';
import '../../App.css';

const About = (props) => {

    return (
        <Fragment>
            <div className="about-wrapper">
                <div className="about-col-left">
                    <h1 className="about-h1">Full stack web developer with experience 
                    building web applications from scratch, developing and integrating APIs, and working with databases.</h1>
                    <p className="about-body-copy">I’m a well-organized, dedicated, and versatile developer with a strong passion for technology and design. I’ve worn many hats in my career between design, marketing, project management and sales. My work is driven by the will of making complicated things easy and pleasant to interact with.<br/>
                    <br/>
                    I now specialise in web development but my knowledge of multiple fields allows me to work on a project with the full scope in mind; simplifying the process of working together and producing a more cohesive experience for your clients and users. Feel free to contact me or browse my projects in my portfolio.
                    </p>
                    <div className="contact-wrapper">
                        <p>Are you looking for a full stack developer? I'd love to chat. 
                        Send me a message at <a className="contact-email" href="mailto:torimillerpdx@gmail.com">torimillerpdx@gmail.com</a> and let's connect.</p>
                    </div>
                    <a href={resume} download>
                        <button className="resume">Good Ol' Fashioned Resume</button>
                    </a>
                </div>
                <div className="about-col-right">
                    <ul className="skills">
                        <li className="li-header">Web Application Development</li>
                            <li className="skills-li">Responsive HTML/CSS</li>
                            <li className="skills-li">Javascript (vanilla, React/Redux, jQuery)</li>
                        <li className="li-header">API Integration & Development</li>
                            <li className="skills-li">REST API integration</li>
                            <li className="skills-li">REST API development with Node.js</li>
                        <li className="li-header">Database Design</li>
                            <li className="skills-li">Database architectures in MongoDB, always aiming for performance, scale and stability</li>   
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default About;