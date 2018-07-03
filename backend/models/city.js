const mongoose = require ('mongoose'),
  Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: {type: String, required: true},
  image: {type: String, required: true}
});


const City = mongoose.model('City', CitySchema);

module.exports = City;
