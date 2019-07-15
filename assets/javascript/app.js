// When the document is ready, run Javascript.
$(document).ready(function() {
    let rightAnswers = 0;
    let wrongAnswers = 0;
    let timerRunning = false;
    let qCounter = 0;
    let currentCorrectAnswer;
    // Global variables to track the timer
    let intervalID;
    let time = 90;
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

    // Set up a decrement timer and render it to the document after passing it through the convertTime function
    function decrementTimer() {
        time--;
        let convertedTime = convertTime(time);
        $("#timeLeft").html(convertedTime);
        // Lose if timer runs out
        if (time === 0) {
            alert("Time is up!")
            wrongAnswers++;
            qCounter++;
            reset();
        }
    }

    // Start the timer
    function startTimer() {
        intervalID = setInterval(decrementTimer, 1000);
        timerRunning = true;
    }

    // Reset and render the Timer
    function resetTimer() {
        clearInterval(intervalID);
        time = 90;
        let convertedTime = convertTime(time);
        $("#timeLeft").html(convertedTime);
    }

    // This function takes in a time in seconds and convert it to minutes and seconds
    function convertTime(t) {
        let minutes = Math.floor(t/60);
        let seconds = t - (minutes * 60)
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return `${minutes}:${seconds}`;
    }
    
    // Reset the game
    function reset() {
        if (qCounter === qaContainer.length) {
            timerRunning = false;
            resetTimer();
            $(".question").empty();
            $(".answers").empty();
            $(".timer").empty();
            $(".question").html(`<h2>Thank you for playing my quiz game!</h2>`);
            $(".answers").html(`
            <div>Number of correct answers: ${rightAnswers}</div>
            <div>Number of wrong answers: ${wrongAnswers}</div>
            `);
            //$(".timer").html(`<div><button id="btn-restart">Play Again</button></div>`);
        }
        else {
            resetTimer()
            renderQuestion()
            $("#answers").empty();
            renderAnswers();
            currentCorrectAnswer = qaContainer[qCounter].correct;
            startTimer();
            // Testing - console log out the correct answer.
            console.log("Correct answer: " + currentCorrectAnswer);
        }
    }

    // Start the game.  Populate cells.
    function start() {
        $(".question").empty();
        $(".answers").empty();
        $(".timer").empty();
        $(".question").html(`<h2 id="question"></h2>`);
        $(".answers").html(`<form id="answers"></form>`);
        $(".timer").html(`
        <div>Time left: <span id="timeLeft">00:00</span></div>
        <div><button id="btn-submit">Submit Answer</button></div>
        `)
        resetTimer()
        renderQuestion()
        $("#answers").empty();
        renderAnswers();
        currentCorrectAnswer = qaContainer[qCounter].correct;
        startTimer();
        // Testing - console log out the correct answer.
        console.log("Correct answer: " + currentCorrectAnswer);
    }
    start();

    $("#btn-submit").on("click", function() {
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