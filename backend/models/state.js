const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
  stateName: { type: String, required: true },
  stateCode: { type: String, required: true },
  gpsCoordinates: String,
});

const State = mongoose.model('State', stateSchema);

module.exports = State;
