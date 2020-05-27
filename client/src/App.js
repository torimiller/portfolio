import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <About />
    </div>
  );
}

export default App;
