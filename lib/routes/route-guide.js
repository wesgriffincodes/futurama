// FIXME:how to use routes
// const { Router } = require('express');

// const movies = [];

// module.exports = Router()

//   .get('/', (req, res) => {
//     res.send(movies);
//   })

//   .get('/:id', (req, res) => {
//     res.send(movies[req.params.id]);
//   })

//   .post('/', (req, res) => {
//     const {
//       name,
//       mainActor,
//       year,
//       genre
//     } = req.body;

//     const movie = {
//       name,
//       mainActor,
//       year,
//       genre
//     };

//     movies.push(movie);
//     res.send(movie);
//   })

//   .delete('/:id', (req, res) => {
//     const deleted = movies.splice(req.params.id, 1);
//     res.send(deleted[0]);
//   })

//   .put('/:id', (req, res) => {
//     const {
//       name,
//       mainActor,
//       year,
//       genre
//     } = req.body;

//     const updatedMovie = {
//       name,
//       mainActor,
//       year,
//       genre
//     };

//     movies[req.params.id] = updatedMovie;

//     res.send(movies[req.params.id]);
//   });










