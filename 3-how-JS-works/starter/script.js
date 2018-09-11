/*******************************************
 *  Edited by Jamine Guo                  *
 *  09/11/2018                             *
 *******************************************
    How JavaScript Works Behind the Scenes
 *******************************************/

///////////////////////////////////////
// Lecture: Hoisting

/*** Functions ***/
calculateAge(1990); // This will work because of "hoisting"
// JavaScript checks for declarations throughout the code first, which is hoisting

function calculateAge(year) {
    console.log(2018 - year);
}

calculateAge(1997); // Normally called after func declaration


// retirement(1990);
// This does not work because it is a function expression, not a declaration

var retirement = function(year) {
    console.log(65 - (2018 - year));
}

retirement(1997); // Normally called after function expression


/*** Variables ***/
console.log(age); // This will work because of hoisting, which scans for Variable
                  // declarations first, but is set to undefined
var age = 23;
console.log(age); // Normally called after var declaration



///////////////////////////////////////
// Lecture: Scoping

// New scope in JavaScript can only be created by writing a new function

// [Given] First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// [Given] Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}

// The third() function was called buy the third() function could not call b and
// c, which is in the second() function
*/



///////////////////////////////////////
// Lecture: The this keyword

// In a regular function call, the 'this' keyword points at the global object
// (the window object by default, in the browser)

// In method calls, the 'this' variable points to the object that's calling the method

console.log(this); // displays Window object

calcAge(1997);
function calcAge(year) {
    console.log(2018 - year);
    console.log(this); // still points to Window object becuase this is not a method
}

var john = {
    name: 'John',
    birthYear: 1996,
    calcAge: function() {
        console.log(this); // Now this points to the object calling the method

        function innerFunc() {
            console.log(this); // This is back to the default object, Window
        }
        innerFunc();
    }
}

john.calcAge();

var mike = {
    name: 'Mike',
    birthYear: 1984
};

mike.calcAge = john.calcAge; // Easy way of copying same function
mike.calcAge(); // 'This' points to Mike object now
