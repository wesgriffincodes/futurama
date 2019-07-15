module.exports = ((req, res, next) => {
  console.log(`Requested: method=${req.method}, path=${req.path}`);
  next();
});

