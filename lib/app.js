const express = require('express');
const app = express();

const logger = require('./middleware/logger');
const notFound = require('./middleware/notFound');
const quoteMiddleware = require('./middleware/futuramaMiddleware');
const futuramaRoutes = require('./routes/futurama');


app.use(logger);
app.use(express.json());


app.use(express.static('./public'));
app.use(futuramaRoutes);

app.get('/', quoteMiddleware, (req, res) => {
  console.log(req.quote);
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
