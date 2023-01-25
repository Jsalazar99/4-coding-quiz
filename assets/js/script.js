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
    }
    currentQuestionIndex++;
}

questionElement.addEventListener("click", checkAnswer);
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
    if (event.target.nodeName == "BUTTON") {
        if (event.target.value === answer) {
            console.log("hello!");
            score++;
            // on to next question 
            correctDiv.classList.remove("hide");
            correctDiv.classList.add("visible");
            setTimeout(hideMessage, 2000);
            // display correct div 
        }
        else {
            // subtract time
            timerCount = timerCount - 5;
            // display wrong div 
            wrongDiv.classList.remove("hide");
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
}
// event listener for high scores 
let submitName = document.getElementById("submit-name");
let enterScore = document.getElementById("enter-score");
submitName.addEventListener("click", saveHighScores);

// WHEN the game is over - THEN I can save my initials and my score 
function endQuiz() {
    clearInterval(timerInterval);
    //let initials = scoreSection.input[initials].value;
    scoreSection.classList.add("visible");
    finalSection.classList.add("visible");
    enterScore.classList.remove("hide");
    questionElement.classList.remove("visible");
    scoreSection.textContent = "Great job! Your score: " + score;
    timerSection.textContent = "Time is up! Quiz over.";
};

let clearScore = document.getElementById("clear-scores");
let restartQuiz = document.getElementById("restart-quiz");

// function for clearing the scores 
clearScore.addEventListener("click", function () {
    localStorage.clear();
    score = 0;
    scoreSection.textContent = "Your score: " + score;
}); 

// function for restart quiz 
restartQuiz.addEventListener("click", function() {
    introMenu.classList.remove("hide");
    qSection.classList.remove("visible");
    scoreSection.classList.remove("visible");
    finalSection.classList.remove("visible");
    timerSection.textContent = timerCount;
    timerCount = 75;
    currentQuestionIndex = 0;    
});


// function for highScores 
function saveHighScores() {
    
    var textHighScore = document.getElementById("high-scores");
    var userHighScore = {
        user: initials, 
        score: score,
    }
    
    localStorage.setItem("userHighScore", JSON.stringify(userHighScore));
    // var finalScore = score;
}

// function for initials input  
//var submitName = document.getElementById("submit-name");
var finalScore = document.querySelector("high-scores");
var initials = document.querySelector("#input-name"); 

submitName.addEventListener("click", function() {
    if (initials.value === "") {
        alert("Please enter initials!");
        return;
    }
    console.log(initials);
    finalScore.textContent = `Initials: ${initials} Score: ${score}`;

    localStorage.setItem("initials", JSON.stringify(initials));
});

// array for high scores
var scoreList = [];
var viewHighScores = document.querySelector("#view-high-scores");

function renderHighScores() {
    // create elements in list for each score
    finalScore.innerHTML = "";
    finalScore.textContent = scoreList.length;

    for (var i = 0; i < scoreList.length; i++) {
        var scores = scoreList[i];
        
        var li = document.createElement("li");
        li.textContent = scores;
        li.setAttribute("data-index", i);

        scoreList.appendChild(li);
    }
}
viewHighScores.addEventListener("click", renderHighScores);

function renderInitials() {
    finalSection.textContent = initials;
}

