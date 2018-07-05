const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const User = require('./user');
const City = require('./city');

const PostSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User', required: false},
  title: {type: String, required: true},
  city: {type: String, ref: 'City', required: true},
  body: {type: String, required: true},
  postCreated: {type: Date, default: Date.now()},
  comments: {type: String, required: false}

});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
