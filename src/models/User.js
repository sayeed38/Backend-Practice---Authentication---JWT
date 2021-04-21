const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  // Your code goes here
})

const User = mongoose.model('user',userSchema);

module.exports = User;