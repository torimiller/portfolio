import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import autolog from './img/autolog.png';
import puppypal from './img/puppypal.png';
import twitter from './img/twitter.png';
import portfolioPreview from './img/portfolio-preview.svg';

const Portfolio = () => {
    return (
        <Fragment>
            <div className="portfolio-wrapper">
                {/* <div className="portfolio-preview"> */}
                <div className="portfolio-preview-intro">
                <h1 className="portfolio-preview-h1">Full Stack Web Developer</h1>
                <p>Over a year of experience building web applications, developing 
                    and integrating APIs, and working with databases.</p>
                </div>
                
                <img src={portfolioPreview} className="portfolio-preview-image" alt="portfolio-preview-thumbnail" />
                {/* </div> */}
                {/* <h1 className="portfolio-h1">PORTFOLIO</h1> */}
                <div className="portfolio-piece-puppypal portfolio-piece">
                    <img src={puppypal} className="puppypal-image" alt="puppypal-thumbnail" />
                    <div className="content puppypal-content">
                        <p className="content-description">PuppyPal is an application that gives you the ability to keep track of your dog's training progress. Build a custom set of goals to teach your dog, either by choosing from our list of skills, or creating your own. Each session of training can be logged for each goal. When your pup has mastered the skill, you can add it to your collection of completed goals.</p>
                        <ul className="language-list">
                            <li>MONGODB</li>
                            <li>EXPRESS</li>
                            <li>REACT</li>
                            <li>NODE.JS</li>
                        </ul>
                        <button className="view-project">View Project</button>
                    </div>
                </div>
                <div className="portfolio-piece-autolog portfolio-piece">
                    <div className="content autolog-content">
                        <p className="content-description">AutoLog is an application that gives you the ability to track your car maintenance. With all your maintenance logged in one place, you’ll no longer be wondering when the last time you completed a maintenance task was or when your next task is due.</p>
                        <ul className="language-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT/JQUERY</li>
                            <li>MONGODB</li>
                            <li>EXPRESS</li>
                            <li>NODE.JS</li>
                        </ul>
                        <button className="view-project">View Project</button>
                    </div>
                    <img src={autolog} className="autolog-image" alt="autolog-thumbnail" />
                </div>
                <div className="portfolio-piece-twitter portfolio-piece">
                    <img src={twitter} className="twitter-image" alt="twitter-thumbnail" />
                    <div className="content twitter-content">
                        <p className="content-description">The Twitter Synonym Finder is an app for helping you find the right words to Tweet. This project uses two APIs: the Datamuse API, a word-finding query engine, and the Twitter API. It is used to find synonyms to the words that you write in a Tweet. After rewording what you want to say, you can post your Tweet to Twitter directly from the app.</p>
                        <ul className="language-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>JQUERY</li>
                        </ul>
                        <button className="view-project">View Project</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default connect(null)(Portfolio);