import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import autolog from './img/autolog.png';
import puppypal from './img/puppypal.png';
import twitter from './img/twitter.png';

const Portfolio = () => {
    return (
        <Fragment>
            <div className="portfolio-wrapper">
                <h1 className="portfolio-h1">PORTFOLIO</h1>
                <div className="portfolio-piece-puppypal portfolio-piece">
                    <img src={puppypal} className="puppypal-image" alt="puppypal-thumbnail" />
                    <div className="puppypal-content">
                        <p>PuppyPal is an application that gives you the ability to keep track of your dog's training progress. Build a custom set of goals to teach your dog, either by choosing from our list of skills, or creating your own. Each session of training can be logged for each goal. When your pup has mastered the skill, you can add it to your collection of completed goals.</p>
                        <p>This project is comprised of:</p>
                        <ul>
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>React</li>
                            <li>Node.js</li>
                        </ul>
                        <p className="view-project">View Project</p>
                    </div>
                </div>
                <div className="portfolio-piece-autolog portfolio-piece">
                    <div className="autolog-content">
                        <p>AutoLog is an application that gives you the ability to track your car maintenance. With all your maintenance logged in one place, you’ll no longer be wondering when the last time you completed a maintenance task was or when your next task is due.</p>
                        <p>This project is comprised of:</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>Node.js</li>
                        </ul>
                        <p className="view-project">View Project</p>
                    </div>
                    <img src={autolog} className="autolog-image" alt="autolog-thumbnail" />
                </div>
                <div className="portfolio-piece-twitter portfolio-piece">
                    <img src={twitter} className="twitter-image" alt="twitter-thumbnail" />
                    <div className="twitter-content">
                        <p>The Twitter Synonym Finder is an app for helping you find the right words to Tweet. This project uses two APIs: the Datamuse API, a word-finding query engine, and the Twitter API. It is used to find synonyms to the words that you write in a Tweet. After rewording what you want to say, you can post your Tweet to Twitter directly from the app.</p>
                        <p>This project is comprised of:</p>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                        </ul>
                        <p className="view-project">View Project</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default connect(null)(Portfolio);