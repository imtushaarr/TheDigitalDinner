import { useState } from 'react';
import { menuItems } from '../data/menuItems';
import MenuCard from '../components/MenuCard';

const categories = ['All', 'Appetizers', 'Main Courses', 'Desserts', 'Drinks'];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredItems.map(item => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}