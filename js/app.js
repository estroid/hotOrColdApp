$(document).ready(function(){ // HTML code is completely loaded before running the code here

// Declare variable of user's guessed number and secret number; place them at the top of the scope and before other functions

    var secretNum; // variable with global scope

// Generates secret number between 1 and 999 that user will have to guess. You should try to start a new game without refreshing or reloading the page.
    function getSecretNumber(min, max) {
        secretNum = Math.random() * (100 - 1) + 1;
        return secretNum; // This returns value of secretNum to globally scoped variable
    }

    getSecretNumber(1, 100); // This is calling/invoking the function getSecretNumber to be used

    var num = Math.round(secretNum); // Declare variable num of secretNum rounded off to nearest integer
    console.log(num);


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

// Reset the input form
    $('.guess-form').trigger('reset');

// --- If-else statement to figure out proximity between rounded off num and guessedNum ---

        var difference = Math.abs(num - guessedNum) // Returns the absolute value of a number, so Math.abs('-1') would return 1

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
            console.log("very hot");
        }
        else { // When user guesses correctly
            $('#feedback').html('You won!');
            console.log("You won!");
        }
    })
});

// User can start a new game
    // $(".reset").click(function() {
    //     $(this).closest('form').find("input[type=text], textarea").val("");
    //         console.log('I want a new game.');

    // });

// Add a guess iterator to show user the number of guesses they've made so far!!!!!!




