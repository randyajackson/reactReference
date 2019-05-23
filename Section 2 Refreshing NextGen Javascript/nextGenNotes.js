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

//Classes, properties, and methods
//___________________________________________

// properties are like "variables attached to classes / objects"
// methods are like "functions attached to classes / objects"

//requires babel to use
class Human{
    gender = 'male'; // alternate way to call constructor

    printGender = () => { //functions will need to be arrow
        console.log(this.gender);
    }
}

class Person extends Human{
    name = 'Randy';
    gender = 'female'; 

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();

//the spread and rest operator
//_________________________________________________

//spread - used to split up array elements OR object properties
const newArray = [...oldArray,1,2]
const newObject = {...oldObject, newProp: 5}

//rest - used to merge a list of function arguments into an array
function sortArgs(...args){
    return args.sort()
}

const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);
//prints [1,2,3,4]

const person = {
    name: 'Randy'
};

const newPerson = {
    ...person,
    age: 28
};
console.log(newPerson);

//prints
// [object Object] {
//     age:28,
//     name: "Randy"
// }

const filter = (...args) => {
    return args.filter(el => el === 1);//=== checks for value and type
}

console.log(filter(1,2,3));
//prints [1]

//destructuring
//___________________________________________________________________

//easily extract array elements or object properties and store them in variables

//array destructuring
[a,b] = ['Hello', 'Max']
console.log(a) // Hello
console.log(b) //Max

//object destructuring
{name} = {name: 'Max', age: 28}
console.log(name) // Max
console.log(age) // undefined

const numbers = [1,2,3];
[num1,num2] = numbers;
console.log(num1,num2);
//prints 1 2
[num1, , num3] = numbers;
console.log(num1, num3);
//prints 1 3

//reference and primitive types refresher
//_________________________________________________________________________

const number = 1;
const num2 = number;

console.log(num2); //prints 1

const person = {
    name: 'Max'
};

const secondPerson = person;

console.log(secondPerson);

//prints
//[object Object] {
    //name: "Max"
//}
//--------------------------------example of changing 1
const person = {
    name: 'Max'
};

const secondPerson = person;

person.name = 'Manu'; // since secondPerson is a copy (pointer) of person, name will reflect Manu

console.log(secondPerson);

//prints
//[object Object] {
    //name: "Manu"
//}
//--------------------------------example of changing 2
const person = {
    name: 'Max'
};

const secondPerson = { // this creates a real copy so changing person does not change secondPerson
    ...person;
} 

person.name = 'Manu'; // since secondPerson is a copy (pointer) of person, name will reflect Manu

console.log(secondPerson);

//prints
//[object Object] {
    //name: "Max"
//}

//refreshing array functions
//_____________________________________________________________________________________













