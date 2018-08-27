import React, { Component } from 'react'; 
import Menu from './Menu'; 
import Body from './Body';  
import User from './User';
import UserApp from './UserApp';
import Staff from './Staff';
import Manager from './Manager';
import { BrowserRouter as Router, Route, IndexRoute} from "react-router-dom";
import {IconContext} from "react-icons";
 
class App extends Component {
  constructor(props) {
    super(props)
    this.add_service = this.add_service.bind(this)
    this.state = { 
      services: {
        regs: [
          {name: 'gre', to: "/home/user/services/gre"}, 
          {name: 'toefl', to: "/home/user/services/toefl"}, 
          {name: 'ielts', to: "/home/user/services/ielts"}
        ],
        pays: [
          {name: 'p1', to: "/home/user/services/p1"}, 
          {name: 'p2', to: "/home/user/services/p2"}, 
          {name: 'p3', to: "/home/user/services/p3"}, 
          {name: 'Application fee', to: "/home/user/services/application fee"}
        ],
        forms: [
          {
            name: 'gre',
            cost: {
              amount: 232323,
              unit: 'usd',
              fee: 12,
              irr_equivalent: 334334,
            },
            form: [
                {
                  label: "Country", 
                  input_type: "Country"
                },
                {
                  label: "Region",
                  input_type: "Region",
                  form_text: "You have to select country first."
                },
                {
                  label: "Test date",
                  input_type: "select",
                  input_children: {
                    list: [
                      "08.09.2017"
                   ]
                  },
                  form_text: "First select region."
                },
                {
                  label: "Test center",
                  input_type: "select",
                  input_children: {
                    list: [
                      "center 1"
                   ]
                  },
                  form_text: "First select region."
                },
                {
                  label: "Educational status at the time you take test",
                  input_type: "select",
                  input_children: {
                    list: [
                      "Sophomore, Second year",
                      "Junior, Third year",
                      "Senior, Forth or final year",
                      "First-year graduate student",
                      "Unenrolled, Collage graduate",
                      "Master's degree", "Other"

                   ]
                  }
                },
                {
                  label: "Description",
                  input_type: "textarea",
                  form_text: "Enter any extra necessary information."
                },
                {
                  label: "File attachment",
                  input_type: "file",
                  form_text: "Optional"
                }
            ]
          },
          {
            name: 'toefl',
            cost: {
              amount: 192304,
              unit: 'usd',
              fee: 35,
              irr_equivalent: 555121,
            },
            form: [
                {
                  label: "Country", 
                  input_type: "Country"
                },
                {
                  label: "Region",
                  input_type: "Region",
                  form_text: "You have to select country first."
                },
                {
                  label: "Test date",
                  input_type: "select",
                  input_children: {
                    list: [
                      "08.09.2017"
                   ]
                  },
                  form_text: "First select region."
                },
                {
                  label: "Test center",
                  input_type: "select",
                  input_children: {
                    list: [
                      "center 1"
                   ]
                  },
                  form_text: "First select region."
                },
                {
                  label: "Identification type", 
                  input_type: "select",
                  input_children: {
                    list: [
                      "Passport", "Identification number"
                    ]
                  }
                },
                {
                  label: "Identification number",
                  input_type: "text" 
                },
                {
                  label: "In what countries hope to study", 
                  input_type: "Country"

                },
                {
                  label: "Reason for taking TOEFL",
                  input_type: "textarea",
                  form_text: "Enter any extra necessary information."
                } 
            ]
          },
          {
            name: 'ielts', 
            form: [  
                {
                  label: "Currnecy type",
                  input_type: "select",
                  input_children: {
                    list: ["EURO", "USD"]
                  }
                },
                {
                  label: "Currency amount",
                  input_type: "number",
                },
                {
                  label: "Registration link",
                  input_type: "text"
                },
                {
                  label: "Description",
                  input_type: "textarea",
                  form_text: "Enter any extra necessary information."
                } 
            ]
          },
          {
            name: 'application fee', 
            form: [ 
                {
                  label: "Currnecy type",
                  input_type: "select",
                  input_children: {
                    list: ["EURO", "USD"]
                  }
                },
                {
                  label: "Currency amount",
                  input_type: "number",
                },  
                {
                  label: "Full name of university",
                  input_type: "text"
                },
                {
                  label: "Application login link",
                  input_type: "text"
                },
                {
                  label: "Full name in English",
                  input_type: "text"
                },
                {
                  label: "Instructions for getting to payment page with visa/master card",
                  input_type: "textarea",
                  form_text: "Enter any extra necessary information."
                },
                {
                  label: "File attachment",
                  input_type: "file",
                  form_text: "Optional"
                }
            ]
          },
          {
            name: 'p1', 
            form: [ 
                {
                  label: "Currnecy type",
                  input_type: "select",
                  input_children: {
                    list: ["EURO", "USD"]
                  }
                },
                {
                  label: "Currency amount",
                  input_type: "number",
                }, 
                {
                  label: "Destination account number",
                  input_type: "text"
                },
                {
                  label: "Acount owner name",
                  input_type: "text"
                }
            ]
          },
          {
            name: 'p2', 
            form: [  
                {
                  label: "Currency amount",
                  input_type: "number",
                }, 
                {
                  label: "Destination account number",
                  input_type: "text"
                },
                {
                  label: "Acount owner name",
                  input_type: "text"
                }
            ]
          },
          {
            name: 'p3', 
            form: [ 
                {
                  label: "Currnecy type",
                  input_type: "select",
                  input_children: {
                    list: ["EURO", "USD"]
                  }
                },
                {
                  label: "Currency amount",
                  input_type: "number",
                }, 
                {
                  label: "Destination email",
                  input_type: "email"
                } 
            ]
          }
        ]
      }
    }; 
  } 

  add_service(reg, pay, form){
    ///req to back
    let r = this.state.regs
    let p = this.state.pays
    let f = this.state.forms
    if(reg != undefined){
      r = r.push(reg)
    }
    if(p != undefined){
      p = p.push(pay)
    }
    form = f.push(form)
    this.setState({
      services: {
        regs: r,
        pays: p,
        forms: f
      }
    })
  }

  render() { 
    return (
      <div>   
        <Router>  
          <div>    
            <Route  path="/staff" render={(props) => <Staff {...props} staff_list={this.state.staff} />} />
            <Route  path="/home" 
              render={(props) => <UserApp {...props} services={this.state.services} />}/>  
            <Route  path="/manager" 
              render={(props) => <Manager {...props} services={this.state.services} add_service={this.add_service}/>}/>         
          </div>
        </Router>  
      </div>
    );
  } 
}

export default App; 