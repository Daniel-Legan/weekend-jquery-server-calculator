console.log('in server.js');

// Require express - gives us a function
const express = require('express');
const bodyParser = require('body-parser');
const { INSPECT_MAX_BYTES } = require('buffer');

// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = 3000;

// express static file serving - public is the folder name
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Start up our server
app.listen(port, () => {
    console.log('we are live!');
});

let objectsSentFromClient = [];

app.post('/calculation', (req, res) => {
    console.log('data from the client', req.body);

    let newDataFromTheClient = req.body;

    objectsSentFromClient.push(newDataFromTheClient);

    console.log('list of objectsSentFromClient', objectsSentFromClient);

    res.sendStatus(201);
});
