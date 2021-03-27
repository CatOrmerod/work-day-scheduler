var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

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
