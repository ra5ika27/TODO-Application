var mongoose = require('mongoose');
var User = mongoose.model('User', {
  email: {
    type: String,
    required: [true, 'Must enter an email'],
    minLength: 1,
    trim: true
  },
});

// var newUser = new User({
//   email: ''
// });
//
// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//   console.log('Unable to save new User');
// });

module.exports = {User};
