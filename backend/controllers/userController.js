const mongoose = require ('mongoose');
const db = require('../models/');
const express = require('express');
const app = express();

exports.create = (req, res) => {
  db.User.create(req.body, function(err, createdUser) {
    if(err) {
      console.log(err)
    }
    res.json(createdUser)
  })
}

exports.index = (req, res) => {
  db.User.find({})
  .populate('users')
  .exec(function(err, users){
    if(err) {
      console.log(err)
    }
    res.json(users)
  })
}

exports.show = (req, res) => {
  let UserId = req.params.id;
  db.User.findById(id)
  .populate('users')
  .exec(() => (err, foundUser) => {
    if(err) { return console.log(err) }
    res.json(foundUser);
  });
};
