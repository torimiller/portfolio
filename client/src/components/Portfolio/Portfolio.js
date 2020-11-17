import React, { Fragment } from 'react';
import '../../App.css';
import autolog from './img/autolog.png';
import gooddog from './img/gooddog.png';
import twitter from './img/twitter.png';

const Portfolio = (props) => {
    return (
        <Fragment>
            {console.log('Portfolio props:', props)}
            <div className="portfolio-wrapper">
                <div className="portfolio-piece-good-dog portfolio-piece">
                    <a 
                        target="_blank" 
                        rel="noopener noreferrer"
                        href="https://good-dog-app.herokuapp.com/" 
                        className="good-dog-image-link">
                        <img src={gooddog} className="good-dog-image" alt="good-dog-thumbnail" />
                    </a>
                    <div className="content good-dog-content">
                        <h2>Good Dog</h2>
                        <p className="content-description">Good Dog is an application that gives you the ability to keep track of your dog's training progress. Build a custom set of goals to teach your dog, and log each session of training. When your pup has mastered the skill, you can add it to your collection of completed goals.</p>
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
                        <h2>AutoLog</h2>
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
                    <a 
                        target="_blank" 
                        rel="noopener noreferrer"
                        href="https://socialist-toque-56844.herokuapp.com/" 
                        className="autolog-image-link">
                        <img src={autolog} className="autolog-image" alt="autolog-thumbnail" />
                    </a>
                </div>
                <div className="portfolio-piece-twitter portfolio-piece">
                    <a 
                        target="_blank" 
                        rel="noopener noreferrer"
                        href="https://twitter-synonym-finder.herokuapp.com/" 
                        className="twitter-image-link">
                        <img src={twitter} className="twitter-image" alt="twitter-thumbnail" />
                    </a>
                    <div className="content twitter-content">
                        <h2>Twitter Synonym Finder</h2>
                        <p className="content-description">The Twitter Synonym Finder is an app for helping you find the right words to Tweet. This project uses two APIs: the Datamuse API, a word-finding query engine, and the Twitter API. It is used to find synonyms to the words that you write in a Tweet. After rewording what you want to say, you can post your Tweet to Twitter directly from the app.</p>
                        <ul className="language-list">
                            <li>REACT</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Portfolio;