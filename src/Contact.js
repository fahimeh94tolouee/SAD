import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute, Link} from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, Card } from 'reactstrap'; 
import v4 from 'uuid'; 

export default class Contact extends React.Component {
  constructor(props) {
    super(props); 
  } 

  render() { 
    return (
      <Card className = "col-md-6 bg-light p-0 m-5">
      <Form>
        <FormGroup className="m-3">
            <Label>{this.props.staff_id == undefined ? "Email" : "ID"}
          </Label>
            <Input type={this.props.staff_id == undefined ? "email" : "text"}/> 
        </FormGroup>
        <FormGroup className="m-3">
            <Label>Content
            </Label>
            <Input type="textarea"/> 
        </FormGroup>
        <div className="float-right m-3 mt-1">
          <Button color="success" className="mr-3 pl-4 pr-4">Send</Button>
          <Button color="danger">Cancel</Button>
        </div>
      </Form>
      </Card>
    );
  }
}