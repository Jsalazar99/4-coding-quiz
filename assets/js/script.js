var questionElement = document.querySelector("#q-1");
var currentQuestionIndex = 0;
var titleElement = document.querySelector("#question-title");
// object container for questions / answers
const questionInfo = [
    {
        question: "Which HTML tag is a link?",
        options: ["<link>", "<body>", "<img>", "<div>"],
        // answer: questionInfo.options[0],
        answer: "<link>",
    },
    {
        question: "What are arrays used for?",
        options: ["HTML stuff", "CSS stuff", "Git stuff", "Storing multiple values"],
        answer: "Storing multiple values",
    },
    {
        question: "What's one way to debug your code?",
        options: ["Terminal prompt", "Console Log", "Bootstrap", "jQuery"],
        answer: "Console Log",
    },
    {
        question: "Which character is associated with jQuery?",
        options: ["#", "@", "$", "&"],
        answer: "$",
    }
];
// declare all variables here 
var introMenu = document.querySelector("#intro-menu");
var qSection = document.querySelector(".q-box");
var qText = document.querySelector("#qText");
let question = questionInfo[currentQuestionIndex].question;
let answer = questionInfo[currentQuestionIndex].answer;
var timerCount = 75;
var timerText = document.querySelector("#timer-text");

let scoreSection = document.querySelector("#score-section");
let finalSection = document.querySelector("#final-section");
let timerSection = document.getElementById("timer-section");

let start = document.querySelector("#start-quiz");

function startQuiz() {
    // removes intro text/section and displays random question 
    introMenu.classList.add("hide");
    qSection.classList.add("visible");
    startTimer();
    getQuestion();
}
/*  start button clicked to run function */
start.addEventListener("click", startQuiz);

console.log(startQuiz);

// timer starts - setInterval / clearInterval timer 
function startTimer() {
    timerInterval = setInterval(function () {
        timerCount--;
        timerText.textContent = "Time left: " + timerCount;

        if (timerCount === 0) {
            // (timerCount);
            endQuiz();
        }
    }, 1000);
}

// let btnClick = document.querySelector("choiceNode");
function getQuestion() {
    var currentQuestion = questionInfo[currentQuestionIndex];
    var questionTitle = currentQuestion.question;
    
    questionElement.innerHTML = "<p>" + currentQuestion.question + "</p>";
    answer = currentQuestion.answer;
    // buttons clicked to run questions function  
    // answer question - presents the next question 
    for (let i = 0; i < currentQuestion.options.length; i++) {
        let nextQ = currentQuestion.options[i];
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "btn");
        choiceNode.setAttribute("value", nextQ);
        choiceNode.textContent = nextQ;
        questionElement.appendChild(choiceNode);

        choiceNode.addEventListener("click", checkAnswer);
        
    }
    currentQuestionIndex++;
}
// use event delegation in div container - activity 10 
// use event.target 
// chek if textcontent of button is equak to correct answer
//  if true increment score and call getQuestion function 
// chek if event target is the actual button 
// if false decrement time increment index and call getQuestion function 

//  Local Storage for results 
// highscores in an array 

// answer question - display "correct" or "wrong"
// answer incorrectly, and time is subtracted from timer 
let correctDiv = document.getElementById("correct");
let wrongDiv = document.getElementById("wrong");
let score = 0;

function hideMessage() {
    correctDiv.classList.add("hide");
    wrongDiv.classList.add("hide");
}
// function if/else - check if button clicked is correct answer 
function checkAnswer(event) {
    // let correctValue = event.target.textContent;
    if (event.target.value === answer) {
        score++;
        // on to next question 
        correctDiv.classList.add("visible");
        setTimeout(hideMessage, 2000);
        // display correct div 
    }
    else {
        // subtract time
        timerCount = timerCount - 5;
        // display wrong div 
        wrongDiv.classList.add("visible");
        setTimeout(hideMessage, 2000);
    }
    if (currentQuestionIndex < questionInfo.length) {
        getQuestion();
    }
    else {
        endQuiz();
    }
}

/*
WHEN all questions are answered or the timer reaches 0
THEN the game is over */
function highscores() {
    // var initials = scoreSection.input[initials].value;
    
    // var finalScore = score;
}

let submitName = document.getElementById("submit-name");
submitName.addEventListener("click", highscores);

// WHEN the game is over - THEN I can save my initials and my score 
// localStorage.setItem("initials", JSON.stringify(initials));
// localStorage.setItem(finalScore);

function endQuiz() {
    clearInterval(timerInterval);
    //let initials = scoreSection.input[initials].value;
    scoreSection.classList.add("visible");
    finalSection.classList.add("visible");
    scoreSection.textContent = "Your score: " + score; //+ "<br>" + initials;
    timerSection.textContent = "Time is up! Quiz over.";
};

let clearScore = document.getElementById("clear-scores");
let restartQuiz = document.getElementById("restart-quiz");

// function for clearing the scores 
clearScore.addEventListener("click", function () {
    localStorage.clear();
    scoreSection.textContent = "";
}); 

// function for restart quiz 
restartQuiz.addEventListener("click", function() {
    introMenu.classList.remove("hide");
    qSection.classList.remove("visible");
    scoreSection.classList.remove("visible");
    finalSection.classList.remove("visible");
    timerSection.textContent = "75 seconds to start";
});

// function for ...?
