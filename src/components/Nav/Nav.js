import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <div className="nav-bar">
        <img
          className="profile-pic"
          src="https://robohash.org/why"
          alt="profile"
        />
        <nav className="nav-links">
          <Link to="/dashboard">
            <button className="nav-btn">Home</button>
          </Link>
          <Link to="/new">
            <button className="nav-btn">New Post</button>
          </Link>
          <Link to="/">
            <button className="nav-btn">Logout</button>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Nav;
