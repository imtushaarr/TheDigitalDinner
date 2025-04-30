import { useState } from 'react';
import { Order } from '../types';

export default function OrderHistory() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [orders, setOrders] = useState<Order[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(allOrders.filter((order: Order) => order.phoneNumber === phoneNumber));
    setSearched(true);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-8">Order History</h2>

      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-4">
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </form>

      {searched && orders.length === 0 ? (
        <p className="text-center text-gray-600">No orders found for this phone number.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">
                    Order ID: {order.id}
                  </p>
                  <p className="text-sm text-gray-500">
                    {new Date(order.timestamp).toLocaleString()}
                  </p>
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  ${order.total.toFixed(2)}
                </span>
              </div>

              <div className="mt-4">
                <h4 className="font-medium text-gray-900">Items:</h4>
                <div className="mt-2 space-y-2">
                  {order.items.map(item => (
                    <div key={item.id} className="flex justify-between text-gray-600">
                      <span>{item.quantity}x {item.name}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}