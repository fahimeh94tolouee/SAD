import React, { Component } from 'react';  
import {Button, Collapse, Card, CardBody, CardHeader, CardTitle, CardText, CardFooter, Form, FormGroup, Input, Label} from 'reactstrap';
import {} from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';   
import {FiMail} from "react-icons/fi"; 
import {FaArrowAltCircleDown, FaArrowAltCircleUp} from "react-icons/fa";
import v4 from 'uuid';  

export default class Transactions extends Component {
	constructor(props) {
		super(props)  
		this.start_date_changed = this.start_date_changed.bind(this)
		this.end_date_changed = this.end_date_changed.bind(this)
		this.filter_by_tag = this.filter_by_tag.bind(this)
		this.state = {
			start_d: "2000-01-01",
			end_d: "2500-01-01",
			to_search: ""
		}
	}  

	start_date_changed(evt) {
		if(evt.target.value != "") this.setState({start_d: evt.target.value})
		else
			this.setState({start_d: "2000-01-01"})
	}

	end_date_changed(evt){
		if(evt.target.value != "") 
			this.setState({end_d: evt.target.value}) 
		else
			this.setState({end_d: "2500-01-01"})
	}

	filter_by_tag(evt){
		this.setState({to_search: evt.target.value})
	}

	render() {    
		let cnt = 0
		let ts = this.state.to_search
		let list = this.props.transactions.filter(function(item){
		      return item.title.toString().toLowerCase().search(ts.toLowerCase()) !== -1 || item.unit.toString().toLowerCase().search(ts.toLowerCase()) !== -1 || item.status.toString().toLowerCase().search(ts.toLowerCase()) !== -1
		    }).map((item) => { 
			cnt++   
			return this.state.start_d <= item.date && this.state.end_d >= item.date && <tr className={item.status == 'failed'?"table-danger": (item.status == 'waiting'?"table-warning":"table-success")} key={v4()}>
				<td scope="row">{cnt}</td>
				<td>{item.title}</td>
				<td>{item.cost}</td>
				<td>{item.unit}</td>
				<td>{item.fee}</td>
				<td>{item.date}</td>
				<td>{item.time}</td>
				<td>{item.status}</td>
				<td className="text-secondary lead">{item.type == "send" ? <FaArrowAltCircleUp />: <FaArrowAltCircleDown />}</td>
			</tr>
		})
		return ( 
			<div className="col-12  p-0">   
				<Form className="p-0 m-0 pb-4">       
			          <FormGroup className="col-md-8" onChange={this.filter_by_tag}> 
				          <Label></Label>
			              <Input type="text" placeholder="Search in table"/> 
			          </FormGroup> 
			          <FormGroup className="row col-md-9"> 
				        <FormGroup className="col-lg-6">
				          <Label>Start date</Label>
				          <Input type="date" onChange={this.start_date_changed}/>
				        </FormGroup>
				        <FormGroup className="col-lg-6">
				          <Label>End date</Label>
				          <Input type="date" onChange={this.end_date_changed}/>
				        </FormGroup>
				        </FormGroup>
				</Form>
 
				<div className="table-responsive table-hover">
				<table className="m-0 table p-1 table-bordered border-dark table-light">
				<thead className="thead-light">
					<tr>
						<th scope="col">#</th>
						<th scope="col">Title</th>
						<th scope="col">Cost</th>
						<th scope="col">Unit</th>
						<th scope="col">Fee</th>
						<th scope="col">Date</th>
						<th scope="col">Time</th>
						<th scope="col">Status</th>
						<th scope="col">Type</th>
					</tr> 
					</thead>
					<tbody>
					{list}
					</tbody>
				</table> 
				</div>
			</div>
			);
	}
}