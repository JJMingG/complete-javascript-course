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
    case 'teacher':
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

//function declaration
// format: function nameOfFunc(argument1, argument 2, etc) {}
function calculateAge(birthYear) {
     return 2018 - birthYear
}

var ageLilian = calculateAge(2003);
console.log('Lilian is ' + ageLilian + ' years old!');


/*******************************************
    Function Statements and Expressions
 *******************************************/

// Function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives people around';
        case 'student':
            return firstName + ' is studying in college';
        default:
            return firstName + ' is not doing anything';
    }
}

console.log(whatDoYouDo('student', 'Jamine'));


/***************
    Arrays
 ***************/

// Ways to declare arrays
var names = ['Jamine', 'Lilian', 'Eric'];
var years = new Array(1997, 2003, 1998);

// This prints the whole array preceded by the size
console.log(names); // (3) ["Jamine", "Lilian", "Eric"]
console.log(names.length); // to access the "3"
console.log(names[1]); // Access the second element of the array

// Mutate Array Data
names[0] = 'Jay'; // Replaces the first element of the array
console.log(names);
names[names.length] = 'Kim'; // Replace names[3] even tho it is
                             // outside of the original length
console.log(names);

// Arrays may have different data types;
var arr = ['John', 123, true, 'boop'];
console.log(arr);

// Array Methods
// Adding to Array
arr.push('pushed'); // Adds element to the end of array
arr.unshift('Beginning'); // Adds element to the beginning of array
console.log(arr);

// Deleting from Array
arr.pop(); // deletes element at end of array
arr.shift(); // deletes element at beginning of array
console.log(arr);

// Indexing of Array
console.log(arr.indexOf(123)); // returns the position of element
                               // returns -1 if element not in array


/*** Coding Challenge 3 ***/


/*******************************
    Objects and Properties
 *******************************/

//
