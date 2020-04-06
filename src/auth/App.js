import React, { Component} from "react";
import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import Nav from '../dashboard/Nav.js';
import Dashboard from "../dashboard/Dashboard.js";
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import Login from "./Login.js";
import SignUp from "./SignUp.js";
import About from "./About.js";

class App extends Component {
  render() {
    console.warn = () => {};
    return (
      <Router>
        <div className="App">
          <div className="backgroundImage">
            <Nav />
            <Switch>
              <Route exact path="/Dashboard" component={Dashboard} />
              <Route path="/Login" component={Login} />
              <Route path="/SignUp" component={SignUp} />
              <Route path="/About" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
