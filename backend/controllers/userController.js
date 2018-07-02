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
