const { StatusCodes } = require('http-status-codes');

// eslint-disable-next-line no-unused-vars
const getDate = (search) => {
  let result = null;
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

exports.dateValidator = ((req, res, next) => {

  const queryDate = getDate()(req.query);
  const headerDate = getDate(req.header); //header and query date stored, math next to get number

  const currentDate = Math.round(Date.now() / thousand);
  if ((queryDate != null) && !(Number.isNaN(queryDate))) {
    const reqDate = Number.parseInt(queryDate, ten);
  }
  else if (headerDate != null && !(Number.isNaN(headerDate))){
    const reqDate = Number.parseInt(headerDate, ten);
  }
  else { return false}





});
