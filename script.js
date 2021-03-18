
var dateDisplayEl = $('#date-display');

function displayDate() {
  var rightNow = moment().format('MMM DD, YYYY [-] hh:mm a');
  dateDisplayEl.text(rightNow);
}
setInterval(displayDate, 1000);

$(document).ready(function (){
  $(".btn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);
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
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));


} )

