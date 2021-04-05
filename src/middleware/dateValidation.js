const { StatusCodes } = require('http-status-codes');

const getDate = (search) => {
  let result = null;
  //get date
  Object.key(search).forEach((key) => {
    if (key.toLowerCase() === 'date-validation') {
      result = search[key];
    }
  });
  return result;
};

const ten =10;
const min5 = 300;
const thousand = 1000;
//for calculating time using functions

exports.dateValidation= ((req, res, next) => {

  const queryDate = getDate()(req.query);
  const headerDate = getDate(req.header); //header and query date stored, math next to get number

  let reqDate;
  if (((queryDate || headerDate) != null) && !(Number.isNaN(queryDate) && !(Number.isNaN(headerDate)))) {

    if ((queryDate != null) && (headerDate != null) && (queryDate === headerDate)) { // both date, dates match
      reqDate = Number.parseInt(queryDate, ten);
    }

    const currentDate = Math.round(Date.now() / thousand);
    if (queryDate != null) { //one date provided
      reqDate = Number.parseInt(queryDate, ten);
    } else {
      reqDate = Number.parseInt(headerDate, ten);
    }
    if ((min5 > currentDate - reqDate) && (min5 > reqDate - currentDate)) {
      req.reqDate= reqDate;
      req.currentDate= currentDate;
      next();
    }
    else {
      res.sendStatus(StatusCodes.UNAUTHORIZED);
    }
  }
  else {
    res.sendStatus(StatusCodes.UNAUTHORIZED);
  }
});
