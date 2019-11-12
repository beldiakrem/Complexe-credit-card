import React, { Component } from 'react'
import './App.css'
import Form from './component/Form'
import Card from './component/Card'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name:'',
      number: '**** **** **** ****',
      valid: ''
    }
}


  render() {
    return (
      <div className="app">
        <Card namecard={this.state.name}
              numbercard={this.state.number} 
              validcard={this.state.valid}
              />
        <Form holdname={(x)=>{this.setState({name:x})}}
              holdnumber={(x)=>{this.setState({number:x})}}
              holdvalid={(x)=>{this.setState({valid:x})}}
             />
      </div>
    )
  }
}

