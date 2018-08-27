import React, { Component } from 'react';  
import {Button, Collapse, Card, CardBody, CardHeader, CardTitle, CardText, CardFooter} from 'reactstrap';
import {} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';   
import {FiMail} from "react-icons/fi";
import v4 from 'uuid';

export default class Msg extends Component {
	constructor(props) {
		super(props)     
		this.toggle = this.toggle.bind(this);
		this.state = { collapse: false };
	}

	toggle() {
		// this.props.not_close_all()
		if(this.state.collapse) this.props.toggle_msg_unread(this.props.id);
		this.setState({ collapse: !this.state.collapse});
	}

	render() {   
		return ( 
			<div className="pb-1"> 
				<Card color={this.props.unread ? "warning":""}>
					<CardHeader onClick={this.toggle} >Header</CardHeader>
					<Collapse isOpen={this.state.collapse} className="multi-collapse" id={this.props.id}>
						<CardBody>
							<CardTitle>Special Title Treatment</CardTitle>
							<CardText>With supporting text below as a natural lead-in to additional content.</CardText> 
						</CardBody>
						{
						// <CardFooter>tags</CardFooter>
						} 
							
					</Collapse>
				</Card>  
			</div>
			);
	}
}