var questionElement = document.querySelector("#q-1");
var currentQuestionIndex = 0;
var titleElement = document.querySelector("#question-title");
// object container for questions / answers
const questionInfo = [
    {
        question: "Which HTML tag is a link?",
        options: ["<link>", "<body>", "<img>", "<div>"],
        answer: "answer 1",
    },
    {
        question: "Q2 goes here",
        options: ["option 1", "option 2", "option 3", "option 4"],
        answer: "answer 2",
    },
    {
        question: "Q3 goes here",
        options: ["option 1", "option 2", "option 3", "option 4"],
        answer: "answer 3",
    },
    {
        question: "Q4 goes here",
        options: ["option 1", "option 2", "option 3", "option 4"],
        answer: "answer 4",
    }
];
// declare all variables here 
//var startQuiz = document.querySelector("#start-quiz");
var introMenu = document.querySelector("#intro-menu");
var qSection = document.querySelector(".q-box");
var qText = document.querySelector("#qText");
var questionOne = document.querySelector("#A");
var questionTwo = document.querySelector("#B");
var questionThree = document.querySelector("#C");
var questionFour = document.querySelector("#D");

var index = 0;
var timerCount = 5;
var timerInterval = document.querySelector("#timer-text");

var scoreSection = document.querySelector("#score-section");
var finalSection = document.querySelector("#final-section");

// Psuedocode begins here 
let start = document.querySelector("#start-quiz");
/*  start button clicked to run function */
start.addEventListener("click", startQuiz);

function startQuiz() {
    introMenu.classList.add("hide");
    qSection.classList.add("visible");
    // runQuestions();
    startTimer();
    getQuestion();
}

console.log(startQuiz);
// removes intro text/section and displays random question 
/* function runQuestions() {
    qText.textContent = questionInfo[index].question;
    questionOne.textContent = questionInfo[index].options[0];
    questionTwo.textContent = questionInfo[index].options[1];
    questionThree.textContent = questionInfo[index].options[2];
    questionFour.textContent = questionInfo[index].options[3];
} */
// timer starts - setInterval / clearInterval timer 
function startTimer() {
    timerCount = setInterval(function() {
        timerCount--;
        timerInterval.textContent = "Time left: " + timerCount;

        if(timerCount === 0) {
            clearInterval(timerCount);
            endQuiz();
        }
    }, 1000);
}

// let btnClick = document.querySelector("choiceNode");

function getQuestion() {
    var currentQuestion = questionInfo[currentQuestionIndex];
    var questionTitle = currentQuestion.question;
    questionElement.innerHTML = "<p>" + currentQuestion.question + "</p>";
    // titleElement.appendChild(questionTitle);
    // questionTitle.innerHTML = "<p>" + currentQuestion.question + "</p>";
// buttons clicked to run questions function 
// answer question - presents the next question 
    for (let i = 0; i < currentQuestion.options.length; i++) {
        const nextQ = currentQuestion.options[i];
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "btn");
        choiceNode.setAttribute("value", nextQ);
        choiceNode.textContent = nextQ;
        questionElement.appendChild(choiceNode);
        
    }

}
// getQuestion();
// choiceNode.addEventListener("click", checkAnswer);

/*
Local Storage for results 
 - input from prompt */
// for loop might go in here 

// answer question - display "correct" or "wrong"
// answer incorrectly, and time is subtracted from timer 
let correctDiv = document.getElementById("correct");
let wrongDiv = document.getElementById("wrong");

// function if/else - check if button clicked is correct answer 
function checkAnswer() {
    if (options === answer) {
        score++;
        // on to next question 
        correctDiv.addClass("visible");
        // display correct div 
    }
    else {
        // subtract time
        timerCount - 5;
        // display wrong div 
        wrongDiv.addClass("visible");
    }
    currentQuestionIndex++;
}

/*
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score


localStorage.setItem(initials, score);

function endQuiz() {
    window.alert("Your score: \nCorrect: " + corAnswers + "\nIncorrect: " + wrongAnswers);
    
    scoreSection.addClass("visible");
    timerSection.textContent = "Time is up! Quiz over.";
};
*/
