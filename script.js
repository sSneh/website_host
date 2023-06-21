var startDateInput = document.getElementById('start-date');
var endDateInput = document.getElementById('end-date');
var checkAvailBtn = document.getElementById('checkAvail')

//Adding flatpickr (calendar) object to start/end date
var startDatePicker = flatpickr(startDateInput, {
    onChange: function (selectedDates, dateStr) {
        endDatePicker.set('minDate', new Date(dateStr).fp_incr(2));
        endDatePicker.setDate(new Date(dateStr).fp_incr(2));
        console.log(startDateInput.value)
        if (endDateInput.value) {
            checkAvailBtn.classList.remove('disabled')
        }
    }
});

var endDatePicker = flatpickr(endDateInput, {
    onChange: function () {
        //startDatePicker.set('maxDate', dateStr);
        console.log(endDateInput.value)
        if (startDateInput.value) {
            checkAvailBtn.classList.remove('disabled')
        }
    }
});


var subtractBtn = document.getElementById('subtract-guest');
var addBtn = document.getElementById('add-guest');
var guestsInput = document.getElementById('guests');

//Simple add/subtract buttons to change number of guests
subtractBtn.addEventListener('click', function () {
    var currentGuests = parseInt(guestsInput.value);
    if (currentGuests > 1) {
        guestsInput.value = (currentGuests - 1);
    }
});

addBtn.addEventListener('click', function () {
    var currentGuests = parseInt(guestsInput.value);
    if (currentGuests < 94) {
        guestsInput.value = (currentGuests + 1);
    }
});


var startDateIcon = document.getElementById('start-date-icon');
var endDateIcon = document.getElementById('end-date-icon');

// Calendar icon click events
startDateIcon.addEventListener('click', function () {
    startDateInput._flatpickr.toggle();
});

endDateIcon.addEventListener('click', function () {
    endDateInput._flatpickr.toggle();
});

// https://stackoverflow.com/questions/4907843/open-a-url-in-a-new-tab-and-not-a-new-window
function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

function reserveLinkRtn() {
    let link = genReserveLink(startDateInput.value, endDateInput.value, guestsInput.value);
    return link;
}

function genReserveLink(startDate, endDate, numGuests) {
    let link = 'https://app.inn-connect.com/book2/?curr=CAD&lang=en&p=The%20Ashwood%20Inn#list%7B%22ci%22:%22' + startDate + '%22,%22co%22:%22' + endDate + '%22,%22curr%22:%22CAD%22,%22rooms%22:%5B%7B%22adults%22:' + numGuests + ',%22chAges%22:%22%22%7D%5D%7D';
    return link;
}