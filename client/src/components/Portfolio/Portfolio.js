import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import autolog from './img/autolog.png';
import puppypal from './img/puppypal.png';
import twitter from './img/twitter.png';

const Portfolio = () => {
    return (
        <Fragment>
            <h1>Portfolio</h1>
            <div className="portfolio-thumbnail-wrapper">
                <img src={puppypal} className="puppypal" alt="puppypal-thumbnail" />
                <img src={autolog} className="autolog" alt="autolog-thumbnail" />
                <img src={twitter} className="twitter" alt="twitter-thumbnail" />
            </div>
        </Fragment>
    )
}

export default connect(null)(Portfolio);