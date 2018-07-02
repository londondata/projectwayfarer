const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/27017");
;

const User = require('./user');
const City = require('./city');
const Post = require('./post');

// module.exports.User = require("./userController");
// module.exports.City = require("./cityController");
// module.exports.Post = require("./postController");

module.exports = {
  User: User,
  City: City,
  Post: Post
};
//
// exports.User = User;
// exports.City = City;
// exports.Post = Post;
