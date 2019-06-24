import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';
//test

const App = props => { // this is the same as class App extends Componenet { render(){ return(...) } }
//using react hooks, useState allows us to manage states
//if you use hooks you do not need class based components, but using class is the established way of react development.

//stateful component, a component that manages state
//Person.js is a stateless component because they do not update the state
//stateful is "smart" component
//if there are a lot of stateful components, managing code becomes difficult

const [personsState, setPersonsState] = useState({
  persons: [
    { name: 'Max', age: 28},
    { name: 'Manu', age: 29},
    { name: 'Stephanie', age: 26}
  ],
  otherState: 'some other value',
  showPersons: false
});

const switchNameHandler = (newName) => {
  //console.log('Was clicked');
  //this.state.persons[0].name = 'Maximilian'; don't change the state this way
  setPersonsState({persons: [
      { name: newName, age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 31}
  ] });
};

const nameChangedHandler = (event) => {
  setPersonsState({persons: [
    { name: 'Max', age: 28},
    { name: event.target.value, age: 29},
    { name: 'Stephanie', age: 26}
] });
};

const togglePersonsHandler = () =>{
  const doesShow = personsState.showPersons;
  setPersonsState({
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: !doesShow
  });
}

const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1x solid blue',
  padding: '8px',
  cursor: 'pointer'
}
  let persons = null;

  if(personsState.showPersons){ //variable before the return changes are made
      persons = (
      <div>
        {personsState.persons.map(person => { //map is executed on every element in person list with arrow function
          
        })}

        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/> 
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click= {switchNameHandler.bind(this, 'Max!')} changed= {nameChangedHandler}>My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
      );
  }
  return ( // this is not html, it is jsx // when it renders to the screen, it executes everything in the render method
    //class is html, className is jsx, className renders to class through react
    <div className="App"> 
      <h1>Test</h1>
      <button style={style}

      //{ personsState.showPersons === true ? //converted to React.CreateElement behind the scenes - goes under onClick
      onClick={togglePersonsHandler}>Switch</button>

      {persons}   
    </div>
    //name and age are properties or "props"
     //in JSX it is onClick

     //you can pass methods as props


    //changing the state causes the data in the persons array to be re-rendered

    //good practice to wrap everything in one root component

    //<Person /> is a single closing call to the Person component
    //<Person /> makes it easy to reuse code
    
  );
}

export default App;


