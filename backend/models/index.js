const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/27017");

const User = require('./user');
const City = require('./city');
const Post = require('./post');

module.exports = {
  User: User,
  City: City,
  Post: Post
};
