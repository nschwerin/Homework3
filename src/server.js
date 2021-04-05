const Express = require('express');
const BodyParser = require('body-parser');

const dateValidation = require('./middleware/dateValidation');
const deleteR = require('./middleware/deleteR');
const errors = require('./middleware/errors');
const logger = require('./middleware/logger');
const router = require('./router');

const app = Express();

app.use(BodyParser.json());
app.use(deleteR.deleteR);
app.use(dateValidation.dateValidation);
app.use(logger.logger);
app.use(router);
app.use(errors.errors);

app.listen(8080);
