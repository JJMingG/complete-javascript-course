/****************************
 *  Created by Jamine Guo   *
 *  09/06/2018              *
 ****************************
    Coding Challenge 4
 ****************************/

 /*
    Prompt:
    Let's remember the first coding cha;;enge where Mark and John compared their
    BMIs. Let's now implement the same functionality with objects and methods.

    1. For each of them, create an object with properties for their full name,
       mass, and height
    2. Then, add a method to each subkect to calculate the BMI. Save the BMI to
       the object and also return it from the method.
    3. In the end, log to the console who has the highest BMI, together with the
       full name and the respective BMI. Don't forget they might have the same
       BMI.

    Remember: BMI = mass / height**2
 */

var John = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

var Mark = {
    name: 'Mark Smith',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

if (John.calcBMI() > Mark.calcBMI()) {
    console.log(John.name + ' has the highest BMI: ' + John.BMI);
} else if (Mark.BMI > John.BMI) {
    console.log(Mark.name + ' has the highest BMI: ' + Mark.BMI);
} else {
    console.log('John and Mark have the same BMI');
}
