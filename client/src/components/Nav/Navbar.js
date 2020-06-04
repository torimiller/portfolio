import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../App.css';
import about from './img/about.svg';
import portfolio from './img/portfolio.svg';
import contact from './img/contact.svg';

const iconStyle = {
    width: "1.75em"
}

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="nav-h1">
                <h1>Tori Miller</h1>
            </div>
            <Link to='/about' className="nav-link about-link">About</Link>
            <Link to='/portfolio' className="nav-link portfolio-link">Portfolio</Link>
            <Link to='/contact' className="nav-link contact-link">Contact</Link>

            {/* <div className="nav-item-about">
                <img style={iconStyle} src={about} className="about-icon" alt="about-icon" />
                <Link to='/about' className="nav-link about-link">About</Link>
            </div>
            <div className="nav-item-portfolio">
                <img style={iconStyle} src={portfolio} className="portfolio-icon" alt="portfolio-icon" />
                <Link to='/portfolio' className="nav-link portfolio-link">Portfolio</Link>
            </div>
            <div className="nav-item-contact">
                <img style={iconStyle} src={contact} className="contact-icon" alt="contact-icon" />
                <Link to='/contact' className="nav-link contact-link">Contact</Link>
            </div> */}
        </nav>
    )
}

export default connect(null)(Navbar);