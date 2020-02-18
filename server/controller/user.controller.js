
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const User = require('../models/User');
  const mailerFun=require('./Email');
  const Recruiter = require('../models/Employee');
// const verifyOTP = require('./VerifyOTP');
// Load input validation
const validateRegisterInput = require('../validation/register');

const validateLoginInput = require('../validation/login');

exports.create= (req, res) => {

  console.log(req.body);
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
          return res.json(errors);
        }
      
        User.findOne({ email: req.body.email }).then(user => {
          if (user) {
            return res.json({ email: 'Email already exists' });
          } else {
            const newUser = new User({
              name: req.body.name,
              email: req.body.email,
              password: req.body.password,
              // website:req.body.website,
              // verify:req.body.verify,
              verify:"false"
            });
            const {msg}=mailerFun(newUser);
            console.log(msg);
             // Hash password before saving in database
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  }
});
 
}
//////////


exports.Empcreate= (req, res) => {

  console.log(req.body);
  Recruiter.findOne({ email: req.body.email }).then(recruiter => {
          if (recruiter) {
            return res.json({ email: 'Email already exists' });
          } else {
            const newUser = new Recruiter({
              Company_name: req.body.Company_name,
              email: req.body.email,
              password: req.body.password,
              website:req.body.website,
              /// verify:req.body.verify,
              //verify:"false"
            });
            // const {msg}=mailerFun(newUser);
            // console.log(msg);
             // Hash password before saving in database
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(recruiter => res.json(recruiter))
          .catch(err => console.log(err));
      });
    });
  }
});
 
}
  exports.findAll= (req, res) => {
    User.find().then(data=>{
        res.json({
            data:data});
    }).catch(err=> {
        res.json({
            message:"Something went to wrong!" +err
        });
        })
  }
 exports.findById= (req, res) => {
    console.log(req.params);
    id = req.params.id;
    User.findById(id).then(data=>{
        res.json({
            data:data});
    }).catch(err=> {
        res.json({

            message:"Something went to wrong!" +err
        });
        })
}

exports.delete = (req, res) =>{
    id = req.params.id;
    User.findByIdAndRemove(id).then(()=>{
        res.json({
            success: true,
            message : "delete successfully"
        })
    }).catch(err=>{
        res.json({
            message: "something went to wrong! "+err
        })
    })

}

exports.update= (req, res) => {
    console.log(req.params);
    id = req.params.id;
    data=req.body;
    // data = {
    //    name:req.body.name,
    //     email: req.body.email
    // }
   
    User.findByIdAndUpdate(id,{
      ...data},{new:true}).then(()=>{

        res.json({
            success: true,
            message : "update successfully"
          })
        }).catch(err=>{
            res.json({
                message: "something went to wrong! "+err
            })
        })
    
}
exports.verify= (req, res) => {
    console.log(req.params);
    id = req.params.id;
    data=req.body;
   
    User.findByIdAndUpdate(id,{
      ...data,verify:"true"},
      {new:true})
      .then(()=>{

        res.json({
            success: true,
            data:id,
            message : "update successfully"
          })
        }).catch(err=>{
            res.json({
                message: "something went to wrong! "+err
            })
        })
}
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
// router.post('/login', (req, res) => {
//   // Form validation
exports.login=(req,res)=>{
  console.log(req.param);
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
    if (!isValid) {
    return res.json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;
  // const company=req.body.company;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.json({ emailnotfound: 'Email not found' });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
          // company:user.company
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          }, 
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
              ss:payload
            });
          }
        );
      } else {
        return res
          .json({ passwordincorrect: 'Password incorrect' });
      }
    });
  });
}
  
   

