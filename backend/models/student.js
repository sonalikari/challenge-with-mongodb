const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  age: { type: Number, required: true },
  height: { type: Number, required: true },
  rollNo: { type: String, required: true },
  phoneNo: { type: String, required: true },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
