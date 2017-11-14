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


const five = 5;
const name = "Matt";
const visits = 2331;
const sales = 331;
const my_array = [
  {"item":"Hoodie", "quantity":"1222"},
  {"item":"Tshirt", "quantity":"947"},
]

var best_items = my_array.map(function(val){ return <p>{val["item"] + ": " + val["quantity"]}</p> })

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Template>
          <Grid>

            <Row className="show-grid">
              <Col md={4}>
                <p>Good Afternoon, {name}</p>
              </Col>

              <Col md={2}>
                <p>{visits}</p>
                <p>Todays Visits</p>
              </Col>

              <Col md={2}>
                <p>${sales}</p>
                <p>Todays Sales</p>
              </Col>
            </Row>


            <Row className="show-grid">
              <Col md={6} xsOffset={1}>
                <div>
                  <p>Your best-selling products</p>
                  {best_items}
                </div>
              </Col>
            </Row>

          </Grid>
        </Template>
      </div>
    );
  }
}

export default Dashboard;
