import React, { Component } from 'react';
import axios from 'axios';
import './Auth.css';

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = () => {
    const { username, password } = this.state;
    axios
      .post('/auth/login', { username, password })
      .then((response) => {
        this.props.login(response.data);
        this.props.history.push('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  register = () => {
    const { username, password } = this.state;
    let newUser = {
      username,
      password,
    };
    axios
      .get('auth/users', newUser)
      .then((response) => {
        this.props.updateUser(response.data);
        this.props.history.push('/dashboard');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="auth-container">
        <h1>Helo</h1>
        <div className="auth-input">
          Username:{' '}
          <input
            value={username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          Password:{' '}
          <input
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <div className="auth-buttons">
          <button onClick={this.login}>Login</button>
          <button onClick={this.register}>Register</button>
        </div>
      </div>
    );
  }
}

export default Auth;
