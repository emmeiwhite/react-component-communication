import React, { Component } from 'react';

import Child from './components/parent-to-child/child';
import './App.css';

class App extends Component {
  state = {
    mainGoal:"Teaching moral ettiquites"
  }

  getABicycle = (bicycleBrand)=>{
    this.setState({
      mainGoal:bicycleBrand
    })
  }
  
  render() {
    return (
      <div className="App">
          <Child headline={this.state.mainGoal} demandOfChild={this.getABicycle.bind(this,"Hero Bicycle")}/>
      </div>
    );
  }
}

export default App;
