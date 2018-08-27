import React, { Component } from 'react';  
import {Button, Collapse, Card, CardBody, CardHeader, CardTitle, CardText, CardFooter, Form, FormGroup, Input, Label, CustomInput} from 'reactstrap';
import {} from "react-router-dom"; 
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';   
import {FiMail} from "react-icons/fi";  
import v4 from 'uuid';  

export default class UserProfile extends Component {
	constructor(props) {
		super(props)  
		this.toggle_edit = this.toggle_edit.bind(this)
		this.send_info = this.send_info.bind(this)
		this.changed = this.changed.bind(this)
		this.state={
			edit: false,
			name: this.props.user_info.name,
			password: this.props.user_info.password,
			password_rep: this.props.user_info.password,
			mail: this.props.user_info.mail,
			avatar: this.props.user_info.avatar
		}
	}   

	toggle_edit(){
		let e = this.state.edit
		this.setState({
			edit: !e
		})
	}

	send_info(){
		if(this.state.password_rep != this.state.password) 
			return
		let info = {}
		info.name = this.state.name
		info.mail = this.state.mail
		info.password = this.state.password 
		info.avatar = this.state.avatar
		this.props.set_user_info(info)
	}

	changed(name, evt){  
		this.setState({[name]: evt.target.value})
	}

	render() {    
		return ( 
			<Form className="col-md-8">
				<FormGroup>
						<Label>Name</Label>
						<Input type="text" disabled={!this.state.edit} value={this.state.name} onChange={this.changed.bind(this,"name")}/>
				</FormGroup>
				<FormGroup>
						<Label>Mail</Label>
						<Input type="email" disabled={!this.state.edit} value={this.state.mail} onChange={this.changed.bind(this,"mail")}/>
				</FormGroup> 
				<FormGroup className={this.state.edit?"":"d-none"}>
						<Label>Password</Label>
						<Input type="password" value={this.state.password} onChange={this.changed.bind(this,"password")}/>
				</FormGroup>
				<FormGroup className={this.state.edit?"":"d-none"}>
						<Label>Repeat password</Label>
						<Input type="password" value={this.state.password_rep} onChange={this.changed.bind(this,"password_rep")}/>
				</FormGroup>
				<FormGroup className={this.state.edit?"":"d-none"}>
						<Label>Photo</Label>
						<CustomInput id={v4()} filename={this.state.file} type="file" onChange={this.changed.bind(this,"avatar")}
												onChange={function (e) {
												var fieldVal = e.target.value;

												// Change the node's value by removing the fake path (Chrome)
												fieldVal = fieldVal.replace("C:\\fakepath\\", ""); 

												if (fieldVal != undefined || fieldVal != "") {
												$(".custom-file-label").attr('data-content', fieldVal);
												$(".custom-file-label").text(fieldVal);
												}

												}}/> 
				</FormGroup> 
				{
					!this.state.edit && 
					<Button color="info pl-3 pr-3" onClick={this.toggle_edit}>Edit</Button>
				}
				{
					this.state.edit && 		
					<FormGroup className="float-right pt-3 pb-0"> 
						<Button className="pl-3 pr-3 mr-3" color="success" onClick={this.send_info}>Save</Button>
						<Button color="danger">Cancel</Button>
					</FormGroup> 
				}
			</Form>
			);
	}
}