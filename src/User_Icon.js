import React, { Component } from 'react'; 
import { NavItem, NavLink, Button, ButtonGroup, ButtonDropdown, DropdownTogglem, DropdownItem, DropdownMenu, DropdownToggle, Media, UncontrolledDropdown } from 'reactstrap'; 
import {BrowserRouter as Router, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Submenu from './Submenu'; 
import Img from "./2.jpg";


 
export default class User_Icon extends Component { 
  constructor(props) {
    super(props);  
    this.state = {
      isOpen: false
    };
  } 

  render() {   
    const style_img = {
              position: "relative", 
              float: "left",  
              borderWidth: "10px"
          }
    const items = [{key: 'ui_k1', href: '/home/user', text: 'Account'}, 
      {key: 'ui_k2', href: '/home/user', text: 'Settings'}, 
      {key: 'ui_k3', href: '/home', text: 'Sign out'}]
    return (      
        <UncontrolledDropdown  nav inNavbar> 
          <DropdownToggle  nav size="sm" 
              className={["rounded-0 h-100 justify-content-center pt-0 pb-0", 
              this.props.togglerCls, this.props.bg].join(' ')}> 
              <img src={Img} className={["rounded-circle align-self-center mr-1 ml-0 mt-0", this.props.img_cls].join(' ')} height="45" width="45" style={style_img} /> {' '}
              <div className="caret"></div>
          </DropdownToggle>
          <DropdownMenu right className={this.props.dropdownMenuCls}>
            <DropdownItem header>Welcome {this.props.user.name}!</DropdownItem> 
            <DropdownItem header>{this.props.user.mail}</DropdownItem> 
            <DropdownItem><NavLink  className="text-dark" tag={Link} id="acc" to="/home/user">Account</NavLink></DropdownItem>
            <DropdownItem divider />
            <DropdownItem><NavLink  className="text-danger" tag={Link} id="sign_out" to="/home" onClick={this.props.toggle_signed_in}>Sign out</NavLink></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>  
    );
  }
}
 