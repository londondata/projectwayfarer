const mongoose = require('mongoose'),
      Schema   = mongoose.Schema,
      bcrypt   = require('bcrypt-nodejs');


const userSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  password: String
  _id: {type: Number, required: true},
  name: {type: String, required: true},
  joined: { type: 'Date', default: Date.now(), required: true },
  city: {type: String, required: true},
});

userSchema.pre('save', function (next) {
  const user = this;
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });

  });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
}

const User = mongoose.model('user', userSchema);

module.exports = User
