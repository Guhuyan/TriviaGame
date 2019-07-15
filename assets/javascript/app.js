// When the document is ready, run Javascript.
$(document).ready(function() {
    // Declare two variables to keep track of the right/wrong answers
    let rightAnswers = 0;
    let wrongAnswers = 0;
    // Delare a variable to hold the question counter.
    let qCounter = 0;
    let currentCorrectAnswer;
    // An object to hold all the questions & answers.
    const qaContainer = [
        {
            "question" : "Which of the following is correct?",
            "answers" : ["jQuery is a Java Library", "jQuery is a JavaScript Library", "jQuery is a JSON Library"],
            "correct" : "jQuery is a JavaScript Library"
        },
        {
            "question" : "What scripting language is jQuery written in?",
            "answers" : ["Java", "JavaScript", "C++", "C#"],
            "correct" : "JavaScript"
        },
        {
            "question" : "Is jQuery a library for client scripting or server scripting?",
            "answers" : ["Server scripting", "Client scripting"],
            "correct" : "Client scripting"
        },
        {
            "question" : "jQuery uses CSS selectors to select elements?",
            "answers" : ["True", "False"],
            "correct" : "True"
        },
        {
            "question" : "Which sign does jQuery use as a shortcut for jQuery?",
            "answers" : ["the % sign", "the $ sign", "the ? Sign"],
            "correct" : "the $ sign"
        },
        {
            "question" : "Look at the following selector: $('div'). What does it select?",
            "answers" : ["The first div element", "All div elements"],
            "correct" : "All div elements"
        },
        {
            "question" : "Look at the following selector: $('div p'). What does it select?",
            "answers" : ["The first p element inside a div element", "All p elements inside a div element", "All div elements with a p element"],
            "correct" : "All p elements inside a div element"
        },
        {
            "question" : "With jQuery, look at the following selector: $('div.intro'). What does it select?",
            "answers" : ["The first div element with id='intro'", "The first div element with class='intro'", "All div elements with id='intro'", "All div elements with class='intro'"],
            "correct" : "All div elements with class='intro'"
        },
        {
            "question" : "Look at the following selector: $('p#intro'). What does it select?",
            "answers" : ["The p element with id='intro'", "The p element with class='intro'", "All p elements with id='intro'", "All p elements with class='intro'"],
            "correct" : "The p element with id='intro'"
        },
        {
            "question" : "Which jQuery method is used to set one or more style properties for selected elements?",
            "answers" : ["style()", "css()", "html()"],
            "correct" : "css()"
        },
        {
            "question" : "Which jQuery method is used to hide selected elements?",
            "answers" : ["hide()", "hidden()", "display(none)", "visible(false)"],
            "correct" : "hide()"
        },
        {
            "question" : "Which jQuery method is used to remove selected elements?",
            "answers" : ["remove()", "detach()", "Both A & B", "None of the above"],
            "correct" : "Both A & B"
        },
        {
            "question" : "Which jQuery function is used to prevent code from running, before the document is finished loading?",
            "answers" : ["$(document).ready()", "$(document).load()", "$(body).onReady()", "$(body).onload()"],
            "correct" : "$(document).ready()"
        },
        {
            "question" : "Which jQuery method returns the direct parent element of the selected element?",
            "answers" : ["ancestor()", "ancestors()", "parent()", "parents()"],
            "correct" : "parent()"
        },
        {
            "question" : "Which jQuery method should be used to deal with name conflicts?",
            "answers" : ["conflict()", "nameConflict()", "noConflict()", "noNameConflict()"],
            "correct" : "noConflict()"
        },
        {
            "question" : "Which jQuery method is used to switch between adding/removing one or more classes (for CSS) from selected elements?",
            "answers" : ["switch()", "altClass()", "toggleClass()", "switchClass()"],
            "correct" : "toggleClass()"
        },
        {
            "question" : "Is it possible to use jQuery together with AJAX?",
            "answers" : ["Yes", "No"],
            "correct" : "Yes"
        },
        {
            "question" : "Which jQuery method is used to perform an asynchronous HTTP request?",
            "answers" : ["jQuery.ajaxAsync()", "jQuery.ajax()", "jQuery.ajaxSetup()"],
            "correct" : "jQuery.ajax()"
        },
    ]

    // This function render current question to HTML.
    function renderQuestion() {
        $("#question").html(`${qaContainer[qCounter].question} <span class="question-counter"> (Question ${qCounter + 1} of ${qaContainer.length})</span>`);
    }

    // This function renders the answers to the current question.
    function renderAnswers() {
        for (i = 0; i <qaContainer[qCounter].answers.length; i++) {
            $("#answers").append(`<div class="choices"><input type="radio" name="choice" value="${qaContainer[qCounter].answers[i]}"> ${qaContainer[qCounter].answers[i]}</div>`);
        }
    }

    // Reset the game
    function reset() {
        renderQuestion()
        $("#answers").empty();
        renderAnswers();
        currentCorrectAnswer = qaContainer[qCounter].correct;
        // Testing; console log out the correct answer.
        console.log("Correct answer: " + currentCorrectAnswer)
    }

    // Run the game
    reset();


    $("#btn").on("click", function() {
        // Used vanilla js to select elements by name because I don't know how to use jQuery to select by name.
        let radios = document.getElementsByName("choice");
        let checkInput = false;
        let playerChoice;
        // Loop through all multiple choice answers and check if any is "checked"
        for (i = 0; i < radios.length; i++) {
            // If checked, set its value equal to the local playerChoice variable.
            if (radios[i].checked) {
                checkInput = true;
                playerChoice = radios[i].value;
                // Testing to see if the radio is working.  If it is, console log out the index of the radio.
                console.log(i);
            }
        }
        // If the user hasn't picked an answer yet, alert the user to pick an answer.
        if (!checkInput) {
            alert("Please pick an answer.");
        }
        // If the player choice is equal to the global currentCorrectAnswer, alert that the user's answer is right.  Adjust global variables and reset game.
        else if (playerChoice === currentCorrectAnswer) {
            alert("Your answer is correct!");
            rightAnswers++;
            qCounter++;
            reset();
        }
        // If none of the above gets run, then the user has picked the wrong answer.  Alert and adjust global variables, then reset the game.
        else {
            alert("Your answer is wrong!")
            wrongAnswers++;
            qCounter++;
            reset();
        }
    });
})

//Declare a variable and set it equal to a timer
//If correct, alert that the player's answers was right or announce within the html by creating a new div in a separate html section (will have to create this section)
//If wrong, highlight the correct answer and announce that the player's answers was not correct
//Set timeout to clear the message(s)