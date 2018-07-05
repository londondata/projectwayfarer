const mongoose = require ('mongoose');
const db = require('../models/');
const express = require('express');
const app = express();

exports.create = (req, res) => {
  db.Post.create(req.body, function(err, createdPost) {
    if(err) {
      console.log(err)
    }
    res.json(createdPost)
  })
}

exports.index = (req, res) => {
  db.Post.find({})
  .exec(function(err, posts){
    if(err) {
      console.log(err)
    }
    console.log(posts)
    res.json(posts)
  })
}

exports.show = (req, res) => {
  let PostId = req.params.id;
  db.Post.findById(id)
  .populate('posts')
  .exec(function(err, foundPost){
    if(err) { return console.log(err) }
    res.json(foundPost);
  });
};
