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
    choices: [
      "Numbers and Strings",
      "Other Arrays",
      "Booleans",
      "All of the Above",
    ],
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
let userAnswer = [];
let secondsLeft = questions.length * 15;
let score = 0;
let questionIndex = 0;

let selectOne = document.querySelector("#btn1");
let selectTwo = document.querySelector("#btn2");
let selectThree = document.querySelector("#btn3");
let selectFour = document.querySelector("#btn4");

let choice1Container = document.getElementById("btn1");
let choice2Container = document.getElementById("btn2");
let choice3Container = document.getElementById("btn3");
let choice4Container = document.getElementById("btn4");

let startBtn = document.querySelector("#start-btn");
let questionH2 = document.getElementById("questions");
let clock = document.querySelector("#clock");
let user = document.querySelector("#user");

document.getElementById("end").style.display = "none";
document.getElementById("btn1").style.visibility = "hidden";
document.getElementById("btn2").style.visibility = "hidden";
document.getElementById("btn3").style.visibility = "hidden";
document.getElementById("btn4").style.visibility = "hidden";
document.getElementById("clock").style.visibility = "hidden";
document.getElementById("scoreBoard").style.visibility = "hidden";
// document.getElementById("scoreBoardTitle").style.visibility = "hidden";

startBtn.addEventListener("click", startQuiz);

//function for timer
function startTimer() {
  let timerInterval = setInterval(() => {
    secondsLeft--;
    clock.textContent = "Time: " + secondsLeft;

    if (secondsLeft <= 0 || questionIndex > questions.length - 1) {
      clearInterval(timerInterval);

      document.getElementById("start").style.display = "inline";
      document.getElementById("scoreBoard").style.visibility = "visible";
      document.getElementById("questions").style.display = "none";
      document.getElementById("btn1").style.display = "none";
      document.getElementById("btn2").style.display = "none";
      document.getElementById("btn3").style.display = "none";
      document.getElementById("btn4").style.display = "none";
      endGame(timerInterval);

    }
  }, 1000);
}

//function that starts the quiz
function startQuiz() {
  startTimer();
  document.getElementById("start").style.display = "none";
  document.getElementById("end").style.display = "none";
  document.getElementById("choices").style.display = "inline";
  displayQuestions();
  document.getElementById("btn1").style.visibility = "visible";
  document.getElementById("btn2").style.visibility = "visible";
  document.getElementById("btn3").style.visibility = "visible";
  document.getElementById("btn4").style.visibility = "visible";
  document.getElementById("clock").style.visibility = "visible";
}

//this function displays the question and answers
function displayQuestions() {
  let pollEl = questions[questionIndex].poll;

  questionH2.textContent = pollEl;

  choice1Container.textContent = questions[questionIndex].choices[0];
  choice1Container.addEventListener("click", changeQuestion);

  let choice2 = questions[questionIndex].choices[1];
  choice2Container.textContent = choice2;
  choice2Container.addEventListener("click", changeQuestion);

  let choice3 = questions[questionIndex].choices[2];
  choice3Container.textContent = choice3;
  choice3Container.addEventListener("click", changeQuestion);

  let choice4 = questions[questionIndex].choices[3];
  choice4Container.textContent = choice4;
  choice4Container.addEventListener("click", changeQuestion);
}

//this function cycles through questions after you select an answer
function changeQuestion(event) {
  console.log(event.target.textContent);
  let userChoice = event.target.textContent;

  if (userChoice === questions[questionIndex].answer) {
    questionIndex++;
    displayQuestions();
  } else {
    secondsLeft = secondsLeft - 15;
    questionIndex++;
    displayQuestions();
  }
}

//function ends game and prompts you to enter initials
function endGame(Interval) {
  let finalScore = secondsLeft;
  localStorage.setItem("userScore", finalScore);
  let score = localStorage.getItem("userScore");

  clearInterval(Interval);
  let person = prompt("Game is over! Please enter initials!");
  user.textContent = person + " " + score;

  startQuiz;
}

function restart() {
  startQuiz();
}
