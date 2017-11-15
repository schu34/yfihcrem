import '../css/template_styles.css'
import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { Nav,
        NavItem,
        Navbar,
        Grid,
        Row,
        Col
        }                  from 'react-bootstrap';

import {LinkContainer} from "react-router-bootstrap";

import {Switch, Route} from "react-router"
import Dashboard from "./Dashboard";
import Products from "./Products";
import Store from "./Store";
import Analytics from "./Analytics";
import Settings from "./Settings";

//images
const analytics_on = require('../images/analytics-green.png')
const analytics_off = require('../images/analytics.png')
const dashboard_on = require('../images/dashboard-green.png')
const dashboard_off = require('../images/dashboard.png')
const products_on = require('../images/products-green.png')
const products_off = require('../images/products.png')
const settings_on = require('../images/settings-green.png')
const settings_off = require('../images/settings.png')
const store_on = require('../images/store-green.png')
const store_off = require('../images/store.png')
const eye = require('../images/eye.png')
const logo = require('../images/logo2.png')


const Template = ({children, location}) => (
  
      <div className="content">
      {console.log(location)}

        <Navbar fluid>
         <Navbar.Header>
           <Navbar.Brand>
             <a href="/dashboard"><img src={logo} className="nav-logo" /></a>
           </Navbar.Brand>
         </Navbar.Header>
        </Navbar>

        <Row className="show-grid full-height">
          <Col xs={2} className="sidebar">
            <Nav className="herp">
              <LinkContainer to="/dashboard"><NavItem eventKey={1} ><img src={location.pathname.split("/")[1] === 'dashboard' ? dashboard_on: dashboard_off} />Dashboard</NavItem></LinkContainer>
              <LinkContainer to="/products"><NavItem eventKey={2} ><img src={location.pathname.split("/")[1] === 'products' ? products_on : products_off} />Products</NavItem></LinkContainer>
              <LinkContainer to="/store"><NavItem eventKey={3} ><img src={location.pathname.split("/")[1] === 'store' ? store_on : store_off} />Store</NavItem></LinkContainer>
              <LinkContainer to="/analytics"><NavItem eventKey={4} ><img src={location.pathname.split("/")[1] === 'analytics' ? analytics_on: analytics_off} />Analytics</NavItem></LinkContainer>
              <LinkContainer to="/settings"><NavItem eventKey={5} className="sidebar-settings"><img src={location.pathname.split("/")[1] === 'settings' ? settings_on : settings_off} />Settings</NavItem></LinkContainer>
            </Nav>
          </Col>

          <Col md={6}>
            <div>
              <Switch>
                <Route path="/dashboard" component={Dashboard} /> 
                <Route path="/products" component={Products} /> 
                <Route path="/store" component={Store} /> 
                <Route path="/analytics" component={Analytics} /> 
                <Route path="/settings" component={Settings} /> 
              </Switch>
            </div>
          </Col>
        </Row>

      </div>
    );

export default Template;
