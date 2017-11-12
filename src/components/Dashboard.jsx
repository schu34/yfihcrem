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


class Dashboard extends Component {
  render() {
    return (
     <p> this is the dashboard</p>
    );
  }
}

export default Dashboard;
