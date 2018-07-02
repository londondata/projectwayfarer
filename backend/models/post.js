const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  city: citySchema,
  body: String,
  author: [userSchema],
  comments: String,
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
