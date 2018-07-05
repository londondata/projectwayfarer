const mongoose = require ('mongoose');
const db = require('../models/');
const express = require('express');
const app = express();

exports.create = (req, res) => {
  db.City.create(req.body, function(err, createdCity) {
    if(err) {
      console.log(err)
    }
    res.json(createdCity)
  })
}

exports.index = (req, res) => {
  db.City.find({})
  .populate('posts')
  .exec(function(err, cities){
    if(err) {
      console.log(err)
    }
    res.json(cities)
  })
}

exports.show = (req, res) => {
  let cityId = req.params.id;
  db.City.findById(id)
  .populate('posts')
  .exec(function(err, foundCity) {
    if(err) { return console.log(err) }
    res.json(foundCity);
  });
};
