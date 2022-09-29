console.log('in server.js');

// Require express - gives us a function
const express = require('express');
const bodyParser = require('body-parser');

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

