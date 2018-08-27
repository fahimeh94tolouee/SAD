import React, { Component } from 'react';  
import {Button, ButtonGroup} from 'reactstrap';
import {Link} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';   
import {FiMail} from "react-icons/fi"; 
import {FaArrowAltCircleDown, FaArrowAltCircleUp} from "react-icons/fa";
import v4 from 'uuid';  

export default class Services extends Component {
	constructor(props) {
		super(props)   
	}   

	render() {     
		let regs = this.props.services.regs.map((item) => { 
			return <Button color="success"  className="text-uppercase" tag={Link} to={item.to} key={v4()} onClick={this.props.toggle_tab.bind(this, item.name)}>{item.name}</Button>
		}) 
		let pays = this.props.services.pays.map((item) => { 
			return <Button color="info"  className="text-capitalize"  tag={Link} to={item.to} key={v4()} onClick={this.props.toggle_tab.bind(this, item.name)}>{item.name}</Button>
		}) 
		return ( 
			<div className="row p-3 pl-5 align-items-start d-flex">
				<ButtonGroup className="col-4 m-0 p-0" vertical>
					<Button color="success" disabled>Registrations</Button>
					{regs}
				</ButtonGroup>
				<ButtonGroup className="col-5 m-0 pl-3 pt-0" vertical>
					<Button color="info" disabled>Payments</Button>
					{pays}
				</ButtonGroup>
			</div>
			);
	}
}