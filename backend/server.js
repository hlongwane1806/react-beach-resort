const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport    = require("passport");
const   cookieParser = require("cookie-parser");
 const   LocalStrategy = require("passport-local");

const User = require('./models/user.model');
const Room = require('./models/room.model');
const Booking = require('./models/booking.model');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"));
app.use(cookieParser('secret'));

// PASSPORT CONFIGURATION
app.use(require("express-session")({
  secret: "Beach resort App!",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
  res.locals.currentUser = req.user;

  next();
});

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true, useCreateIndex:true}, (error)=>{
  if(error){
    console.log("error: "+error);
  }
  
});
const connection = mongoose.connection;

connection.once("open",(error)=>{
  if(error){
    console.log(error);
  }
  console.log("MongoDB open");
});

const userRouter = require('./routes/user');
const bookingsRouter = require('./routes/bookings');
const roomRouter = require('./routes/room');
app.use('/users',userRouter);
app.use('/bookings',bookingsRouter);
app.use('/rooms',roomRouter)

app.get('/',(req,res)=>{
  res.send("We are home!");
})
app.listen(port || 5000 , ()=>{
    console.log(`Server is running on port: ${port}`);
})