const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: {type: Number, required: true},
  name: {type: String, required: true},
  city: {type: String, ref: City, required: true},
  joined: {date: Date.now()}
});

const User = mongoose.model('User', UserSchema);

module.exports = User
