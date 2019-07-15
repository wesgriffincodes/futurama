const { Router } = require('express');
const futuramaMiddleware = require('../middleware/futuramaMiddleware');

const profiles = [];

module.exports = Router()

  .get('/random', futuramaMiddleware, (req, res) => {
    res.send(req.quote);
  })

  .get('/profile', (req, res) => {
    res.send(profiles);
  })

  .get('/profile/:id', (req, res) => {
    res.send(profiles[req.params.id]);
  })

  .patch('/api/v1/profiles/:id', futuramaMiddleware, (req, res) => {
    const { favoriteCharacter } = req.body;

    // create profile to store
    const profile = { 
      favoriteCharacter,
      tagline: req.quote.quote 
    };

    profiles[req.params.id].favoriteCharacter = profile.favoriteCharacter;
    profiles[req.params.id].tagline = profile.tagline;
    res.send(profiles[req.params.id]);
  })


  .delete('/profile/:id', (req, res) => {
    const deleted = profiles.splice(req.params.id, 1);
    res.send(deleted[0]);
  })

  .post('/profile', (req, res) => {
    const {
      name,
      favoriteCharacter     
    } = req.body;

    const profile = {
      name: name,
      favoriteCharacter: favoriteCharacter,
      tagline: req.quote.quote
    };

    profiles.push(profile);
    res.send(profile);
  });
