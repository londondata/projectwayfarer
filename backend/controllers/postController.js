
const mongoose = require ('mongoose');
const Post = require('../models/post.js');
const express = require('express');
const app = express();

//POSTS: create
app.post('/posts', (req, res) => {
  let newPost = req.body;

  newPost.create(newPost, (err, savedPost) => {
    if(err) { return console.log(err) }
    res.json(savedPost);
  });
});

//update
app.put('/posts/:id', (req, res) => {
  let postId = req.params.id;
  let updateBody = req.body;

  db.Post.findOneAndUpdate({ _id: postId }, updateBody, {new: true}, (err, updatedPost) => {
    if(err) { return console.log(err)}
    res.json(updatedPost);
  });
});

//delete
app.delete('/posts/:id', (req, res) => {
  let postId = req.params.id;

  db.Post.findOneAndRemove({ _id: postId }, (err, deletedPost) => {
    res.json(deletedPost);
  });
});

//get all posts
app.get('/posts', (req, res) => {
  res.send('hello!');
  res.json(db.Post.all());
})
