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


const Template = ({children}) => (
      <div className="content">

        <Navbar>
         <Navbar.Header>
           <Navbar.Brand>
             <a href="/">Merchify</a>
           </Navbar.Brand>
         </Navbar.Header>
        </Navbar>

        <Row className="show-grid">
          <Col md={2}>
            <Nav className="herp">
              <NavItem eventKey={1} href="/">Dashboard</NavItem>
              <NavItem eventKey={2} href="/products">Products</NavItem>
              <NavItem eventKey={3} href="/store">Store</NavItem>
              <NavItem eventKey={4} href="/analytics">Analytics</NavItem>
              <NavItem eventKey={5} href="/settings">Settings</NavItem>
            </Nav>
          </Col>

          <Col md={6}>
            <div>{children}</div>
          </Col>
        </Row>

      </div>
    );

export default Template;
