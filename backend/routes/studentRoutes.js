const express = require('express');
const router = express.Router();
const Student = require('../models/student');

router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.json(savedStudent);
  } catch (error) {
    console.error('Error adding student:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
