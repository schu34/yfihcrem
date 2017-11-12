import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Glyphicon,
  Nav,
  NavItem,
  Navbar
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//components
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import Dashboard from "./Dashboard";
import Store from "./Store";
import Product from "./Product";

//css
import "bootstrap/dist/css/bootstrap.css";
import "../css/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Grid>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/forgotPassword" component={ForgotPassword} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/store/:storeId" component={Store} />
            <Route path="/products/:productId" component={Product} />
          </Grid>
        </Switch>
      </Router>
    );
  }
}

export default App;
