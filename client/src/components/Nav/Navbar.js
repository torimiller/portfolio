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
            <Link to='/about'>Tori Miller</Link>
            <img style={iconStyle} src={about} className="about-icon" alt="about-icon" />
            <Link to='/about' className="nav-link">About</Link>
            <img style={iconStyle} src={portfolio} className="portfolio-icon" alt="portfolio-icon" />
            <Link to='/portfolio' className="nav-link">Portfolio</Link>
            <img style={iconStyle} src={contact} className="contact-icon" alt="contact-icon" />
            <Link to='/contact' className="nav-link">Contact</Link>
        </nav>
    )
}

export default connect(null)(Navbar);