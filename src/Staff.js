import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem, Form, FormGroup, Label, Input,
  NavLink, Badge} from 'reactstrap';
import Body from './Body';
import NewTransactions from './NewTransactions';
import MsgBox from './MsgBox';
import Contact from './Contact';

export default class Staff extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.remove_tr = this.remove_tr.bind(this);
    this.toggle_msg_unread = this.toggle_msg_unread.bind(this)
    this.toggle_unread_only = this.toggle_unread_only.bind(this)
    this.set_cnt = this.set_cnt.bind(this)
    this.state = {
      isOpen: false,
      unread_only: false,
      stadd_id: "staff_id_1",
      staff_messages: {
        list: [{id: "msg_1", title: "hsdf", time: "asdad", unread: true, text: "teetet", tags: ["t1", "t2"]},
          {id: "msg_2", title: "hsdf", time: "asdad", unread: false, text: "teetet", tags: ["t1", "t2"]} 
        ]
      },
      staff_new_transactions: [
        {
          tr_id: "id_1",
          user: { 
            mail: "n.hashemi202@gmail.com", 
            wallets: {
              dollar: 3000,
              euro: 3000,
              rial: 3400
            } 
          }, 
          trn_info: {
            title: "title", 
            cost: 12,
            unit: "usd",
            fee: 3,
            date: "2018-02-03",
            time: "1312",
          }
        },
        {
          tr_id: "id_2",
          user: { 
            mail: "n.hashemi202@gmail.com", 
            wallets: {
              dollar: 3000,
              euro: 3000,
              rial: 3400
            } 
          }, 
          trn_info: {
            title: "title", 
            cost: 12,
            unit: "usd",
            fee: 3,
            date: "2018-02-03",
            time: "1312",
          }
        }
      ],
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  remove_tr(id){
    let lst = this.state.staff_new_transactions
    lst = lst.filter((item) => item.tr_id != id)
    this.setState({staff_new_transactions: lst})
  }
  toggle_unread_only(){
    let curr = this.state.unread_only
    this.setState({unread_only: !curr})
    console.log(this.state.unread_only)
  }

  toggle_msg_unread(id){
    let msgs = this.state.staff_messages
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
    let lst = this.state.staff_messages.list
    let cnt = 0
    for (var i = lst.length - 1; i >= 0; i--) {
      if(lst[i].unread) cnt++;
    }
    return cnt
  }

  render() {
    let cnt = this.set_cnt()
    return (
      <div> 
            <div> 
              <Navbar color="light" light expand="md" className="p-0">
                <NavbarBrand tag={Link} to="/staff" className="pl-3">Easy Payment / Staff Portal</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto mr-md-3" navbar>
                    <NavItem className="ml-4">
                      <NavLink tag={Link} to="/staff/new transactions">
                        New Transactions {' '}
                        { 
                          this.state.staff_new_transactions.length > 0 &&
                          <Badge pill color="success">
                            {this.state.staff_new_transactions.length}
                          </Badge>
                        }
                      </NavLink>
                    </NavItem>
                    <NavItem className="ml-4">
                      <NavLink tag={Link} to="/staff/messages">
                        Messages {' '}
                        { 
                          cnt > 0 &&
                          <Badge pill color="danger">
                            {cnt}
                          </Badge>
                        }
                      </NavLink>
                    </NavItem> 
                    {
                      // <NavItem className="ml-4">
                      //   <NavLink tag={Link} to="/staff/history">History</NavLink>
                      // </NavItem> 
                    }
                    <NavItem className="ml-4">
                      <NavLink tag={Link} to="/staff/contact">Contact</NavLink>
                    </NavItem> 
                  </Nav>
                </Collapse>
              </Navbar>
   
              <Route exact path="/staff/contact" 
                render={(props) => <Contact staff_id={this.state.staff_id}/>}/>  
              <Route exact path="/staff/new transactions" 
                render={(props) => <NewTransactions {...props} trns={this.state.staff_new_transactions} remove_tr={this.remove_tr}/>}/>  
              <Route exact path="/staff/messages" 
                render={(props) =>        
                  <div className="m-5">       
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

                    <MsgBox lst={this.state.staff_messages} unread_only={this.state.unread_only} 
                      toggle_msg_unread={this.toggle_msg_unread}></MsgBox> 
                </div>
              }/>    
              <Route exact path="/staff" component={Body}/>
            </div> 
      </div>
    );
  }
}