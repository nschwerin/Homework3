const { StatusCodes } = require('http-status-codes');

// eslint-disable-next-line no-unused-vars
const getdate = (search) => {
  let result = null;
  Object.key(search).forEach((key) => {
    if (key.toLowerCase() === 'date-validation') {
      result = search[key];
    }
  });
  return result;
};
