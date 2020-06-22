import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import ComingSoon from './components/ComingSoon';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
      {/* <Route exact path="/" component={ About } /> */}
        <section className="container">
          <Navbar />
          <Route exact path="/" component={ ComingSoon } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/portfolio" component={ Portfolio } />
          <Route exact path="/contact" component={ Contact } />
          <Footer />
        </section>
      </Router>
    </Provider>
  );
}

export default App;