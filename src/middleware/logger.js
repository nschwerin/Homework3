const winston = require('winston');

const loggerW = winston.createLogger({
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  ]
})

exports.logger = (req, res, next) => {
  loggerW.log({
    level: 'info',
    serverTime: req.currentDate,
    method: req.method,
    url: req.originalUrl,
    body: req.body,
    query: req.query,
    headers: req.headers,
    dateValidation: req.dateValidation,
  });
  next();
};
