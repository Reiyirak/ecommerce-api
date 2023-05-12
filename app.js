const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Database
const connectDB = require('./db/connect');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening to the port ${port}...`));
  } catch (error) {
    console.log(error);
  }
}

start()
