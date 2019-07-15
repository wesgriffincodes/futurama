const request = require('superagent');

const getRandomQuote = (n) => {
  return request(`futuramaapi.herokuapp.com/api/quotes/${n}`)
    .then(res => res.body);
};

module.exports = {
  getRandomQuote
};
