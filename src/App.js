import React from 'react';
import Auth from './components/Auth/Auth.js';
import Form from './components/Form/Form.js';
import Nav from './components/Nav/Nav.js';
import Post from './components/Post/Post.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Auth />
        <Form />
        <Nav />
        <Post />
        <Dashboard />
      </div>
    );
  }
}

export default App;
