const express = require('express');
const app = express();

const logger = require('./middleware/logger');
const notFound = require('./middleware/notFound');

// FIXME: can be used:
// const mongoose = require('mongoose');
//to use mongoose Schema
// var Schema = mongoose.Schema;

// FIXME: can be used for easy html routing:
//for directing to html files in public folder
// const html_dir = './public/';



// FIXME: can be used to have 'ejs' as our 'view engine';
// app.set('view engine', 'ejs');

app.use(logger);
app.use(express.json());


// FIXME: setup for using all routes at said folder;
// const whatever = require('./routes/name of file');
// app.use('name of route', whateverYouNamedTheAboveVar);

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send('working');
});

app.use(notFound);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status);
  console.log('status:', status);
  res.send({ error: err, message: err.message });
});


module.exports = app;
