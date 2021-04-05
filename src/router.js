const { StatusCodes } = require('http-status-codes');
const Express = require('express');

const router = Express.Router();

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

router.all('/', (req, res) => {
  if (randomNum(1, 10) % 2 === 0) {
    res.status(StatusCodes.OK).send('Hello World');
  } else {
    throw new Error('Oops');
  }
});

module.exports = router;
