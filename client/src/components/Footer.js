import React from 'react';
import { connect } from 'react-redux';

const Footer = () => {
    return (
        <div className="footer">
        <ul className="footer-list-1">
            <li>Find me @</li>
            <li>LinkedIn</li>
            <li>Github</li>
        </ul>
        <ul className="footer-list-2">
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <p className="footer-copyright">Copyright 2020 Tori Miller</p>
        </div>
    )
}

export default connect(null)(Footer);