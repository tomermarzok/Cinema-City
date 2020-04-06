import React, {Component} from "react";
import ".././movie/MovieInfo.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from ".././reducers/authAction.js";
import { Redirect } from "react-router-dom";

class Login extends Component {
    state = {
      email: "",
      password: "",
    };
  
  handleChange=(e)=> {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit=(e)=> {
    e.preventDefault();
    this.props.signIn(this.state);
        console.log(this.state);

  }

  render() {
    const {authError,auth}=this.props;
    if (auth.uid) return <Redirect to="/Dashboard" />;
    return (
      <div className="InfoContainer">
        <form onSubmit={this.handleSubmit}>
          <i className="fa fa-user fa-5x" />
          <div className="form-group">
            <font size="10" color="red">
              Login
            </font>
            <div></div>
            <label>Email address</label>
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              autoComplete="on"
            />
          </div>{" "}
          {authError ? <p>{authError}</p> : null}
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <p>
            Don't have an account yet?
            <NavLink to="/SignUp"> Sign UP</NavLink>
          </p>
        </form>
      </div>
    );
  }
}
const mapStateToProps= ( state)=>{
  return {
    authError:state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);