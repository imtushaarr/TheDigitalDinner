import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex-1">
      <div className="relative h-[70vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              The Digital Diner
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Order your favorite meals online
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Browse Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
              alt="Quality Food"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Quality Food</h3>
            <p className="text-gray-600">
              Made with the finest ingredients and expert preparation
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=600&q=80"
              alt="Easy Ordering"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Easy Ordering</h3>
            <p className="text-gray-600">
              Simple and convenient online ordering process
            </p>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?auto=format&fit=crop&w=600&q=80"
              alt="Quick Pickup"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Quick Pickup</h3>
            <p className="text-gray-600">
              Ready for pickup when you arrive
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}