require('dotenv').config();
require('express-async-errors');

const port = process.env.PORT || 5000;

// Express
const express = require('express');
const app = express();

// Rest of packages
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

// Database
const connectDB = require('./db/connect');

// Routers
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

// Middleware
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.static('./public'));
app.use(fileUpload());

app.get('/', (req, res) => {
  res.send('e-commerce api');
});

app.get('/api/v1', (req, res) => {
  // console.log(req.cookies);
  console.log(req.signedCookies);
  res.send('e-commerce api');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);

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

