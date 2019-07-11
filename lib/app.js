const express = require('express');
const app = express();

//for directing to html files in public folder
const html_dir = './public/';

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send('working');
});


module.exports = app;
