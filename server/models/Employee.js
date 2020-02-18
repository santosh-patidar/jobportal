const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const recruiterSchema = new Schema ({
  Company_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  
//  verify:{
//     type:String,  
//   required:true
// },

website:{
  type:String,  
required:true
},
  password : {
    type: String,
    required: true
  },
 
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = recruiter = mongoose.model('recruiter', recruiterSchema);
