import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Glyphicon,
  Nav,
  NavItem,
  Navbar,
  Button
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//components

//css
import "bootstrap/dist/css/bootstrap.css";
import "../css/App.css";

class Login extends Component {
  render() {
    return (
      <Row>
        <Col classname="login-container" mdOffset={4} md={4}>
          <div>
            <input classname="login-input" type="text" placeholder="email" />
          </div>
          <div>
            <input
              classname="login-input"
              type="password"
              placeholder="password"
            />
          </div>
          <Button classname="button">Login</Button>
          <Row>
            <Col md={6}>google sign .   in</Col> {/*TODO: needs icons*/}
            <Col md={6}>facebook signin</Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Login;
