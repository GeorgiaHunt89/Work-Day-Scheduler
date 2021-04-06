// Dayjs display for today's date and time 
const todayDate = dayjs().format('dddd, MMMM D, YYYY h:mm A');
$("#currentDay").html(todayDate);

// Function for click listener on saveBtn
$(document).ready(function (){
    $('.saveBtn').on('click', function (){
        const text = $(this).siblings('.description').val();
        const time = $(this).parent().attr('id');

        // Save local time and text input in local storage
        localStorage.setItem(time, text);
    })

    // Function to calculate current dayjs hour for timeblock
    function timeTracker (){
        const currentTime = dayjs().hour();

         // Function to loop over each timeblock
    $('.time-block').each(function(){
        const blockTime = parseInt($(this).attr('id').split('hour')[1]);

        // Calculate current time and add past class for grey timeblock colour
        if (blockTime < currentTime){
            $(this).removeClass('future');
            $(this).removeClass('present');
            $(this).addClass('past');
        }

        // Calculate current time and add current class for red timeblock colour
        else if (blockTime === currentTime){
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
        }

        // Calculate current time and add future class for green timeblock colour
        else {
            $(this).removeClass('present');
            $(this).removeClass('past');
            $(this).addClass('future');
        }
    })
    }

    // Recording and retrieving description text in local storage
    $('#hour8 .description').val(localStorage.getItem('hour8'));
    $('#hour9 .description').val(localStorage.getItem('hour9'));
    $('#hour10 .description').val(localStorage.getItem('hour10'));
    $('#hour11 .description').val(localStorage.getItem('hour11'));
})

