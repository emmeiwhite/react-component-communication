import React, { Component } from 'react';

import Parent from './components/parent-to-child/parent';

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
          <Parent headline={this.state.mainGoal} demandOfChild={this.getABicycle.bind(this,"Hero Bicycle")}/>
      </div>
    );
  }
}

export default App;
