console.log('in client.js');

$(document).ready(onReady);

function onReady() {
    $(document).on('click', '#add', addition);
    $(document).on('click', '#subtract', subtraction);
    $(document).on('click', '#multiply', multiplication);
    $(document).on('click', '#divide', division);
    $(document).on('click', '#equals', equals);
    $(document).on('click', '#clear', clear);
}

function addition() {
    console.log('in addition');
    let x = $(this);
    console.log(x);
}

function subtraction() {
    console.log('in subtraction');
}

function multiplication() {
    console.log('in multiplication');
}

function division() {
    console.log('in division');
}

function equals() {
    console.log('in equals');
}

function clear() {
    console.log('in clear');
}