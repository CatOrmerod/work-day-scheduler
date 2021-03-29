// Function to tell the HTML page to run the script //
$(document).ready(function(){
// Function to pull in the date for the current day that the user opens the schedule //    
    var todayDate = moment().format('dddd, MMM Do YYYY');
    $("#currentDay").html(todayDate);
    // Every 15sec the hourColorCode function runs to update the class //
    setInterval(hourColorCode, 15000);
    // Calling the hourColorCode and loadSavedSchedule functions //
    hourColorCode();
    loadSavedSchedule();
    // When the save button is clicked the function runs to call on all items near to it to save in the local storage //
    var saveBtn = $(".saveBtn");
    saveBtn.on("click", function () {
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val().trim();
    
        localStorage.setItem(time, text);
    })
})
// A loop function to run for each hour between 8 and 17 (5pm) and retrieve the saved schedule details from local storage //
function loadSavedSchedule() {
    for (let i=8; i<=17; i++) {
        let hour =`hour${i}`
        $(`#${hour} .description`).val(localStorage.getItem(hour));
    }
}
// A function to map the relevant class to each hour within the relevant ".time-block" //
function hourColorCode() {
    var currentHour = moment().hour();
    $(".time-block").each(function (){
        var currentTimeBlock = parseInt($(this).attr("id").split("hour")[1]);
        ["future", "present", "past"].map( (i) => $(this).removeClass(i) )
        if (currentTimeBlock < currentHour) {
            $(this).addClass("past");
        }
        else if (currentTimeBlock === currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
}