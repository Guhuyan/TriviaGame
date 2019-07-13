
// Declare two variables to keep track of the wrong/right answers
var rightAnswers = 0;
var wrongAnswers = 0;

// Declare an array to hold objects.  Each object has a question and 2 or four question.
const questionContainer = [
    {
        "question" : "Which of the following is correct?",
        "choice" : ["jQuery is a Java Library", "jQuery is a JavaScript Library", "jQuery is a JSON Library"],
        "correct" : "jQuery is a JavaScript Library"
    },
    {
        "question" : "What scripting language is jQuery written in?",
        "choice" : ["Java", "JavaScript", "C++", "C#"],
        "correct" : "JavaScript"
    },
    {
        "question" : "Is jQuery a library for client scripting or server scripting?",
        "choice" : ["Server scripting", "Client scripting"],
        "correct" : "Client scripting"
    },
    {
        "question" : "jQuery uses CSS selectors to select elements?",
        "choice" : ["True", "False"],
        "correct" : "True"
    },
    {
        "question" : "Which sign does jQuery use as a shortcut for jQuery?",
        "choice" : ["the % sign", "the $ sign", "the ? Sign"],
        "correct" : "the $ sign"
    },
    {
        "question" : "Look at the following selector: $('div'). What does it select?",
        "choice" : ["The first div element", "All div elements"],
        "correct" : "All div elements"
    },
    {
        "question" : "Look at the following selector: $('div p'). What does it select?",
        "choice" : ["The first p element inside a div element", "All p elements inside a div element", "All div elements with a p element"],
        "correct" : "All p elements inside a div element"
    },
    {
        "question" : "With jQuery, look at the following selector: $('div.intro'). What does it select?",
        "choice" : ["The first div element with id='intro'", "The first div element with class='intro'", "All div elements with id='intro'", "All div elements with class='intro'"],
        "correct" : "All div elements with class='intro'"
    },
    {
        "question" : "Look at the following selector: $('p#intro'). What does it select?",
        "choice" : ["The p element with id='intro'", "The p element with class='intro'", "All p elements with id='intro'", "All p elements with class='intro'"],
        "correct" : "The p element with id='intro'"
    },
    {
        "question" : "Which jQuery method is used to set one or more style properties for selected elements?",
        "choice" : ["style()", "css()", "html()"],
        "correct" : "css()"
    },
    {
        "question" : "Which jQuery method is used to hide selected elements?",
        "choice" : ["hide()", "hidden()", "display(none)", "visible(false)"],
        "correct" : "hide()"
    },
    {
        "question" : "Which jQuery method is used to remove selected elements?",
        "choice" : ["remove()", "detach()", "Both A & B", "None of the above"],
        "correct" : "Both A & B"
    },
    {
        "question" : "Which jQuery function is used to prevent code from running, before the document is finished loading?",
        "choice" : ["$(document).ready()", "$(document).load()", "$(body).onReady()", "$(body).onload()"],
        "correct" : "$(document).ready()"
    },
    {
        "question" : "Which jQuery method returns the direct parent element of the selected element?",
        "choice" : ["ancestor()", "ancestors()", "parent()", "parents()"],
        "correct" : "parent()"
    },
    {
        "question" : "Which jQuery method should be used to deal with name conflicts?",
        "choice" : ["conflict()", "nameConflict()", "noConflict()", "noNameConflict()"],
        "correct" : "noConflict()"
    },
    {
        "question" : "Which jQuery method is used to switch between adding/removing one or more classes (for CSS) from selected elements?",
        "choice" : ["switch()", "altClass()", "toggleClass()", "switchClass()"],
        "correct" : "toggleClass()"
    },
    {
        "question" : "Is it possible to use jQuery together with AJAX?",
        "choice" : ["Yes", "No"],
        "correct" : "Yes"
    },
    {
        "question" : "Which jQuery method is used to perform an asynchronous HTTP request?",
        "choice" : ["jQuery.ajaxAsync()", "jQuery.ajax()", "jQuery.ajaxSetup()"],
        "correct" : "jQuery.ajax()"
    },
]

/*
{
        "question" : "Which jQuery method should be used to deal with name conflicts?",
        "choice" : ["conflict()", "nameConflict()", "noConflict()", "noNameConflict()"],
        "correct" : 0
    }
    Correct answer is in index 0, so put your correct answer in index 0.
*/


/*
var state = {
    currentQ: 0,
    userGuess: null,
    timeReaming: 10 (or the current time variable)
}

function presentQ() {
    var q = questionContainer(state.currentQ)
    $("#question").empty()

    answer.data("position", i)
    answer.addClass("answer")
    if ($(this).data("position") == questions[i].correctAnswer
    clear timeout

    Watch the class video later to review.
    Put script to the bottom unless you have document.ready.
}
*/



console.log(questionContainer);
//When the player make a choice, compare the innerHTML text with the object's "correct" variable to see if true.  
//Use questionContainer.correct[questionCounter] to see current correct answer.
//questionContainer.correct[questionCounter]
//If true, the player picked the right answer.
//Else, the answer was wrong.

//Declare a variable and set it equal to a timer

//Run through the object's length.  The first is always the question.
//Pass the question to the appropriate question div.
//Make a div for each of the answer.
//Add eventListener
//Set if statements to determine if the player choice is correct
//If correct, alert that the player's choice was right or announce within the html by creating a new div in a separate html section (will have to create this section)
//Add +1 to wrong variable count
//If wrong, highlight the correct answer and announce that the player's choice was not correct
//Set timeout to clear the message(s)
//Restart the game

//Make a reset function

//Start the game when the start button is pressed
//Run reset function once