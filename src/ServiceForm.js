import React, { Component } from 'react';  
import {Button, Form, Input, FormGroup, Label, FormText, Card, Alert, CustomInput} from 'reactstrap';
import {Link} from "react-router-dom"; 
import $ from 'jquery';	
import 'bootstrap/dist/css/bootstrap.min.css';    
import v4 from 'uuid';  
	import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
 

export default class ServiceForm extends Component {
	constructor(props) {
		super(props)      
		this.state = { country: '', region: '', file: '' };
	}

	selectCountry (val) {
		this.setState({ country: val });
	}

	selectRegion (val) {
		this.setState({ region: val });
	}  

	render() { 
		let cf = this.props.services.forms.filter((item) => { true
			return item.name == this.props.service_type
		})[0]
    	const { country, region } = this.state;
		let cnt = <CountryDropdown classes="form-control"
										value={country}
										onChange={(val) => this.selectCountry(val)} /> 
		let reg = <RegionDropdown classes="form-control"
										country={country}
										value={region}
										onChange={(val) => this.selectRegion(val)} /> 
		let custom_form = cf.form.map((item) => {   
					return  (
						<FormGroup key={v4()}>
							<Label>{item.label}</Label>

							{
								item.input_type == "Region" && reg 
							} 
							{
								item.input_type == "Country" && cnt
										
							} 
							{
								item.input_type != "Country" && item.input_type != "Region" &&
									item.input_children != undefined && item.input_children.list  != undefined && 
									<Input type={item.input_type}>
									{item.input_children.list.map((c) => <Label key={v4()} tag="option">{c}</Label>)}
									</Input>
							}
							{
								item.input_type != "file" && item.input_type != "Country" && item.input_type != "Region" && item.input_children == undefined 
								&& <Input type={item.input_type} /> 
							}
							{
								item.input_type == "file" && <CustomInput id={v4()} filename={this.state.file} type="file" 
												onChange={function (e) {
												var fieldVal = e.target.value;

												// Change the node's value by removing the fake path (Chrome)
												fieldVal = fieldVal.replace("C:\\fakepath\\", ""); 

												if (fieldVal != undefined || fieldVal != "") {
												$(".custom-file-label").attr('data-content', fieldVal);
												$(".custom-file-label").text(fieldVal);
												}

												}}/> 
							}

							<FormText color="muted">{item.form_text}</FormText>
						</FormGroup>
					)
		})  

		return ( 
			<Card className="col-lg-8 bg-light p-0">
			<Form className="m-3 mb-0">
				<FormText color="muted" className="pb-3">Enter your user email and password.</FormText>
				<FormGroup> 
					<Input type="email" placeholder="Email"></Input>
				</FormGroup>
				<FormGroup> 
					<Input type="password" placeholder="Password"></Input>
				</FormGroup>
				<hr></hr>

				{
					cf.cost && 
						<Alert color="info" className="">
							<FormGroup>
									<Label className="text-secondary lead">Cost: </Label>{' '}
									<Label className="text-success font-weight-bold lead">
										{cf.cost.amount}
									</Label>{' '}
									<Label className="text-info text-uppercase lead">
									({cf.cost.unit})
									</Label>{'  '} 
							</FormGroup>
							<FormGroup className="mb-0">
									<Label className="text-success">
										IRR Equivalent: {cf.cost.irr_equivalent}
									</Label>   
									<Label  className="text-secondary float-right">
										Fee: {cf.cost.fee} IRR
									</Label>
							</FormGroup>
						</Alert>
				}

				{
					custom_form
				}


			


				<FormGroup className="float-right pt-3 pb-0"> 
					<Button className="pl-3 pr-3 mr-3" color="success">Submit</Button>
					<Button color="danger">Cancel</Button>
				</FormGroup> 
			</Form>
			</Card>
			);
	}
}