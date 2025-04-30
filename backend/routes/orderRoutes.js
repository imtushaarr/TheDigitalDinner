const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // Ensure this model path is correct

// POST route to create a new order
router.post('/', async (req, res) => {
  try {
    const { items, total, customerName, phoneNumber } = req.body;

    const newOrder = new Order({
      items,
      total,
      customerName,
      phoneNumber,
      createdAt: new Date(),
    });

    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (err) {
    console.error('Error saving order:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET route to retrieve a single order by its ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (err) {
    console.error('Error fetching order:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;