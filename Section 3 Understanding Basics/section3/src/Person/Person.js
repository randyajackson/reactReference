import React from 'react';

const person = () => {
    //ES6 way to create a function
    return <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old!!</p>
    //need to import react as return is a react function
};
// you cannot create a function in person, but you can call them



//need to export the component to use it elsewhere
export default person;