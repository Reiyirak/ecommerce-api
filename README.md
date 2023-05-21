# ecommerce-api
This is a ecommerce api that will be used in another repo called cafras, that is the project of my school

## Setup Basic Express Server

- [X] import express and assign to variable
- [X] setup start port variable (5000) and start function

## Connect To DB

- [X] get connection string
- [X] setup .env with MONGO_URL variable and assign the value
- [X] import 'dotenv' and setup package
- [X] import connect() and invoke in the starter
- [X] restart the server
- [X] mongoose V6 info

## Basic Routes and Middleware

- [X] setup / GET Route
- [X] setup express.json() middleware
- [X] setup 404 and errorHandler middleware
- [X] import 'exress-async-errors' package

## 404 vs ErrorHandler Middleware

## Morgan Pacakge

- [Morgan Package](https://www.npmjs.com/package/morgan)

## User Model

- [X] create models folder and User.js file
- [X] create schema with name,email, password (all type:String)
- [X] export mongoose model

## Validator Package

- [Validator](https://www.npmjs.com/package/validator)

## Auth Routes Structure

- [X] create controllers folder
- [X] add authController file
- [X] export (register,login,logout) functions
- [X] res.send('some string value')
- [X] create routes folder
- [X] setup authRoutes file
- [X] import all controllers
- [X] setup three routes
- [X] post('/register') post('/login') get('/logout')
- [X] import authRoutes as authRouter in the app.js
- [X] setup app.use('/api/v1/auth', authRouter)

## Test Routes in Postman

## Register Controller

- [X] create user
- [X] send response with entire user (only while testing)
- [X] check if email already in use (schema and controller)
- [X] ignore 'role'
- [X] alternative 'admin' setup

## Handle Password

- [X] UserSchema.pre('save') - hook
- [X] this points to User
- [X] bcrypt.genSalt - number of rounds
- [X] bcrypt.hash

## JWT

- [X] require 'jsonwebtoken' package
- [X] create jwt - jwt.sign(payload,secret,options)
- [X] verify jwt - jwt.verify(token,secret)
- [X] add variables in .env JWT_SECRET=jwtSecret and JWT_LIFETIME=1d
- [X] restart the server !!!!
- [X] refactor code, create jwt functions in utils
- [X] refactor cookie code
- [X] setup func attachCookiesToResponse
- [X] accept payload(res, tokenUser)
- [X] create token, setup cookie
- [X] optionally send back the response

## Login Route

- [X] check if email and password exist, if one missing return 400
- [X] find user, if no user return 401
- [X] check password, if does not match return 401
- [X] if everything is correct, attach cookie
  and send back the same response as in register

## Logout Route

- [X] set token cookie equal to some string value
- [X] set expires:new Date(Date.now())

## User Routes Structure

- [X] add userController file
- [X] export (getAllUsers,getSingleUser,showCurrentUser,updateUser,updateUserPassword) functions
- [X] res.send('some string value')
- [X] setup userRoutes file
- [X] import all controllers
- [X] setup just one route - router.route('/').get(getAllUsers);
- [X] import userRoutes as userRouter in the app.js
- [X] setup app.use('/api/v1/users', userRouter)

## GetAllUsers and GetSingleUser

- [X] Get all users where role is 'user' and remove password
- [X] Get Single User where id matches id param and remove password
- [X] If no user 404

## Authenticate User Setup

## Auth User Complete

## Authorize Permissions Setup

- [X] hardcode

## Authorize Permissions Complete

- [X] introduce params

## ShowCurrentUser

- [X] get user from req
- [X] send response with user

## UpdateUserPassword

- [X] almost identical to login user
- [X] add authenticateUser middleware in the route
- [X] check for oldPassword and newPassword in the body
- [X] if one missing 400
- [X] look for user with req.user.userId
- [X] check if oldPassword matches with user.comparePassword
- [X] if no match 401
- [X] if everything good set user.password equal to newPassword
- [X] await user.save()

## createTokenUser in Utils

- [X] create a file in utils (createTokenUser)
- [X] setup a function that accepts user object and returns userToken object
- [X] export as default
- [X] setup all the correct imports/exports and refactor existing code

## updateUser with User.findOneAndUpdate()

- [X] add authenticateUser middleware in the route
- [X] check for name and email in the body
- [X] if one is missing, send 400 (optional)
- [X] use findOneAndUpdate()
- [X] create token user, attachCookiesToResponse and send back the tokenUser

## updateUser with user.save()

## Setup and Apply checkPermissions()

## Product Model

- [X] create Product.js in models folder
- [X] create Schema
- [X] name : {type:String}
- [X] price: {type:Number}
- [X] description: {type:String}
- [X] image: {type:String}
- [X] category: {type:String}
- [X] company: {type:String}
- [X] colors: {type:[]}
- [X] featured: {type:Boolean}
- [X] freeShipping: {type:Boolean}
- [X] inventory:{type:Number}
- [X] averageRating:{type:Number}
- [X] user
- [X] set timestamps
- [X] export Product model

## Product Structure

- [X] add productController file in controllers
- [X] export (createProduct, getAllProducts,
  getSingleProduct, updateProduct, deleteProduct, uploadImage) functions
- [X] res.send('function name')
- [X] setup productRoutes file in routes
- [X] import all controllers
- [X] only getAllProducts and getSingleProduct accessible to public
- [X] rest only by admin (setup middlewares)
- [X] typical setup
- [X] router.route('/uploadImage').post(uploadImage)
- [X] import productRoutes as productRouter in the app.js
- [X] setup app.use('/api/v1/products', productRouter)

## Product Routes in Postman

## Create Product

- [X] create user property on req.body and set it equal to userId (req.user)
- [X] pass req.body into Product.create
- [X] send back the product

## Remaining Controllers (apart from uploadImage)

- [X] getAllProducts
- [X] getSingleProduct
- [X] updateProduct
- [X] deleteProduct
- [X] typical CRUD, utilize (task or job) project
- [X] remember we check already for role 'admin'

## Upload Image

- [X] if some question, re-watch 07-file-upload
- [X] images folder with two images

## Review Model

- [X] create Review.js in models folder
- [X] create Schema
- [X] rating : {type:Number}
- [X] title: {type:String}
- [X] comment: {type:String}
- [X] user
- [X] product
- [X] set timestamps
- [X] export Review model

## Review Structure

- [X] add reviewController file in controllers
- [X] export (createReview, getAllReviews, getSingleReview, updateReview, deleteReview) functions
- [X] res.send('function name')
- [X] setup reviewRoutes file in routes
- [X] import all controllers
- [X] only getAllReviews and getSingleReview accessible to public
- [X] rest only to users (setup middleware)
- [X] typical REST setup
- [X] import reviewRoutes as reviewRouter in the app.js
- [X] setup app.use('/api/v1/reviews', reviewRouter)

## Create Review

- [X] check for product in the req.body
- [X] attach user property (set it equal to req.user.userId) on to req.body
- [X] create review
- [X] don't test yet

## Get All Reviews and Get Single Review

- [] both public routes, typical setup

## Delete Review

- [] get id from req.params
- [] check if review exists
- [] if no review, 404
- [] check permissions (req.user, review.user)
- [] use await review.remove()
- [] send back 200

## Update Review

- [] get id from req.params
- [] get {rating, title comment} from req.body
- [] check if review exists
- [] if no review, 404
- [] check permissions
- [] set review properties equal to rating, title, comment
- [] use await review.save()
- [] send back 200

## Populate

## Virtuals

## Get Single Product Reviews

## Remove All Reviews

## Aggregation Pipeline - Atlas and Code

## Order Schema

- [] create Order.js in models folder
- [] create Schema
- [] tax : {type:Number}
- [] shippingFee: {type:Number}
- [] subtotal: {type:Number}
- [] total: {type:Number}
- [] orderItems:[]
- [] status:{type:String}
- [] user
- [] clientSecret:{type:String}
- [] paymentId:{type:String}
- [] set timestamps
- [] export Order model

## Order Structure

- [] add orderController file in controllers
- [] export (getAllOrders, getSingleOrder, getCurrentUserOrders,
  createOrder, updateOrder) functions
- [] res.send('function name')
- [] setup orderRoutes file in routes
- [] import all controllers
- [] authenticate user in all routes
- [] getAllOrders admin only
- [] typical REST setup
- [] router.route('/showAllMyOrders').get(getCurrentUserOrders)
- [] import orderRoutes as orderRouter in the app.js
- [] setup app.use('/api/v1/orders', orderRouter)

## Order in Postman

## Create Order

- [] most complex

## Get All Orders and Get Single Order

- [] getAllOrders - admin only
- [] getSingleOrder - chechPermissions

## Get Current User Orders

- [] find orders where user is equal to req.user.userId

## Update Order

- [] get order id
- [] get paymentIntentId (req.body)
- [] get order
- [] if does not exist - 404
- [] check permissions
- [] set paymentIntentId and status as 'paid'
- [] order.save()

## Create Docs

- [] [Docgen Library] (https://github.com/thedevsaddam/docgen)
- [] Export Postman Collection
- [] docgen build -i fileName.json -o index.html
- [] create index.html in public

## Security Packages

- [] express-rate-limiter
- [] helmet
- [] xss-clean
- [] express-mongo-sanitize
- [] cors (cookies!!!!)
