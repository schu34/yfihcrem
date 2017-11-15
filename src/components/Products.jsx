import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon, Nav, NavItem, Navbar }  from "react-bootstrap";
import { LinkContainer }                            from 'react-router-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link }     from "react-router-dom";
import { connect }                                  from "react-redux";
import { bindActionCreators }                       from "redux";
import Template from './Template';

//css
import                                               "bootstrap/dist/css/bootstrap.css";
import                                               '../css/App.css';

var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable;
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

var products = [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  }];


class Products extends Component {
  render() {
    return (
    <div>

      <BootstrapTable data={products} striped>
        <TableHeaderColumn isKey dataField='id'>Image</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product</TableHeaderColumn>
        <TableHeaderColumn dataField='price'># Sold</TableHeaderColumn>
      </BootstrapTable>

    </div>
    );
  }
}

export default Products;
