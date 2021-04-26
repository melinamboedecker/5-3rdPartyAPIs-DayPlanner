//Display Current Day of week and month and date
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

var jumbotron = $('.jumbotron');
var displayCurrentTimeP = $('<P>');
displayCurrentTimeP.addClass('lead');
displayCurrentTimeP.attr('id', 'time');
jumbotron.append(displayCurrentTimeP);
var displayCurrentTime = moment().format("h:mm a");
$("#time").text(displayCurrentTime);


//create div class=row elements for table
 var table = $('#table')
var timesForRows = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']
console.log(timesForRows.length);
var rowSection;
var tableFirstCol;
var tableSecondCol;
var tableThirdCol;

//create table with rows for each hour of workday
for (var i = 0; i < timesForRows.length; i++) {
    var rowSection = $('<section>').addClass('row');
    console.log(rowSection);
    console.log(timesForRows[i]);
    var tableFirstCol = $('<div>').text(timesForRows[i]).addClass('col hour time-block');
    console.log(tableFirstCol);
    var tableSecondCol = $('<input>').attr('type', 'text').addClass('col-8 description');
    var tableThirdCol = $('<button>').text('Save').addClass('col saveBtn');
    $(rowSection).append(tableFirstCol).append(tableSecondCol).append(tableThirdCol);
    $(table).append(rowSection);
}

//create unique ids for input fields and save buttons

var inputId = document.getElementsByClassName('col-8');
for (var i=0; i<inputId.length; i++) {
    inputId[i].id = (i+9);
}

var buttonId = document.getElementsByClassName('saveBtn')
for (var i=0; i<buttonId.length; i++) {
    buttonId[i].id = 'save' + (i+9);
}





