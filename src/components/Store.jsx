import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon, Nav, NavItem, Navbar }  from "react-bootstrap";
import { LinkContainer }                            from 'react-router-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link }     from "react-router-dom";
import { connect }                                  from "react-redux";
import { bindActionCreators }                       from "redux";
import Template from './Template';

//components

//css
import                                               "bootstrap/dist/css/bootstrap.css";
import                                               '../css/App.css';


class Store extends Component {
  render() {
    return (
    <div>
      <Template>

        <div>
          <h1>This is a store</h1>
        </div>

      </Template>
    </div>
    );
  }
}

export default Store;
