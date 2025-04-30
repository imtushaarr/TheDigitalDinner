export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Appetizers' | 'Main Courses' | 'Desserts' | 'Drinks';
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  customerName: string;
  phoneNumber: string;
  total: number;
  timestamp: string;
  couponApplied?: string;
  discount?: number;
}

export interface Coupon {
  code: string;
  discount: number;
  minAmount?: number;
}