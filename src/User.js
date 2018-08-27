import React, { Component } from 'react';  
import {Button, Badge, ButtonGroup, NavLink, NavItem, TabPane, TabContent, Form, FormGroup, Label, Input, Alert, ListGroupItem, ListGroup} from 'reactstrap';
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Wallet from './Wallet';
import MsgBox from './MsgBox';
import Img from './2.jpg';
import {FiMessageSquare} from "react-icons/fi";
import {FiMail} from "react-icons/fi";
import v4 from 'uuid';
import Transactions from './Transactions';
import Services from './Services';
import ServiceForm from './ServiceForm';
import UserProfile from './UserProfile';

export default class User extends Component {
	constructor(props) {
		super(props)
		this.toggle_tab = this.toggle_tab.bind(this)
		this.toggle_unread_only = this.toggle_unread_only.bind(this)
		this.toggle_msg_unread = this.toggle_msg_unread.bind(this)
		this.set_cnt = this.set_cnt.bind(this)
		this.profile_mouse_enter = this.profile_mouse_enter.bind(this)
		this.profile_mouse_out = this.profile_mouse_out.bind(this)
		this.set_user_info = this.set_user_info.bind(this)
		this.add_irr = this.add_irr.bind(this)
		this.state = {
			profile:{
				name: 'user you',
				mail: 'dwed',
				password: 'asd',
				avatar: 'qqq',
			},
			transactions: [
				{id: v4(), title: "Title", status: 'failed', cost: 12232322323, type: "send", unit: "USD",date: "2017-06-12", time: "0000", fee: 1},
				{id: v4(), title: "Title", status: 'waiting', cost: 12, type: "send", unit: "EUR", date: "2018-05-02", time: "0000", fee: 1},
				{id: v4(), title: "Title", status: 'successful', cost: 12, type: "receive", unit: "IRR", date: '2018-09-01', time: "0000", fee: 1},
			],
			messages: { 
				list: [
					{id: v4(), title: "hsdf", time: "asdad", unread: true, text: "teetet", tags: ["t1", "t2"]},
					{id: v4(), title: "hsdf", time: "asdad", unread: false, text: "teetet", tags: ["t1", "t2"]},
					{id: v4(), title: "hsdf", time: "asdad", unread: true, text: "teetet", tags: ["t1", "t2"]},
					{id: v4(), title: "hsdf", time: "asdad", unread: false, text: "teetet", tags: ["t1", "t2"]},
				]
			},
			wallets: {
				dollar: 3000,
				euro: 3000,
				rial: 3400
			},
			tab: this.props.tab || 'profile',
			unread_only: false,
		}	
	}

	toggle_tab(tab_id) { 
		this.setState({tab: tab_id}) 
	}

	toggle_unread_only(){
		let curr = this.state.unread_only
		this.setState({unread_only: !curr})
		console.log(this.state.unread_only)
	}

	toggle_msg_unread(id){
		let msgs = this.state.messages
		let lst = msgs.list 
		lst = lst.map((item) => {
			if(item.id === id){
				item.unread = false //true by default 
			}
			return item
		}) 
		this.setState({messages: { 
			list: lst
		}})
	}

	set_cnt(){
		let lst = this.state.messages.list
		let cnt = 0
		for (var i = lst.length - 1; i >= 0; i--) {
			if(lst[i].unread) cnt++;
		}
		return cnt
	}

	set_user_info(info){
		//request to back
		this.setState({profile: info})
	}

	profile_mouse_enter(){
		// this.setState({name: "hi"})
	}	
	profile_mouse_out(){
		// this.setState({name: "hello"})
	}

	add_irr(val) {
		let ws = this.state.wallets
		this.setState({
			wallets: {
				dollar: ws.dollar,
				euro: ws.euro,
				rial: ws.rial + val
			}
		})
		//request to back
	}

