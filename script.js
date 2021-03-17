
var timeDisplayEl = $('#time-display');







// var dateEl = document.getElementById("rightNow.MMM DD, YYYY")
// var startBtnEl = document.getElementById("saveBtn");
// var hourEl = $(hour on 24 hour clock);
// var pastEl = $(hour < present);
// var presentEl = $(hour = hourEl);
// var futureEl = $(hour > hourEl);
// var userInputEl = $(form-control (text));




function displayTime() {
  var rightNow = moment().format('MMM DD, YYYY [-] hh:mm a');
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

// function clickuserInput() {
//   if (this.value !== questions[quesIndex].answer) {
//       time -= 15;
//       if (time < 0) {
//           time = 0;
//       }
//       timerEl.textContent = time;
//       feedbackEl.textContent = "Sorry, that is incorrect.";

//   } else {
//       feedbackEl.textContent = "That is correct!";

//   }

//   feedbackEl.setAttribute("class", "feedback");
//   setTimeout(function () {
//       feedbackEl.setAttribute("class", "feedback hide");
//   }, 1000);

//   quesIndex++;

//   if (quesIndex === questions.length) {
//       quizEnd();
//   } else {
//       getQuestion();
//   }
// }

// if (form-control !== "") {
//   var userText = JSON.parse(localStorage.getItem("userInput")) || [];
//   var newScore = {
//       score: time,
//       initials: initials
//   }

//  userText.push(text);
//   localStorage.setItem("text", JSON.stringify(hiScores));
//   location.href = "time-block";


// }






// submitBtn.onclick = submitText;


