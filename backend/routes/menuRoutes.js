const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// GET - Fetch all menu items
router.get('/', async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    console.error('Error fetching menu items:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;