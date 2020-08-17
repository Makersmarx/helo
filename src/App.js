import React, { Component } from 'react';
import routes from './routes.js';
import Nav from './components/Nav/Nav.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
