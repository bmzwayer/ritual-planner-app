const mongoose = require('mongoose');


var shopforSchema = {
  item:{
    type: String
  }
}

var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
    shopfors:[shopforSchema]
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('User', userSchema);