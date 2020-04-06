import React from "react";
import { connect } from "react-redux";
import { signOut } from ".././reducers/authAction.js";


const SigninLink = (props) => {
     return (
       <ul className="right hide-on-med-and-down">
         <li>
           <i className="fa fa-user">{props.profile.initials}</i>
         </li>
         <li>
           <a href="#!" onClick={props.signOut}>
             Logout
           </a>
         </li>
       </ul>
     );
}

const mapStateToProps = (dispatch) => {
  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect(null,mapStateToProps)(SigninLink);