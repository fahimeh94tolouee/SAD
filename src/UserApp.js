import React, { Component } from 'react'; 
import Menu from './Menu'; 
import Body from './Body';  
import User from './User';
import { BrowserRouter as Router, Route, IndexRoute} from "react-router-dom";
import {IconContext} from "react-icons"
 
class UserApp extends Component {
  constructor(props) {
    super(props);  
    this.state = {
      signed_in: true,
      user_mail: '',
      user_name: '',
      user_code: 0, //0 for members, 1 for staff, 2 for manager, -1 for no user 
    };
    this.toggle_signed_in = this.toggle_signed_in.bind(this)
  }

  toggle_signed_in(umail, password) {
    let current = this.state.signed_in
    let user_mail = this.state.user_mail
    let user_name = this.state.user_name
    let user_code = this.state.user_code
    if (current) {
      //A user is signed in currently. We have to sign out.
      user_mail = ''
      user_name = ''
      user_code = -1
    } else {
      //A user wants to sign in. Lets make ajax call and analyze response. 
      //Return from this block if necessary. 
      user_mail = umail
      user_name = 'Negin'
      user_code = 0
    }
    this.setState({signed_in : !current, user_mail: user_mail, user_name: user_name, user_code: user_code}) 
    console.log(this.state)
  }

  render() {
    let user={mail: this.state.user_mail, name: this.state.user_name, code: this.state.user_code}
    return (
      <div>    
          <div>    
            <Menu out={!this.state.signed_in} user={user} toggle_signed_in = {this.toggle_signed_in}/> 
            <Route exact path="/home" component={Body} /> 
            <Route exact path="/home/user/services/:status" 
              render={(props) => <Body {...props}
                toggle_signed_in = {this.toggle_signed_in} services={this.props.services} />}/>     
            <Route exact path="/home/user/:status(messages|transactions|services|profile|wallets)" 
              render={(props) => <Body {...props} 
                toggle_signed_in = {this.toggle_signed_in} services={this.props.services} />}/>     
            <Route exact path="/home/:status(|sign_in|sign_up|user)" 
              render={(props) => <Body {...props} toggle_signed_in = {this.toggle_signed_in} services={this.props.services} />}/>      
          </div>  
      </div>
    );
  } 
}

export default UserApp; 