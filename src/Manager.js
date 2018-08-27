import React, { Component } from 'react';  
import { BrowserRouter as Router, Route, IndexRoute, Link} from "react-router-dom";
import {IconContext} from "react-icons";
import {Navbar, NavbarBrand, NavbarToggler, NavLink, NavItem, Nav, Collapse} from 'reactstrap';
import Facilities from './Facilities';
 
export default class Manager extends Component {
  constructor(props) {
    super(props) 
    this.toggle = this.toggle.bind(this)
    this.state = { 
      isOpen: false
    }; 
  } 

  toggle(){
    let v = this.state.isOpen
    this.setState({
      isOpen: !v
    })
  }

  render() { 
    return (
      <div> 
            <div> 
              <Navbar color="light" light expand="md" className="p-0">
                <NavbarBrand tag={Link} to="/manager" className="pl-3">Easy Payment / Manager Portal</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto mr-md-3" navbar>
                    <NavItem className="ml-4">
                      <NavLink tag={Link} to="/manager/facility">
                        Facilities
                      </NavLink>
                    </NavItem> 
                    <NavItem className="ml-4">
                      <NavLink tag={Link} to="/manager/messages">
                        Messages
                      </NavLink>
                    </NavItem> 
                    <NavItem className="ml-4">
                      <NavLink tag={Link} to="/manager/staff">
                        Staff
                      </NavLink>
                    </NavItem>
                    <NavItem className="ml-4">
                      <NavLink tag={Link} to="/manager/user">
                        Users
                      </NavLink>
                    </NavItem> 
                    <NavItem className="ml-4">
                      <NavLink tag={Link} to="/manager/financial">
                        Financial
                      </NavLink>
                    </NavItem>   
                  </Nav>
                </Collapse>
              </Navbar>
   
              <Route exact path="/manager/facility" 
                render={(props) => <Facilities {...props} add_service={this.props.add_service} />}/> 
              <Route exact path="/manager" 
                render={(props) => <div>Hello</div>}/>  
            </div> 
      </div>
    );
  } 
}
 