const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var cors = require('cors')

const omdbRouter = require('./routes/omdb');

const app = express();

// Express middlewares - like a pipeline
// Rest call goes through a waterfall of functions. Pipeline
// All these functions will be run in order, and then finally it'll go to my routers
app.use(cors())
app.use(logger('dev')); // logs which endpoint is being called
app.use(express.json());    // converts body of request into JS object - parse body of request
app.use(express.urlencoded({ extended: false }));   // parse the url or the request
app.use(cookieParser());    // parse the cookie
app.use(express.static(path.join(__dirname, 'public')));    // Static hosting

// __dirname - node JS global variable pointing to current folder

app.use('/omdb', omdbRouter);

module.exports = app;
