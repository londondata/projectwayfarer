
// import User from '../models/user';
// import uuid from 'uuid';
// import slug from 'limax';
// const db = require('../models');


// exports.index = function(req, res) {
//   db.User.find({})
//     .select('-password')
//     .exec(function (err, users) {
//       if(err){ console.log(err) }
//     res.json(users)
//   })
// }

// exports.show = function(req, res) {
//   let id = req.params.id,
//   db.User.findById(id)
//     .select('-password')
//     .exec(function (err, user) {
//       res.json(user)
//     })
//   };
// }
const mongoose = require ('mongoose');
const User = require('../models/user.js');
const express = require('express');
const app = express();

//USERS: create
app.post('/users', (req, res) => {
  let newUser = req.body;

  newUser.create(newUser, (err, savedUser) => {
    if(err) { return console.log(err) }
    res.json(savedUser);
  });
});

// get user by ID
app.get('/users/:id', (req, res) => {
  let userId = req.params.id;

  db.User.findOne({ _id: userId }, (err, foundUser) => {
    if(err) { return console.log(err) }
    res.json(foundUser);
  });
});

//delete
app.delete('/users/:id', (req, res) => {
  let userId = req.params.id;

  db.User.findOneAndRemove({ _id: userId }, (err, deletedUser) => {
    res.json(deletedUser);
  });
});
