import React from "react";
import { NavLink } from "react-router-dom";

const SignupLink = (props) => {
  return (
    <ul className="right hide-on-med-and-down">
      <li>
        <i className="fa fa-user ">Not logged in</i>
      </li>
      <li>
        <NavLink to="/Login">Log in</NavLink>
      </li>
      <li>
        <NavLink to="/SignUp">Sign up</NavLink>
      </li>
    </ul>
  );
};

export default SignupLink;


