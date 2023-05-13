require('dotenv').config();
require('express-async-errors');

const port = process.env.PORT || 5000;

// Express
const express = require('express');
const app = express();

// Rest of packages
const morgan = require('morgan');

// Database
const connectDB = require('./db/connect');

// Middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(morgan('tiny'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('e-commerce api');
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening to the port ${port}...`));
  } catch (error) {
    console.log(error);
  }
}

start()
