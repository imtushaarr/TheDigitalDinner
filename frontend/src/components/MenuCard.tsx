import { Plus } from 'lucide-react';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const { dispatch } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={item.image} 
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
            <p className="text-gray-500 mt-1">{item.description}</p>
          </div>
          <span className="text-lg font-bold text-gray-900">₹{item.price.toFixed(2)}</span>
        </div>
        <button
          onClick={() => dispatch({ type: 'ADD_ITEM', payload: item })}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}