	render() {  
        const style_view = { 
        	opacity: "0.6",
        	WebkitClipPath: "inset(69% 0 0 0)",
			clipPath: "inset(69% 0 0 0)" 

        }

        const style_view_txt = {
        	top: "70%",
        	height: "30%", 
        	opacity: "0.8"
        }	 

        let cnt = this.set_cnt()
		return (
			<div className="row m-0">
				<div className="rounded-0 bg-light border-right col-md-4 col-lg-3 p-3"> 
					<div className="mt-0 mb-2 justify-content-center d-flex position-relative order-1">  
							<img src={Img} onMouseOver={this.profile_mouse_enter} onMouseOut={this.profile_mouse_out} 
							className="rounded-circle align-self-center" width="200" height="200"
							/> 	

							<img style={style_view} onMouseOver={this.profile_mouse_enter} onMouseOut={this.profile_mouse_out}
								className="rounded-circle align-self-center bg-dark position-absolute" width="200" height="200" 
								/> 

							<div  onMouseOver={this.profile_mouse_enter} onMouseOut={this.profile_mouse_out}
								className="position-absolute align-self-center m-0 justify-content-center d-flex p-3 text-light" 
								style={style_view_txt}> 
									<NavLink className="m-0 p-0 text-light" onClick={this.toggle_tab.bind(this, 'profile')} tag={Link} to="/home/user/profile">
									View profile
									</NavLink>
							</div>  

					</div> 

					<p className="d-flex justify-content-center text-capitalize font-weight-bold h5 p-1 mb-3">{this.state.profile.name}</p>

					<div className="row ml-3 mr-3 d-flex justify-content-center align-self-center">
						<Button tag={Link} to="/home/user/transactions" className="col-md-6 rounded-0 p-2" color="info" 
							onClick={this.toggle_tab.bind(this, 'trn')} size="sm">Transacions</Button>   
						<Button tag={Link} to="/home/user/services" className="col-md-6  rounded-0 p-2" color="success" 
							onClick={this.toggle_tab.bind(this, 'srv')} size="sm">Services</Button>  
						<Button tag={Link} to="/home/user/messages" className="col-12 rounded-0 p-2"
							color={cnt > 0? "danger":"secondary"} size="sm"
							onClick={this.toggle_tab.bind(this, 'msg')}>  
							Messages {' '}
							{
								cnt > 0 &&
								<Badge color="warning" pill>
									{cnt}
					 			</Badge>
					 		} 
					 	</Button>
					</div>
					

					<hr></hr>

					<Alert fade={false} className="p-1 ml-4 mr-4 mt-2">    
						<ListGroupItem color="info"> 
							<span className="lead">USD</span>
							<span className="float-right lead font-weight-bold">{this.state.wallets.dollar}</span>
						</ListGroupItem> 
						<ListGroupItem color="info"> 
							<span className="lead">EUR</span>
							<span className="float-right lead font-weight-bold">{this.state.wallets.euro}</span>
						</ListGroupItem> 
						<ListGroupItem color="info"> 
							<span className="lead">IRR</span>
							<span className="float-right lead font-weight-bold">{this.state.wallets.rial}</span>
						</ListGroupItem>  
					</Alert>

					<div className="row ml-3 mr-3 d-flex justify-content-center align-self-center">
					<Button tag={Link} to="/home/user/wallets" className="col-12 rounded-0"
						color="primary" size="sm"
						onClick={this.toggle_tab.bind(this, 'wlts')}>  
						Manage Wallets
				 	</Button>
				 	</div>
				</div>

				
					<TabContent activeTab={this.state.tab} className="col-md-7 col-lg-8 p-5 p-md-4 m-0">
						<TabPane tabId="msg"> 

							<p className="h4">Messages</p>
							<hr className="mr-md-5"></hr>
							{
							cnt > 0 &&
							<div> {"You have "} 
							<Badge color="info" pill>
								{cnt}
								</Badge> {"unread messages."} </div>
							} 
							{
								cnt == 0 &&
							<div> {"You have no unread messages."} </div>
							}

							<Form>
							<FormGroup check>
							  <Label check>
							   <Input type="checkbox" onChange={this.toggle_unread_only}/> {' '} 
							     Unread only
							  </Label>
							</FormGroup> 
							</Form> 

							<MsgBox lst={this.state.messages} unread_only={this.state.unread_only} 
								toggle_msg_unread={this.toggle_msg_unread}></MsgBox>
						</TabPane>

						<TabPane tabId="trn">
							<p className="h4">Transactions</p>
							<hr className="mr-md-5"></hr>
							<Transactions transactions={this.state.transactions}></Transactions>
						</TabPane>

						<TabPane tabId="srv">
							<p className="h4">Services</p>
							<hr className="mr-md-5"></hr>	
							<Services services={this.props.services} toggle_tab={this.toggle_tab}></Services>
						</TabPane>

						<TabPane tabId="wlts">
							<p className="h4">Wallets</p>
							<hr className="mr-md-5"></hr>	
							<Wallet wallets={this.state.wallets} add_irr={this.add_irr}></Wallet> 
						</TabPane>

						<TabPane tabId="profile">
							<p className="h4">Profile</p>
							<hr className="mr-md-5"></hr>	
							<UserProfile set_user_info={this.set_user_info} user_info={this.state.profile}></UserProfile> 
						</TabPane>

						{	
							this.props.tab != undefined && this.props.tab !== "srv" && this.props.tab !== "msg"
							 && this.props.tab !== "trn" && this.props.tab !== "profile" && this.props.tab !== "wlts" && 
							<TabPane tabId={this.props.tab}>
								<p className="h4 text-uppercase">{this.props.tab}</p>
								<hr className="mr-md-5"></hr>
								<ServiceForm service_type={this.props.tab} services={this.props.services} toggle_tab={this.toggle_tab}>
								</ServiceForm>	 
							</TabPane>
						}
			        </TabContent>
		    	
 
			</div>  
			);
	}
}