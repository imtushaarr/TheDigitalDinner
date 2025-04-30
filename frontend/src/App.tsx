import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import OrderHistory from './pages/OrderHistory';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/orders" element={<OrderHistory />} />
          </Routes>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;