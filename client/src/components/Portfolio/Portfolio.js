import React, { Fragment } from 'react';
import '../../App.css';
import autolog from './img/autolog.png';
import puppypal from './img/puppypal.png';
import twitter from './img/twitter.png';
import portfolioPreview from './img/portfolio-preview.svg';

const Portfolio = () => {
    return (
        <Fragment>
            <div className="portfolio-wrapper">
                <div className="portfolio-preview-intro">
                <h1 className="portfolio-preview-h1">Full Stack Web Developer</h1>
                <p className="portfolio-preview-subtext">Over a year of experience building web applications, developing 
                    and integrating APIs, and working with databases.</p>
                </div>
                
                <img src={portfolioPreview} className="portfolio-preview-image" alt="portfolio-preview-thumbnail" />

                <div className="portfolio-piece-puppypal portfolio-piece">
                    <a target="_blank" href="https://mysterious-retreat-15685.herokuapp.com/" className="puppypal-image-link">
                        <img src={puppypal} className="puppypal-image" alt="puppypal-thumbnail" />
                    </a>
                    <div className="content puppypal-content">
                        <h2>PuppyPal</h2>
                        <p className="content-description">PuppyPal is an application that gives you the ability to keep track of your dog's training progress. Build a custom set of goals to teach your dog, and log each session of training. When your pup has mastered the skill, you can add it to your collection of completed goals.</p>
                        <ul className="language-list">
                            <li>MONGODB</li>
                            <li>EXPRESS</li>
                            <li>REACT</li>
                            <li>NODE.JS</li>
                        </ul>
                    </div>
                </div>
                <div className="portfolio-piece-autolog portfolio-piece">
                    <div className="content autolog-content">
                        <h2>Autolog</h2>
                        <p className="content-description">AutoLog is an application that gives you the ability to track your car maintenance. With all your maintenance logged in one place, you’ll no longer be wondering when the last time you completed a maintenance task was or when your next task is due.</p>
                        <ul className="language-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT/JQUERY</li>
                            <li>MONGODB</li>
                            <li>EXPRESS</li>
                            <li>NODE.JS</li>
                        </ul>
                    </div>
                    <a target="_blank" href="https://socialist-toque-56844.herokuapp.com/" className="autolog-image-link">
                        <img src={autolog} className="autolog-image" alt="autolog-thumbnail" />
                    </a>
                </div>
                <div className="portfolio-piece-twitter portfolio-piece">
                    <a target="_blank" href="https://polar-tor-48427.herokuapp.com/" className="twitter-image-link">
                        <img src={twitter} className="twitter-image" alt="twitter-thumbnail" />
                    </a>
                    <div className="content twitter-content">
                        <h2>Twitter Synonym Finder</h2>
                        <p className="content-description">The Twitter Synonym Finder is an app for helping you find the right words to Tweet. This project uses two APIs: the Datamuse API, a word-finding query engine, and the Twitter API. It is used to find synonyms to the words that you write in a Tweet. After rewording what you want to say, you can post your Tweet to Twitter directly from the app.</p>
                        <ul className="language-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JAVASCRIPT</li>
                            <li>JQUERY</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Portfolio;