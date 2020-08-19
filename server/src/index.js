const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const { notFound, errorHandler } = require('./middlewares');
const logs = require('./api/logs');

/* eslint linebreak-style: ["error", "windows"] */
const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORGIN,
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hellow world!',
  });
});

app.use('/api/logs', logs);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}`);
});

/*
DEPENDENCIES
Helmet adds some http headers and removes some http headers, this helps make the server more secure 
Morgan is a middleware that creates logs for server, common is the level of detail of the logs made
CORS = Cross Orgin Resource Sharing (for independent front and back ends)
 by default allows '*' meaning any orgin can access the back end?
*/
