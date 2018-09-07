/****************************
 *  Created by Jamine Guo   *
 *  09/06/2018              *
 ****************************
    Coding Challenge 3
 ****************************/

/*
    Prompt:
    Remember the tip calculator challenge? Let's create a more advanced version
    using everything we learned:

    This time, John and his family went to 5 different restaurants. The bills
    were $124, $48, $268, $180, and $42.
    John likes to tip 20% of the bill when the bill is less than $50, 15% when
    the bill is between $50 and $200, and 10% if the bill is more than $200.

    Implement a tip calculator using objects and loops:
    1. Create an object with an array for the bill values
    2. Add a method to calculate the tip
    3. This method should include a loop to iterate over all the paid bills and
       do the tip calculations
    4. As an output, create 1) a new array containing all tips, and 2) an array
       containing final paid amounts (bill + tip). HINT: start with two empty
       arrays [] as properties and then fill them up in the loop.

    EXTRA: Mark's family also went on a holiday, going to 4 different restaurants.
        The bills were $77, $475, $110, and $45.
        Mark likes to tip 20% of the bill when the bill is less than $100, 10%
        when the bill is between $100 and $300, and 25% if the bill is more than
        $300 (different than John).

    5. Implement the same functions as before, but this time with Mark's rules.
    6. Create a function (not a method) to calculate the average of a given array
       of tips. HINT: Loop over the array, and in each iteration store the current
       sum in a variable (starting from 9). After you have the sum of the array,
       divide it by the number of elements in it (average)
    7. Calculate the average tip for each family
    8. Log to the console which family paid the highest tips on average
*/

var restaurantJ = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    total: [],
    calculations: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] > 0 && this.bills[i] < 50) {
                this.tips.push(this.bills[i] * 0.2);
            } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                this.tips.push(this.bills[i] * 0.15);
            } else if (this.bills[i] > 200) {
                this.tips.push(this.bills[i] * 0.1);
            } else {
                this.tips.push(-1000); // Error
            }

            this.total.push(this.bills[i] + this.tips[i]);
        }
    }
}

restaurantJ.calculations();

console.log('John\'s bills were:');

for (var i = 0; i < restaurantJ.bills.length; i++) {
    console.log('Tips: ' + restaurantJ.tips[i] + ' Total: ' + restaurantJ.total[i]);
}

var restaurantM = {
    bills: [77, 475, 110, 45],
    tips: [],
    total: [],
    calculations: function() {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] > 0 && this.bills[i] < 100) {
                this.tips.push(this.bills[i] * 0.2);
            } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
                this.tips.push(this.bills[i] * 0.1);
            } else if (this.bills[i] > 300) {
                this.tips.push(this.bills[i] * 0.25);
            } else {
                this.tips.push(-1000); // Error
            }

            this.total.push(this.bills[i] + this.tips[i]);
        }
    }
}

restaurantM.calculations();

console.log('\nMark\'s bills were:');

for (var i = 0; i < restaurantM.bills.length; i++) {
    console.log('Tips: ' + restaurantM.tips[i] + ' Total: ' + restaurantM.total[i]);
}

function avgTips(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum += tips[i];
    }

    return sum / tips.length;

    // I am assuming that there is no need for error check if the argument is an
    // array or if each element of the array is a number.
}

var johnAvg = avgTips(restaurantJ.tips);
var markAvg = avgTips(restaurantM.tips);

if (johnAvg > markAvg) {
    console.log('\nJohn paid more tip on average: ' + johnAvg)
} else if (johnAvg < markAvg) {
    console.log('\nMark paid more tip on average: ' + markAvg)
} else { // equal
    console.log('\nOn average, John and Mark paid the same amount of tips');
}
