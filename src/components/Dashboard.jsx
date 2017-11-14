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


//images
const analytics_on = require('../images/analytics-green.png')
const analytics_off = require('../images/analytics.png')
const dashboard_on = require('../images/dashboard-green.png')

const five = 5;
const name = "Matt";
const visits = 2331;
const sales = 331;
const my_array = [
  {"item":"Hoodie", "quantity":"1222", "image":analytics_on},
  {"item":"Tshirt", "quantity":"947", "image":analytics_off},
]

const my_blogs = [
{"description":"Some Blurp about the post, something very cool", "title":"Blog Post Here", "image":analytics_on},
{"description":"Some Blurp about the post, something very cool", "title":"Blog Post Here", "image":analytics_on},
{"description":"Some Blurp about the post, something very cool", "title":"Blog Post Here", "image":analytics_on}
]

const right_side_text = `Some widget of some sort? Maybe blog post?`


function blog_template(val){
  return(
  <div>
    <p> <img src={val["image"]} /> {val["title"]} </p>
    <p> {val["description"]} </p>
  </div>)
}

var best_items = my_array.map(function(val){ return <p> <img src={val["image"]} /> {val["item"] + ": " + val["quantity"]} sold</p> })
var blogs = my_blogs.map(function(val){ return blog_template(val)})

class Dashboard extends Component {
  render() {
    return (
      <div className="full-height">
        <Template location={this.props.location}>
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
              <Col md={6}>
                <div>
                  <p>Your top selling products</p>
                  {best_items}
                </div>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col md={6}>
                <div>
                  {blogs}
                </div>
              </Col>
            </Row>

            <p> Have a question about Merchify? Check out our FAQ <a href="/">here</a> </p>
          </Grid>
        </Template>
      </div>
    );
  }
}

export default Dashboard;
