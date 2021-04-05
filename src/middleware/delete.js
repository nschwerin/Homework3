const { StatusCodes } = require('http-status-codes');

exports.delete = (err, req, res, next) => {
  if (req.method === 'DELETE') {
    res.status(StatusCodes.METHOD_NOT_ALLOWED).send(`We're sorry, the error was: ${err.message}`);
  } else {
    next();
  }
};
