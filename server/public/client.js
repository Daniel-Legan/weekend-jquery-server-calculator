console.log('in client.js');

$(document).ready(onReady);

function onReady() {
    $('#inputForm').on('submit', input);
}

function input(event) {
    event.preventDefault();
    console.log('in input');


    let objectToSendToServer = {
        firstNumberInput: $('#firstNumberInput').val(),
        secondNumberInput: $('#secondNumberInput').val(),
        // add: $('#add').val(),
        // subtract: $('#subtract').val(),
        // multiply: $('#multiply').val(),
        // divide: $('#divide').val(),
        // need to add the calculation to send
        // determine which input was selected
    };

    console.log('object to send to server', objectToSendToServer);
}