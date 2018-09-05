/****************************
 *  Created by Jamine Guo   *
 *  09/04/2018              *
 ****************************
    Coding Challenge 1
 ****************************/

 /*
    Prompt:
    John and Mike both play basketball in different teams. In the latest 3 games,
    John's team scored 89, 120, and 103 points, while mike's team scored 116, 94,
    and 123 points.

    1. Calculate the average score for each team
    2. Decide which teams wins in average (highest average score), and print the
       winner to the console. Also include the average score in the output.
    3. Then change the scores to show different winners. Don't forget to take
       into account there might be a draw (the same average score)
    4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105
       points. Like before, log the average winner to the console. HINT: you
       will need the && operator to take the decision. If you can't solve this
       one, just watch the solution, it's no problem.
    5. Like before, change the scores to generate different winners, keeping in
       mind there might be draws.
 */

var john1, john2, john3;
var mike1, mike2, mike3;
var mary1, mary2, mary3;
var avgJohn, avgMike, avgMary;

john1 = 89;
john2 = 120;
john3 = 103;

mike1 = 116;
mike2 = 94;
mike3 = 123;

mary1 = 97;
mary2 = 134;
mary3 = 105;

avgJohn = (john1 + john2 + john3) / 3; // 104
avgMike = (mike1 + mike2 + mike3) / 3; // 111
avgMary = (mary1 + mary2 + mary3) / 3; // 112

if (avgJohn > avgMike && avgJohn > avgMary) {
    console.log('On average, John\'s team scored the most, scoring ' + avgJohn
        + ' points.');
} else if (avgMike > avgJohn && avgMike > avgMary) {
    console.log('On average, Mike\'s team scored the most, scoring ' + avgMike
        + ' points.');
} else if (avgMary > avgJohn && avgMary > avgMike) {
    console.log('On average, Mary\'s team scored the most, scoring ' + avgMary
        + ' points.');
} else if (avgMike === avgJohn && avgMike > avgMary) {
    console.log('On average, Mike\'s and John\'s teams tied for most, scoring '
        + avgMike + ' points.');
} else if (avgMike === avgMary && avgMike > avgJohn) {
    console.log('On average, Mike\'s and Mary\'s teams tied for most, scoring '
        + avgMike + ' points.');
} else if (avgMary === avgJohn && avgMary > avgMike) {
    console.log('On average, Mary\'s and John\'s teams tied for most, scoring '
        + avgMary + ' points.');
} else {
    console.log('John, Mike, and Mary all scored on average ' + avgJohn
        + ' points.');
}

// I am skipping steps 2, 3, and 5 because I feel those steps are redundant and
// that I have shown mastery of the material from just steps 1 and 4.
