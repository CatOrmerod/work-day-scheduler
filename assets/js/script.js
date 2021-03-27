var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

var timeInterval = setInterval(hourColorCode, 15000);

function hourColorCode() {
    var currentHour = moment().hour();
    $(".time-block").each(function (){
        console.log($(this));
        var currentTimeBlock = parseInt($(this).attr("id").split("hour")[1]);
        console.log(currentTimeBlock, currentHour);
        console.log
        if (currentTimeBlock < currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (currentTimeBlock === currentHour) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

hourColorCode();

var saveBtn = $(".saveBtn");
saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val().trim();

    localStorage.setItem(time, text);
    console.log(time, text);
})

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));



// $(".time-block").each(function() {
//     var id = $(this).attr("id");
//     var text = JSON.parse(localStorage.getItem(time, text));

//     if (text !== null) {
//         $(this).children(".description").val(text);
//     }
// })