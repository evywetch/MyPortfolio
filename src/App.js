import './css/App.css';
import React from 'react';
import Home from './components/Home';
import Route from './components/Route';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>
    );
  }
}

export default App;
