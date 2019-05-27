import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


function App() { // this is the same as class App extends Componenet { render(){ return(...) } }
  return ( // this is not html, it is jsx
    //class is html, className is jsx, className renders to class through react
    <div className="App"> 
      <h1>Test</h1>
      <Person />
    </div>
    //good practice to wrap everything in one root component

    //<Person /> is a single closing call to the Person component
    //<Person /> makes it easy to reuse code
    
  );
}

export default App;
