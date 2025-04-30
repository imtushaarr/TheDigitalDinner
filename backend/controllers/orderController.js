const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
  try {
    const { items, total, coupon } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const newOrder = new Order({ items, total, coupon });
    await newOrder.save();

    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error('Order Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};