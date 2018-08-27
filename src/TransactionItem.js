import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute} from "react-router-dom";
import { Card, CardTitle, CardHeader, CardBody, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap'; 
import v4 from 'uuid';

export default class TransactionItem extends React.Component {
  constructor(props) {
    super(props); 
    this.toggle_modal = this.toggle_modal.bind(this)
    this.deny = this.deny.bind(this)
    this.accept = this.accept.bind(this)
    this.remove_tr = this.remove_tr.bind(this)
    this.toggle_sure = this.toggle_sure.bind(this)
    this.state = {
      show_modal: false,
      sure: false,
      reason_for_deny: ""
    }
  } 

  toggle_modal(){
    let curr = this.state.show_modal
    this.setState({
      show_modal: !curr
    })
  }

  toggle_sure(){
    let curr = this.state.sure
    this.setState({
      sure: !curr
    })
  }

  deny() { 
    //update transaction status
    //send message to user 
    if(document.querySelector('input[name="radio1"]:checked') != undefined){ 
      this.toggle_modal()
      this.remove_tr()
    } 
  }

  accept() {
    //send message to user
    //update transaction status
    //transfer money 
    this.remove_tr()
  }

  remove_tr(){
    this.props.remove_tr(this.props.trn.tr_id)
  }

  render() { 
    return (
      <Card className="m-4 m-md-5">
        <CardHeader>
          <div className="row">
            <div className="col-md-4 lead">
              {this.props.trn.trn_info.title}
            </div>
            <div className="col-md-4"> 
            </div>
            <div className="col-md-4 d-md-flex justify-content-end">
              {this.props.trn.trn_info.date}{', '}
              {this.props.trn.trn_info.time}
            </div>
          </div>
        </CardHeader>
        <CardBody> 
          <div>
            User: {this.props.trn.user.mail} 
          </div>
          <div>
            USD Wallet: {this.props.trn.user.wallets.dollar}
          </div>
          <div>
            EURO Wallet: {this.props.trn.user.wallets.euro}
          </div>
          <div>
            IRR Wallet: {this.props.trn.user.wallets.rial}
          </div>
          <div>
            Cost: {this.props.trn.trn_info.cost}
          </div>
          <div>
            Unit: <span className="text-uppercase">{this.props.trn.trn_info.unit}</span>
          </div>
          <div>
            Fee: {this.props.trn.trn_info.fee}
          </div>
          <div className="float-right">
            <Button color="success" className="ml-3  mr-3" onClick={this.toggle_sure}>Accept</Button>
            <Button color="info" className="ml-3  mr-3" onClick={this.toggle_modal}>Deny</Button>
          </div>

          <Modal isOpen={this.state.show_modal} toggle={this.toggle_modal} centered={true}> 
            <ModalHeader>
              What is your reason to deny this transaction?
            </ModalHeader>
            <ModalBody>
              <Form className="m-4">
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Reason 1
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Reason 2
                  </Label>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.deny}>Deny</Button>{' '}
              <Button color="secondary" onClick={this.toggle_modal}>Cancel</Button>
            </ModalFooter>
          </Modal> 

          <Modal isOpen={this.state.sure} toggle={this.toggle_sure} centered={true}>  
            <ModalHeader>  
                Are you sure? 
            </ModalHeader>
            <ModalFooter>
              <Button color="primary" onClick={this.accept}>Yes</Button>{' '}
              <Button color="secondary" onClick={this.toggle_sure}>No</Button>
            </ModalFooter>
          </Modal>
        </CardBody>
      </Card>
    );
  }
}