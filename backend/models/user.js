const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: {type: Number, required: true},
  name: {type: String, required: true},
  city: {type: String, required: true},
  joined: {type: Date, default: Date.now()},
});

const User = mongoose.model('User', UserSchema);

module.exports = User
