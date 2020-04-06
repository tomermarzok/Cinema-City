import React from "react";
import "../dashboard/Nav.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import SigninLink from '../auth/SigninLink.js';
import SignupLink from '../auth/SignupLink.js';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = (props) => {
  const {auth, profile} = props;
  const links = (auth.uid ? <SigninLink profile={profile}/> : <SignupLink/>)
  return (
    <nav className="navbar navbar-default" id="root">
      <div className="nav-wrapper">
        <a href="/Dashboard" className="brand-logo">
          <i className="fa fa-film fx-5x"></i>
          Moviepedia
        </a>
        <ul className="left hide-on-med-and-down">
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Dashboard">Search</NavLink>
          </li>
        </ul>
        {links}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    auth : state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Nav);
