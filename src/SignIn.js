import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

export default class SignIn extends React.Component {


	constructor(props) {
		super(props);  
		this.state = {
			mail: '',
			pass: ''
		}; 
	}

	on_change(name, evt) {
		this.setState({[name]: evt.target.value})
	}

	render() {
	return (
		<Card className="col-md-5 m-md-5 bg-light">
			<CardTitle className="mt-4 ml-4"> Sign in!
	      	</CardTitle>
	      	<CardBody>
		    <Form className='m-2'>
		        <FormGroup>
		          <Label for="exampleEmail">Email</Label>
		          <Input type="email" name="email" id="exampleEmail" placeholder="example@example.example" onChange={this.on_change.bind(this, 'mail')}/>
		        </FormGroup>
		        <FormGroup>
		          <Label for="examplePassword">Password</Label>
		          <Input type="password" name="password" id="examplePassword" placeholder="At least with 8 characters" onChange={this.on_change.bind(this, 'pass')} />
		        </FormGroup> 
		        <Button size="sm" color="success" onClick={this.props.toggle_signed_in.bind(this, this.state.mail, this.state.pass)}> 
                	<NavLink className="text-white" tag={Link} id="sign_in" to="/home/user">Sign in</NavLink>
		        </Button> 
	      	</Form>
	      	</CardBody>
		</Card>
	);
	}
}