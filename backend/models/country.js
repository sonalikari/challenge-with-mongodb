const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
  countryName: { type: String, required: true },
  code: { type: String, required: true },
  currency: { type: String, required: true },
  dialCode: { type: Number, required: true },
  flag: String,
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
