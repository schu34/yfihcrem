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
const example = require('../images/example.jpg')

const five = 5;
const name = "Matt";
const visits = 2331;
const sales = 331;
const my_array = [
  {"item":"Hoodie", "quantity":"1222", "image":example},
  {"item":"Tshirt", "quantity":"947", "image":example},
]

const my_blogs = [
{"description":"Some Blurp about the post, something very cool", "title":"Blog Post Here", "image":example},
{"description":"Some Blurp about the post, something very cool", "title":"Blog Post Here", "image":example},
{"description":"Some Blurp about the post, something very cool", "title":"Blog Post Here", "image":example}
]

const right_side_text = `Some widget of some sort? Maybe blog post?`


function blog_template(val){
  return(
  <div className="dash-card">
    <img src={val["image"]} /> {val["title"]}
    <p> {val["description"]} </p>
  </div>)
}

var best_items = my_array.map(function(val){ return <p> <img src={val["image"]} /> {val["item"] + ": " + val["quantity"]} sold</p> })
var blogs = my_blogs.map(function(val){ return blog_template(val)})

class Dashboard extends Component {
  render() {
    return (
      <div>
          <Grid className="full-width">
            <Row className="show-grid dash-greeting">
              <Col sm={6}>
                <p>Good Afternoon, {name}</p>
                <p className="dash-sub-greeting">Here is what's going on today</p>
              </Col>

              <Col sm={3}>
                <p className="dash-head-statistics">{visits}</p>
                <p className="dash-head-statistics-label">Todays Visits</p>
              </Col>

              <Col sm={3}>
                <p className="dash-head-statistics">${sales}</p>
                <p className="dash-head-statistics-label">Todays Sales</p>
              </Col>

            </Row>


            <Row className="show-grid dash-card">
              <Col md={12}>
                <div>
                  <p>Your top selling products</p>
                  {best_items}
                </div>
              </Col>
            </Row>

            <Row className="show-grid">
                <div>
                  {blogs}
                </div>
            </Row>

            <p className="faqs"> Have a question about Merchify? Check out our FAQ <a href="/">here</a> </p>
          </Grid>
      </div>
    );
  }
}

export default Dashboard;
