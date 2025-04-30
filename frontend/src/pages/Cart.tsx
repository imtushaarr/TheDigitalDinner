import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

export default function Cart() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleApplyCoupon = () => {
    const trimmed = couponCode.trim();
    if (!trimmed) {
      toast.error('Please enter a coupon code');
      return;
    }
    dispatch({ type: 'APPLY_COUPON', payload: trimmed });
    toast.success(`Coupon ${trimmed} applied!`);
  };

  const subtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = state.coupon ? (subtotal * state.coupon.discount) / 100 : 0;
  const total = subtotal - discount;

  const handleCheckout = () => {
    setLoading(true);
    setTimeout(() => {
      navigate('/checkout');
    }, 300); // mimic async process
  };

  if (state.items.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Your cart is empty</h2>
        <p className="mt-2 text-gray-500">Start adding some delicious items!</p>
        <button
          onClick={() => navigate('/menu')}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-md"
        >
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Shopping Cart</h2>

      <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
        {/* Cart Items */}
        <div className="divide-y">
          {state.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4"
            >
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.name} className="h-16 w-16 rounded object-cover" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-2 sm:mt-0">
                <p className="text-lg font-semibold text-gray-800">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coupon and Summary */}
        <div className="border-t pt-6">
          {/* Coupon */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={handleApplyCoupon}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Apply
            </button>
          </div>
          {state.coupon && (
            <div className="flex justify-between items-center text-sm text-green-600">
              <span>Coupon "{state.coupon.code}" applied!</span>
              <button
                onClick={() => dispatch({ type: 'REMOVE_COUPON' })}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          )}

          {/* Summary */}
          <div className="mt-6 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-green-600">
                <span>Discount ({state.coupon?.discount}%)</span>
                <span>-₹{discount.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between text-xl font-bold text-gray-800">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            disabled={loading}
            className={`mt-6 w-full py-3 rounded-md text-white font-medium ${
              loading
                ? 'bg-blue-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Processing...' : 'Proceed to Checkout'}
          </button>
        </div>
      </div>
    </div>
  );
}