// // var, let, const

// // ##VAR

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// //Init var;
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);


// // letter, numbers, _, $
// // Can not start with number

// var $name = 'John';

// // Multi word vars

// var firstName = 'John'; //Camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname; // not recommended

// // ##LET

// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // ##CONST

const name = 'John';
// cannot reassign
// name = 'Sara';
// Have to assign a value
// const greeting;
const person = {
    name: 'John',
    age: 30
}

person.name = 'Sara';
person.age = 32;

console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);