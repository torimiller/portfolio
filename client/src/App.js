import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAboutPath = this.handleAboutPath.bind(this);
    this.handlePortfolioPath = this.handlePortfolioPath.bind(this);
    this.state = {
      currentNavItem: 'portfolio'
    }
  }

  handleAboutPath() {
    this.setState({
      currentNavItem: 'about'
    })
  }

  handlePortfolioPath() {
    this.setState({
      currentNavItem: 'portfolio'
    })
  }

  render() {
    return (
      <Router>
        <section className="container">
          <Route component={() => <Navbar currentNavItem={this.state.currentNavItem} handleAboutPath={this.handleAboutPath} handlePortfolioPath={this.handlePortfolioPath} /> }   />
          <Route exact path="/" component={() => <Portfolio currentNavItem={this.state.currentNavItem} /> } />
          <Route exact path="/about" component={() => <About currentNavItem={this.state.currentNavItem} />}  />
          <Route exact path="/portfolio" component={ Portfolio } />
          <Footer />
        </section>
      </Router>
    );
  }
}