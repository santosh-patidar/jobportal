
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const nodemailer =require('nodemailer');
// const passport = require('passport');
const cors=require('cors');
const users = require('./routes/api/user.routes.js');

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true,useUnifiedTopology: true })
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => console.log(err));

// // Passport middleware
 //app.use(passport.initialize());

// // Passport config
//require('./config/passport')(passport);
app.use(cors('Access-Control-Allow-Origin','*'));

// Routes
app.get('/',function(req,res){
  console.log("server");
  res.send("server connected");
})
require('./routes/api/user.routes')(app);

const port = process.env.PORT || 5000;

app.listen(port, () =>
 console.log(`Server up and running on port ${port} !`));

// exports.someAction = function (request, reply) {
//   var postParams = req.payload
// }
