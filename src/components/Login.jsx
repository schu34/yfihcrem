import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon, Nav, NavItem, Navbar }  from "react-bootstrap";
import { LinkContainer }                            from 'react-router-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link }     from "react-router-dom";
import { connect }                                  from "react-redux";
import { bindActionCreators }                       from "redux";

//components

//css
import                                               "bootstrap/dist/css/bootstrap.css";
import                                               '../css/App.css';


class Login extends Component {
  render() {
    return (
     <Row>
       <Col mdOffset={4} md={4}></Col>
     </Row>
    );
  }
}

export default Login;
