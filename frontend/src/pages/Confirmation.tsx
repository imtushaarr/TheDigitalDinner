import { useLocation, Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function Confirmation() {
  const { state } = useLocation();
  const { order } = state || {};

  if (!order) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Order not found</h2>
        <Link
          to="/"
          className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Return to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
        <h2 className="mt-4 text-2xl font-semibold text-gray-900">
          Thank you for your order!
        </h2>
        <p className="mt-2 text-gray-600">
          We'll notify you when your order is ready for pickup.
        </p>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-medium text-gray-900">Order Details</h3>
        <div className="mt-4">
          <p className="text-gray-600">Order ID: {order.id}</p>
          <p className="text-gray-600">Name: {order.customerName}</p>
          <p className="text-gray-600">Phone: {order.phoneNumber}</p>
        </div>

        <div className="mt-6">
          <h4 className="font-medium text-gray-900">Items:</h4>
          <div className="mt-2 space-y-2">
            {order.items.map(item => (
              <div key={item.id} className="flex justify-between text-gray-600">
                <span>{item.quantity}x {item.name}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t flex justify-between">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">${order.total.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Return to Menu
          </Link>
        </div>
      </div>
    </div>
  );
}