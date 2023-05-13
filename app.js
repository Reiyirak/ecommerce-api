const express = require('express');
require('dotenv').config();
require('express-async-errors')

const app = express();
const port = process.env.PORT || 5000;

// Database
const connectDB = require('./db/connect');

// Middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

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
