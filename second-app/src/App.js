import React, { Component } from 'react';
import Nav from './Nav';
import Home from './page/Home';
import About from './page/About';
import Profile from './page/Profile';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <br />
        <br />
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/profile" component={Profile} />
      </div>
    );
  }
}

export default App;
