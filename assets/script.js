//Array of objects which are holding the questions

let questions = [
  {
    poll: "Commonly used data types DO NOT include?",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    answer: "Alerts",
  },
  {
    poll: "The condition in an if / else statement is enclosed within _____.",
    choices: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
    answer: "Curly Brackets",
  },
  {
    poll: "Arrays in JavaScript can be used to store _______.",
    choices: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
    answer: "All of the Above",
  },
  {
    poll: "String values must be enclosed within _____ when being assigned to variables",
    choices: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    answer: "Parenthesis",
  },
  {
    poll: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "Terminal / Bash", "For Loops", "console.log"],
    answer: "JavaScript",
  },
];

//Default data at start of quiz
let userAnswer = []
let secondsLeft = questions.length * 15;
let score = 0;
let questionIndex = 0;


let startBtn = document.querySelector("#start-btn");

let clock = document.querySelector("#clock")



startBtn.addEventListener("click", startTimer);

function startTimer() {
  let timerInterval = setInterval(() => {
    secondsLeft--;
    clock.textContent = "Time: " + secondsLeft;

    if (secondsLeft <= 0) {

      clearInterval(timerInterval);
    }

  }, 1000);

};

// iterate .foreach and pass through a choice and i of for loop
 

//3. take answer and compare against correct answer
//can add point deduction in this function
//if you touch time then update time




 


// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question

//make start button
//hook button up to begin timer
//set interval

// WHEN I answer a question
// THEN I am presented with another question

//on click to to pass to next question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

//time penalty for wrong answer

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over

//condition for when timer = 0 to end the game

// WHEN the game is over
// THEN I can save my initials and my score
