import React, { Component } from 'react';  
import {Button, Collapse, Card, CardBody, CardHeader, CardTitle, CardText, CardFooter} from 'reactstrap';
import {} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';   
import {FiMail} from "react-icons/fi";
import Msg from './Msg';
import v4 from 'uuid';

export default class MsgBox extends Component {
	constructor(props) {
		super(props)  
		this.close_all = this.close_all.bind(this)
		this.not_close_all = this.not_close_all.bind(this)
		this.state = {
			close_all: false
		}   
	} 

	close_all() {
		this.setState({close_all: true})
	}

	not_close_all() {
		this.setState({close_all: false})
	}

	render() {   
		let lst = this.props.lst
		let list_ = lst.list   
		list_ = list_.map((item) => {
			if(!this.props.unread_only || item.unread) 
				return <Msg not_close_all = {this.not_close_all} close_all={this.state.close_all} toggle_msg_unread={this.props.toggle_msg_unread} key={item.id} id={item.id} 
				title={item.title} time={item.time} unread={item.unread} text={item.text} tags={item.tags}></Msg> 
		}
		)  
		return ( 
			<div className="mt-5 m-md-4 col-md-9 col-12">  
				{list_}
				{ list_.filter(i => i != undefined).length > 0 && <Button className="w-100 mt-3" color="secondary" size='sm' onClick={this.close_all}>Close all</Button> }
			</div>
			);
	}
}