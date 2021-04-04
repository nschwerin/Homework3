const Codes = require('http-status-codes');

module.exports = (err, req, res, _next) => {
  res.status(Codes.StatusCodes.INTERNAL_SERVER_ERROR).send('Error message');
};
