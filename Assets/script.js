var startBtn = document.getElementById("startBtn");
var question1 = document.getElementById("q1");
var question2 = document.getElementById("q2");
var question3 = document.getElementById("q3");
var question4 = document.getElementById("q4");
var countdown = document.querySelector(".timer");
var secondsLeft = 60;
var nextButton1 = document.querySelector(".submitNext1");
var nextButton2 = document.querySelector(".submitNext2");
var nextButton3 = document.querySelector(".submitNext3");
var nextButton4 = document.querySelector(".submitNext4");
var finalScore = document.getElementById("finalScore");
var result = document.getElementById("result");
var initials = document.getElementById("Initials");
var submitBtn = document.getElementById("submitbtn");
var submissionSection = document.getElementById("submissionSection");
var scoreDisplay = document.querySelector(".score-column");
var timerInterval;
var introDuction = document.querySelector(".Intro");

var answers1 = document.querySelectorAll('input[name="question1"]');
console.log(answers1);

var answers2 = document.querySelectorAll('input[name="question2"]');
console.log(answers2);

var answers3 = document.querySelectorAll('input[name="question3"]');
console.log(answers3);

var answers4 = document.querySelectorAll('input[name="question4"]');
console.log(answers4);

var currentSCore = 0;

countdown.textContent = "Countdown: 60 seconds";

var currentQuestion = 1;

//this will hide the questions, on loading the page.
window.onload = function () {
  let quiz = [question1, question2, question3, question4, finalScore, initials];
  for (var i = 0; i < quiz.length; i++) {
    quiz[i].style.display = "none";
    console.log("loaded");
  }
  countdown;
};

function setTime() {
  // Sets interval in variable

  timerInterval = setInterval(function () {
    secondsLeft--;
    countdown.innerHTML = secondsLeft + " seconds left";

    if (secondsLeft <= 0) {
      console.log(secondsLeft);
      clearInterval(timerInterval);
      countdown.innerHTML = "You have run out of time";
    }
  }, 1000);
}
//adding event listener so when the start button is clicked, it it hidden and the first question is displayed.
startBtn.addEventListener("click", function () {
  console.log("clicked");
  startBtn.style.display = "none";
  introDuction.style.display = "none";
  question1.style.display = "block";
  setTime();
});

//adding eventlistener, so when the next button is clicked, the first question is hidden and the second question is displayed. Also there is an IF function which checks the answer. If it is correct, the score is increased by one. If it is incorrect, the time is reduced by 10 seconds. I repeated this for all 4 questions.

nextButton1.addEventListener("click", function () {
  question1.style.display = "none";
  question2.style.display = "block";

  if (answers1[2].checked === true) {
    currentSCore += 1;
    console.log(currentSCore);
  } else {
    secondsLeft -= 10;
    console.log(secondsLeft);
  }
});
nextButton2.addEventListener("click", function () {
  // check answer is current
  question2.style.display = "none";
  question3.style.display = "block";

  if (answers2[0].checked === true) {
    currentSCore += 1;
    console.log(currentSCore);
  } else {
    secondsLeft -= 10;
    console.log(secondsLeft);
  }
});

nextButton3.addEventListener("click", function () {
  question3.style.display = "none";
  question4.style.display = "block";

  if (answers3[0].checked === true) {
    currentSCore += 1;
    console.log(currentSCore);
  } else {
    secondsLeft -= 10;
    console.log(secondsLeft);
  }
  // in this final question, once the next button is clicked there is a message which will display the users final score.
});
nextButton4.addEventListener("click", function () {
  question4.style.display = "none";
  finalScore.style.display = "block";

  if (answers4[0].checked === true) {
    currentSCore += 1;
    console.log(currentSCore);
  } else {
    secondsLeft -= 10;
    console.log(secondsLeft);
  }

  clearInterval(timerInterval);

  countdown.innerHTML = "Well done for completing the quiz";
  countdown.style.fontWeight = "bold";
  result.innerHTML = "You scored " + currentSCore;
  result;
});
//adding an event listener to when the submit button is clicked. When the button is clicked, the text in the HTML is displayed to show a thank you message.
submitBtn.addEventListener("click", function () {
  scoreDisplay.innerHTML = " ";
  console.log(scoreDisplay);
  scoreDisplay;
  result.innerHTML = " ";
  result;
  submissionSection.innerHTML = "Thank you for taking the quiz";
  submissionSection;
});

// check answer is current
