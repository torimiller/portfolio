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
                <div className="about-col">
                    <h1>Hi, I'm Tori. I'm a full stack developer who specializes in React.</h1>
                    <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua.</strong> Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                        id est laborum.</p>
                </div>
                <div className="about-col">
                    <p className="skill">HTML</p>
                    <p className="skill">CSS</p>
                    <p className="skill">Javascript</p>
                    <p className="skill">React</p>
                    <p className="skill">Node.js</p>
                </div>
            </div>
            {/* <div className="portfolio-preview-wrapper">
                <h1 className="portfolio-h1">Portfolio</h1>
                <div className="portfolio-preview-thumbnail-wrapper">
                <img src={puppypal} className="puppypal" alt="puppypal-thumbnail" />
                <img src={autolog} className="autolog" alt="autolog-thumbnail" />
                <img src={twitter} className="twitter" alt="twitter-thumbnail" />
                </div>
            </div> */}
        </Fragment>
    )
}

export default connect(null)(About);