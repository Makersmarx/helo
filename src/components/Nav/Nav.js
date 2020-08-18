import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { connect } from 'react-redux';

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
            <button className="nav-btn nav-logout">Logout</button>
          </Link>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

function mapStateToProps(reduxState) {
  const { username, profile_pic } = reduxState;
  return {
    username,
    profile_pic,
  };
}

export default connect(mapStateToProps)(Nav);
