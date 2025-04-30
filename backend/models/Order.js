const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    },
  ],
  total: Number,
  customerName: String,
  phoneNumber: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Order', orderSchema);