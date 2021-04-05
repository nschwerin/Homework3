const { StatusCodes } = require('http-status-codes');

exports.errors = (err, req, res, next) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`We're sorry, the error was: ${err.message}`);
};
