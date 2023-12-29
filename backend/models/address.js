const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  houseName: { type: String, required: true },
  street: { type: String, required: true },
  landmark: String,
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
