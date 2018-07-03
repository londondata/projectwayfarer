const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const User = require('./user');
const City = require('./city');

const PostSchema = new Schema({
  user: {type: String, ref: User, required: true},
  title: {type: String, required: true},
  city: {type: String, ref: City, required: true},
  body: {type: String, required: true},
  comments: {type: String, required: false}
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
