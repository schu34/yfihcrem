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


const Template = ({children}) => (
      <div className="content">

        <Navbar>
         <Navbar.Header>
           <Navbar.Brand>
             <a href="/dashboard">Merchify</a>
           </Navbar.Brand>
         </Navbar.Header>
        </Navbar>

        <Row className="show-grid">
          <Col md={2}>
            <Nav className="herp">
              <NavItem eventKey={1} href="/dashboard"><img src={dashboard_off} />Dashboard</NavItem>
              <NavItem eventKey={2} href="/products/1"><img src={products_off} />Products</NavItem>
              <NavItem eventKey={3} href="/store/1"><img src={store_off} />Store</NavItem>
              <NavItem eventKey={4} href="/analytics"><img src={analytics_off} />Analytics</NavItem>
              <NavItem eventKey={5} href="/settings"><img src={settings_off} />Settings</NavItem>
            </Nav>
          </Col>

          <Col md={6}>
            <div>{children}</div>
          </Col>
        </Row>

      </div>
    );

export default Template;
