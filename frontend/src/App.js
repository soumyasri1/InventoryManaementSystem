// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct'; 
import CategoryDetails from './components/CategoriesDetails';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (userData) => {
    setLoggedInUser(userData);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home user={loggedInUser} onLogout={handleLogout} />}
        />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProduct />} /> 
        <Route path="/edit-product/:id" element={<AddProduct />} />
        <Route path="/products-by-category/:category" element={<CategoryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
