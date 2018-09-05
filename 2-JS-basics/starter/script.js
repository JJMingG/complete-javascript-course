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

age = 21;

/***********************
    Basic Operators
 ***********************/

// Math Operators
var year, yearBorn, friendBorn, ageJamine, ageFriend;
year = 2018;
ageJamine = 21;
ageFriend = 20;

yearBorn = year - ageJamine; // '*', '+', '/', etc can be used as well
friendBorn = year - ageFriend;
console.log(firstName + ' was born in ' + yearBorn);

// Logical Operators
var friendOlder = ageFriend > ageJamine;
console.log('Is friend older than Jamine? ' + friendOlder);

// typeof Operator
console.log(typeof friendOlder); // returns type of variable, in this case Boolean


/***************************
    Operator Precedence
 ***************************/

var isCorrectAge = year - yearBorn >= ageJamine; // Using three dif types of operators
console.log(isCorrectAge); // returns true
// Check here for precedence table:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// These are generally the same as C++ conventions ie, x += 2, x++, etc


/*** Coding Challenge 1 in coding_challenge_1.js ***/


/***************************
    If / else Statements
 ***************************/

var civilStatus = 'single';

if (civilStatus === 'married') {
    // if-block
    console.log(firstName + ' is married!');
} else {
    // else-block
    console.log(firstName + ' will hopefully marry soon');
}


/*******************
    Boolean Logic
 *******************/

// &&, ||, ! == AND, OR, NOT

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else {
    console.log(firstName + ' is a man.');
}


/***************************************************
    The Ternary Operator and Switch Statements
 ***************************************************/

// Ternary Operator
age >= 21 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');
// Note that there are 3 parts to this operation. Condition/question ? if true : else
// This basically creates an if else statement on one line

var drink = age >= 21 ? 'beer' : 'juice';
console.log(drink);

// Switch Statement
job = 'student';
switch (job) {
    case 'student':
        console.log(firstName + ' teaches kids.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber.');
        break;
    case 'student':
        console.log(firstName + ' studies at FSU.');
        break;
    default:
        console.log(firstName + ' does not do anything.');
}


/*******************************************************
    Truthy and Falsy Values and Equality Operators
 *******************************************************/

// Falsy Values: undefined, null, 0, '', NaN
// Truthy Values: NOT falsy values

// Equality Operators
// === is for strict equality comparisons
// -- does type coercions so the data type of 2 variables do not have to match
var num = 23;
if (num == '23') {
    console.log('The == operator does type coercion');
    // the string converts to a number and results in true
}


/*** Coding Challenge 2 in coding_challenge_2.js ***/


/***************
    Functions
 ***************/
