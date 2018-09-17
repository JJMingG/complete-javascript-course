/***********************************
 *  Created by Jamine Guo          *
 *  09/13/2018                     *
 ***********************************
    DOM Manipulation and Events
 ***********************************/

/*
    Notes:

    DOM: Document Object Model
    - Structured representation of an HTML doc, used to connect webpages to scripts like javaScript.
    - For each HTML box, there is an object in the DOM that we can access and interact with.

    HTML and CSS Crash Course:
    - HTML is the content of the webpage
    - CSS is the presentation of the webpage

    *** Within the code below ***

    Using Math object:
    - JavaScript has a built in math object
    - To get a random number, we use Math.random() that gives a random number between 0 and 1
    - Multiplying will result in a wider range: Math.random() * 6 --> between 0 and 5
    - These will be decimals so we can use Math.floor() func to floor the number: Math.floor(Math.random() * 6)

    DOM Access and Manipulation:
    - To access the DOM, we use the 'document' object
    - document.querySelector('#id_from_html_file') is a method that allows us to select the first element in a
      webpage
        - The '#' is how you select id in CSS
    - Another way to get an ID is document.getElementById('id') which is a faster way to get ID than the above ^
    - To change the content of a selection, we use the .textContent method to change the plain text:
        - document.querySelector('#id').textContent = text_to_change_to;
            - Example: document.querySelector('#current-' + activePlayer).textContent = dice;
    - Another way to change the content of a selection is by changing the HTML:
        - document.querySelector('#id').innerHTML = '<HTML_code>' + text_to_change_to + '</HTML_code>';
            - Example: // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; // word is emphasized/italicized
    - Can also change the CSS:
        - document.querySelector('.class_name').style.property(ie. display) = 'value';
    - To set content to a variable: var x = document.querySelector('#id').textContent;

    Events and Event Handling:
    - Ref page for events: https://developer.mozilla.org/en-US/docs/Web/Events
    - Select an event (ie button) in which an event will occur
        - document.querySelector('.button').addEventListener('event_type', function_to_call)
            - The function_to_call is called by the listener, therefor we do not add the ()
            - Example: document.querySelector('.button-roll').addEventListener('click', btn);
        - Anonymous function: a function that can only be called once because it has no name
            - document.querySelector('.button-roll').addEventListener('click', function(){
                    // Do something
              });

    Updating Scores and Changing the Active Player:
    - Ternary Operator recap: activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        - "If active player is 0, then active player is 1. Else, active player is 0"
    - Class Manipulation: document.querySelector('.class_name').classList.remove('class_part_to_remove');
        - Example: document.querySelector('.player-0-panel').classList.remove('active');
        - Use .add to add a part to the class
        - Example: document.querySelector('.player-1-panel').classList.add('active');
        - Can also use .toggle which will add a class if it is not there, or remove if it is there
        - Example: document.querySelector('.player-0-panel').classList.toggle('active');

    Implementing Our 'Hold' Function and the DRY (Dont-repeat-yourself) Principle:
    - DRY Principle: Don't Repeat Yourself. This is a coding principle, in which if you find yourself copying and pasting the same code in
      multiple places, you should just reformat the code as another function and call the function instead.
*/

/*
    GAME RULES:

    - The game has 2 players, playing in rounds
    - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
    - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
    - The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that,
      it's the next player's turn
    - The first player to reach 100 points on GLOBAL score wins the game
*/

/*
    3 Coding Challenges:

    1. A player loses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (HINT: Always save the previous
       dice roll in a separate variable)
    2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (HINT: you
       can read that value with the .value property in Javascript. This is a good opportunity to use google to figure this out)
    3. Add another dice to the game, so that there are two dices now. The player loses his current score when of of them is a 1. (HINT: you will
       need CSS to position the second dice, so take a look at the CSS code for the first one)

    My Assumptions:
    - For number 1 and 3 I am assuming that it is one or both dices that result in their respective conditions
    - For number 2, if a non-number or negative number is inputed, it will be defaultly set to 100.
*/

// Set Variables
var scores, roundScore, activePlayer, gamePlaying, prevRoll6;

// Initialize
init();

// Events and Event Handling
// Event Listener for Roll Button
document.querySelector('.btn-roll').addEventListener('click', function(){
    var diceSelect = document.getElementById('dice-1');
    var diceSelect2 = document.getElementById('dice-2');

    if (gamePlaying) {
        // Roll Dice
        var dice = Math.floor(Math.random() * 6) + 1; // to get a dice number between 1 and 6
        var dice2 = Math.floor(Math.random() * 6) + 1;

        // Change Display
        diceSelect.style.display = 'block'; // change the display
        diceSelect.src = 'dice-' + dice + '.png'; // Change dice pic according to dice roll
        diceSelect2.style.display = 'block'; // change the display
        diceSelect2.src = 'dice-' + dice2 + '.png'; // Change dice pic according to dice roll

        // Update score if the dice is not a 1
        if ((dice === 6 || dice2 === 6) && prevRoll6 === 6) { // Rolled one 6 twice in a row
            scores[activePlayer] = 0; // Reset to 0
            document.getElementById('score-' + activePlayer).textContent = '0'; // change display
            nextPlayer();
        } else if (dice !== 1 && dice2 !== 1) {
            if (dice === 6 || dice2 === 6) { // Condition for rolling a 6
                prevRoll6 = 6;
            } else {
                prevRoll6 = 0;
            }
            roundScore += dice + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else { // rolled a 1
            // Goes to next player
            nextPlayer();
        }
    }
});

// Event Listener for Hold Button
document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
        // Add current score to global score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Set final score based on input
        var finalScore = document.querySelector('.final-score').value;

        // Check if it's an appropriate value
        if (finalScore > 0) {
            // nothing
        } else {
            finalScore = 100; // Default score
        }

        // Check if the player won the game
        if (scores[activePlayer] >= finalScore) {
            // Change player display to winner
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!'

            // Hide active and display
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); // winner class was made in css file already
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); // active class was made in css file already

            gamePlaying = false;
        } else {
            // Change active player
            nextPlayer();
        }
    }
});

// New Game Event listener
document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer(){
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // Switch activePlayer

    // Reset
    roundScore = 0;
    prevRoll6 = 0;

    // Reset current score displayer
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Change active player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // Remove dice display
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
};

function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    prevRoll6 = 0;

    // Set start dice display to none
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    // Set all scores to 0
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Reset player names
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    // Remove extra classes
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
