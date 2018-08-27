import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fake from './fake.json';

export default class SignUp extends React.Component {  
	constructor(props) {
	    super(props);  
		this.updateInputValue = this.updateInputValue.bind(this);
	    this.state = {
	      first_name: '', last_name: '', mail: '', pass: '', rep_pass: ''
	    };
	  }

	updateInputValue(name, evt) { 
		this.setState({
		[name]: evt.target.value
		});
	}
	send_form = () => { 
		// axios.get('http://192.168.200.37:8000/users/register/', { 
		//  	params: {
		//  	'name': this.state.first_name,
		//  	'email': this.state.mail,
		//  	'password': this.state.pass
		//  	}
	 //    })
	 //    .then(function (response) {
	 //        alert('success' + response)
	 //    })
	 //    .catch(function (error) { 
	 //    	alert(error)
	 //    });
	 	axios({
			  method: 'get',
			  url: 'https://gist.githubusercontent.com/planetoftheweb/98f35786733c8cccf81e/raw/f3dad774ed1fe20b36011b1261bb392ee759b867/data.json',
			}).then(function (response){alert(response)}).catch(function (error){alert(error)});
	}
  	render() {
    return (
    	<Card className="col-md-5 m-md-5 bg-light">
    		<CardTitle className="mt-4 ml-4"> Sign up!
	      	</CardTitle>
	      	<CardBody>
		    <Form className='m-2'>
		        <FormGroup>
		          <Label for="first_name">First name</Label>
		          <Input type="text" name="first_name" id="first_name" placeholder="Your first name" onChange={this.updateInputValue.bind(this, 'first_name')}/>
		        </FormGroup>
		        <FormGroup>
		          <Label for="last_name">Last name</Label>
		          <Input type="text" name="last_name" id="last_name" placeholder="Your last name" onChange={this.updateInputValue.bind(this, 'last_name')} />
		        </FormGroup> 
		        <FormGroup>
		          <Label for="email">Email</Label>
		          <Input type="email" name="email" id="email" placeholder="example@example.example" onChange={this.updateInputValue.bind(this, 'mail')} />
		        </FormGroup> 
		        <FormGroup>
		          <Label for="examplePassword">Password</Label>
		          <Input type="password" name="password" id="examplePassword" placeholder="At least with 8 characters" onChange={this.updateInputValue.bind(this, 'pass')} />
		        </FormGroup> 
		        <FormGroup>
		          <Label for="rep_examplePassword">Repeat password</Label>
		          <Input type="password" name="password" id="rep_examplePassword" placeholder="Repeat your password" onChange={this.updateInputValue.bind(this, 'rep_pass')} />
		        </FormGroup> 
		        <Button color="success" onClick={this.send_form}>Sign up</Button>
		        <Button color="danger" className="ml-3">cancel</Button>
	      	</Form>
	      	</CardBody>
    	</Card>
    );
  }
}