//understanding let and const
//________________________________
let myName = 'Randy';
console.log(myName);
//prints Randy
myName = 'Michelle';
console.log(myName);
//prints Michelle

const myName = 'Randy';
console.log(myName);
//prints Randy
myName = 'Michelle';
console.log(myName);
//throws a type error

//arrow functions
//_________________________________
function myFunc() {...} //normal

const myFunch = () => {...} //arrow function
//no more issues with the this keyword
//arrow functions keep the 'this' scrope

const printMyName = (name) => {
    console.log(name);
}

printMyName('Randy');
//prints Randy

const printMyName = name => { //this works if only one argument
    console.log(name);
}

printMyName('Randy');
//prints Randy

const multiply = number => number * 2; // this works if there is only a return

//exports and imports (modules)
//______________________________________

//in person.js
const person = {name: 'Randy'}

export default person

//in utility.js
export const clean = () => {...}
export const baseData = 10;

//in app.js
import person from './person.js' // imports default and ONLY export of the file Name in the receiving file is up to you
import prs from './person.js'

import { baseData } from './utility.js' // need to give it the exact name since no default flag
import { clean } from './utility.js'

//default export 
import person from './person.js'

//named export
import { smth } from './utility.js'
import { smth as Smth } from './utility.js'
import * as bundled from './utility.js'

//Understanding classes
//_________________________________________

//default way of making classes
class Person{
    name = 'Randy'//property
    call = () => {...} // method
}

//usage
const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)

//also supports inheritance
class Person extends master 

class Human{
    constructor() {
        this.gender = 'male';
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor() {
        super(); // this is required to print gender
        this.name = 'Randy';
        this.gender = 'female'; // if you add this it will overwrite the gender
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();
















