const mongoose = require('mongoose'),
  Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: String,
  city: String,
  joined: Date,
});

const User = mongoose.model('User', UserSchema);

module.exports = User
