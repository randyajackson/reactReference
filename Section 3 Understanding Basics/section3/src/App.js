import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component { // this is the same as class App extends Componenet { render(){ return(...) } }
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    //console.log('Was clicked');
    //this.state.persons[0].name = 'Maximilian'; don't change the state this way
    this.setState({persons: [
        { name: 'Maximilian', age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 31}
    ] })
  }

  render() {
  return ( // this is not html, it is jsx
    //class is html, className is jsx, className renders to class through react
    <div className="App"> 
      <h1>Test</h1>
      <button onClick={this.switchNameHandler}>Switch</button>
      <Person  name={this.state.persons[0].name} age={this.state.persons[0].age}/> 
      <Person  name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
      <Person  name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
    //name and age are properties or "props"
     //in JSX it is onClick

    //changing the state causes the data in the persons array to be re-rendered

    //good practice to wrap everything in one root component

    //<Person /> is a single closing call to the Person component
    //<Person /> makes it easy to reuse code
    
  );
  }
}

export default App;
