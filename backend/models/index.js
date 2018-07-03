const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wayfarer');

module.exports.User = require('.models/user.js')
module.exports.City = require('.models/city.js')
module.exports.Post = require('.models/post.js')

