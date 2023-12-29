const express = require('express');
const router = express.Router();
const College = require('../models/college');

router.get('/', async (req, res) => {
  try {
    const colleges = await College.find();
    res.json(colleges);
  } catch (error) {
    console.error('Error fetching colleges:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newCollege = new College(req.body);
    const savedCollege = await newCollege.save();
    res.json(savedCollege);
  } catch (error) {
    console.error('Error adding college:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
