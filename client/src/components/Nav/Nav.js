// Imports ========================================================================================

import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import './Nav.css';

// Functions ======================================================================================

const Nav = (props) => {
  let greeting;

  if (props.user === null) {
    greeting = (
      <Fragment>
        <ul className="nav navbar-right">
          <li><Link to="/signup" className="signUp"><i className="material-icons">person_add</i> Sign Up </Link></li>
          <li><Link to="/login" className="login"><i className="material-icons">verified_user</i> Login </Link></li>
        </ul>
      </Fragment>
    )
  } else if (props.user.firstName) {
    greeting = (
      <Fragment>
        <div className="text-right">
          <Link to="/profile"><i className="icon-user"></i> User Profile </Link>
          <Link to="/" className="logout" onClick={props.logout}><i className="icon-remove-sign"></i> Logout </Link>
          <Link to="/goals" className="goals"><i className="icon-download-alt"></i> Goals </Link>
          <Link to="/friends" className="friends"><i className="icon-group"></i> Friends </Link>
        </div>
      </Fragment>
    )
  } else if (props.user.username) {
    greeting = (
      <Fragment>
        <div className="text-right">
          <Link to="/profile"><i className="icon-user"></i> User Profile </Link>
          <Link to="/" className="logout" onClick={props.logout}><i className="icon-remove-sign"></i> Logout </Link>
          <Link to="/goals" className="goals"><i className="icon-download-alt"></i> Goals </Link>
          <Link to="/friends" className="friends"><i className="icon-group"></i> Friends </Link>
        </div>
      </Fragment>
    )
	}

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand"><i className="material-icons md-72">local_atm</i> Cheapo </Link>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarLinks" aria-controls="navbarLinks" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <span className="collapse navbar-collapse justify-content-end" id="navbarLinks">
        {greeting}
      </span>
    </nav>
  )
};

// Export =========================================================================================

export default Nav;