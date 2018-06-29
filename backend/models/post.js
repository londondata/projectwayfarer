const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  city: String,
  body: String,
  author: String,
  comments: String,
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
