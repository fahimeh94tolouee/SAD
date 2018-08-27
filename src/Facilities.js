import React, { Component } from 'react';  
import { BrowserRouter as Router, Route, IndexRoute, Link} from "react-router-dom";
import {IconContext} from "react-icons";
import {Navbar, NavbarBrand, NavbarToggler, NavLink, NavItem, Nav, Collapse, Card, CardHeader, CardBody, CardFooter} from 'reactstrap';
 
export default class Facilities extends Component {
  constructor(props) {
    super(props)  
  } 


  render() { 
    return (
      <Card className="m-5 bg-light">
        <CardHeader>
          Add new facility.
        </CardHeader>
        <CardBody>

        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
    );
  } 
}
 