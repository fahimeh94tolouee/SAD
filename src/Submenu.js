import React, { Component } from 'react'; 
import {    
		  NavLink, 
		  DropdownToggle,
		  DropdownMenu,
		  DropdownItem, ButtonDropdown } from 'reactstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link
} from 'react-router-dom';
 

 //props: items, toggle_id, caret, toggle_text, direction, children
export default class Menu extends Component { 
  constructor(props) {
    super(props);  
    this.state = {
      isOpen: false
    };
  }
  toggle_state(name) {
    this.setState({
      [name]: !this.state[name]
    })
  } 
  render() {

    const items = this.props.items.map((item) => { 
        return (<DropdownItem  key={item['key']}>
            <NavLink tag={Link} className="text-dark" to={item['href']}>{item['text']}</NavLink>
        </DropdownItem>);
    }) 
    return ( 
          <ButtonDropdown nav inNavbar className="btn btn-sm btn-outline-secondary rounded-0 border-0" 
          isOpen={this.state.isOpen} toggle={this.toggle_state.bind(this, 'isOpen')}>
            <DropdownToggle id={this.props.toggle_id} nav caret={this.props.caret} className="border-left-0"> 
              {this.props.children}
            	{this.props.toggle_text} 

            </DropdownToggle>
            <DropdownMenu className={"mt-0 rounded-0 dropdown-menu-" + this.props.direction}> 
              {items}
            </DropdownMenu>
          </ButtonDropdown>  
    );
  }
}