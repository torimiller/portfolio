import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleBlankPath = this.handleBlankPath.bind(this);
    this.handleAboutPath = this.handleAboutPath.bind(this);
    //this.handlePortfolioPath = this.handlePortfolioPath.bind(this);
    this.state = {
      currentNavItem: 'blank'
    }
  }

  handleBlankPath() {
    this.setState({
      currentNavItem: 'blank'
    })
  }

  handleAboutPath() {
    console.log('handleAboutPath ran')
    this.setState({
      currentNavItem: 'about'
    })
  }
  render() {
    return (
      <Router>
        <section className="container">
          <Route component={() => <Navbar currentNavItem={this.state.currentNavItem} handleAboutPath={this.handleAboutPath} /> }   />
          <Route exact path="/" component={ Portfolio } />
          <Route exact path="/about" component={() => <About currentNavItem={this.state.currentNavItem} />}  />
          <Route exact path="/portfolio" component={ Portfolio } />
          <Route exact path="/contact" component={ Contact } />
          <Footer />
        </section>
      </Router>
    );
  }
}