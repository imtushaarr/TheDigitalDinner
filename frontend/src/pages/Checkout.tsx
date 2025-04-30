import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import api from '../server/api'; // Correct import for api.js
import { toast } from 'react-hot-toast';

export default function Checkout() {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/orders', {
        items: state.items,
        total: state.total,
        customerName: formData.name,
        phoneNumber: formData.phone,
      });

      if (response.status === 201) {
        toast.success('Order placed successfully!');
        dispatch({ type: 'CLEAR_CART' });
        navigate('/confirmation', { state: { order: response.data } });
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to place order');
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">Checkout</h2>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
          <div className="mt-4 space-y-4">
            {state.items.map(item => (
              <div key={item.id} className="flex justify-between">
                <span className="text-gray-600">
                  {item.quantity}x {item.name}
                </span>
                <span className="text-gray-900">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-4 flex justify-between">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">${state.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}