import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon, Nav, NavItem, Navbar }  from "react-bootstrap";
import { LinkContainer }                            from 'react-router-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link }     from "react-router-dom";
import { connect }                                  from "react-redux";
import { bindActionCreators }                       from "redux";
import { editPersona}                               from './actions/action_index';
import { createNewFlow }                            from "./actions/action_flow";
import                                               "bootstrap/dist/css/bootstrap.css";
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/:storeId" component={Store} />
        </Switch>
      </Router>
    );
  }
}

export default App;
