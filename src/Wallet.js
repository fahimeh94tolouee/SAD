import React, { Component } from 'react'; 
import { Badge, ListGroup, ListGroupItem, Card, CardHeader, CardBody, Button, UncontrolledCollapse,
Form, Input, FormGroup, Label, ModalHeader, Modal, ModalBody, ModalFooter } from 'reactstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';  
import Img from './w2.png';
import {FaPlus} from "react-icons/fa";
import v4 from 'uuid';

export default class Wallet extends Component {
	constructor(props) {
		super(props) 
		this.confirm = this.confirm.bind(this)
		this.from_selected = this.from_selected.bind(this)
		this.to_selected = this.to_selected.bind(this)
		this.amount_value = this.amount_value.bind(this)
		this.confirm_exchange = this.confirm_exchange.bind(this)
		this.toggle_modal = this.toggle_modal.bind(this)
		this.state = {
			units: ['USD', 'EUR', 'IRR'],
			from_selected: 'USD',
			to_selected: 'EUR',
			to_list: ['EUR', 'IRR'],
			amount: 0,
			modal_is_open: false,
			fee: 1, 
			cash_values: {
				'USD': 5,
				'EUR': 3,
				'IRR': 1
			}
		}
	}
	confirm(num){
		let v = parseFloat(document.querySelector("#i" + num).value)
		if(v > 0 && v < 10000000)this.props.add_irr(v)
		document.querySelector("#i" + num).value = ''
	}
	from_selected(evt){
		let v = evt.target.value
		this.setState({from_selected: v, 
			to_list:this.state.units.filter((item) => item != v)}) 
	}
	to_selected(evt){
		this.setState({
			to_selected: evt.target.value
		})
	}
	amount_value(evt){
		this.setState({
			amount: parseFloat(evt.target.value)
		})
	}
	toggle_modal(){
		let curr = this.state.modal_is_open
		this.setState({
			modal_is_open: !curr
		})
	}
	confirm_exchange(evt){ 
		//request to back and update values 
	}
	render() {
		let to_options = this.state.to_list.map((item) => {
			return <option key={v4()}>{item}</option>
		})
		return ( 	
			<div>				    
				<Card color="light" className="col-md-8 p-2">
					<CardHeader>
						Increase Credit <small className="text-secondary">(Only IRR wallet can be increased).</small>
					</CardHeader>
					<CardBody>
						{
							// <ListGroupItem color="secondary">
							// 	<span className="lead">USD</span> 
							// 	<span className="float-right lead font-weight-bold">
							// 		{this.props.wallets.dollar}
							// 		<Button color="success" size="sm" className="d-flex mt-1 ml-3 float-right justify-content-center">
							// 			<FaPlus />
							// 		</Button>
									// <UncontrolledCollapse toggler="#t1">
									// 	<Input type="number" id="i1"/>
									// 	<Button size="sm" color="success" className="mt-2 mr-3" onClick={this.confirm.bind(this, 1)}>Confirm</Button> 
									// </UncontrolledCollapse>
							// 	</span>
							// </ListGroupItem> 
							// <ListGroupItem color="secondary">
							// 	<span className="lead">EUR</span>
							// 	<span className="float-right lead font-weight-bold">
							// 		{this.props.wallets.euro}
							// 		<Button color="success" id="t2" size="sm" className="d-flex mt-1 ml-3 float-right justify-content-center">
							// 			<FaPlus />
							// 		</Button>
							// 	</span> 
							// </ListGroupItem>
						}  
						<Input type="number" id="i1" placeholder="Enter value to increase in IRR."/>
						<Button size="sm" color="success" className="mt-3 float-right d-flex justify-content-center" onClick={this.confirm.bind(this, 1)}><FaPlus /></Button> 
				  
					</CardBody>
				</Card>   
				<Card color="light" className="col-md-8 p-2 mt-3">
					<CardHeader>
						Exchange credits.
					</CardHeader>
					<CardBody>
						<Form>
							<FormGroup>
								<Label>From</Label>
								<Input type="select" id="s_from" onChange={this.from_selected} value={this.state.from_selected}>
									<option>USD</option>
									<option>EUR</option>
									<option>IRR</option>
								</Input>
							</FormGroup>
							<FormGroup>
								<Label>To</Label>
								<Input type="select" id="s_to" onChange={this.to_selected} value={this.state.to_selected}>
								{to_options}
								</Input>
							</FormGroup>
							<FormGroup>
								<Label>Amount</Label>
								<Input type="number" onChange={this.amount_value}/>
							</FormGroup>
							<Button color="success" className="float-right" onClick={this.toggle_modal}>
								Confirm
							</Button>
						</Form>
					</CardBody>
				</Card>
		        <Modal isOpen={this.state.modal_is_open} toggle={this.toggle_modal}>
		          <ModalHeader>Are you sure?</ModalHeader>
		          <ModalBody>
		          		<p>Fee: {this.state.fee}</p>
		          		<p>Added value: {
		          			parseFloat(this.state.amount) * parseFloat(this.state.cash_values[this.state.from_selected]) / parseFloat(this.state.cash_values[this.state.to_selected])
		          		}</p>
		           </ModalBody>
		          <ModalFooter>
		            <Button color="info" onClick={this.confirm_exchange}>Confirm</Button>{' '}
		            <Button color="secondary" onClick={this.toggle_modal}>Cancel</Button>
		          </ModalFooter>
		        </Modal>
			</div>
			);
	}
}

 

