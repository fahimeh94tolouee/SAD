import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute} from "react-router-dom";
import {  } from 'reactstrap'; 
import v4 from 'uuid';
import TransactionItem from './TransactionItem';

export default class NewTransactions extends React.Component {
  constructor(props) {
    super(props); 
  } 

  render() {
    let trns = this.props.trns.map((item) => {
      return <TransactionItem key={v4()} trn={item} remove_tr={this.props.remove_tr}></TransactionItem>
    })
    console.log(trns)
    return (
      <div>
        {trns}
      </div>
    );
  }
}