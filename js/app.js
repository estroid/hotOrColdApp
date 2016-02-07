$(document).ready(function(){ // HTML code is completely loaded before running the code here

// Declare all variables at the top
var count = 0; // Variable for counting guesses

// Declare variable of user's guessed number and secret number; place them at the top of the scope and before other functions
var secretNum; // variable with global scope

// -------------------------------------------------------------------- //

// Allows user to start a new game when they press "new game" link
    $('.new').click(function() { //.click is an event so it's necessary to tie a function to that event
        getSecretNumber(1, 100); // This is calling/invoking the function getSecretNumber to be used
             // console.log(secretNum); // Shows if a new secret number is being generated correctly
        $('#userGuess').val(''); // Resets input field to an empty string
        count = 0; // Sets count to 0
        $('#count').text(0); // Resets guess counter
        $('#guessList').empty(''); // Empties list of guessed numbers via jquery empty selector
        $('#feedback').text(''); // Resets feedback via .text function
    })

// Generates secret number between 1 and 999 that user will have to guess. You should try to start a new game without refreshing or reloading the page.
    function getSecretNumber(min, max) {
        secretNum = Math.round(Math.random() * (100 - 1) + 1); // Math.round rounds off secretNum to an integer
        return secretNum; // This returns value of secretNum to globally scoped variable

    }

    getSecretNumber(1, 100); // This is calling/invoking the function getSecretNumber to be used

// --- Display information modal box ---
    $('.what').click(function(){
        $(".overlay").fadeIn(1000);
    });

// --- Hide information modal box ---
    $('a.close').click(function() {
        $(".overlay").fadeOut(1000);
    });

    $('.guess-form').submit(function(e){
        e.preventDefault(); // Prevents default behavior in html of refreshing page load
        var guessedNum = $('#userGuess').val(); // Setting a variable called guessedNum which is the value of #userGuess
        $('#guessList').append('<li>'+ guessedNum +'</li>'); //guessedNum needs to be concatenated because we want the variable of guessedNum and not the string; also shows guessed numbers from #guessList

// Reset the input form after each guess
        $('#userGuess').val('');

// Guess iterator to show user the number of guesses they've made so far
        count = ++count; // Assigns a new value to count
        $('#count').html(count);
        // console.log(count);

// --- If-else statement to figure out proximity between rounded off num and guessedNum ---

        var difference = Math.abs(secretNum - guessedNum) // Returns the absolute value of a number, so Math.abs('-1') would return 1

        // If secretNum is greater than guessedNum
        if (difference >= 50) { // If the difference is more than 50
            $('#feedback').html('Ice cold!');
            console.log("ice cold");
        }
        else if (difference >= 30) { // If the difference is more than 30
            $('#feedback').html('Cold!');
            console.log("cold");
        }
        else if (difference >= 20) { // If the difference is more than 20
            $('#feedback').html('Warm!');
            console.log("warm");
        }
        else if (difference >= 10) { // If the difference is more than 10
            $('#feedback').html('Hot!');
            console.log("hot");
        }
        else if (difference >= 1) { // If the difference is more than 1
            $('#feedback').html('Very hot!');
            console.log("Very hot");
        }
        else { // When user guesses correctly
            $('#feedback').html('You won!');
            console.log("You won!");
        }
    })
});






