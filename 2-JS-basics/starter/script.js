/****************************
 *  Created by Jamine Guo   *
 *  09/04/2018              *
 ****************************
    Basics of JavaScript
 ****************************/

/*******************************
    Variables and Data Types
 *******************************/

// String Variables
var firstName = 'Jamine';
var lastName = 'Guo';

// Number Variables: numb vars compensate for all types of numbers, int, double, float, etc
var age = 21;

// Boolean Variables
var fullAge = true;

// Undefined Variables
var job;
console.log(job); // Undefined
job = 'Student';

console.log(firstName, lastName);

/*******************************************
    Variables Mutation and Type Coercion
 *******************************************/

// Type Coercion
console.log(firstName + ' ' + age); // converts number variable "age" to a string

var isMarried;
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? '
    + isMarried); // converts bools as well as undefined to string

// Variable Mutation
age = 'twenty one';
job = 'waiter';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? '
    + isMarried);   // The alert function creats a popup on browser
                    // The page ends up constantly loading until "okay" is clicked

lastName = prompt("What is his last name?"); // prompt gets data from user, stored into lastName
console.log(firstName + ' ' + lastName);


/***********************
    Basic Operators
 ***********************/

 
