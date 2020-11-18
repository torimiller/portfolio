import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: false
        }
        this.handleAboutPath = this.handleAboutPath.bind(this);
        this.handlePortfolioPath = this.handlePortfolioPath.bind(this);
    }

    handleAboutPath() {
        this.props.handleAboutPath();
    }

    handlePortfolioPath() {
        this.props.handlePortfolioPath();
    }

    render() {
        return (
            <nav className="nav-wrapper">
                <h1 className="nav-h1">Tori Miller</h1>
                <div className="nav-links">
                    <div className="nav-item nav-item-portfolio">
                        <span
                            style={ this.props.currentNavItem === 'portfolio' ? {borderBottom : '2px solid #FA72AB'} : { borderBottom: 'none'} }  
                        >
                        <Link to='/portfolio' 
                            className="nav-link" 
                            style={ this.props.currentNavItem === 'portfolio' ? {fontWeight : '700'} : { fontWeight: '500'} }  
                            onClick={this.handlePortfolioPath}>
                            Portfolio
                        </Link>
                        </span>
                    </div>
                    <div className="nav-item nav-item-about">
                        <span
                            style={ this.props.currentNavItem === 'about' ? {borderBottom : '2px solid #FA72AB'} : { borderBottom: 'none'} }  
                        >
                            <Link to='/about' 
                                className="nav-link"
                                style={ this.props.currentNavItem === 'about' ? {fontWeight : '700'} : { fontWeight: '500'} }  
                                onClick={this.handleAboutPath}>
                                About
                            </Link>
                        </span>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;