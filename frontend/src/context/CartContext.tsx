import React, { createContext, useContext, useReducer } from 'react';
import { CartItem, MenuItem, Coupon } from '../types';
import { coupons } from '../data/coupons';
import toast from 'react-hot-toast';

interface CartState {
  items: CartItem[];
  total: number;
  coupon?: Coupon;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: MenuItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' }
  | { type: 'APPLY_COUPON'; payload: string }
  | { type: 'REMOVE_COUPON' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        const newItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        const newTotal = calculateTotal(newItems, state.coupon);
        toast.success(`Added another ${action.payload.name}`);
        return { ...state, items: newItems, total: newTotal };
      }

      const newItems = [...state.items, { ...action.payload, quantity: 1 }];
      const newTotal = calculateTotal(newItems, state.coupon);
      toast.success(`Added ${action.payload.name} to cart`);
      return { ...state, items: newItems, total: newTotal };
    }
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      const newTotal = calculateTotal(newItems, state.coupon);
      return { ...state, items: newItems, total: newTotal };
    }
    case 'APPLY_COUPON': {
      const coupon = coupons.find(c => c.code === action.payload);
      if (!coupon) {
        toast.error('Invalid coupon code');
        return state;
      }
      
      const subtotal = calculateSubtotal(state.items);
      if (coupon.minAmount && subtotal < coupon.minAmount) {
        toast.error(`Minimum order amount of ₹${coupon.minAmount} required`);
        return state;
      }

      const newTotal = calculateTotal(state.items, coupon);
      toast.success('Coupon applied successfully!');
      return { ...state, coupon, total: newTotal };
    }
    case 'REMOVE_COUPON': {
      const newTotal = calculateTotal(state.items);
      return { ...state, coupon: undefined, total: newTotal };
    }
    case 'CLEAR_CART':
      return { items: [], total: 0, coupon: undefined };
    default:
      return state;
  }
};

const calculateSubtotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

const calculateTotal = (items: CartItem[], coupon?: Coupon): number => {
  const subtotal = calculateSubtotal(items);
  if (!coupon) return subtotal;
  const discount = (subtotal * coupon.discount) / 100;
  return subtotal - discount;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};