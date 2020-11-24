const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  googleId: String,
  name: String,
  email: {
    unique: true,
    type: String,
  },
  password: String
});



module.exports = mongoose.model('User', userSchema)
