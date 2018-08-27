import React, { Component } from 'react'; 
import SignIn from './SignIn';
import SignUp from './SignUp';
import Main from './Main';
import User from './User';

class Body extends Component {
	render() {  
		return (
	  <div> 
	  {
	  	this.props.match.params.status === undefined && <Main />
	  }
	  {
	  	this.props.match && this.props.match.params.status === 'sign_in' && <SignIn toggle_signed_in = {this.props.toggle_signed_in}/>
	  } 
	  {
	  	this.props.match && this.props.match.params.status === 'sign_up' && <SignUp />
	  }
	  {
	  	this.props.match && this.props.match.params.status === 'user' && <User services={this.props.services}/>
	  }
	  {
	  	this.props.match && this.props.match.params.status === 'transactions' && <User tab="trn" services={this.props.services}/>
	  } 
	  {
	  	this.props.match && this.props.match.params.status === 'messages' && <User tab="msg" services={this.props.services}/>
	  } 
	  {
	  	this.props.match && this.props.match.params.status === 'wallets' && <User tab="wlts" services={this.props.services}/>
	  } 	  
	  { 
	  	this.props.match && this.props.match.params.status === 'profile' && <User tab="profile" services={this.props.services}/>
	  }
	  {
	  	this.props.match && /[/]home[/]user[/]services[/].+/.test(this.props.match.url) && <User tab={this.props.match.params.status} services={this.props.services}/>
	  }
	  { 
	  	this.props.match && this.props.match.params.status === 'services' && <User tab="srv" services={this.props.services}/>
	  }

	  </div> );
	}
}

export default Body;