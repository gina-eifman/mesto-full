require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const router = require('./routes/router');
const { errorHandler } = require('./middlewares/errorHandler');
const { checkCors } = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;
const app = express();
app.use(helmet());
app.use(checkCors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(requestLogger);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.use(router);
const dns = require('dns');
dns.setServers(['1.1.1.1', '8.8.8.8']);
const { MONGO_URL = 'mongodb://127.0.0.1:27017/mestodb' } = process.env
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
});
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
module.exports = app;
