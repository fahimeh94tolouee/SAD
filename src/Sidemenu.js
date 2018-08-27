import React, { Component } from 'react'; 
import {    
      NavLink, 
      Nav, NavItem } from 'reactstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link} from 'react-router-dom';


export default class Sidemenu extends Component {

  render() {
    const items = this.props.items.map((item) => {
          return (
          <NavItem key={item['id']} >
            <NavLink  tag={Link} to={item['href']}  className={'ml-' + item['indent']}>{item['text']}</NavLink> 
          </NavItem> 
            );
    });
    return (       
          <Nav  className={this.props.className}navbar> 
              {items}

            <div className="dropdown-divider m-3 mr-5 border-secondary"/>
              {this.props.children}
          </Nav>   
      );
  }

}
