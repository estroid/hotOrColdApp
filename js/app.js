
// Declare variable of user's guessed number and secret number; place them at the top of the scope and before other functions
var guessedNum = x > 0 && x < 100; // Variable is integer greater than 1 and less than 1000
var secretNum = x > 0 && x < 100; // Variable is integer greater than 1 and less than 1000

// Generates secret number between 1 and 999 that user will have to guess. You should try to start a new game without refreshing or reloading the page.
function getSecretNumber(min, max) {
    return Math.random() * (100 - 1) + 1;
    console.log("picked secret number");
}

$(document).ready(function(){ // HTML code is completely loaded before running the code here

// --- Display information modal box ---
    $(".what").click(function(){
        $(".overlay").fadeIn(1000);

    });


// --- Hide information modal box ---
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    $('.guess-form').submit(function(e){
        e.preventDefault(); // Prevents default behavior in html of refreshing page load
        var guessedNum = $("#userGuess").val(); // Creates a variable called newItem from the value in the input with ID item


// --- If-else statement to figure out proximity between secretNum and guessedNum ---

// Add math.abs

        // If secretNum is greater than guessedNum
        if (secretNum - guessedNum >= 50) { // If the difference is more than 50

            $('.guessList').append('<li>Ice cold!</li>');
            console.log("ice cold");
        }
        else if (secretNum - guessedNum >= 30) { // If the difference is more than 30
            $('.guessList').append('<li>Cold!</li>');
            console.log("cold");
        }
        else if (secretNum - guessedNum >= 20) { // If the difference is more than 20
            $('.guessList').append('<li>Warm!</li>');
            console.log("warm");
        }
        else if (secretNum - guessedNum >= 10) { // If the difference is more than 10
            $('.guessList').append('<li>Hot!</li>');
            console.log("hot");
        }
        else if (secretNum - guessedNum >= 1) { // If the difference is more than 1
            $('.guessList').append('<li>Very hot!</li>');
            console.log("very hot");
        }
    });





