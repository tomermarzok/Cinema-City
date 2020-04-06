import React, { Component } from "react";
import ".././movie/MovieInfo.css";
import "firebase/auth";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";
import { signUp } from ".././reducers/authAction.js";

class SignUp extends Component {
  state = {
      email: "",
      password: "",
      firstName:"",
      lastName:""
    }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const {  auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/Dashboard" />;
    return (
      <div className="InfoContainer">
        <form>
          <i class="fa fa-user-plus fa-5x"></i>
          <div className="form-group">
            <font size="10" color="red">
              Register your account
            </font>
            <div />
            <label>First Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter FIrst Name"
              required
            />
            <label>Last Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter Last Name"
              required
            />
            <label>Email address</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="email"
              id="email"
              placeholder="Enter email"
              required
            />
            <label>Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              id="Password"
              placeholder="Password"
              required
            />
          </div>
          <button
            onClick={this.handleSubmit}
            style={{ marginLeft: "25px" }}
            className="btn btn-success"
            children="Get started"
          >
            Signup
          </button>
          {authError ? <p>{authError}</p> : null}
          <p>
            Already have an account yet?
            <NavLink to="/Login"> Sign UP</NavLink>
          </p>
        </form>
      </div>
    );
  }
}
const mapStateToProps= ( state)=>{
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    signUp: (newUser)=>dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

