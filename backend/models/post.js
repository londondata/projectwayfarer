const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {type: String, ref: User, required: true}
  title: {type: String, required: true}
  city: {type: String, required: true}
  body: {type: String, required: true}
  comments: {type: String, required: false}
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
