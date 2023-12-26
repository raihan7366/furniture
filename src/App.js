import { React, useState } from 'react';
import Home from './components/home/home';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/about';
import Furniture from './components/Furniture/furniture';
import Blog from './components/Blog/blog';
import Contact from './components/Contact/contact';
import { CartProvider } from 'react-use-cart';
import Cart from './components/Cart/cart';
import Signin from './components/Admin/Signin/signin';
import Register from './components/Admin/Register/register';
import Dashboard from './components/Admin/Dashboard/dashboard';
import Protected from './components/protected';
import Product from './components/Admin/Product/Product';
import Checkout from './components/checkout/checkout';
import Order from './components/Admin/Order/order';
function App() {

  const [isSignedIn, setIsSignedIn] = useState(() => {
    const userLogged = localStorage.getItem("access_token");
    return userLogged || false;
  });


  return (
    <div>
      <CartProvider>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='furniture' element={<Furniture />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="checkout" element={<Checkout />} />



          <Route
            path="/dashboard"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Dashboard />
              </Protected>
            }
          />

          <Route
            path="/Product"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Product />
              </Protected>
            }
          />

          <Route
            path="/checkout"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Checkout />
              </Protected>
            }
          />

          <Route
            path="/order"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Order />
              </Protected>
            }
          />
        </Routes>

      </CartProvider>
    </div>
  )
}

export default App
