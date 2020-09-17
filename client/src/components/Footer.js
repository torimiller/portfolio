import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
        <ul className="footer-list">
            <a href="https://www.linkedin.com/in/tori-miller-pdx/" target="_blank" className="footer-link">LinkedIn</a>
            <a href="https://github.com/torimiller" target="_blank" className="footer-link">Github</a>
            <Link to="/portfolio" className="footer-link">Portfolio</Link>
            <Link to="/about" className="footer-link">About</Link>
        </ul>
        </div>
    )
}

export default Footer;