const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterempInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.Company_name = !isEmpty(data.Company_name) ? data.Company_name : '';
  console.log(data.Company_name);
  data.email = !isEmpty(data.email) ? data.email : '';
  console.log('122' + data.email);
  data.website = !isEmpty(data.website) ? data.website : '';
  console.log('122' + data.website);
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  // Name checks
  if (Validator.isEmpty(data.Company_name)) {
    errors.Company_name = 'Company name field is required';
  }

  //Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
// // website checks
// if (Validator.isEmpty(data.website)) {
//   errors.website = 'website field is required';
// } else if (!Validator.isEmpty(data.website)) {
//   errors.website = 'website is invalid';
// }
 //Email checks
 if (Validator.isEmpty(data.website)) {
    errors.website = 'website field is required';
  }
   
  

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
