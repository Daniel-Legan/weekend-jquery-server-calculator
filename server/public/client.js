console.log('in client.js');

$(document).ready(onReady);

let inputSelection;
let solvedInputs = [];

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

// [ ] need conditional to determine if all inputs were entered
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

            loadSolutions();
        })
        .catch(err => {
            console.log('POST /calculation error', err);
        });
}

function loadSolutions() {

    $.ajax({
        url: '/calculation',
        method: 'GET'
    })
        .then(response => {
            console.log('GET /calculation', response);
            // solvedInputs.push(response);
            // putting the object into the solvedInputs

            // render();
        })
        .catch(err => {
            console.log('GET /calculation error', err);
        })
}

// function render() {
//     $('h2').empty();
//     // work in progress
//     for(let item of solvedInputs) {
//         $('h2').append(`
//             <div>${item}</div>
//         `);
//     }
// }