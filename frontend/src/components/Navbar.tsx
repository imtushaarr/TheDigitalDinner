import { Menu as MenuIcon, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { state } = useCart();
  
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <MenuIcon className="h-6 w-6 text-gray-500 sm:hidden" />
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800 ml-2">The Digital Diner</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/menu" className="text-gray-600 hover:text-gray-900">
              Menu
            </Link>
            <Link to="/orders" className="text-gray-600 hover:text-gray-900">
              Orders
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}