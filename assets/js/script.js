
// Psuedocode begins here 
function startQuiz() {
    let qButton = document.getElementsByClassName(".btn");
    qButton.addEventListener("click", "");
    
    return startQuiz;
}
console.log(startQuiz);
/*  start button clicked to run function 

1) removes intro text/section and displays random question 
 - does this populate with new text?  
 - 5 questions 

2) timer starts - setInterval / clearInterval timer 
 - start at 75 seconds 
 - timer is its own function outside of questions function 

Event Listeners 
1) Start Quiz
2) answer boolean?
3) Last question - all done / results (optional?)
4) Submit button 
5) Go back / Clear results 

Local Storage for results 
 - input from prompt 

function if/else - to check if button clicked is correct answer 
 - subtract time if incorrect AND alert wrong message
 - add 1 point if correct AND alert correct message 


WHEN all questions are answered or the timer reaches 0

THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
 */
let correctDiv = document.getElementById("correct");
let wrongDiv = document.getElementById("wrong");

if (correctAnswer) { 
    document.correct.createAttribute("class", "visible");
}
else {
    document.wrong.createAttribute("class", "visible");
}
/* answer question - presents the next question 

answer question - display "correct" || "wrong"
answer incorrectly, and time is subtracted from timer 

WHEN all questions are answered or the timer reaches 0

THEN the game is over
WHEN the game is over
THEN I can save my initials and my score


*/

window.alert("Your score: \nCorrect: " + corAnswers + "\nIncorrect: " + wrongAnswers );