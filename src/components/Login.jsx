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
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.emailChanged = this.emailChanged.bind(this);
    this.passwordChanged = this.passwordChanged.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  emailChanged(e) {
    this.setState({ email: e.target.value });
  }

  passwordChanged(e) {
    this.setState({ password: e.target.value });
  }

  sendData(e) {
    let {email, password} = this.state;
    const body = JSON.stringify({email, password})
    console.log(body);
    fetch("/auth/login",{
      method: 'POST',
      headers:{
        "Accept": "application/json",
        "content-type":"application/json"
      },
      body
    }).then(res => {
      console.log(res);
    });
  }

  render() {
    return (
      <Row>
        <Col classname="login-container" mdOffset={4} md={4}>
          <div>
            <input
              onChange={this.emailChanged}
              classname="login-input"
              type="text"
              placeholder="email"
            />
          </div>
          <div>
            <input
              onChange={this.passwordChanged}
              classname="login-input"
              type="password"
              placeholder="password"
            />
          </div>
          <Button classname="button" onClick={this.sendData}>
            Login
          </Button>
          <Row>
            <Col md={6}>google signin</Col> {/*TODO: needs icons*/}
            <Col md={6}>facebook signin</Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Login;
