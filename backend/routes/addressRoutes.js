const express = require('express');
const router = express.Router();
const Address = require('../models/address');

router.get('/', async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (error) {
    console.error('Error fetching addresses:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newAddress = new Address(req.body);
    const savedAddress = await newAddress.save();
    res.json(savedAddress);
  } catch (error) {
    console.error('Error adding address:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
