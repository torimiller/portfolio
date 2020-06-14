import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import autolog from './img/autolog.png';
import puppypal from './img/puppypal.png';
import twitter from './img/twitter.png';

const About = () => {
    return (
        <Fragment>
            <div className="about-wrapper">
                <div className="about-col-left">
                    <h1 className="about-h1"><span className="about-h1-red">Hi, I'm Tori.</span> I'm a full stack developer who specializes in front-end web development.</h1>
                    <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.</strong> Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                        id est laborum.</p>
                </div>
                <div className="about-col-right">
                    <ul className="skills">
                        <li>Responsive HTML/CSS</li>
                        <li>Javascript (vanilla, React/Redux, jQuery)</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
            <div className="portfolio-preview-wrapper">
                <h1 className="portfolio-h1">PORTFOLIO</h1>
                <div className="portfolio-preview-thumbnail-wrapper">
                <img src={puppypal} className="puppypal-preview" alt="puppypal-thumbnail" />
                <img src={autolog} className="autolog-preview" alt="autolog-thumbnail" />
                <img src={twitter} className="twitter-preview" alt="twitter-thumbnail" />
                </div>
            </div>
        </Fragment>
    )
}

export default connect(null)(About);