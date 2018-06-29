const app = express(),
      express = require('express'),
      http = require('http'),
      bodyparser = require('bodyparser'),
      cors = require('cors');
      mongoose = require('mongoose'),
      router = require('router'),

const User = require('./user');
const City = require('./city');
const Post = require('./post');


exports.User = User;
exports.City = City;
exports.Post = Post;
