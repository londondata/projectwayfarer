const mongoose = require ('mongoose'),
import City from '../models';

// get city by id
app.get('/cities/:id', (req, res) => {
  let cityId = req.params.id;

  db.City.findOne({ _id: userId }, (err, foundCity) => {
    if(err) { return console.log(err) }
    res.json(foundCity);
  });
});
