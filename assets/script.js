// Dayjs display for today's date and time 
const todayDate = dayjs().format('dddd, MMMM D, YYYY h:mm A');
$("#currentDay").html(todayDate);

// Function for click listener on saveBtn
$(document).ready(function (){
    $('.saveBtn').on('click', function (){
        const text = $(this).siblings('.description').val();
        const time = $(this).parent().attr('id');

        //Save local time and text input in local storage
        localStorage.setItem(time, text);
    })
})

