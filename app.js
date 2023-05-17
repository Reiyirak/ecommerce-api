require('dotenv').config();
require('express-async-errors');

const port = process.env.PORT || 5000;

// Express
const express = require('express');
const app = express();

// Rest of packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

// Database
const connectDB = require('./db/connect');

// Routers
const authRouter = require('./routes/authRoutes');

// Middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('e-commerce api');
});

app.get('/api/v1', (req, res) => {
  console.log(req.cookies);
  res.send('e-commerce api');
});

app.use('/api/v1/auth', authRouter);

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

