console.log('in client.js');

$(document).ready(onReady);

let inputSelection;

function onReady() {
    $('#inputForm').on('submit', input);
    $('.inputButton').on('click',  onClick);

}

function onClick() {
    console.log('in onClick');
    let whatIsThis = $(this);
    console.log(whatIsThis);
    console.log(whatIsThis.val());
    inputSelection = whatIsThis.val();
}

function input(event) {
    event.preventDefault();
    console.log('in input');


    let objectToSendToServer = {
        firstNumberInput: $('#firstNumberInput').val(),
        secondNumberInput: $('#secondNumberInput').val(),
        calculationInput: inputSelection
        // determine which input was selected
    };

    console.log('object to send to server', objectToSendToServer);

    $.ajax({
        url: '/calculation',
        method: 'POST',
        data: objectToSendToServer
    })
        .then(response => {
            console.log('POST /calculation response', response);
        })
        .catch(err => {
            console.log('POST /calculation error', err);
        });
}