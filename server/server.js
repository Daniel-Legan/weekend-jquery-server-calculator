console.log('in server.js');

// Require express - gives us a function
const express = require('express');
const bodyParser = require('body-parser');
const { INSPECT_MAX_BYTES } = require('buffer');

// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = 3002;

// express static file serving - public is the folder name
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Start up our server
app.listen(port, () => {
    console.log('we are live!');
});

// inputs from client
let objectHistory = [];

// objects created within server with inputs from client
let objectsWithAnswers = [];

app.post('/calculation', (req, res) => {

    let newObjectFromTheClient = req.body;

    objectHistory.push(newObjectFromTheClient);

    // returns the a new object forged from the last index of objectHistory
    let lastCalculationObject = objectToSendBackToClient();
    console.log('last object collected', lastCalculationObject);
    objectsWithAnswers.push(lastCalculationObject);
    console.log('array of objects to send to client', objectsWithAnswers);


    res.sendStatus(201);
});

app.get('/calculation', (req, res) => {
    res.send(objectsWithAnswers);
});


// look at last object in objectHistory and perform calculation based on calculationInput

function objectToSendBackToClient() {
    let lastObject = objectHistory[objectHistory.length-1];
    console.log('the last object of objectHistory is', lastObject);
    if(lastObject.calculationInput === '+') {
        return {
            number1: lastObject.firstNumberInput,
            number2: lastObject.secondNumberInput,
            calc: '+',
            answer: Number(lastObject.firstNumberInput) + Number(lastObject.secondNumberInput)
        };
    }
    if(lastObject.calculationInput === '-') {
        return {
            number1: lastObject.firstNumberInput,
            number2: lastObject.secondNumberInput,
            calc: '-',
            answer: Number(lastObject.firstNumberInput) - Number(lastObject.secondNumberInput)
        };
    }
    if(lastObject.calculationInput === '*') {
        return {
            number1: lastObject.firstNumberInput,
            number2: lastObject.secondNumberInput,
            calc: '*',
            answer: Number(lastObject.firstNumberInput) * Number(lastObject.secondNumberInput)
        };
    }
    if(lastObject.calculationInput === '/') {
        return {
            number1: lastObject.firstNumberInput,
            number2: lastObject.secondNumberInput,
            calc: '/',
            answer: Number(lastObject.firstNumberInput) / Number(lastObject.secondNumberInput)
        };
    }
}