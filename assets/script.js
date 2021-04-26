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
var rowSection;
var tableFirstCol;
var tableSecondCol;
var tableThirdCol;

//create table with rows for each hour of workday
for (var i = 0; i < timesForRows.length; i++) {
    var rowSection = $('<section>').addClass('row');
    var tableFirstCol = $('<div>').text(timesForRows[i]).addClass('col hour time-block');
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

//get rows to change colors depending on current time
var rows = $(".col-8");
var currentTime = parseInt(moment().format("H"));
var rowsArray = Array.from(rows);

function changeColors() {
for (var i = 0; i < rowsArray.length; i++) {
   
    var tempid = parseInt(rows[i].id);
    
    if (tempid < currentTime) {
        $(rowsArray[i]).addClass('past');
    } else
    if (tempid === currentTime) {
        $(rowsArray[i]).addClass('present');
    } else 
    if (tempid > currentTime) {
        $(rowsArray[i]).addClass('future');
    } 
} 
}
changeColors();

//set up variables for save buttons
var save9 = $("#save9");
var save10 = $("#save10");
var save11 = $("#save11");
var save12 = $("#save12");
var save13 = $("#save13");
var save14 = $("#save14");
var save15 = $("#save15");
var save16 = $("#save16");
var save17 = $("#save17");

//set up variables for input fields
var input9 = $("#9");
var input10 = $("#10");
var input11 = $("#11");
var input12 = $("#12");
var input13 = $("#13");
var input14 = $("#14");
var input15 = $("#15");
var input16 = $("#16");
var input17 = $("#17");

//save user inputted text into local storage and get from storage to put in field
$(save9).on("click", function(event) {
    event.preventDefault();
    input9 = input9.val().trim();
    localStorage.setItem("hour9", input9);
});
var savedItem9 = localStorage.getItem("hour9");
input9.val(savedItem9);

$(save10).on("click", function(event) {
    event.preventDefault();
    input10 = input10.val().trim();
    localStorage.setItem("hour10", input10);
});
var savedItem10 = localStorage.getItem("hour10");
input10.val(savedItem10);

$(save11).on("click", function(event) {
    event.preventDefault();
    input11 = input11.val().trim();
    localStorage.setItem("hour11", input11);
});
var savedItem11 = localStorage.getItem("hour11");
input11.val(savedItem11);

$(save12).on("click", function(event) {
    event.preventDefault();
    input12 = input12.val().trim();
    localStorage.setItem("hour12", input12);
});
var savedItem12 = localStorage.getItem("hour12");
input12.val(savedItem12);

$(save13).on("click", function(event) {
    event.preventDefault();
    input13 = input13.val().trim();
    localStorage.setItem("hour13", input13);
});
var savedItem13 = localStorage.getItem("hour13");
input13.val(savedItem13);

$(save14).on("click", function(event) {
    event.preventDefault();
    input14 = input14.val().trim();
    localStorage.setItem("hour14", input14);
});
var savedItem14 = localStorage.getItem("hour14");
input14.val(savedItem14);

$(save15).on("click", function(event) {
    event.preventDefault();
    input15 = input15.val().trim();
    localStorage.setItem("hour15", input15);
});
var savedItem15 = localStorage.getItem("hour15");
input15.val(savedItem15);

$(save16).on("click", function(event) {
    event.preventDefault();
    input16 = input16.val().trim();
    localStorage.setItem("hour16", input16);
});
var savedItem16 = localStorage.getItem("hour16");
input16.val(savedItem16);

$(save17).on("click", function(event) {
    event.preventDefault();
    input17 = input17.val().trim();
    localStorage.setItem("hour17", input17);
});
var savedItem17 = localStorage.getItem("hour17");
input17.val(savedItem17);

