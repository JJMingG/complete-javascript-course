/****************************
 *  Created by Jamine Guo   *
 *  09/04/2018              *
 ****************************
    Coding Challenge 1
 ****************************/

 /*
    Prompt:
    Mark and john are trying to compare their BMI, which is calculated using the
    formula: BMI = mass / height^2 (mass in kg and height in meter).

    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs
    3. Create a boolean variable containing information about whether mark has a
       higher BMI than John.
    4. Print a string to the console containing the variable from step 3.
       (Something like "Is Mark's BMI higher than John's? true").
*/

var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn, markGreater;

massMark = 70;
massJohn = 80;

heightMark = 1.7;
heightJohn = 1.75;

bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / heightJohn ** 2;

markGreater = bmiMark > bmiJohn;

console.log("Mark's BMI is " + bmiMark);
console.log("John's BMI is " + bmiJohn);
// I used "" to bypass the single '' but the escape character \ could've been used

console.log("Is Mark's BMI higher than John's? " + markGreater);
