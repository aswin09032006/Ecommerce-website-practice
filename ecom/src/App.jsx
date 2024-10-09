import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import Preloader from './components/preloader/preloader';
import ProductDisplay from './components/productDisplay/productDisplay';
import Cart from './pages/cart/cart';
import Coats from './pages/coats/coats';
import Jackets from './pages/jackets/jackets';
import AuthForm from './pages/login-signup/loginSignup';
import Shop from './pages/shop/shop';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) => 
      prevItems.map(item => 
        item.id === id && item.quantity > 1 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      )
    );
  };

  const checkout = () => {
    // Handle checkout logic here
    alert('Proceeding to checkout');
  };

  if (loading) {
    return <Preloader />;
  }

  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='app'>
      <BrowserRouter>
        <ConditionalNavbar cartItemCount={totalItemsInCart} />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route 
          path='/cart' 
          element={<Cart 
            cartItems={cartItems} 
            onIncreaseQuantity={increaseQuantity} 
            onDecreaseQuantity={decreaseQuantity} 
            onCheckout={checkout} 
          />} 
          />
          <Route path='/login' element={<AuthForm />} />
          <Route path='/jackets' element={<Jackets />} />
          <Route path='/coats' element={<Coats />} />
          <Route 
            path="/product" 
            element={<ProductDisplay addToCart={addToCart} />} 
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

const ConditionalNavbar = ({ cartItemCount }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  return !isLoginPage && <Navbar cartItemCount={cartItemCount} />;
}

export default App;
