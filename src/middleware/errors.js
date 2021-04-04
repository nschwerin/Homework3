const { StatusCodes } = require('http-status-codes');

module.exports = (err, req, res, next) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Error message');
};
