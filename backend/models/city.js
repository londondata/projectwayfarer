const mongoose = require ('mongoose'),
  Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: {type: String},
  image: {type: String},
});


const City = mongoose.model('City', CitySchema);

module.exports = City;
