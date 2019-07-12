const express = require('express');
const app = express();

// FIXME: can be used:
// const mongoose = require('mongoose');

// FIXME: can be used for easy html routing:
//for directing to html files in public folder
// const html_dir = './public/';

// FIXME: can be used to have 'ejs' as our 'view engine';
// app.set('view engine', 'ejs');

// FIXME:allows to use json on things within the code
// app.use(express.json());

// FIXME: setup for using all routes at said folder;
// const whatever = require('./routes/name of file');
// app.use('name of route', whateverYouNamedTheAboveVar);

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send('working');
});


module.exports = app;
