const { StatusCodes } = require('http-status-codes');

exports = (err, req, res, next) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Error message');
};
