import React, { Component } from "react";
//import { DatePicker } from 'antd';
import "./App.css";
//import Person from "./person/person";
import Sider from "./source";
import { Button } from "antd";
import data from './data';
//import data from './data';

// const Test = (props) => {
//   return (
//     <p>
//       This is second test from function Component contents  : {props.name}
//       {props.number}
      
//     </p>
//   );
// };

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.selectFruit = this.selectFruit.bind(this);
  }


  newdata = (event) => {
    this.setState(
      [{notebookTitle:"this is a title"}]
    )
  }
  




  render() {
    return (
      <div>
        
        <Sider/>
        <Button onClick={this.newdata}>Click me..!!</Button>
      </div>
    );
  }
}

export default App;
