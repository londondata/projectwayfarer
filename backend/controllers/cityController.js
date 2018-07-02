const mongoose = require ('mongoose');
const City = require('../models/city.js');
const express = require('express');
const app = express();

// get city by id
app.get('/cities/:id', (req, res) => {
  let cityId = req.params.id;

  db.City.findOne({ _id: userId }, (err, foundCity) => {
    if(err) { return console.log(err) }
    res.json(foundCity);
  });
});
