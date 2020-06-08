import React from 'react';
import { connect } from 'react-redux';

const Footer = () => {
    return (
        <div className="footer">
        <ul className="footer-list-1 footer-text">
            <li>Find me @</li>
            <li>LinkedIn</li>
            <li>Github</li>
        </ul>
        <ul className="footer-list-2 footer-text">
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <p className="footer-copyright footer-text">Copyright 2020 Tori Miller</p>
        </div>
    )
}

export default connect(null)(Footer);