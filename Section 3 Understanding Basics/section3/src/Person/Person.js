import React from 'react';

import './Person.css'; // you have to import the css file in order to use it.

const person = (props) => { // props are properties from app.js
    //ES6 way to create a function
    return(
    <div className="Person">
        <p onClick = {props.click}>I'm {props.name} person and I am {props.age} years old!!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    );
    //need to import react as return is a react function

    //props.children is <Person....> This text</Person>
};
// you cannot create a function in person, but you can call them



//need to export the component to use it elsewhere
export default person;