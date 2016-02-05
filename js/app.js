
$(document).ready(function(){ // html code is completely loaded before running the code here

    $('#modal').submit(function(e){
        e.preventDefault(); //prevents default behavior in html of refreshing page load
        var newItem =  $("#item").val(); //creates a variable called newItem from the value in the input with ID item
    })

// // Declare variable of user's guessed number
var yourNum;

});

// Alert if user inputs decimels
    if (yourNum % 1 != 0) { // This should throw error to user if they use a decimel so use modulus like so: when x is divisible by 1 and remainder doesn't equal to 0 means it's a decimel
        alert("Sorry, this doesn't accept decimels."); // user actually sees alerts vs. console.log which is meant more for the developer
    }

    yourNum = parseInt(yourNum); // parseInt() function in JavaScript to convert a string into an integer

// --- Display information modal box ---
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

// --- Hide information modal box ---
  	$("a.close").click(function() {
  		$(".overlay").fadeOut(1000);
  	});

    $(".guess-form").submit(function(event) {
        event.preventDefault(); // when user submits form, it prevents default behavior--
    });


// Use functions with readable names and they should do no more or less than their names, i.e. increaseGuessCount, addGuessToList

// function startNewGame() { // To start a new game
// }

// Generates secret number between 1 and 999 that user will have to guess. You should try to start a new game without refreshing or reloading the page.
function getSecretNumber(min, max) {
    return Math.random() * (999 - 1) + 1;
}

// function guessNumber() { // User inputs a number between 1-100
// // Write if statement
//     alert("Sorry, this doesn't accept decimels.");
// }

// function giveFeedback() { // User receives feedback about each guess – if it was too low, too high, or just right, so write a named function that takes a user guess and determines which feedback to provide.
// }

// for loop here:
    // for (var i = )

    // If guessed number is 50 or further away from secret number, they are told they are "Ice cold"
    // Else if guessed number is between 30 and 50 they are "cold"
    // Else if guessed number is between 20 and 30 they are "warm"
    // Else if guessed number is between 10 and 20 they are "hot"
    // Else if guessed number is between 1 and 10 they are "very hot"


// Function to add guesses to list
// function addGuessToList() {
//     function increaseGuessCount

// }

// increment the counter???



