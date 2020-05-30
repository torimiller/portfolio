import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css';

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            {/* <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat.</div> */}
            <Link to='/about' className="nav-link">Tori Miller</Link>
            <Link to='/about' className="nav-link">About</Link>
            <Link to='/portfolio' className="nav-link">Portfolio</Link>
            <Link to='/contact' className="nav-link">Contact</Link>
        </nav>
    )
}

export default connect(null)(Navbar);