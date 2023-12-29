const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  collegeName: { type: String, required: true },
  collegeAddress: { type: String, required: true },
  courseOffered: { type: String, required: true },
  yearEstablished: { type: Number, required: true },
});

const College = mongoose.model('College', collegeSchema);

module.exports = College;
