var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

function hourColorCode() {
    var currentHour = moment().hour();
    $(".time-block").each(function (){
        console.log($(this));
        var currentTimeBlock = parseInt($(this).attr("id").split(".hour")[1]);
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

