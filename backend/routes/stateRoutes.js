const express = require('express');
const router = express.Router();
const State = require('../models/state');

router.get('/', async (req, res) => {
  try {
    const states = await State.find();
    res.json(states);
  } catch (error) {
    console.error('Error fetching states:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newState = new State(req.body);
    const savedState = await newState.save();
    res.json(savedState);
  } catch (error) {
    console.error('Error adding state:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
