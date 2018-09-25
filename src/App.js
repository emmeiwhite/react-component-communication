import React, { Component } from 'react';

import Parent from './components/parent-to-child/parent';
import User from './components/lists/user';

import './App.css';

class App extends Component {
  state = {
    mainGoal:"Teaching moral ettiquites",
    users:[
      {name:"Imran",age:27,profession:"Software Engineer"},
      {name:"Pankaj",age:26,profession:"Software Engineer"},
      {name:"Vineet",age:29,profession:"Team Lead "},
      {name:"Haris",age:27,profession:"Java Spring Developer"},
      {name:"Momin",age:25,profession:"Dot Net developer"},
    ]
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

          <h2>Following Users have been promoted !</h2>

          {
            this.state.users.map((user,index)=>{
              return (
                <User age={user.age} profession={user.profession} key={user.name}>{user.name}</User>
                )
            })
          }


      </div>
    );
  }
}

export default App;
