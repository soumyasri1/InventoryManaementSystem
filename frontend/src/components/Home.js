// components/Home.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
import Footer from './Footer';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../componentStyles/Home.css';
import { FaUser } from 'react-icons/fa';




const Home = ({ user, onLogout }) => {
  const [fetchedData, setFetchedData] = useState(null);
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/products');
        const data = await response.json();
        console.log('Fetched Data:', data);

        setFetchedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/categories');
        const data = await response.json();
        console.log('Fetched Categories:', data);

        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
    fetchCategories();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await fetch(`http://localhost:8000/api/products/${productId}`, {
        method: 'DELETE',
      });

      const updatedData = fetchedData.filter((product) => product.id !== productId);
      setFetchedData(updatedData);
      toast.success('Deleted Successfully')

    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEdit = (productId) => {
    navigate(`/edit-product/${productId}`);
  };

  const navigateToAddForm = () => {
    navigate('/add-product');
  };

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const navigateToCategory = (category) => {
    navigate(`/products-by-category/${category}`);
  };

  const handleLogout = () => {
    onLogout();
  
    navigate('/login')// Navigate to login page after toast is closed

  };
  

  return (
    <div>
      <nav className="navbar">
      <div className="logo">
  <Link to="/">
    <img id="logoImage" src="/images/logoImage.png" alt="IMS Logo" />
  </Link>
</div>

        <ul className="nav-links">
          {user ? (
            <>
              <li>
               <Link   id="home-button" to="/">Home</Link>
             </li>
              <li className="categories-dropdown-container">
                <button className="categories-button" onClick={toggleCategories}>Categories</button>
                {showCategories && categories && (
                  <ul className="categories-dropdown">
                    {categories.map((category, index) => (
                      <li key={index} onClick={() => navigateToCategory(category)}>
                        <Link to={`/category/${category}`} className="category-link">{category}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <button  id="addProduct-button" onClick={navigateToAddForm}>Add Product</button>
              </li>
              
              <div id="loggedInUser">
              <FaUser id="profileIcon" className="profile-icon" />
              {user.username}
             
            </div>
            <li>
                <button id="logout-button" onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
              <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      {fetchedData && (
        <ProductList products={fetchedData} onDelete={handleDelete} onEdit={handleEdit} user={user} />
      )}
      <Footer />
      <ToastContainer />
    </div>
    
  );
};

export default Home;