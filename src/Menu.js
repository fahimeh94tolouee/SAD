import React, { Component } from 'react'; 
import {  Collapse,
		  Navbar,
		  NavbarToggler,
		  NavbarBrand,
		  Nav,
		  NavItem,
		  NavLink,
		  UncontrolledDropdown,
		  DropdownToggle,
		  DropdownMenu,
		  DropdownItem, Button, ButtonGroup, ButtonDropdown} from 'reactstrap'; 
import {BrowserRouter as Router, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Submenu from './Submenu';
import Sidemenu from './Sidemenu';
import FormComponent from './Form';
import User_Icon from './User_Icon';

 
 
export default class Menu extends Component { 
  constructor(props) {
    super(props);  
    this.state = {
      isOpen: false, tools: false
    };
  }
  toggle_state(name) {
    this.setState({
      [name]: !this.state[name]
    })
  } 
  render() {  
    const items_sidemenu = [
            {'id': 'news_cl', 'href': '/news', 'indent': 3,'text': 'News'},
            {'id': 'about_cl', 'href': '/about', 'indent': 3,'text': 'About'},
    				{'id': 'contact_cl', 'href': '/contact', 'indent': 3,'text': 'Contact'},
    				{'id': 'services_cl', 'href': '/services', 'indent': 3,'text': 'Services'} ]
    return (  
    	<div>
        <Navbar color="dark" dark expand="md" className='p-0'>
          <NavbarBrand tag={Link} id="menu" to="/home" className='pl-3'>Easy Payment</NavbarBrand>

          <NavbarToggler id="menu_toggler" onClick={this.toggle_state.bind(this, 'isOpen')} />
          <Collapse className="bg-dark" isOpen={this.state.isOpen} navbar>
          	<Sidemenu className="ml-4 mt-2 pb-3 d-md-none" items={items_sidemenu} nav>
      				{
      					this.props.out && 
      					<div className="ml-3">
      					  <NavLink className="text-success" tag={Link} id="sign_up" to="/home/sign_up">Sign up</NavLink> 
      					  <NavLink  className="text-info" tag={Link} id="sign_in" to="/home/sign_in">Sign in</NavLink>		 
      					</div>
      				}                      
                    	{
      					this.props.out == false &&  
      					<User_Icon togglerCls="ml-3" img_cls="border border-light border-3" dropdownMenuCls="m-4 bg-light" user={this.props.user} toggle_signed_in = {this.props.toggle_signed_in} navbar></User_Icon> 
      				}
            </Sidemenu>
          </Collapse>
          <Nav className={["ml-auto mr-3", "d-md-inline d-none"].join(' ')}  navbar>  
              <ButtonGroup className='h-100'> 
                <Button size="sm" outline className="rounded-0 border-0">
                  <NavLink  tag={Link} id="news" to="/home/news">News</NavLink>
                </Button> 
                <Button size="sm" outline className="rounded-0 border-0">
                  <NavLink  tag={Link} id="about" to="/home/about">About</NavLink>
                </Button> 
                <Button size="sm" outline className='border-0'>
                  <NavLink  tag={Link} id="contact" to="/home/contact">Contact</NavLink>
                </Button>
                <Button size="sm" outline className='border-0'>
                  <NavLink  tag={Link} id="services" to="/home/services">Services</NavLink>
                </Button>  
				{
					this.props.out && 

					<ButtonGroup className='h-100'> 
						<Button size="sm" className="rounded-0 border-0 bg-success text-white">
							<NavLink  tag={Link} id="sign_up" to="/home/sign_up">Sign up</NavLink>
						</Button> 
						<Button size="sm" className="rounded-0 border-0 bg-info text-white">
							<NavLink  tag={Link} id="sign_in" to="/home/sign_in">Sign in</NavLink>
						</Button> 
					</ButtonGroup>
				}

				{
					this.props.out == false &&  
					<User_Icon bg="bg-secondary" user={this.props.user} toggle_signed_in = {this.props.toggle_signed_in} navbar></User_Icon> 
				} 

	            </ButtonGroup>
          </Nav>

        </Navbar>    
         </div>
    );
  }
}