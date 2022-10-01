console.log('in client.js');

$(document).ready(onReady);

let inputSelection = 0;
let solvedInputs = [];

function onReady() {
    loadSolutions();
    $('#inputForm').on('submit', input);
    $('.inputButton').on('click', onClick);
    $(document).on('click', '#clear', clearInputs);
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

    if(inputSelection === 0) {
        return;
    }

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
    console.log('in loadSolutions');

    $.ajax({
        url: '/calculation',
        method: 'GET'
    })
        .then(response => {
            console.log('GET /calculation', response);

            // replacing solvedInputs with the response from the server

            solvedInputs = response;

            render();
        })
        .catch(err => {
            console.log('GET /calculation error', err);
        })
}

function render() {
    console.log('in render');
    $('h2').empty();
    // if there isn't anything in the array, exit render function
    if(solvedInputs.length === 0) {
        return;
    }

    // look at last object's answer in solvedInputs array
    $('#answer').text(`${solvedInputs[solvedInputs.length-1].answer}`);

    for(let item of solvedInputs) {
        $('h2').append(`
            <div>
            ${item.number1} ${item.calc} ${item.number2} = ${item.answer}
            </div>
        `);
    }
}

function clearInputs() {
    console.log('in clearInputs');
    console.log(this);
    $('#firstNumberInput').val('');
    $('#secondNumberInput').val('');

    inputSelection = 0;
}