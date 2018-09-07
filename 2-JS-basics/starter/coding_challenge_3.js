/****************************
 *  Created by Jamine Guo   *
 *  09/05/2018              *
 ****************************
    Coding Challenge 3
 ****************************/

/*
    Prompt:
    John and his family went on a holiday and went to 3 different restaurants.
    The bills were $124, $48, and $268.

    To tip the waiter a fair amount, John created a simple tip calculator (as a
    function). He likes to tip 20% of the bill when the bill is less than $50,
    15% when the bill is between $50 and $200, and 10% if the bill is more than
    $200.

    In the end, John would like to have 2 arrays:
    1) Containing all three tips (one for each bill)
    2) Containing all three final paid amounts (bill + tip)
*/

function tipAmount(bill) {
    if (bill < 50 && bill > 0) {
        return bill * 0.2;
    } else if (bill >= 50 && bill <= 200) {
        return bill * 0.15;
    } else if (bill > 200) {
        return bill * 0.1;
    } else {
        return -1; // error
    }
}

var tips = [tipAmount(124), tipAmount(48), tipAmount(268)];
var paid = [124 + tips[0], 48 + tips[1], 268 + tips[2]];

console.log('Paid(tips):', paid[0] + '(' + tips[0] + ')',
                            paid[1] + '(' + tips[1] + ')',
                            paid[2] + '(' + tips[2] + ')');
