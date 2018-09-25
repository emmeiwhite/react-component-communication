import React, { Component } from 'react';
import UniqueId from 'react-html-id';

import Parent from './components/parent-to-child/parent';
import User from './components/lists/user';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    
    UniqueId.enableUniqueIds(this); // Binding UniqueIds with "this"

    this.state = {
      mainGoal:"Teaching moral ettiquites",
      
      users:[
        {id:this.nextUniqueId(), name:"Imran",age:27,profession:"Software Engineer"},
        {id:this.nextUniqueId(), name:"Pankaj",age:26,profession:"Software Engineer"},
        {id:this.nextUniqueId(), name:"Vineet",age:29,profession:"Team Lead "},
        {id:this.nextUniqueId(), name:"Haris",age:27,profession:"Java Spring Developer"},
        {id:this.nextUniqueId(), name:"Momin",age:25,profession:"Dot Net developer"},
      ]
    }
    
    console.log(this.state);
  }
 

  getABicycle = (bicycleBrand)=>{
    this.setState({
      mainGoal:bicycleBrand
    })
  }
  
  deleteUser = (index)=>{
      const usersModified = [...this.state.users];// To get the exact copy of the users
      usersModified.splice(index,1);
      this.setState({
        users:usersModified
      })

  }

  changeUserName = (index,event)=>{
    // Again we need to copy our state first, and make changes in the copied state and work accordingly

    const usersPresent =[...this.state.users];

    usersPresent[index].name = event.target.value;

    this.setState({
      users:usersPresent
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
                   <User 
                      userEvent={this.deleteUser.bind(this,index)} 
                      age={user.age} profession={user.profession} 
                      key={user.id}
                      changeEvent={this.changeUserName.bind(this,index)}
                  >{user.name}
                      
                   </User>
                )
            })
          }


      </div>
    );
  }
}

export default App;
