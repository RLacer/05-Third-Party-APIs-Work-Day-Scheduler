
var timeDisplayEl = $('#time-display');
$(document).ready(function (){
  $(".btn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
    $(".notification").addClass("show");

    setTimeout(function () {
            $(".notification").removeClass("show");
        }, 1000);
  } )

function hourUpdate() {
  var currentHour = moment().hours();

  $(".time-block").each(function (){
    var hour = parseInt($(this).attr("id").split("-")[1]);
   if (hour < currentHour){
    $(this).addClass("past");
       } else if (hour === currentHour){
         $(this).removeClass("past");
         $(this).addClass("present");
       } else{
        $(this).removeClass("past present");
        $(this).addClass("future");
       }
   })
}

hourUpdate();

var interval = setInterval(hourUpdate, 60000);

$("#hour-9 .description").val(localStorage.getItem("hour-9"));


} )






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


