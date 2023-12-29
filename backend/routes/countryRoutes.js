const express = require('express');
const router = express.Router();
const Country = require('../models/country');

router.get('/', async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (error) {
    console.error('Error fetching countries:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newCountry = new Country(req.body);
    const savedCountry = await newCountry.save();
    res.json(savedCountry);
  } catch (error) {
    console.error('Error adding country:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
