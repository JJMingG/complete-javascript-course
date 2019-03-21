/****************************
 *  Created by Jamine Guo   *
 *  09/17/2018              *
 ****************************
    Objects and Functions
 ****************************/

/*
    *** Everything Is an Object: Inheritance and the Prototype Chain ***
    - Every JavaScript object has a prototype property, which makes inheritance possible in JavaScript.
    - The prototype property of an object is where we put methods and properties that we want other objects to inherit
    - The Constructor's prototype property is NOT the prototype of the Constructor itself, it's the prototype of ALL instances that are created
      through it
    - When a certain method or property is called, the search starts in the object itself, and if it cannot be found, the search moves on to the
      object's prototype. This continues until the method is found. This is called a prototype chain.
*/



/*
    *** Creating Objects: Function Constructor ***
*/

var john = { // Basic Object
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// Function Constructor: convention for this is to start with a capital letter
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// Prototype Inheritance
Person.prototype.calculateAge = function() { // Method
    console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith'; // Property (not so common to do)

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.name + " " + john.lastName);
console.log(jane.name + " " + jane.lastName);
console.log(mark.name + " " + mark.lastName);



/*
    *** The Prototype Chain in the Console ***
*/

// to check property
console.log("\nChecking property");
console.log(john.hasOwnProperty('job')); // true
console.log(john.hasOwnProperty('lastName')); // returns false because lastName is a property of the prototype
console.log(john instanceof Person); // instanceof is an operator



/*
    *** Creating Objects: object.create
*/

// instead of using function constructors...
var personProto = {
    calculateAge: function() {
        console.log(2018 - this.yearOfBirth);
    }
};

var james = Object.create(personProto);
james.name = 'James';
james.yearOfBirth = 1991;
james.job = 'teacher';

var joey = Object.create(personProto,
{
        name: { value: 'Jane' },
        yearOfBirth: { value: 1969 },
        job: { value: 'student' }
});

// Difference is that object.create builds an object that inherits directly from the first argument
// function constructor the newly created object inherits from the constructor's prototype property



/*
    *** Primitives and Objects ***
    - Primitives are numbers, strings, booleans, undefined, and null, everything else are objects.
    - Variables containing objects, actually holds the pointer reference to the object
*/

// Objects
var a = 23;
var b = a;
a = 46;
console.log(a); // 46
console.log(b); // 23

var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30 since obj2 is referencing to obj1 so it has the changes as well

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age); // 27
console.log(obj.city); // San Francisco



/*
    *** First Class Functions: Passing Functions as Arguments ***
*/
