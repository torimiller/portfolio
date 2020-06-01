import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact';
import './App.css';
// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="grid">
          <Navbar className="nav"/>
          <Route exact path="/" component={ About } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/portfolio" component={ Portfolio } />
          <Route exact path="/contact" component={ Contact } />
        </section>
      </Router>
    </Provider>
  );
}

export default App;